const nodemailer = require('nodemailer');


const mailserver = {
    service: 'gmail',
    auth: {
        user: 'testerson.testador@gmail.com', // Never up your credentials
        pass: 'testebanco2' // naturally, replace both with your real credentials or an application-specific password
    }
}

const transporter = nodemailer.createTransport(mailserver);

exports.send = (personName, to, friendName) => {
    const message = {
        from: 'contato.raulcoelho@gmail.com',
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