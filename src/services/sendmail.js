// const nodemailer = require('nodemailer');
//
// export const sendMail = (to, content, callback = (error, info) => {}) => {
//     let transporter = nodemailer.createTransport({
//         host: 'smtp.googlemail.com', // Gmail Host
//         port: 465, // Port
//         secure: true, // this is true as port is 465
//         auth: {
//             user: 'ducphamtien@gmail.com', //Gmail username
//             pass: 'xqzrkzsqyngyarfa' // Gmail password
//         }
//     });
//
//     let mailOptions = {
//         from: '"Artisans Web" <admin@artisansweb.net>',
//         to: 'ducphamtien@gmail.com', // Recepient email address. Multiple emails can send separated by commas
//         subject: 'Welcome Email',
//         text: 'This is the email sent through Gmail SMTP Server.'
//     };
//
//     transporter.sendMail(mailOptions, (error, info) => {
//         callback(error, info)
//     });
// }