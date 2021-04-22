const express = require('express');
const server = express();

//portRouter, userRouter, middleware
server.use(express.json());


server.get('/', (req, res) => {
    const messageOfTheDay = process.env.MOTD || 'Hello User'
    res.send({motd: messageOfTheDay, 'Welcome to the API'})
})

// error middleware
server.use((err, req, res, next) => {
    console.log(err)
    handleError(err, res);

    if (!err) {
        next(err)
    }
})

server.use((err, req, res, next) => {
    res.status(500).json({ message: "Something went wrong, try again"})
})

module.exports = server;  