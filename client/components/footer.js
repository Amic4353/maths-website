import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

export default class Footer extends React.Component {
  constructor() {
    super()
    this.state = {
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
        alert('Thank you for the note. George will be in touch soon.')
        this.handleClose()
      } else if (response.data.msg === 'fail') {
        alert('Message failed to send.')
      }
    })
  }

  render() {
    return (
      <div id="footer">
        <div id="ftcontainer">
          <div id="ft-contact">
            <p>CONTACT</p>
            <p>George Humphrey</p>
            <a
              variant="outlined"
              color="primary"
              onClick={this.handleClickOpen}
            >
              E-mail: georgeedwardhumphrey@gmail.com
            </a>
            <p id="tel">Tel: 087 978 7380</p>
          </div>
          <div id="quick-lnks">
            <Link to="/faq">FAQ</Link>
            <Link to="/courses">Course Schedule</Link>
            <Link to="/about">About</Link>
            <Link to="/testimonials">Testimonials</Link>
          </div>
        </div>
        <div>
          <Dialog
            open={this.state.setOpen}
            onClose={this.handleClose}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">Contact George</DialogTitle>
            <DialogContent>
              <DialogContentText>
                If you would like more information on George's Maths Grinds,
                please feel free to send a note.
              </DialogContentText>
              <form
                id="contact-form"
                onSubmit={this.handleSubmit.bind(this)}
                method="POST"
              >
                <div className="form-group">
                  <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Name"
                    type="text"
                    fullWidth
                  />
                </div>
                <div className="form-group">
                  <TextField
                    autoFocus
                    margin="dense"
                    id="email"
                    label="Email Address"
                    type="email"
                    fullWidth
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
            </DialogContent>
          </Dialog>
        </div>
      </div>
    )
  }
}
