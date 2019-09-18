import React from 'react'
import {Link} from 'react-router-dom'
import {withStyles} from '@material-ui/core/styles'
import {makeStyles} from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const ColorButton = withStyles(theme => ({
  root: {
    fontFamily: `'Gentium Basic', serif`,
    color: '#f0f0f0',
    backgroundColor: '#009388',
    '&:hover': {
      backgroundColor: '#3c4043'
    }
  }
}))(Button)

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    margin: '3vh'
  }
}))

export default function Testimonials() {
  const testContent = [
    {
      quote: 'Greatest class ever. Got me to where I am today',
      name: 'Colman Humphrey',
      class: '6th Year Maths Grind'
    },
    {
      quote: 'Greatest class ever. Got me to where I am today',
      name: 'Ciana Humphrey',
      class: '5th Year Maths Grind'
    },
    {
      quote: 'Greatest class ever. Got me to where I am today',
      name: 'Jesamin Humphrey',
      class: '6th Year Maths Grind'
    }
  ]

  const classes = useStyles()

  return (
    <div id="testContainer">
      <h1>Testimonials</h1>
      <div id="testContent">
        {testContent.map((elem, indx) => (
          <Paper className={classes.root} key={indx}>
            <Typography variant="h5" component="h3" className="question">
              "{elem.quote}"
            </Typography>
            <Typography component="p" className="answer">
              —{elem.name}, <em>{elem.class}</em>
            </Typography>
          </Paper>
        ))}
      </div>
      <ColorButton href="/faq">View Frequently Asked Questions</ColorButton>
    </div>
  )
}
