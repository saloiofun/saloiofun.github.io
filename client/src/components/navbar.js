import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'

const styles = {
  root: {
    width: '100%'
  }
}

function Navbar (props) {
  const { classes } = props
  return (
    <div className={classes.root}>
      <AppBar position='static' color='default'>
        <Toolbar>
          <Typography type='title' color='inherit'>
            Title
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Navbar)
