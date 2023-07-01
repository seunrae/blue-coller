const User = require('../User');
const express =  require('express');
const router =  express.Router();
const {Artisan} =  require('../models/artisans');
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
   try{
      const result = await artisan.save();
      res.send(result);
   }
   catch(err){
      res.send(err.message);
   }
   
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
   try{
      res.send(artisan);
   }
   catch(err){
      res.send(err.message);
   }
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
   try{
      res.send(artisan);
   }
   catch(err){
      res.send(err.message);
   }
   
});
//delete user 
router.delete('/:id', async(req,res)=>{
   const artisan = await Artisan.findByIdAndRemove(req.params.id);
   if(!artisan) return res.status(404).send('invalid id');
   try{
      res.send(artisan);
   }
   catch(err){
      res.send(err.message);
   }
});
module.exports = router;



