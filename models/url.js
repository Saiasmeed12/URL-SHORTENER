const { Timestamp } = require('bson');
const mongoose= require("mongoose");


const urlschema= new mongoose.Schema({

    shortId:{
        type:String,required: true,unique:true,
    },

    RedirectURL:{
        type:String,required:true,unique:true,
    },

    VisitHistoty:[{timestamp:{type:Number}}],



},
{timestamps: true}
);

const URL =mongoose.model("url",urlschema);

module.exports =URL;