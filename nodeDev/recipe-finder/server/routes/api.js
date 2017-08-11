const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

//root APi 
router.get('/', (req, res) => {
  res.send('api works');
});

//mail API
router.post('/recipe-mail', (req, res) =>{
  res.send('recipe-mail api works');
  console.log('recipe-mail accessed');
  let mailData = req.body;
  sendMyMail(mailData);
});

//favorites database query API
router.get('/recipe-favorites', (req, res) =>{
  res.send(favortiesQueryResponse);
  console.log('recipe-favorties queried');

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
function sendMyMail(x){
  //iterates through contents and assigned string value to contents variable
  let contents
  for(let y in x){
    contents += ("<p>" + x[y]+"</p>");
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



module.exports = router;