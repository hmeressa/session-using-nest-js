import * as nodemailer from 'nodemailer';

export const sendEmailNotification = async (
  from: string,
  to: string,
  subject: string,
  body: string,
  cc: string,
): Promise<boolean> => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // secure should be false because port is 587
    auth: {
      user: 'hmkashay@gmail.com',
      pass: 'ylzsrnlbwmzgeohn',
    },
  });

  const mailOptions = {
    from: from,
    to: to,
    cc: cc,
    subject: subject,
    text: body,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email notification sent');
    return true;
  } catch (error) {
    console.error('Error sending email notification:', error);
    return false;
  }
};
