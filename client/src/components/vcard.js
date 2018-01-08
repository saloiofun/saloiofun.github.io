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
    borderRadius: 8
  },
  content: {
    [theme.breakpoints.up('md')]: {
      padding: 40
    }
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
                Hi
              </Typography>
              <Typography type='body1'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </Typography>
              <div className={classes.social}>
                <Tooltip
                  id='github'
                  title='Github'
                  target='_blank'
                  placement='bottom'
                >
                  <Button mini href={props.githubLocation} fab color='primary' aria-labelledby='github' className={classes.button}>
                    <Github />
                  </Button>
                </Tooltip>
                <Tooltip
                  id='linkedin'
                  title='LinkedIn'
                  target='_blank'
                  placement='bottom'
                >
                  <Button mini href={props.githubLocation} fab color='primary' aria-labelledby='linkedin' className={classes.button}>
                    <Linkedin />
                  </Button>
                </Tooltip>
              </div>
            </Grid>
            <Grid item xs={12} md={5}>
              <div className={classes.image}>
                <img src='https://api.adorable.io/avatars/285/sandrowong' alt='avatar' />
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
