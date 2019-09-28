
var express = require('express');
var router = express.Router();

var bodyparser = require("body-parser");

var mongoose = require("mongoose");
var url="mongodb://localhost/project2";

var product=require("../model/productmodel"); 

router.use(bodyparser.urlencoded({extended:true}))

mongoose.connect(url,{ useNewUrlParser: true },function(err)
{
    if(err)
    throw err;
    else
        console.log("DB Connected..");
})

var multer = require('multer');
var path=require('path');
var dest=path.join(path.dirname(__dirname),'/public/images');

let storage=multer.diskStorage({
  destination:(req,file,cb)=>{
    cb(null,dest)
  },
  filename:(req,file,cb)=>{
    console.log(file);
    
    cb(null,file.fieldname+Date.now()+path.extname(file.originalname))
  }
})

var upload = multer({storage: storage}).single('productImage');

router.get('/', function(req, res, next) {
// render the index page, and pass data to it.
  res.render('index', { title: 'Express' });
});

//our file upload function.
router.route('/upload').post(function (req, res, next) {
     
    
    upload(req, res, function (err) 
    {
        console.log("dest"+path.join(path.dirname(__dirname),'/public/images'));
        if (err) {

          console.log(err);
          return res.status(422).send("an Error occured")
        }  

    var p1 = new product();
    p1.productName = req.body.productName;
    p1.productPrice = req.body.productPrice;
    p1.productImage =req.file.filename;
    p1.save((err)=>{
        if (err) throw err;
        else
        {
            console.log("Product Added.");
            res.redirect("/");
        }
        })
    })
    
  });     

  router.get("/view/:img",function(req,res){    
    res.sendFile(path.join(__dirname+"../../public/images/"+req.params.img))
})

router.get("/viewproducts",function(req,res){
    product.find({},function(err,result){

        if(err)
        throw err;
        else
        res.send({data:result})
    });
});

router.get("/deleteproduct/:id",function(req,res)
{
  console.log(req.params.id);
  const rid = req.params.id;
  product.deleteOne({ _id: rid }, function (err, result) {
      if (err) throw err;
      else {
          // res.redirect("/admin/view");   
          res.send({ msg: "Product Deleted." });
      }
  })
  
})

router.get("/viewdata/:id",function(req,res)
{
  console.log(req.params.id);
  const rid = req.params.id;
  product.find({ _id: rid }, function (err, result) {
      if (err) throw err;
      else {
          // res.redirect("/admin/view");   
          res.send(result);
      }
  })
  
})

router.post("/updatedata",upload,(req,res)=>{
  book.updateOne({},{$set:{}},(err,result)=>
      {
          if (err) throw err;
          else
          {
              res.send({ msg: "Product Updated." })
          }
      })
  })

module.exports = router;