const mongoose = require("mongoose");

const Admission = new mongoose.Schema({

   
   _id:String,
   Details:String,
   Image:String 
   
  
},
{
    collection:'Admission'
}
);
const UN_Admission =  mongoose.model("Admission", Admission)
module.exports = 
{ 
    SU_Adm: UN_Admission,
}