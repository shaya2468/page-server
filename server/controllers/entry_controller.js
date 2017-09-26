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

};
