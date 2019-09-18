import React from 'react'
import axios from 'axios'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

export default class ContactForm extends React.Component {
  constructor() {
    super()
    this.state = {
      open: false,
      setOpen: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleClickOpen = this.handleClickOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  handleClickOpen() {
    this.setState({setOpen: true})
  }

  handleClose() {
    this.setState({setOpen: false})
  }

  handleSubmit(e) {
    e.preventDefault()
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const message = document.getElementById('message').value
    axios({
      method: 'POST',
      url: 'api/contact/send',
      data: {
        name,
        email,
        message
      }
    }).then(response => {
      if (response.data.msg === 'success') {
        alert('Thanks for the note!')
        this.resetForm()
      } else if (response.data.msg === 'fail') {
        alert('Message failed to send.')
      }
    })
  }

  resetForm() {
    document.getElementById('contact-form').reset()
  }

  render() {
    return (
      <form
        id="contact-form"
        onSubmit={this.handleSubmit.bind(this)}
        method="POST"
      >
        <div className="form-group">
          <label>Name</label>
          <input type="text" className="form-control" id="name" />
        </div>
        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea className="form-control" rows="5" id="message" />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    )
  }
}
