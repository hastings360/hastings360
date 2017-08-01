const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
let postData;

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

router.post('/recipe-contact', (req, res) =>{
  res.send('recipe-contact api works');
  console.log('recipe-contact accessed');
  postData = req.body;
  sendMyMail();
});

router.post('/recipe-contribute', (req, res) =>{
  res.send('recipe-contribute api works');
  console.log('recipe-contribute accessed');
  postData = req.body;
  sendMyMail();
});


//reusable transporter object
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'hastingsserve@gmail.com',
    pass: '577061Ha!'
  }
});

//send mail using the mailOptions object
function sendMyMail(){
  //email data
  let mailOptions = {
    from: postData.email,
    to: 'hastings360@gmail.com',
    subject: postData.name, 
    html: postData
  };
  //sends
  transporter.sendMail(mailOptions,(error,info) =>{
    if(error){
      return console.log(error);
    }else{
      console.log('Message Sent');
    }
  });
}

module.exports = router;