const mongoose = require("mongoose");
const DegreeLevelSchema = new mongoose.Schema({

     
},
{
    collection:"Undergraduate_Data"
} 
)
module.exports= mongoose.model("DegreeLevel",DegreeLevelSchema)
