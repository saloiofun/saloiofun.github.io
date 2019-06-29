import { makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';

const styles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(5),
    marginTop: theme.spacing(3),
    padding: theme.spacing(2, 3),
  },
  description: {
    borderLeft: '3px solid',
    borderLeftColor: '#00897b',
    margin: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    paddingLeft: theme.spacing(2)
  }
}));

const tileData = [
  {
    year: '2017',
    title: 'University of California, Irvine',
    description: `Certificate in Full-Stack Web Development.`
  },
  {
    year: '2016',
    title: 'California State Polytechnic University, Pomona, CA',
    description: `B.S. Business Administration with a concentration in Computer Information Systems.`
  }
]

export default function Education() {
  const classes = styles();

  return (
    <div>
      <Typography variant="h3" component="h1" align='left' gutterBottom>
        Education
      </Typography>
      <Paper className={classes.root} elevation={4}>
        <div>
          {tileData.map((item, index) => (
            <div key={index}>
              <Typography variant="h5" component="h2">
                {item.year}
              </Typography>
              <div className={classes.description}>
                <Typography variant='subtitle1' gutterBottom>
                  {item.title}
                </Typography>
                <Typography variant="body1">
                  {item.description}
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </Paper>
    </div>
  )
}