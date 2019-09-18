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

export default function Faq() {
  const faqContent = [
    {
      q: 'Question Example 1',
      a: 'Answer to question example 1. Here is what you can do'
    },
    {
      q: 'Question Example 2',
      a: 'Answer to question example 2. Here is what you can do'
    },
    {
      q: 'Question Example 3',
      a: 'Answer to question example 3. Here is what you can do'
    },
    {
      q: 'Question Example 4',
      a: 'Answer to question example 4. Here is what you can do'
    }
  ]

  const classes = useStyles()

  return (
    <div id="faqContainer">
      <h1>Frequently Asked Questions</h1>
      <div>
        {faqContent.map((elem, indx) => (
          <Paper className={classes.root} key={indx}>
            <Typography variant="h5" component="h3" className="question">
              Question: {elem.q}
            </Typography>
            <Typography component="p" className="answer">
              Answer: {elem.a}
            </Typography>
          </Paper>
        ))}
      </div>
      <ColorButton href="/testimonials">See Testimonials</ColorButton>
    </div>
  )
}
