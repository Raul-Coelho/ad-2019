const nodemailer = require('nodemailer');


const mailserver = {
    service: 'gmail',
    auth: {
        user: 'testead2019@gmail.com',
        pass: 'testebanco2'
    }
}

const transporter = nodemailer.createTransport(mailserver);

exports.send = (personName, to, friendName) => {
    const message = {
        from: 'testead2019@gmail.com',
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