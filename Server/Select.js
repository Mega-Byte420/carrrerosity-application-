const mongoose = require("mongoose");
const UniversitySchema = new mongoose.Schema({

     _id:String,
     SelectDegree:String 
     
},
{
     collection:'Select_Degree_Level'
}



)
module.exports = mongoose.model("Select_Degree_Level",UniversitySchema)
   
   
 
   
   
   