import { Card, CardContent, Fab, Grid, Tooltip, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Github from 'mdi-material-ui/GithubCircle';
import Linkedin from 'mdi-material-ui/Linkedin';
import React from 'react';

const styles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(5),
    marginTop: theme.spacing(3),
  },
  rounded: {
    borderRadius: 8,
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
    marginTop: theme.spacing(2),
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      textAlign: 'left'
    }
  },
  image: {
    textAlign: 'center'
  },
}));

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
      aria-label={sm.social}
      id={sm.social}
      key={sm.social}
      placement='bottom'
      title={sm.social}
    >
      <Fab
        aria-label={sm.social}
        target='_blank'
        rel="noopener noreferrer"
        color="primary"
        href={sm.url}
        size='small'
        style={{margin: 8}}
      >
        <CompName />
      </Fab>
    </Tooltip>
  )
})

export default function Intro() {
  const classes = styles();

  return (
    <div className={classes.root}>
      <Card>
        <CardContent className={classes.content}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={7}>
              <Typography variant="h3" component="h1">
                Hi!
              </Typography>
              <Typography variant="body1">
              I'm <span className={classes.name}>Sandro Wong</span> and I'm passionate about Web Development. Throughout the years, I've earned a reputation for quality and efficiency in customer satisfaction, communication, and problem resolution. I'm a fast learner, team player, and a hard worker. I am able to build a sophisticated website with full database backend from mockup to rollout.
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