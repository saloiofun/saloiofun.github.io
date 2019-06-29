import {
  Icon,
  makeStyles,
  Paper,
  Tooltip,
  Typography,
} from '@material-ui/core';
import React from 'react';

const styles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(5),
    marginTop: theme.spacing(3),
    padding: theme.spacing(2, 3),
  },
  interests: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: theme.spacing(3),
  },
  icon: {
    [theme.breakpoints.up('md')]: {
      marginRight: theme.spacing(2),
      marginLeft: theme.spacing(2)
    }
  },
}));

const tileData = [
  {
    icon: 'code',
    interest: 'Code',
  },
  {
    icon: 'tv',
    interest: 'Watch Tv Shows',
  },
  {
    icon: 'movie',
    interest: 'Watch Movies',
  },
  {
    icon: 'local_drink',
    interest: 'Drink Coffee',
  },
  {
    icon: 'directions_run',
    interest: 'Exercise',
  },
  {
    icon: 'games',
    interest: 'Play Games',
  }
]

export default function Interests() {
  const classes = styles();
  return (
    <div>
      <Typography variant="h3" component="h1" align='left' gutterBottom>
          Interests
      </Typography>
      <Paper className={classes.root} elevation={4}>
        <Typography gutterBottom>
        Besides my passion for coding, I love watching TV Shows and Movies, hanging out with friends, and exercising. I haven’t been playing video games lately, but I enjoy watching highlights on YouTube and tournaments on Twitch.
        </Typography>
        <div className={classes.interests}>
          {tileData.map((item, index) => (
            <Tooltip key={index} id={item.icon} title={item.interest}>
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