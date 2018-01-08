import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import Paper from 'material-ui/Paper'

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3
  }),
  description: {
    margin: theme.spacing.unit * 2,
    borderLeftColor: '#00897b',
    borderLeft: '3px solid',
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit * 2
  }
})

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

function Education (props) {
  const { classes } = props
  return (
    <div>
      <Typography type='display2' align='left' gutterBottom='true'>
          Education
        </Typography>
      <Paper className={classes.root} elevation={4}>
        <div>
          {tileData.map((item, index) => (
            <div key={index}>
              <Typography type='title'>
                {item.year} - {item.title}
              </Typography>
              <div className={classes.description}>
                <Typography>
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

Education.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Education)
