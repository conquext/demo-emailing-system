import nodemailer from 'nodemailer'

import Debug from 'debug'

const debug = new Debug('dev')

const smtpTransport = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    type: 'OAuth2',
    user: process.env.EMAIL,
    clientId: process.env.GMAIL_ID,
    clientSecret: process.env.GMAIL_SECRET,
    refreshToken: process.env.GMAIL_REFRESH,
  },
})

const expiry = (process.env.TOKEN_EXPIRY || 1000000) / 60 / 60

const sendEmail = async (user, token, html) => {
  const mailOptions = {
    from: process.env.EMAIL,
    to: user.email,
    subject: 'Reward Test',
    html:
      html ||
      `${
        '<h4><b>Reward Test Demo</b></h4>' +
        '<p>We would like you to fill out a quick form for us to let us know how you like to be appreciated:</p>' +
        '<a href='
      }${process.env.CLIENT_URL}/rewardtest/${user.user_id}/${token}">${
        process.env.CLIENT_URL
      }/resetpassword/${user.id}/${token}</a>` +
        `<p>This link expires in ${expiry} hours<p>` +
        '<br><br>' +
        '<p>--Team</p>',
  }
  try {
    await smtpTransport.sendMail(mailOptions, (info) => {
      debug('INFO', info)
    })
    return 'sent'
  } catch (error) {
    debug('ERROR IN SENDING EMAIL', error)
    return 'fail'
  }
}

export default sendEmail
export { sendEmail }
