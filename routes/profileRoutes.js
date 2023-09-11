import express from 'express'

import {userProfile, updateProfile} from '../controllers/profileController.js'

const profileRoutes = express.Router();

profileRoutes.get('/profile/:userId', userProfile)
profileRoutes.put('/profile/:userId', updateProfile)


export default profileRoutes