// example: npm run start user=reza pass=master
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const exphbs = require('express-handlebars');
const path = require('path');
const app = express();
const user = process.argv.slice(2)[0].split('=')[1]; 
const pass = process.argv.slice(2)[1].split('=')[1]; 
const port = process.env.PORT || 3000;

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars')

app.use('/public', express.static(path.join(__dirname, 'public')));

app.use(cors({
    origin: '*'
  }));


app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

app.listen(port, () => {
    console.log("The server started on port", port);
  });

  app.get('/',(req, res) => {
    res.render('contact.handlebars')
});


// define a sendmail endpoint, which will send emails and response with the corresponding status
app.post("/send", (req, res) => {
    console.log(req.body);
    const output = `
        <p>you have a new contact request</p>
        <h3>contact details</h3>
        <ul>
            <li>name: ${req.body.name}<li>
            <li>company: ${req.body.company}<li>
            <li>email: ${req.body.email}<li>
            <li>phone: ${req.body.phone}<li>
        </ul>
        <h3>message</h3>
        <p>${req.body.message}</p>
    `;
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: user,
            pass: pass
        }, 
        tls: {
            rejectUnautorized: false
        }
    }); 

    const mailOptions = {
        from: `"Nodemailer contact", "rezafitriaman@gmail.com"`,
        to: `<rezafitriaman@gmail.com>`,
        subject: "node contact request",
        html: output
    };

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log(err);
            res.status(400);
            res.send({ error: "Failed to send email" });
          } else {
            console.log("Email has been sent");
            //res.send(info);
            res.send({msg: 'Your message has been send.'})
          }

    });
});
