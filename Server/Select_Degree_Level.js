const mongoose = require("mongoose");

const PostDegreeSchema = new mongoose.Schema({

   
   _id:String,
   Select_An_Academic_Program:String, 
   
  
},{collection:'Undergraduate_Fields'});


 const NewSchema = new mongoose.Schema({

   
    _id:mongoose.Schema.Types.ObjectId,
    SelectDegree:String, 
    
   
 },{collection:'Undergraduate_Data'});
 

const userSchema =  mongoose.model("Undergraduate_Fields", PostDegreeSchema)
const organizationSchema = mongoose.model("Undergraduate_Data", NewSchema)

module.exports = { User: userSchema, Organization: organizationSchema }

 
