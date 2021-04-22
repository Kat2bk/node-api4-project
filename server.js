require('dotenv').config()
const express = require('express');
const server = express();

//portRouter, userRouter, middleware
server.use(express.json());


server.get('/', (req, res) => {
    const secretIdentity = process.env.CODED || 'Hello User'
    res.send({ secret: secretIdentity, welcome: 'Welcome to the API'})
})

server.get('/heroes', (req, res) => {
    const secretHero = process.env.HERO;

    const heroList = [
        "Batman",
        "Superman",
        "Green Lantern",
        "Aquaman",
        "Wonder Woman",
        "Green Arrow"
    ]

    if (!process.env.CODED) {
    res.status(200).json(heroList)
    } else {
    res.status(200).json({
        heroes: heroList,
        secretIdentity: secretHero
    })
    }
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