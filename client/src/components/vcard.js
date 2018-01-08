import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Card, { CardContent } from 'material-ui/Card'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import Grid from 'material-ui/Grid'
import Tooltip from 'material-ui/Tooltip'

import Github from 'mdi-material-ui/GithubCircle'
import Linkedin from 'mdi-material-ui/Linkedin'

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 3
  },
  rounded: {
    borderRadius: 8,
    paddingBottom: theme.spacing.unit
  },
  content: {
    [theme.breakpoints.up('md')]: {
      padding: 40
    }
  },
  name: {
    fontSize: '1.2rem',
    margin: '0 3px'
  },
  social: {
    marginTop: theme.spacing.unit * 2,
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      textAlign: 'left'
    }
  },
  image: {
    textAlign: 'center'
  },
  button: {
    margin: theme.spacing.unit
  }
})

const socialMedia = [
  {
    social: 'Github',
    icon: Github,
    url: 'https://github.com/saloiofun'
  },
  {
    social: 'LinkedIn',
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/sandrowong/'
  }
]

let socialMedias = socialMedia.map(sm => {
  var CompName = sm.icon
  return (
    <Tooltip
      id={sm.social}
      title={sm.social}
      placement='bottom'
      key={sm.social}
    >
      <Button mini href={sm.url} target='_blank' fab color='primary' aria-labelledby={sm.social} style={{margin: 8}}>
        <CompName />
      </Button>
    </Tooltip>
  )
})

function Vcard (props) {
  const { classes } = props

  return (
    <div className={classes.root}>
      <Card classes={{
        rounded: classes.rounded
      }}>
        <CardContent className={classes.content}>
          <Grid container spacing={24}>
            <Grid item xs={12} md={7}>
              <Typography type='display3'>
                Hi!
              </Typography>
              <Typography type='body2'>
              I'm <span className={classes.name}>Sandro Wong</span> and I'm passionate about Web Development. I recently graduated from a 6 months Coding Bootcamp and I'm eager to put my skills in practice. Throughout the years, I've earned a reputation for quality and efficiency in customer satisfaction, communication, and problem resolution. I'm a fast learner, team player, and hard worker, able to build a sophisticated website with full database backend all the way from mockup to rollout.
              </Typography>
              <div className={classes.social}>
                {socialMedias}
              </div>
            </Grid>
            <Grid item xs={12} md={5}>
              <div className={classes.image}>
                <img src='/static/images/me.jpg' alt='avatar' style={{width: 285}} />
              </div>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  )
}

Vcard.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Vcard)
