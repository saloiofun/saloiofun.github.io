import React from 'react'
import PropTypes from 'prop-types'
import Button from 'material-ui/Button'
import { withStyles } from 'material-ui/styles'
import FileDownload from 'material-ui-icons/FileDownload'

const styles = theme => ({
  root: {
    textAlign: 'center',
    margin: theme.spacing.unit * 3
  },
  button: {
    margin: theme.spacing.unit
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  }
})

function Resume (props) {
  const { classes } = props
  return (
    <div className={classes.root}>
      <Button href='static/files/sandro_wong_resume.pdf' download className={classes.button} raised color='primary'>
        Download Resume
        <FileDownload className={classes.rightIcon} />
      </Button>
    </div>
  )
}

Resume.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Resume)
