import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

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
    year: '2018 - Present',
    title: 'McGraw-Hill Education',
    subtitle: 'Software Engineer',
    description: [
      `Hands-on software development using HTML5, CSS3, JavaScript including SASS/LESS, ES6, modern frameworks and third party/open-source libraries.`,
      `Cross discipline advocate who can ensure on-time delivery across engineering, user experience, product management, system administration, and release management.`,
      `Research technology issues and work with teams staff to understand and resolve challenges`,
      `Work collaboratively with Product Management and PMO to define scope`,
      `Prototype with emerging technologies to prove product feature sets and enhance SDLC`,
      `Drive the adoption of conventions and best practices for front-end development`,
      `Improve user experience and provide elegant and performant interfaces to the customers`,
      `Participate in system designs and code review`
    ]
  },
  {
    year: '2016 - 2018',
    title: 'McGraw-Hill Education',
    subtitle: 'QA Specialist I',
    description: [
      `Test legacy and new test cases with the use of formal test cases or scripts.`,
      `Create automation testing framework using Selenium Webdriver with Java programming language.`,
      `Execute smoke, regression and functional tests.`,
      `Interpret test cases, compare them to established specifications.`,
      `Performance to go beyond the specification and anticipate problem areas in the product design and document test cases results and compare to expected results.`,
      `Work in an Agile Team with developers to ensure the quality of the projects.`
    ]
  },
  {
    year: '2014-2016',
    title: 'California State Polytechnic University, Pomona',
    subtitle: 'Graduate Assistant',
    description: [
      `Helped graduate student in Educational Multimedia Program.`,
      `Maintained and upkept of the lab facilities, provided software and hardware support, and furnished instructional assistance to students, faculty, and staff.`,
      `Administrated, supported and troubleshot 28 workstations including desktop units, tablets, monitors, local and networked printers, network and other communication devices associated with all desktop hardware.`,
      `Assisted in following-up and analyzing projects.`,
      `Diagnosed and troubleshoot problems, determined solutions to resolve the issues on site.`
    ]
  }
]

export default function WorkExperience() {
  const classes = styles();

  return (
    <div>
      <Typography variant="h3" component="h1" align='left' gutterBottom>
          Work Experience
      </Typography>
      <Paper className={classes.root} elevation={4}>
        <div>
          {tileData.map((item, index) => (
            <div key={index}>
              <Typography variant="h5" component="h2">
                {item.year}
              </Typography>
              <div className={classes.description}>
                <Typography variant='h5' component="h3">
                  {item.title}
                </Typography>
                <Typography variant='subtitle1' gutterBottom>
                  {item.subtitle}
                </Typography>
                {item.description.map((desc, i) => (
                  <Typography variant="body1" key={i} gutterBottom>- {desc}</Typography>
                ))}
              </div>
            </div>
        ))}
        </div>
      </Paper>
    </div>
  )
}
