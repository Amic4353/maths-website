const Sequelize = require('sequelize')
const db = require('../db')

const ClassDetail = db.define('classDetail', {
  date: {
    type: Sequelize.STRING,
    allowNull: false
  },
  seats: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  seatsReserved: {
    type: Sequelize.INTEGER,
    isLessThanSeats(value) {
      if (parseInt(value) >= parseInt(this.seats)) {
        throw new Error('Seats filled must be less than total seats.')
      }
    },
    defaultValue: 0
  },
  seatsPaid: {
    type: Sequelize.INTEGER,
    isLessThanSeats(value) {
      if (parseInt(value) >= parseInt(this.seats)) {
        throw new Error('Paid Seats must be less than total seats')
      }
    },
    defaultValue: 0
  },
  emptySeats: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

module.exports = ClassDetail
