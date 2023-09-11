import express from 'express'

import {signingUp, logingIn} from '../controllers/authControlles.js'

const authRoutes = express.Router();

authRoutes.post('/register', signingUp)
authRoutes.post('/login', logingIn)


export default authRoutes