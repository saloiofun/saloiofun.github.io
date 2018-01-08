import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import Paper from 'material-ui/Paper'
import Grid from 'material-ui/Grid'
import {
  ListItem,
  ListItemIcon,
  ListItemText
} from 'material-ui/List'
import { LanguageHtml5, LanguageCss3, LanguageJavascript, Nodejs, React as Reactjs, Database } from 'mdi-material-ui'

const styles = theme => ({
  root: theme.mixins.gutters({
    padding: theme.spacing.unit * 3,
    paddingBottom: theme.spacing.unit * 5,
    marginTop: theme.spacing.unit * 3
  }),
  ProfessionalSkills: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: theme.spacing.unit * 3,
    [theme.breakpoints.up('md')]: {
      justifyContent: 'center'
    }
  }
})

const tileData = [
  {
    icon: LanguageHtml5,
    skill: 'HTML5'
  },
  {
    icon: LanguageCss3,
    skill: 'CSS3'
  },
  {
    icon: LanguageJavascript,
    skill: 'JavaScript'
  },
  {
    icon: Nodejs,
    skill: 'Node.js'
  },
  {
    icon: Reactjs,
    skill: 'ReactJS'
  },
  {
    icon: Database,
    skill: 'MongoDB & MySQL'
  }
]

let skills = tileData.map(sk => {
  var CompName = sk.icon
  return (
    <Grid item xs={12} md={4} key={sk.skill}>
      <ListItem>
        <ListItemIcon>
          <CompName key={sk.skill} style={{
            marginRight: 0
          }} />
        </ListItemIcon>
        <ListItemText
          primary={sk.skill}
        />
      </ListItem>
    </Grid>
  )
})

function ProfessionalSkills (props) {
  const { classes } = props
  return (
    <div>
      <Typography type='display2' align='left' gutterBottom>
          Professional Skills
      </Typography>
      <Paper className={classes.root} elevation={4}>
        <Typography gutterBottom>
          For each ad campaign that you create, you can control how much you're willing to spend on clicks and conversions, which networks and geographical locations you want your ads to show on, and more.
        </Typography>
        <div className={classes.ProfessionalSkills}>
          <Grid container spacing={24} justify='center'>
            {skills}
          </Grid>
        </div>
      </Paper>
    </div>
  )
}

ProfessionalSkills.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ProfessionalSkills)
