const express = require('express');
const router = express.Router();

const nodemailer = require('nodemailer');//mail API
const MongoClient = require('mongodb').MongoClient;//db API
const url = "mongodb://localhost:27017/recipe-finder";//db API
let data;//db API

//root APi 
router.get('/', (req, res) => {
  res.send('api works');
});

//mail API
router.post('/recipe-mail', (req, res) =>{
  res.send('recipe-mail api works');
  console.log('recipe-mail accessed');
  let mailData = req.body;
  SendMyMail(mailData);
});
              //reusable transporter object for mail
              const transporter = nodemailer.createTransport({
                service: 'Gmail',
                auth: {
                  user: 'hastingsserve@gmail.com',
                  pass: '577061Ha!'
                }
              });
              //send mail using the object passed in
              function SendMyMail(x){
                //iterates through contents and assigned string value to contents variable
                let contents;
                for(let y in x){
                  contents += ("<p>" + x[y] + "</p>");
                };
                //email data
                let mailOptions = {
                  from: contents.email,
                  to: 'hastings360@gmail.com',
                  subject: contents.name, 
                  html: '<h1>Recipe Finder Message</h1>' + contents
                };
                //sends
                transporter.sendMail(mailOptions,(error,info) =>{
                  if(error){
                    return console.log(error);
                  }else{
                    console.log('Email Sent');
                  }
                });
              }

//favorites database query API
router.get('/recipe-favorites', (req, res) =>{
  console.log('recipe-favorties queried');

  MongoClient.connect(url, function(err, db){
    if(err) throw err;
    db.collection("meals").find({}).sort({likes: -1}).limit(3).toArray(function(err, result){
        if(err) throw err;
        db.close();
        return res.send(result);
    });
  });
});

//top ten categories database query API
router.get('/recipe-top-ten-categories', (req, res) =>{
  console.log('recipe-top-ten-categories queried');
  
  MongoClient.connect(url, function(err, db){
    if(err) throw err;
    db.collection("meals").find({},{ category: 1,_id: 0}).sort({category: 1}).limit(10).toArray(function(err, result){
        if(err) throw err;
        db.close();
        console.log(result);
        return res.send(result);
    });
  });
});

//categories database query API
router.get('/recipe-categories', (req, res) =>{
  console.log('recipe-categories queried');
  
  MongoClient.connect(url, function(err, db){
    if(err) throw err;
    db.collection("meals").find({},{ category: 1,_id: 0}).sort({category: 1}).toArray(function(err, result){
        if(err) throw err;
        db.close();
        return res.send(result);
    });
  });
});
            
module.exports = router;