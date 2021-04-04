const mongoose = require("mongoose");
const Post_Graduate_Data = new mongoose.Schema({


    _id: String,
    Select_An_Academic_Program: String,


},
    {
        collection: 'Postgraduate_Fields'
    
})





module.exports = mongoose.model("Postgraduate_Fields", Post_Graduate_Data)

