var mongoose = require('mongoose')
var schema = mongoose.Schema;
var userschema = new schema(
    {
        username:   {   
            type:String
            //required:true
        },
            
        password:   {
            type:String
            //required:true
        },
        name:{
            type:String
            //required:true
        },
        mobile:{
            type:Number
            //required:true
        },
        email:{
            type:String
            //required:true
        },
        role:{
            type:String
            //required:true
        }
    }
)
var usermodel = mongoose.model("users",userschema,"users");
module.exports = usermodel;