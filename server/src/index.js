const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const app = express()
const PORT = 5000

//Config
const config = require('./configs/mainConfig')
config(app, express, mongoose)

//Routes
router = require('./router/mainRouter')
require('./router/mainRouter')(app, express, mongoose, bcrypt)

app.listen(PORT, () => console.log(`app running on port ${PORT}`))