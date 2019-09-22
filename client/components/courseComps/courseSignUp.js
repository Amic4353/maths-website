import React from 'react'
import {Link} from 'react-router-dom'
import TextField from '@material-ui/core/TextField'
import axios from 'axios'

class CourseSignUp extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.resetForm = this.resetForm.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    const name = document.getElementById('student-name').value
    const parentName = document.getElementById('parent-name').value
    const email = document.getElementById('email').value
    const phone = document.getElementById('phone').value
    const classType = document.getElementById('class-type').value
    const message = document.getElementById('message').value
    axios({
      method: 'POST',
      url: 'api/contact/send',
      data: {
        name,
        parentName,
        email,
        phone,
        classType,
        message
      }
    }).then(response => {
      if (response.data.msg === 'success') {
        alert('Thank you for the note. George will be in touch soon.')
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
      <div id="signup-container">
        <div id="signup">
          <p>
            Fill out the form to book a course with George. Have more questions?
            Feel free to contact him directly. <br />
            <br />
            E-mail: info.georgehumphrey@gmail.com
            <br />
            Tel: 087 978 7380
          </p>
          <form
            id="contact-form"
            onSubmit={this.handleSubmit.bind(this)}
            method="POST"
          >
            <div className="form-group">
              <TextField
                autoFocus
                margin="dense"
                id="student-name"
                label="Student Name"
                type="text"
                fullWidth
                required
              />
            </div>
            <div className="form-group">
              <TextField
                autoFocus
                margin="dense"
                id="parent-name"
                label="Parent Name"
                type="text"
                fullWidth
                required
              />
            </div>
            <div className="form-group">
              <TextField
                autoFocus
                margin="dense"
                id="email"
                label="Billing Email Address"
                type="email"
                fullWidth
                required
              />
            </div>
            <div className="form-group">
              <TextField
                autoFocus
                margin="dense"
                id="phone"
                label="Telephone Number"
                type="text"
                fullWidth
                required
              />
            </div>
            <div className="form-group">
              <TextField
                defaultValue={this.props.location.state.page}
                autoFocus
                margin="dense"
                id="class-type"
                label="Class Type"
                type="text"
                fullWidth
              />
            </div>
            <div className="form-group">
              <label>Additional Message</label>
              <textarea className="form-control" rows="5" id="message" />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default CourseSignUp
