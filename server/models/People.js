const mongoose = require("mongoose");

const PeopleSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    city_place:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    job:{
        type:String,
        required:false
    },
    hobbies:{
        type:String,
        required:false
    }
});

const PeopleModel = mongoose.model("people",PeopleSchema);

module.exports = PeopleModel;