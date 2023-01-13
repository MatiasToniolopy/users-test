const axios = require('axios');
const User = require('../models/Users.js')

const api =  async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    const data = response.data
    data.map(user => {
        const newuser = new User({
            name: user.name,
            username: user.username,
            email: user.email
        })
        newuser.save()
        return newuser
    })
}

module.exports = api;