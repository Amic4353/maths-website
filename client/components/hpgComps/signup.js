import React from 'react'
import {Link} from 'react-router-dom'

class SignUp extends React.Component {
  constructor() {
    super()
    this.state = {
      email: ''
    }
  }
  render() {
    return (
      <div id="signup">
        <p>Subscribe for the latest events and course updates.</p>
        <div>
          <form>box placeholder</form>
          <button type="submit">Sign Up</button>
        </div>
      </div>
    )
  }
}

export default SignUp
