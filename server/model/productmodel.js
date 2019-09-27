var mongoose = require('mongoose')
var schema = mongoose.Schema;
var prodschema = new schema(
    {
        productName:{
            type: String,
            required: true
        },

        productPrice:{
            type: Number,
            required: true
        },
        productImage:{
            type: String,
            required: true
        }
        
    }
)
var productmodel = mongoose.model("products",prodschema,"products");
module.exports = productmodel;