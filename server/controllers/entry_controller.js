const _ = require('lodash');
const {Entry} = require('../models/entry');
const {ObjectID} = require('mongodb');
module.exports = {

  add(req, res) {
    var body = _.pick(req.body, ['user_name', 'site_name', 'time', 'referrer']);
    console.log(body);
    console.log(req.body);
    var entry = new Entry(body);

    entry
    .save()
    .then((doc) => {
        res.send(doc);
    }, 
    (e) => {
        // console.log(e);
        res.status(400).send(e);
    });
   },

};
