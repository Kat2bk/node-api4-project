const express = require('express');

const server = require('./server');

const port = process.env.PORT || 8080;

server.listen(port, (req, res) => {
    console.log(`Server is listening on port ${port}`)
})