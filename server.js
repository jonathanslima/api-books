const express = require('express');
const mongoose = require('mongoose')
const requireDir = require('require-dir');
const cors = require('cors');
// init server and allow to send json data
const app = express();
app.use(express.json());
app.use(cors());

// Connect database
mongoose.connect('mongodb://localhost:27017/books', {useNewUrlParser: true});

// Import models
requireDir('./src/models/')

// Import Routes
app.use('/api', require('./src/routes.js'));

// Running server
app.listen('3003', ()=> console.log('server running at localhost:3003'))