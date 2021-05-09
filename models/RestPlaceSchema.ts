const { Schema, model } = require('mongoose');

const place = new Schema({
  country: { type: String, required: true },
  location: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  tags: {type: [String], required: true},
  image: { data: Buffer, contentType: String },
});

module.exports = model('Resort', place);
