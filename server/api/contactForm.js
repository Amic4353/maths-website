const router = require('express').Router()
module.exports = router
const nodemailer = require('nodemailer')
require('../../secrets')
const smtpTransport = require('nodemailer-smtp-transport')

const transporter = nodemailer.createTransport(
  smtpTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS
    }
  })
)

transporter.verify((error, success) => {
  if (error) {
    console.log(error)
  } else {
    console.log('Server is ready to take messages')
  }
})

router.post('/send', (req, res, next) => {
  let name = req.body.name
  let parentName = req.body.parentName
  let email = req.body.email
  let phone = req.body.phone
  let classType = req.body.classType
  let message = req.body.message
  let content
  let mail

  if (classType) {
    content = `name: ${name} \n parent name: ${parentName} \n email: ${email} \n  phone: ${phone} \n class type: ${classType} \n message: ${message} `

    mail = {
      from: email,
      to: 'info.georgehumphrey@gmail.com',
      subject: `Course Booking from ${name}`,
      text: content
    }
  } else {
    content = `name: ${name} \n email: ${email} \n message: ${message}
    `

    mail = {
      from: email,
      to: 'info.georgehumphrey@gmail.com',
      subject: `Message from ${name}`,
      text: content
    }
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        msg: 'fail'
      })
    } else {
      res.json({
        msg: 'success'
      })
    }
  })
})
