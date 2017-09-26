const _ = require('lodash');
const {Entry} = require('../models/entry');
const {ObjectID} = require('mongodb');
module.exports = {

  add(req, res) {
    var body = _.pick(req.body, ['user_name', 'site_name', 'time', 'referrer']);
    var entry = new Entry(body);

    entry
    .save()
    .then((doc) => {
        res.send(doc);
    }, 
    (e) => {
        res.status(400).send(e);
    });
   },

   getEntries(req, res){

    var filters = _.pick(req.query, ['site_name', 'user_name']);
    
    Entry.find(filters)
    .then((docs) => {
      res.send(docs);
    }).catch((e) => {
      res.status(400).send(e);
    });
  },

  getInitData(req, res){
    // Entry.aggregate(
    //   {$group: { _id:'$site_name'}})
    //   .then((docs) =>{
    //     res.send(docs);
    //   }).catch((e) => {
    //      res.status(400).send(e);
    //   });

    //   Entry.aggregate(
    //     {$group: { _id:'$user_name'}})
    //     .then((docs) =>{
    //       res.send(docs);
    //     }).catch((e) => {
    //        res.status(400).send(e);
    //     });

       Promise.all([Entry.aggregate({$group: { _id:'$site_name'}}), Entry.aggregate({$group: { _id:'$user_name'}})])
       .then((docs) =>{
        
        // cleanIds(docs[0]);
        var retData = {
          sites:cleanIds(docs[0]),
          users:cleanIds(docs[1])
        }
        
        res.send(retData);
      }).catch((e) => {
         res.status(400).send(e);
      });
  }

};

var cleanIds = (arr) => {
  var retArr = [];
  arr.forEach((el) => {
    retArr.push(el._id);
  })
  console.log(retArr)
  return retArr;

}