import sgMail from '@sendgrid/mail'
import dotenv from 'dotenv'
import composeMail from './mailtemplate'

dotenv.config()

const { env } = process

const apiKey = env.SENDGRID_API_KEY

const CLIENT_URL =
  env.NODE_ENV === 'test' || 'development'
    ? `http://localhost:${env.PORT}`
    : env.CLIENT_URL

const expiry = (env.TOKEN_EXPIRY || 1000000) / 60 / 60

sgMail.setApiKey(apiKey)

const sendEmail = async (user, token, html) => {
  try {
    const msg = {
      to: user.email,
      from: env.EMAIL,
      subject: 'Test Email',
      html: html ? html : composeMail(),
    }
    const message = await sgMail.send(msg)

    if (message[0] && message[0]?.statusCode === 202) {
      return 'sent'
    } else {
      return 'fail'
    }
  } catch (error) {
    console.log('message failed', error)
    return 'fail'
  }
}

export default sendEmail
