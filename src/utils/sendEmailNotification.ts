import * as nodemailer from 'nodemailer';

export const sendEmailNotification = async (
  from: any,
  to: any,
  subject: any,
  body: any,
  cc: any,
): Promise<any> => {
  var mailOptions = {
    from: from,
    to: to,
    subject: subject,
    text: body,
    cc,
  };

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'hmkahsay@gmail.com',
      pass: 'ylzsrnlbwmzgeohn',
    },
  });

  await transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      return false;
    } else {
      console.log('Email notiicatio is sent to admin: ' + info.response);
      return true;
    }
  });
};
