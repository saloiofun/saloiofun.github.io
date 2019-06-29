import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import GetApp from '@material-ui/icons/GetApp';

const styles = makeStyles(theme => ({
  root: {
    textAlign: 'center',
    margin: theme.spacing(3),
  },
  rightIcon: {
    marginLeft: theme.spacing(1),
  },
}));

export default function Resume() {
  const classes = styles();
  return (
    <div className={classes.root}>
      <Button
        color="primary"
        download
        href='static/files/sandro_wong_resume.pdf'
        variant="contained"
      >
        Download Resume
        <GetApp className={classes.rightIcon} />
      </Button>
    </div>
  )
}