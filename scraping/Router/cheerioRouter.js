const express = require('express')
const link = require('../Controller/test')

const cherio = express.Router()

cherio.route("/getdata").get(link)

module.exports = cherio