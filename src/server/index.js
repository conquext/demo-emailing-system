import express from 'express'
import session from 'express-session'
import { v4 as uuidv4 } from 'uuid'
import bodyParser from 'body-parser'
import parse from 'url'
import cors from 'cors'
import dotEnv from 'dotenv'
import next from 'next'
import getRoutes from './nextroutes'
import apiRoutes from './routes'
import sendEmail from './services/mail'
import StaffUtils from './utils/staff'
import Response from './utils/response'
import { Staff } from './models'

dotEnv.config()

// Sequelize
// const models = require('./models')
const { errorResponse, successResponse } = Response

// Set Environment
const dev = process.env.NODE_ENV || 'development'
const PORT = process.env.PORT || 3002
const isDev = String(dev).includes('dev')

// Next App
const app = next({ dev: isDev })
const handle = app.getRequestHandler()
dotEnv.config()

/**
 * Front end Routes
 */
const nRoutes = getRoutes()
let server

app
  .prepare()
  .then(() => {
    server = express()

    // Generate Unique Session Secret tokens
    server.use(
      session({
        secret: uuidv4(),
        name: 'sessionId',
        resave: true,
        saveUninitialized: true,
        cookie: { maxAge: 60000 },
      })
    )

    server.enable('trust proxy')

    server.use(cors())
    server.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*')
      res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
      )
      next()
    })
    server.use(bodyParser.urlencoded({ extended: true }))
    server.use(bodyParser.json())

    server.get('/staffs', (req, res) => {
      try {
        const staff = StaffUtils.findAllStaff()
        console.log('them staff', staff)
        return successResponse(res, 200, 'All Staff members', staff)
      } catch (error) {
        return errorResponse(res, 500, error)
      }
    })

    server.delete('/staffs/:email', async (req, res) => {
      try {
        const { email } = req.params
        const staff = await StaffUtils.findStaff('email', email)
        if (staff) {
          await Staff.destroy({
            where: { email },
            cascase: true,
          })
        } else {
          return errorResponse(res, 404, 'Staff not found')
        }
        const updates = StaffUtils.findAllStaff()
        return successResponse(res, 200, 'All Staff members', updates)
      } catch (error) {
        return errorResponse(res, 500, error)
      }
    })

    server.post('/sendinvite', (req, res) => {
      try {
        let token = 'rerteESDew432f'
        console.log('reqss', req.body)
        const data = StaffUtils.getAllReqBody(req.body)
        data &&
          data.forEach(async (d) => {
            try {
              // check that it is not in db and not already invited
              // add user to database and send email
              // update user invite status
              const userFound = await StaffUtils.findStaff('email', d.email)
              console.log('userFound', userFound)
              if (userFound) {
                const isInvited = userFound.inviteSent === 'Yes'
                if (!isInvited) {
                  const emailSent = await sendEmail(userFound, token)
                  if (emailSent || emailSent === 'sent')
                    StaffUtils.updateStaff(userFound.email, {
                      inviteSent: 'Yes',
                    })
                }
              } else {
                const newUser = await StaffUtils.createStaff(d)
                if (newUser && newUser.email) {
                  const emailSent = await sendEmail(newUser, token)
                  if (!emailSent || emailSent === 'fail')
                    StaffUtils.updateStaff(newUser.email, { inviteSent: 'No' })
                }
              }
            } catch (error) {
              console.log('problems with user', error)
            }
          })
        const updates = StaffUtils.findAllStaff()
        return successResponse(res, 201, 'Invites Sent', updates)
      } catch (error) {
        return errorResponse(res, 500, error)
      }
    })

    // server.use('/api', (req, res) => res.json('yo welcome'))
    server.use(apiRoutes)

    // Use React application on server
    server.get('*', (req, res) => {
      // Parse url param, slashesDenoteHost
      //   const parsedUrl = parse(req.url, true)
      //   const { pathname, query = {} } = parsedUrl

      //   /**
      //    * Pull in front end routes, and check request against those routes
      //    */
      //   const route = nRoutes[pathname]
      //   if (route) {
      //     return app.render(req, res, route.page, query)
      //   }
      return handle(req, res)
    })

    server.listen(PORT, (err) => {
      if (err) throw err
      console.log(`> Ready on ${PORT}`)
    })

    // Connect to DB
    // models.sequelize.sync().then(function () {
    //   server.listen(PORT, (err) => {
    //     if (err) throw err
    //     console.log(`> Ready on ${PORT}`)
    //   })
    // })
  })
  .catch((ex) => {
    // Exit if there is an exception
    console.error(ex.stack)
    process.exit(1)
  })

export default server
