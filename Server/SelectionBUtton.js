const mongoose = require("mongoose");

const Acc = new mongoose.Schema({

   
   _id:String,
   University:String,
   Image:String 
   
  
},{collection:'Accident_And_Emergency_Uni'});


  

module.exports = mongoose.model("AccData",Acc)

 