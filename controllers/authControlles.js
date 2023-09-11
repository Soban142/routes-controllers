const signingUp = (req, res) => {
    res.status(200).send({
        status: 'success',
        userName: 'falana',
        message: 'User data fetched'
    })
}

const logingIn = (req, res) => {
    res.status(200).send({
        status: 'success',
        userData: 'falana',
        message: 'user loggedin successfully'
    })
}

export {signingUp, logingIn}