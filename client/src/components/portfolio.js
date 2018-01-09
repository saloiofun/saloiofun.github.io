import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import { GridList, GridListTile, GridListTileBar } from 'material-ui/GridList'

const styles = theme => ({
  root: {
    marginBottom: theme.spacing.unit * 8
  },
  tiles: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden'
  },
  image: {
    height: '100%',
    left: '-5.5%',
    position: 'relative',
    transform: 'translateX(-10%)',
    [theme.breakpoints.up('md')]: {
      transform: 'none'
    }
  },
  title: {
    fontWeight: 500,
    fontSize: '1.5rem'
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)'
  },
  grow: { transition: 'all .2s ease-in-out',
    '&:hover': {
      transform: 'scale(1.1)'
    }
  }
})

const tileData = [
  {
    img: 'static/images/evitehub-min.png',
    title: 'EviteHub',
    url: 'https://github.com/saloiofun/EviteHub',
    cols: 1
  },
  {
    img: 'static/images/gifstatic-min.png',
    title: 'GifTastic',
    url: 'https://github.com/saloiofun/GifTastic',
    cols: 1
  },
  {
    img: 'static/images/rpg-min.png',
    title: 'RPG-Game',
    url: 'https://github.com/saloiofun/RPG-game',
    cols: 1
  },
  {
    img: 'static/images/hangman-min.png',
    title: 'Hangman',
    url: 'https://github.com/saloiofun/Hangman-Game',
    cols: 1
  },
  {
    img: 'static/images/trivia-min.png',
    title: 'TriviaGame',
    url: 'https://github.com/saloiofun/TriviaGame',
    cols: 1
  },
  {
    img: 'static/images/rps-min.png',
    title: 'RPS-Game',
    url: 'https://github.com/saloiofun/RPS-Multiplayer',
    cols: 1
  }
]

function Portfolio (props) {
  const { classes } = props

  return (
    <div>
      <Typography type='display2' align='left' gutterBottom>
        Portfolio
      </Typography>
      <div className={classes.tiles}>
        <GridList cellHeight={260} className={classes.gridList} cols={2}>
          {tileData.map(tile => (

            <GridListTile key={tile.img} cols={tile.cols || 1}>
              <div style={{height: '100%'}}>
                <a href={tile.url} target='_blank'>
                  <img className={classNames(classes.image, classes.grow)} src={tile.img} alt={tile.title} />
                  <GridListTileBar
                    title={tile.title}
                    classes={{
                      root: classes.titleBar,
                      title: classes.title
                    }}
                  />
                </a>
              </div>
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
