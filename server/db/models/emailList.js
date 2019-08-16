const Sequelize = require('sequelize')
const db = require('../db')

const EmailList = db.define('emailList', {
  email: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = EmailList
