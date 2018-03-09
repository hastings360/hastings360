const express = require('express');
const router = express.Router();
const multer = require('multer');
const MongoClient = require('mongodb').MongoClient;//db API
const url = "mongodb://localhost:27017";//db connection string
const fs = require('fs');
const rxjs = require('rxjs');

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

//submit photo API
router.post('/submit-pic', upload.single('image'), (req, res) =>{
    let timeStamp = Date.now();
    
    //saves file as compressed med version
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
                  console.log("mongo connect error"); return res.sendStatus(500);
              });   
    });
});

router.get('/latest-photos', (req, res) =>{
  MongoClient.connect(url).then(client =>{
    const db = client.db('photoStorage');
    db.collection('photos').find({}).sort({timeStamp: -1}).limit(30).toArray()
    .then(result => {client.close(); return res.send(result)}).catch(error => {client.close(); console.log(error); return res.sendStatus(500);});
  }).catch(error => {console.log(error);return res.sendStatus(500);});
});

router.get('/photoSearch30', (req, res) =>{ 
  let regexSearch = "/.*" + req.query.searchText + ".*/";
  MongoClient.connect(url).then(client =>{
    const db = client.db('photoStorage');
  db.collection('photos').find({ $text: { $search: regexSearch }}).sort({timeStamp: -1}).limit(30).toArray()
    .then(result => {client.close();return res.send(result)}).catch(error => {client.close(); console.log(error); return res.sendStatus(500);});
  }).catch(error => {console.log(error);return res.sendStatus(500);});
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
    db.collection("meals").aggregate([
      {$sort: {likes: -1}},
      {$group: {_id: "$category", unique: {$addToSet: "$category"}}},
      {$limit:10}
    ]).toArray(function(err, result){
        if(err) throw err;
        db.close();
        return res.send(result);
    });
  });
});

//all categories database query API
router.get('/recipe-all-categories', (req, res) =>{
  console.log('recipe-all-categories queried');
  
  MongoClient.connect(url, function(err, db){
    if(err) throw err;
    db.collection("meals").find({},{ category: 1,_id: 0}).sort({category: 1}).toArray(function(err, result){
        if(err) throw err;
        db.close();
        return res.send(result);
    });
  });
});

//meals by category database query API
router.get('/recipe-meals-by-category',(req, res) =>{
  console.log('recipe-meals-by-category queried');

  MongoClient.connect(url, function(err, db){
    if(err) throw err;
    db.collection("meals").find({category: req.query.category}).toArray(function(err, result){
        if(err) throw err;
        db.close();
        return res.send(result);
    });
  });
});

//meal by name database query API
router.get('/recipe-meal-by-name',(req, res) =>{
  console.log('recipe-meal-by-name queried');

  MongoClient.connect(url, function(err, db){
    if(err) throw err;
    db.collection("meals").find({name: req.query.name}).toArray(function(err, result){
        if(err) throw err;
        db.close();
        return res.send(result);
    });
  });
});

//search query database API
router.get('/query-search-by-input',(req, res) =>{
  console.log('query-search-by-input queried');
  
  MongoClient.connect(url, function(err, db){
    if(err) throw err;
    db.collection("meals").find({ $text: { $search: req.query.searchText}}).toArray(function(err, result){
        if(err) throw err;
        db.close();
        return res.send(result);
    });
  });
});

//increase likes by mealID
router.post('/increase-likes',(req, res) =>{
  console.log('increase-likes accessed');

  let objectId = new ObjectId(req.body._id);

  MongoClient.connect(url, function(err, db){
    if(err) throw err;
    db.collection("meals").update({"_id": objectId},{$inc:{"likes": 1}}, (err, result) =>{
      if(err) throw err;
      db.close();
      console.log(req.body.name + " increased by 1");
      return res.send(result);
    });
  });
});*/
            
module.exports = router;