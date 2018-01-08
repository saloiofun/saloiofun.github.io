import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import { GridList, GridListTile } from 'material-ui/GridList'

const styles = theme => ({
  root: {
    marginBottom: theme.spacing.unit * 8
  },
  images: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden'
  },
  subheader: {
    width: '100%'
  }
})

const tileData = [
  {
    img: 'static/images/evitehub.png',
    title: 'Image',
    author: 'author',
    cols: 2
  },
  {
    img: 'static/images/rps.png',
    title: 'Image',
    author: 'author',
    cols: 1
  },
  {
    img: 'static/images/rpg.png',
    title: 'Image',
    author: 'author',
    cols: 1
  },
  {
    img: 'static/images/hangman.jpg',
    title: 'Image',
    author: 'author',
    cols: 1
  },
  {
    img: 'static/images/trivia.jpg',
    title: 'Image',
    author: 'author',
    cols: 1
  },
  {
    img: 'static/images/gifstatic.png',
    title: 'Image',
    author: 'author',
    cols: 3
  }
]

function Portfolio (props) {
  const { classes } = props

  return (
    <div>
      <Typography type='display2' align='left' gutterBottom>
        Portfolio
      </Typography>
      <div className={classes.images}>
        <GridList cellHeight={260} className={classes.gridList} cols={3}>
          {tileData.map(tile => (
            <GridListTile key={tile.img} cols={tile.cols || 1}>
              <img src={tile.img} alt={tile.title} />
            </GridListTile>
        ))}
        </GridList>
      </div>
    </div>
  )
}

Portfolio.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Portfolio)
