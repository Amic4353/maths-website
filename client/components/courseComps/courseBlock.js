import React from 'react'
import {Link} from 'react-router-dom'
import {makeStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
})

const courseContent = [
  {
    title: 'Maths Junior Cert',
    img: '',
    description: '',
    first: 'Higher Level',
    firstLink: '/junior'
  },
  {
    title: 'Maths Leaving Cert',
    img: '',
    description: '',
    first: '5th Year',
    firstLink: '/fifth',
    second: '6th Year',
    secondLink: '/sixth'
  },
  {
    title: 'Maths Blitz',
    img: '',
    description: '',
    first: 'Junior',
    firstLink: '/blitzjunior',
    second: 'Leaving',
    secondLink: '/blitzleaving'
  }
]

export default function CourseBlock() {
  const classes = useStyles()

  return (
    <div id="course-block-container">
      {courseContent.map((elem, indx) => {
        if (elem.second) {
          return (
            <Card className={classes.card} key={indx}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={elem.img}
                  title={elem.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {elem.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {elem.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="#009388" href={`${elem.firstLink}`}>
                  {elem.first}
                </Button>
                <Button
                  size="small"
                  color="#009388"
                  href={`${elem.secondLink}`}
                >
                  {elem.second}
                </Button>
              </CardActions>
            </Card>
          )
        } else {
          return (
            <Card className={classes.card} key={indx}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={elem.img}
                  title={elem.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {elem.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {elem.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="#009388" href={`${elem.firstLink}`}>
                  {elem.first}
                </Button>
              </CardActions>
            </Card>
          )
        }
      })}
    </div>
  )
}
