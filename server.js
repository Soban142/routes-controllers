import express from 'express';
import authRoutes from './routes/authRoutes.js';
import profileRoutes from './routes/profileRoutes.js';

const app = express();
const port = 8000;

app.use(express.json())


// ||||       Structure

// app.post('/register', (req, res) => {
//     res.status(200).send({
//         status: 'success',
//         userName: 'falana',
//         message: 'User data fetched'
//     })
// });

// app.post('/login', (req, res) => {
//     res.status(200).send({
//         status: 'success',
//         userData: 'falana',
//         message: 'user loggedin successfully'
//     })
// });

// app.get('/profile/:userId', (req, res) => {
//     console.log(req.params)
//     res.status(200).send({
//         status: 'success',
//         userData: 'userData',
//         message: 'got the userData'
//     })
// });

// app.put('/profile/:userId', (req, res) => {
//     console.log(req.params)
//     res.status(200).send({
//         status: 'success',
//         userData: 'updated user data',
//         message: 'user data updated successfully'
//     })
// });


//  ||||||       Structured for readibilty

// const signingUp = (req, res) => {
//         res.status(200).send({
//             status: 'success',
//             userName: 'falana',
//             message: 'User data fetched'
//         })
//     }

// const logingIn = (req, res) => {
//         res.status(200).send({
//             status: 'success',
//             userData: 'falana',
//             message: 'user loggedin successfully'
//         })
//     }

// const userProfile = (req, res) => {
//         console.log(req.params)
//         res.status(200).send({
//             status: 'success',
//             userData: 'userData',
//             message: 'got the userData'
//         })
//     }

// const updateProfile = (req, res) => {
//         console.log(req.params)
//         res.status(200).send({
//             status: 'success',
//             userData: 'updated user data',
//             message: 'user data updated successfully'
//         })
//     }


// app.post('/register', signingUp)

// app.post('./login', logingIn)

// app.get('/profile/:userId', userProfile)

// app.put('/profile/:userId', updateProfile)

//  ||||||||    Best structured way!

app.use('/auth', authRoutes)
app.use('/profile', profileRoutes)

app.listen(port, () => {
    console.log('Listening to requests that are being send to the server!')
});