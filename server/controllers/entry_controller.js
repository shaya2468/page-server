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

   getByName(req, res){
    var name = req.params.id;
    console.log('params is ' + JSON.stringify(req.params));
    console.log('query is ' + JSON.stringify(req.query));

    Entry.find({
      user_name: name
    })
    .then((docs) => {
      res.send(docs);
    }).catch((e) => {
      res.status(400).send(e);
    });
  },

};
