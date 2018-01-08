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
    paddingLeft: theme.spacing.unit * 2
  }
})

const tileData = [
  {
    year: '2016',
    title: 'Image',
    description: `For each ad campaign that you create, you can control how much
    you're willing to spend on clicks and conversions, which networks
    and geographical locations you want your ads to show on, and more.`
  },
  {
    year: '2014',
    title: 'Image',
    description: `For each ad campaign that you create, you can control how much
    you're willing to spend on clicks and conversions, which networks
    and geographical locations you want your ads to show on, and more.`
  },
  {
    year: '2010',
    title: 'Image',
    description: `For each ad campaign that you create, you can control how much
    you're willing to spend on clicks and conversions, which networks
    and geographical locations you want your ads to show on, and more.`
  }
]

function WorkExperience (props) {
  const { classes } = props
  return (
    <div>
      <Typography type='display2' align='left' gutterBottom='true'>
          Work Experience
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

WorkExperience.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(WorkExperience)
