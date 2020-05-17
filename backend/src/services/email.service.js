const nodemailer = require('nodemailer');


const mailserver = {
    service: 'gmail',
    auth: {
        user: 'YOUR EMAIL TO SEND', // Never up your credentials
        pass: 'SecretPassoword' // naturally, replace both with your real credentials or an application-specific password
    }
}

const transporter = nodemailer.createTransport(mailserver);

exports.send = (personName, to, friendName) => {
    const message = {
        from: 'YOUR EMAIL TO RECIVED',
        to: to,
        subject: 'Draw Result ! ',
        html: 'Hello ' + personName + ',' + ' you friend draw at: ' + friendName
    }

    transporter.sendMail(message, (error, info) => {
        if (error) {
            throw error;
        }
    })
}