require("dotenv").config();

const express = require("express");

const app = express();

app.use(express.json());

app.get("/api", (req, res) => res.send("API Running. . ."));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

const nodemailer = require("nodemailer");

app.post("/api/world", (req, res) => {
    console.log(req.body);
    res.send(
        `I received your POST request. This is what you sent me: ${req.body.post}`
    );
});

app.post("/send", (req, res) => {
    const output = `
        <h2>New Build Request</h2>
            <p>Name: ${req.body.user.first} ${req.body.user.last}</p>
            <p>Email: ${req.body.user.email}</p>
            <p>Address: <br/>${req.body.user.street}<br/>
            ${req.body.user.city}, ${req.body.user.state} ${req.body.user.zipcode}</p>
            <p>Build: ${req.body.user.build}</p>
            <p>Other: ${req.body.user.other}</p>`;

    // async..await is not allowed in global scope, must use a wrapper
    async function mailer() {
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASS
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        // send mail with defined transport object
        let info = await transporter.sendMail({
            from: process.env.EMAIL, // sender address
            to: "joel.d.coddington@biola.edu", // list of receivers
            subject: "New Build Request", // Subject line
            html: output // html body
        });

        console.log("Message sent: %s", info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

        // Preview only available when sending through an Ethereal account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    }

    mailer().catch(console.error);
});
