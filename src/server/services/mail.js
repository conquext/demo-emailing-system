import nodemailer from 'nodemailer'
import sgMail from '@sendgrid/mail'
import dotenv from 'dotenv'
import Debug from 'debug'

dotenv.config()

const debug = new Debug('dev')
const { env } = process

const apiKey = env.SENDGRID_API_KEY
const CLIENT_URL =
  env.NODE_ENV === 'test' || 'development'
    ? `http://localhost:${env.PORT}`
    : env.CLIENT_URL

sgMail.setApiKey(apiKey)
const expiry = (env.TOKEN_EXPIRY || 1000000) / 60 / 60

const smtpTransport = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    type: 'OAuth2',
    user: env.EMAIL,
    clientId: env.GMAIL_ID,
    clientSecret: env.GMAIL_SECRET,
    refreshToken: env.GMAIL_REFRESH,
  },
})

export const sendEmailWithNodemailer = async (user, token, html) => {
  const mailOptions = {
    from: env.EMAIL,
    to: user.email,
    subject: 'Test Email',
    html: html || getMessage(user, token),
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

const sendEmail = async (user, token, html) => {
  try {
    const msg = {
      to: user.email,
      from: 'intbusfor@gmail.com',
      subject: 'Test Email',
      html: html ? html : getMessage(user, token),
    }
    const message = await sgMail.send(msg)
    if (message[0] && message[0].request) {
      return 'sent'
    }
  } catch (error) {
    return 'fail'
  }
}

function getMessage(user, token) {
  return `
        <h3>This is just a test email.<h3> 
        <p>You received this mail because you are our friend or a random email happened to be yours.</p>
        <a href='${CLIENT_URL}/${token}/${user.email}'>Click this link now to Signup</a>

        <p style={color: 'red'}>The link will expire in ${expiry}</p>
        <br><br>
        <p>--Team</p>`
}

export default sendEmail
