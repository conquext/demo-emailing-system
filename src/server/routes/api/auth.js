import express from 'express'

const router = express.Router()

router.post('/signup', () => console.log('howdy you'))

router.post('/login', (res) => res.json({ data: 'nice one, stranger' }))

router.post('/passwords/reset/:userId', () => console.log('its all good'))

export default router
