import React from 'react';
import Education from './components/education';
import WorkExperience from './components/workExperience';
import ProfessionalSkills from './components/professionalSkills';
import Interests from './components/interests';
import Portfolio from './components/portfolio';
import Intro from './components/intro';
import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2, 1),
  },
}));

const App: React.FC = () => {
  const classes = styles();

  return (
    <Container className={classes.root} maxWidth="md">
      <Intro />
      <Portfolio />
      <WorkExperience />
      <Education />
      <ProfessionalSkills />
      <Interests />
      <Typography variant='subtitle1' gutterBottom align='right'>
        {`<BuiltWithLove />`}
      </Typography>
    </Container>
  );
}

export default App;
