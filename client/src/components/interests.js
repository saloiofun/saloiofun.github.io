import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import Paper from 'material-ui/Paper'
import Icon from 'material-ui/Icon'
import Tooltip from 'material-ui/Tooltip'

const styles = theme => ({
  root: theme.mixins.gutters({
    padding: theme.spacing.unit * 3,
    paddingBottom: theme.spacing.unit * 5,
    marginTop: theme.spacing.unit * 3
  }),
  interests: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: theme.spacing.unit * 3,
    [theme.breakpoints.up('md')]: {
      justifyContent: 'center'
    }
  },
  icon: {
    [theme.breakpoints.up('md')]: {
      marginRight: theme.spacing.unit * 2,
      marginLeft: theme.spacing.unit * 2
    }
  }
})

const tileData = [
  {
    icon: 'code',
    interest: 'Code'
  },
  {
    icon: 'tv',
    interest: 'Watch Tv Shows'
  },
  {
    icon: 'movie',
    interest: 'Watch Movies'
  },
  {
    icon: 'local_drink',
    interest: 'Drink Coffee'
  },
  {
    icon: 'directions_run',
    interest: 'Exercise'
  },
  {
    icon: 'games',
    interest: 'Play Games'
  }
]

function Interests (props) {
  const { classes } = props
  return (
    <div>
      <Typography type='display2' align='left' gutterBottom>
          Interests
      </Typography>
      <Paper className={classes.root} elevation={4}>
        <Typography gutterBottom>
        Besides my passion for coding, I love watching TV Shows and Movies, hanging out with friends, and exercising. I haven’t been playing video games lately, but I enjoy watching highlights on YouTube and tournaments on Twitch.
        </Typography>
        <div className={classes.interests}>
          {tileData.map((item, index) => (
            <Tooltip key={index} id={item.icon} title={item.interest} className={classes.icon}>
              <Icon aria-label={item.icon}>
                {item.icon}
              </Icon>
            </Tooltip>
        ))}
        </div>
      </Paper>
    </div>
  )
}

Interests.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Interests)
