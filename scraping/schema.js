const mongoose = require('mongoose')

const oyoSchema = new mongoose.Schema({
    hName: String,
    hLoc: String,
    hRating: String,
    hPrice: String,
    hUrl: String,
    images: String
  });

const hotel = mongoose.model('hotel', oyoSchema);




module.exports = hotel;