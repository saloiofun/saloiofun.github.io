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
    img: 'http://lorempixel.com/200/220/sports/',
    title: 'Image',
    author: 'author',
    cols: 2
  },
  {
    img: 'http://lorempixel.com/300/220/sports/',
    title: 'Image',
    author: 'author',
    cols: 1
  },
  {
    img: 'http://lorempixel.com/370/150/sports/',
    title: 'Image',
    author: 'author',
    cols: 1
  },
  {
    img: 'http://lorempixel.com/400/200/sports/',
    title: 'Image',
    author: 'author',
    cols: 1
  },
  {
    img: 'http://lorempixel.com/300/200/sports/',
    title: 'Image',
    author: 'author',
    cols: 1
  },
  {
    img: 'http://lorempixel.com/600/110/sports/',
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
