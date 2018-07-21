const express = require('express')
const app = express()
const path = require('path')
const nodemailer = require('nodemailer')

console.log(process.env.GMAIL_USER)
app.get('/',(req,res) => 
	res.sendFile(path.join(__dirname, './index.html'))
)
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
const transporter = nodemailer.createTransport({
 service: 'gmail',
 auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS
    }
})
app.post('/contact',(req,res) => {
	console.log(req.body)


	let html = '<p> Name: "'+req.body.Name+'" </p>'+
				'<p> Email : '+ req.body.Email+' </p>'+
				'<p> Mobile Number : '+ req.body.mobilenumber+' </p>'+
				'<p> Message : '+ req.body.Message+' </p>'
	
	if(req.body.Email){
		let  mailOptions = {
		  from: req.body.Email, 
		  to : 'namithhl777@gmail.com', 
		  subject: 'Portfolio Contact', 
		  html:html
		}
		transporter.sendMail(mailOptions, function(err, info) {
		  if (err)
		    console.log(err)
		  else
		    console.log(info)
		})
	}

	
})

const port = process.env.PORT || 3000;
app.listen(port,() => console.log("Port 3000"))