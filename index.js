const customer  = require('./routes/customer');
const artisan = require('./routes/artisan');
//====================================================================
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/bluecoller-db')
.then(()=> console.log('Connected to Db...'))
.catch(err=> console.log(err.message));
//====================================================================
const express =  require('express');
const app = express();
app.use(express.json());

app.use(
    function(req,res,next){
    console.log('logging');
    next();
});
app.use('/api/artisan',artisan);
app.use('/api/customer',customer);

//====================================================================
const port = process.env.PORT || 3000
app.listen(port , ()=>{console.log(`listening on port ${port}`);})