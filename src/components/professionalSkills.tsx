import React from 'react';
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography, 
  Paper,
  Grid,
  makeStyles
} from '@material-ui/core';
import {
  Angular,
  Database,
  LanguageCss3,
  LanguageHtml5,
  LanguageJavascript,
  Nodejs,
  React as Reactjs,
} from 'mdi-material-ui';


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
    icon: LanguageHtml5,
    fill: 'rgb(241,101,40)',
    skill: 'HTML5'
  },
  {
    icon: LanguageCss3,
    fill: 'rgb(38,77,228)',
    skill: 'CSS3'
  },
  {
    icon: LanguageJavascript,
    fill: 'rgb(247,223,30)',
    skill: 'JavaScript'
  },
  {
    icon: Nodejs,
    fill: 'rgb(128,189,1)',
    skill: 'Node.js'
  },
  {
    icon: Angular,
    fill: 'rgb(220,49,53)',
    skill: 'Angular'
  },
  {
    icon: Reactjs,
    fill: 'rgb(74,213,255)',
    skill: 'ReactJS'
  },
  {
    icon: Database,
    fill: 'rgb(94,135,161)',
    skill: 'MongoDB & MySQL'
  }
];

const skills = tileData.map(sk => {
  const CompName = sk.icon
  return (
    <Grid item xs={12} md={4} key={sk.skill}>
      <ListItem style={{
        padding: '0 16px'
      }}>
        <ListItemIcon>
          <CompName key={sk.skill} style={{
            width: 30,
            height: 30,
            marginRight: 0,
            fill: `${sk.fill}`
          }} />
        </ListItemIcon>
        <ListItemText
          primary={sk.skill}
        />
      </ListItem>
    </Grid>
  )
})

export default function ProfessionalSkills() {
  const classes = styles();
  return (
    <div>
      <Typography variant="h3" component="h1" align='left' gutterBottom>
          Professional Skills
      </Typography>
      <Paper className={classes.root} elevation={4}>
        <Typography gutterBottom>
          I’m constantly learning and polishing my coding style. You can see a more extended list of my professional skills in my Resume. Below are the tools that I’ve been using lately.
        </Typography>
        <div>
          <Grid container justify='center'>
            {skills}
          </Grid>
        </div>
      </Paper>
    </div>
  )
}