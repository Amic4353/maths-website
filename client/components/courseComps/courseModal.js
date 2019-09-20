import React from 'react'
import {Link} from 'react-router-dom'
import SnackbarContent from '@material-ui/core/SnackbarContent'
import Button from '@material-ui/core/Button'
import {makeStyles} from '@material-ui/core/styles'

//functions for the snackbars
const action = (type, link) => (
  <Link to={link}>
    <Button color="#009388" size="small">
      {type}
    </Button>
  </Link>
)

const buttonClick = (type, elem) => (
  <Button onClick={() => changeModal(elem)} color="#009388" size="small">
    {type}
  </Button>
)

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 600
  },
  snackbar: {
    margin: theme.spacing(1),
    backgroundColor: '#E6E6E6',
    color: '#0b005d'
  },
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    zIndex: 100
  }
}))

const changeModal = changeVar => {
  console.log(changeVar)
  let change = !changeVar
  console.log('test', change)
  changeVar = change
  console.log('updateVar', changeVar)
}

export default function CourseModal(props) {
  const page = props.page
  const classes = useStyles()
  const divStyle = {
    position: 'fixed',
    marginTop: '13vh',
    top: '0',
    left: '0'
  }
  const modalFlag = false

  if (page === 'courses') {
    return (
      <div style={divStyle}>
        <SnackbarContent
          className={classes.snackbar}
          message="Home"
          action={action('Back', '/courses')}
        />

        <SnackbarContent
          className={classes.snackbar}
          message="Ready?"
          action={buttonClick('Enroll Now', modalFlag)}
        />
      </div>
    )
  } else {
    return (
      <div style={divStyle}>
        <SnackbarContent
          className={classes.snackbar}
          message="Back to"
          action={action('All Courses', '/courses')}
        />

        <SnackbarContent
          className={classes.snackbar}
          message="Enroll Now"
          action={buttonClick('Contact George', modalFlag)}
        />
      </div>
    )
  }
}
