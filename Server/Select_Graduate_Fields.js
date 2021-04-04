const mongoose = require("mongoose");
const Graduate_Data = new mongoose.Schema({


    _id: String,
    Select_An_Academic_Program: String,


},
    {
        collection: 'Graduate_Fields'
    
})





module.exports = mongoose.model("Graduate_Fields", Graduate_Data)

