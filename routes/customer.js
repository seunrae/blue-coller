const User = require('../User');
const express =  require('express');
const router =  express.Router();
const mongoose = require('mongoose');
//====================================================================
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
//====================================================================
// class Customer extends User{
//     constructor(id,name,email,password,phonenumber, address){
//         super(id,name,email,password,phonenumber, address)
//      }
// }
//====================================================================
//create user
router.post('/create-user',async (req,res)=>{
    const customer =  new Customer({
       name: req.body.name,
       email: req.body.email,
       password: req.body.password,
       phonenumber: req.body.phonenumber,
       address: req.body.address
    });
    const result = await customer.save();
    res.send(result);
 });
//get users
router.get('/users',async (req,res)=>{
    const customer = await Customer.find().sort({name:1});
    res.send(customer);
 });
 //get user by id
 router.get('/:id',async (req,res)=>{
    const customer =  await Customer.findById(req.params.id);
    if(!customer) return res.status(404).send('invalid id');
    res.send(customer);
 });
 //update user 
 router.put('/:id', async(req,res)=>{
    const customer =  await Customer.findByIdAndUpdate(req.params.id,{
       name: req.body.name,
       email: req.body.email,
       password: req.body.password,
       phonenumber: req.body.phonenumber,
       address: req.body.address
    }, {new:true});
    if(!customer) return res.status(404).send('invalid id');
    res.send(customer);
 });
 //delete user 
 router.delete('/:id', async(req,res)=>{
    const customer = await Customer.findByIdAndRemove(req.params.id);
    if(!customer) return res.status(404).send('invalid id');
    res.send(customer);
 });


module.exports = router;

