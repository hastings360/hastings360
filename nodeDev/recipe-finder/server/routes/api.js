const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
let postData;

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

router.post('/contribute', (req, res) =>{
  res.send('contribute-form api works');
  console.log('contribute-form accessed');
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
    html: '<h4>' + postData.name + '</h4><h5>' + postData.phone + '</h5><p>' + postData.message + '</p>'
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