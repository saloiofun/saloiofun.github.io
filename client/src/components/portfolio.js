import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import { GridList, GridListTile } from 'material-ui/GridList'

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
    left: '50%',
    position: 'relative',
    transform: 'translateX(-50%)'
  }
})

const tileData = [
  {
    img: 'static/images/evitehub.png',
    url: 'https://github.com/saloiofun/EviteHub',
    cols: 1
  },
  {
    img: 'static/images/gifstatic.png',
    url: 'https://github.com/saloiofun/GifTastic',
    cols: 1
  },
  {
    img: 'static/images/rpg.png',
    url: 'https://github.com/saloiofun/RPG-game',
    cols: 1
  },
  {
    img: 'static/images/hangman.jpg',
    url: 'https://github.com/saloiofun/Hangman-Game',
    cols: 1
  },
  {
    img: 'static/images/trivia.jpg',
    url: 'https://github.com/saloiofun/TriviaGame',
    cols: 1
  },
  {
    img: 'static/images/rps.png',
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
                  <img className={classes.image} src={tile.img} alt={tile.title} />
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
