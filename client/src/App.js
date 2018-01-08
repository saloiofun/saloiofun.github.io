import React, { Component } from 'react'
import Reboot from 'material-ui/Reboot'
import { withStyles } from 'material-ui/styles'
import Vcard from './components/vcard'
import Resume from './components/resume'
import Portfolio from './components/portfolio'
import WorkExperience from './components/workExperience'
import Education from './components/education'
import ProfessionalSkills from './components/professionalSkills'
import Interests from './components/interests'
import Typography from 'material-ui/Typography'
import HeartBox from 'mdi-material-ui/HeartBox'

const styles = theme => ({
  root: {
    width: '100%',
    height: '100vh',
    zIndex: 1
  },
  container: {
    maxWidth: 1000,
    padding: theme.spacing.unit * 3,
    margin: '0 auto',
    marginBottom: theme.spacing.unit
  },
  divider: {
    marginBottom: theme.spacing.unit * 5
  }
})

class App extends Component {
  render () {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <Reboot />
        <div className={classes.container}>
          <Vcard />
          <Resume />
          <Portfolio />
          <div className={classes.divider} />
          <WorkExperience />
          <div className={classes.divider} />
          <Education />
          <div className={classes.divider} />
          <ProfessionalSkills />
          <div className={classes.divider} />
          <Interests />
          <div className={classes.divider} />
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(App)
