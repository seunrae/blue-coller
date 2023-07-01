const mongoose = require('mongoose');
//=========================================
const artisanSchema =  mongoose.Schema({
    name: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 50
},
    email: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 50
    },
    password: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 50
    },
    phonenumber: {
      type: Number,
      required: true,
    },
    address: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 50
    },
    Date:{type: Date , default: Date.now()}
});

const Artisan = mongoose.model('Artisan', artisanSchema);

exports.Artisan = Artisan;