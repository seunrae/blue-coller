const User = require('../User');
const express =  require('express');
const router =  express.Router();
const mongoose = require('mongoose');
//====================================================================
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
//====================================================================
// class Artisan extends User{
//    constructor(id,name,email,password,phonenumber, address){
//     super(id,name,email,password,phonenumber, address)
//    }
// }

//====================================================================
//create user
router.post('/create-user',async (req,res)=>{
   // artisan.id = req.body.id;
   const artisan =  new Artisan({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      phonenumber: req.body.phonenumber,
      address: req.body.address
   });
   const result = await artisan.save();
   res.send(result);
});
//get users
router.get('/users',async (req,res)=>{
   const artisans = await Artisan.find().sort({name:1});
   res.send(artisans);
});
//get user by id
router.get('/:id',async (req,res)=>{
   const artisan =  await Artisan.findById(req.params.id);
   if(!artisan) return res.status(404).send('invalid id');
   res.send(artisan);
});
//update user 
router.put('/:id', async(req,res)=>{
   const artisan =  await Artisan.findByIdAndUpdate(req.params.id,{
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      phonenumber: req.body.phonenumber,
      address: req.body.address
   }, {new:true});

   if(!artisan) return res.status(404).send('invalid id');
   res.send(artisan);
});
//delete user 
router.delete('/:id', async(req,res)=>{
   const artisan = await Artisan.findByIdAndRemove(req.params.id);
   if(!artisan) return res.status(404).send('invalid id');
   res.send(artisan);
});
module.exports = router;



