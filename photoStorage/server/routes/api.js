const express = require('express');
const router = express.Router();
const multer = require('multer');
const MongoClient = require('mongodb').MongoClient;//db API
const url = "mongodb://localhost:27017";//db connection string
const fs = require('fs');
const rxjs = require('rxjs');

//tokenizing
const jwt = require('jsonwebtoken');
const cert = fs.readFileSync(__dirname + '/../test-secret/jsonWebCert','utf8');
const publicCert = fs.readFileSync(__dirname + '/../test-secret/jsonWebCert.pub','utf8');

//login model
const Login = require('../models/login');

//renames incoming file submitted
const storage = multer.diskStorage({
  destination: './temp-photos',
  filename: function(req, file, cb){
    cb(null, JSON.parse(req.body.formInputData).imageName);
  }
})
const upload = multer({ storage: storage});
const sharp = require('sharp');

//const nodemailer = require('nodemailer');//mail API
//const ObjectId = require('mongodb').ObjectId;
//let data;//db API

/*root API
router.get('/', (req, res) => {
  res.send('photoStorage api works');
});*/

//Adds mini-photo to photo objects outgoing--Not needed?????
/*function addMinis(x){
  try{
    for(let y in x){
      x[y].image = fs.readFileSync("./temp-photos/temp-icons/mini-" + x[y].imageName).toString('base64'); //Need Base64?????????
    }
  }catch(err){
    console.log("Error adding photos for" + x[y].imageName);
    return res.sendStatus(500);
  }
  return x;
}*/

//login API
router.post('/login-verify', (req, res) => { 
  console.log(req.body.token);
  
  jwt.verify(req.body.token, publicCert);
  //res.send(false);
});

//login API
router.post('/login-submit', (req, res) => { 
    let login = new Login(req.body);
    MongoClient.connect(url)
    .then(client =>{
      const db = client.db('photoStorage');
      db.collection('photoUsers').find( {userName: login.userName },{password: login.password}).toArray()
        .then(results => {
          if(results.length === 1){
            client.close();            
            let token = jwt.sign({auth: 'granted'}, cert,{algorithm: 'ES512'},{expiresIn: '1h'});
            return res.send(token);
          }else{
            client.close();
            console.log("Username and/or password not found");
            return res.send("Login Failed!");
          }
        })
        .catch(error => {console.log(error);client.close();res.sendStatus(500);});
    })
    .catch(error => {console.log(error);res.sendStatus(500);});
});

//submit photo API
router.post('/submit-pic', upload.single('image'), (req, res) =>{
    let timeStamp = Date.now();
    //saves file as compressed med version - Can be ran asynchrously, return value not related
    sharp('./temp-photos/' + JSON.parse(req.body.formInputData).imageName).resize(600).toFile('./temp-photos/previews/med-' + JSON.parse
    (req.body.formInputData).imageName).catch(error => {console.log("med shrink error"); return res.sendStatus(500);});
    //saves file as compressed mini version
    sharp('./temp-photos/' + JSON.parse(req.body.formInputData).imageName).resize(200).toFile('./temp-photos/temp-icons/mini-' + JSON.parse
    (req.body.formInputData).imageName).catch(error => {console.log("mini shrink error"); return res.sendStatus(500);})
    .then(()=>{
              MongoClient.connect(url)
              .then( client =>{
                  const db = client.db('photoStorage');
                  db.collection('photos').insertOne(JSON.parse(req.body.formInputData))
                  .then(result =>{  
                            client.close(); return res.send(req.body.formInputData.imageName + " photo info added to database");})
                  .catch(error =>{
                            client.close(); console.log("coollection connect error"); return res.sendStatus(500);});
              })
              .catch(error => {
                  console.log("mongo connect error");client.close();return res.sendStatus(500);
              });   
    });
});

//latest photos API - Called when new photo added
router.get('/latest-photos', (req, res) =>{
  MongoClient.connect(url)
  .then(client =>{
    const db = client.db('photoStorage');
    db.collection('photos').find({}).sort({timeStamp: -1}).limit(30).toArray()
      .then(result => {client.close(); return res.send(result)})
      .catch(error => {client.close(); console.log(error); return res.sendStatus(500);});
  })
  .catch(error => {console.log(error);client.close();return res.sendStatus(500);});
});

//photo-search30 - Called on page load to retrieved 30 most recent
router.get('/photo-search30', (req, res) =>{ 
  let regexSearch = "/.*" + req.query.searchText + ".*/";
  MongoClient.connect(url)
  .then(client =>{
    const db = client.db('photoStorage');
    db.collection('photos').find({ $text: { $search: regexSearch }}).sort({timeStamp: -1}).limit(30).toArray()
      .then(result => {client.close();return res.send(result)})
      .catch(error => {client.close(); console.log(error); return res.sendStatus(500);});
  })
  .catch(error => {console.log(error);client.close();return res.sendStatus(500);});
});
/*
//mail API
router.post('/recipe-mail', upload.single('image'),(req, res) =>{
  res.send('recipe-mail api works');
  console.log('recipe-mail accessed');
  
  let mailData = JSON.parse(req.body.data);//form data: transforms JSON string back to object
  let imageFile = req.file;//attachment file
  
  SendMyMail(mailData,imageFile);
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
              function SendMyMail(data,file){
                //iterates through contents and assigns string value to contents variable
                let contents;
                for(let y in data){
                  contents += ("<p>" + data[y] + "</p>");
                };
                //email data
                let mailOptions;  //code sets value according to attachment being present or not
                if(file == undefined){
                  mailOptions = {
                    to: 'hastings360@gmail.com', 
                    html: "<h1>Lulu's Recipe Message</h1>" + contents
                    };
                  }else{
                    mailOptions = {
                      to: 'hastings360@gmail.com', 
                      html: "<h1>Lulu's Recipe Message</h1>" + contents,
                      attachments: [{filename: file.originalname,path: file.path}]
                    };
                  }
                //sends
                transporter.sendMail(mailOptions,(error,info) =>{
                  if(error){
                    return console.log(error);
                  }else{
                    console.log('Email Sent');
                  }
                });
              }
*/     
module.exports = router;