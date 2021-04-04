const mongoose = require("mongoose");

const Scholarships = new mongoose.Schema({

   
   _id:String,
   Details:String,
   Image:String 
   
  
},
{
    collection:'Scholarships'
}
);
const UN_Scholarships =  mongoose.model("Scholarships", Scholarships)
module.exports = 
{ 
    SU_SCholarships: UN_Scholarships,
}