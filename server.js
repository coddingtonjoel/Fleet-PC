require("dotenv").config();

const express = require("express");

const app = express();

app.use(express.json());

app.get("/api", (req, res) => res.send("API Running. . ."));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

const cors = require("cors");
app.use(cors());

const nodemailer = require("nodemailer");

app.post("/send", (req, res) => {
    res.send("API Running. . .");

    //format email output based on the type of request
    let output;

    //regular build
    if (req.body.user.type === "build") {
        output = `
        <h2>New Build Request</h2>
            <p>Name: ${req.body.user.first} ${req.body.user.last}</p>
            <p>Email: ${req.body.user.email}</p>
            <p>Address: <br/>${req.body.user.street}<br/>
            ${req.body.user.city}, ${req.body.user.state} ${req.body.user.zipcode}</p>
            <p>Build: ${req.body.user.build}</p>
            <p>Other: ${req.body.user.other}</p>`;
        //custom build
    } else if (req.body.user.type === "build-c") {
        output = `
        <h2>New Custom Build Request</h2>
        <p>Name: ${req.body.user.first} ${req.body.user.last}</p>
        <p>Email: ${req.body.user.email}</p>
        <p>Address: <br/>${req.body.user.street}<br/>
        ${req.body.user.city}, ${req.body.user.state} ${req.body.user.zipcode}</p>
        <p>Build Request Instructions:<br/>${req.body.user.text}`;
        //upgrade
    } else if (req.body.user.type === "upgrade") {
        output = `
        <h2>Upgrade Request</h2>
        <p>Name: ${req.body.user.first} ${req.body.user.last}</p>
        <p>Email: ${req.body.user.email}</p>
        <p>Address: <br/>${req.body.user.street}<br/>
        ${req.body.user.city}, ${req.body.user.state} ${req.body.user.zipcode}</p>
        <p>Part to Upgrade: ${req.body.user.select}</p>`;
    }

    // async..await is not allowed in global scope, must use a wrapper
    async function mailer() {
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: "smtp.aol.com",
            auth: {
                user: "fleetpc@aol.com",
                pass: process.env.EMAILPASS
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        // send mail with defined transport object
        let info = await transporter.sendMail({
            from: "fleetpc@aol.com", // sender address
            to: "admin@fleetpc.org", // list of receivers
            subject: `New Request from ${req.body.user.first} ${req.body.user.last}`, // Subject line
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
