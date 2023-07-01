const User = require('../User');
const express =  require('express');
const router =  express.Router();
const {Customer} = require('../models/customers')
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
    try{
        const result = await customer.save();
        res.send(result);
    }
    catch(err){
        res.send(err.message);
    }
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
    try{
        res.send(customer);
    }
    catch(err){
        res.send(err.message);
    }
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
    try{
        res.send(customer);
    } 
    catch(err){
        res.send(err.message);
    }
    
 });
 //delete user 
 router.delete('/:id', async(req,res)=>{
    const customer = await Customer.findByIdAndRemove(req.params.id);
    if(!customer) return res.status(404).send('invalid id');
    try{
        res.send(customer);
    }
    catch(err){
        res.send(err.message);
    } 
 });


module.exports = router;

