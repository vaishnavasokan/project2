var express = require('express')
var mongoose=require('mongoose')
const path = require('path')
var bodyparser = require('body-parser')

var url="mongodb://localhost/project2";

var users = require("../model/usermodel")

mongoose.connect(url,function(err){
    if(err) throw err
    else{
        console.log("db connected")
    }
})

const router = express.Router();

router.use(function(req, res, next) {
    //set headers to allow cross origin request.
        res.header("Access-Control-Allow-Origin", "*");
        res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
});

router.use(bodyparser.urlencoded({extended:true}))
router.use(express.static(path.join(__dirname,"/public")))

router.get("/",function(req,res){
    
    res.send({"msg":"ok"})
})

router.post("/signup",function(req,res)
{
    //console.log("user details",req.body);
    //console.log(req.body.email);
    
    var u1 = new users();
    
    u1.username = req.body.username;
    u1.password = req.body.password;
    u1.name = req.body.name;
    u1.mobile = req.body.mobile;
    u1.email = req.body.email;
    u1.role = req.body.role;

    u1.save(function(err){
        if(err) throw err;
        else
        {
            console.log("User Added.");
            res.redirect('/')
        }
        
    })
  
});

router.post("/login",function(req,res)
  {
    console.log("varunna data",req.body);
    users.find({username:req.body.username,
        password:req.body.password},function(err,result)
    {
        if(err)
        throw err;
        else
        {
            if(result)
            {
                console.log("kittii",result)
                res.send({data:result});
            }
            else
            { 
                 console.log("invalid")
                res.redirect("/")
            }
                      
        }
    })    
  })


module.exports = router;










