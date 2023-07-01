const mongoose = require('mongoose');
const customerSchema =  mongoose.Schema({
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

const Customer = mongoose.model('Customer', customerSchema);

exports.Customer =  Customer;