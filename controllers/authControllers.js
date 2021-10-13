const express = require('express'); 
const router = express.Router();
const bcyrpt = require('bcrypt.js');
const { model } = require('mongoose');
const {User} = require('../models');

model.exports = router