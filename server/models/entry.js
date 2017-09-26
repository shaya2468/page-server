const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

const EntrySchema = new Schema({

  user_name: {
    type: String,
    required: [true, 'user name is mandatory']
  },
  site_name: {
    type: String,
    required: [true, 'site name is mandatory']
  },
  time: {
    type: Number,
    required: [true, 'time is mandatory']
  },
  referrer: {
    type: String,
    required: false
  }
});

EntrySchema.set('toJSON', {
     transform: function (doc, ret, options) {
         ret.id = ret._id;
         delete ret._id;
         delete ret.__v;
     }
});

const Entry = mongoose.model('entry', EntrySchema);

module.exports = {Entry};
