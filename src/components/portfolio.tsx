import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { GridList, GridListTile, GridListTileBar } from '@material-ui/core';

const styles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(8),
  },
  tiles: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden'
  },
  image: {
    height: '100%',
    left: '-9%',
    position: 'relative',
  },
  title: {
    fontWeight: 500,
    fontSize: '1.5rem',
    marginBottom: 10,
    whiteSpace: 'normal'
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)'
  },
  grow: {
    transition: 'all .2s ease-in-out',
    '&:hover': {
      transform: 'scale(1.1)'
    }
  }
}));

const tileData = [
  {
    img: 'static/images/evitehub-min.png',
    title: 'EviteHub',
    url: 'https://github.com/saloiofun/EviteHub'
  },
  {
    img: 'static/images/gifstatic-min.png',
    title: 'GifTastic',
    url: 'https://github.com/saloiofun/GifTastic'
  },
  {
    img: 'static/images/rpg-min.png',
    title: 'RPG Game',
    url: 'https://github.com/saloiofun/RPG-game'
  },
  {
    img: 'static/images/hangman-min.png',
    title: 'Hangman',
    url: 'https://github.com/saloiofun/Hangman-Game'
  },
  {
    img: 'static/images/trivia-min.png',
    title: 'Trivia Game',
    url: 'https://github.com/saloiofun/TriviaGame'
  },
  {
    img: 'static/images/rps-min.png',
    title: 'RPS Game',
    url: 'https://github.com/saloiofun/RPS-Multiplayer'
  },
  {
    img: 'static/images/ichikawa-min.png',
    title: 'Ichikawa Shabu',
    url: 'http://web.archive.org/web/20201129164220/http://ichikawashabu.com/'
  },
  {
    img: 'static/images/nextbitusa-min.png',
    title: 'NextBit USA',
    url: 'http://web.archive.org/web/20200219150231/http://nextbitusa.com/'
  },
  {
    img: 'static/images/mbcotc-min.png',
    title: 'MBCOTC',
    url: 'http://en.mbcotc.org/'
  },
  {
    img: 'static/images/socalled-min.png',
    title: 'Socal-LED Lighting',
    url: 'https://www.socalledlighting.com/'
  }
]

export default function Portfolio() {
  const classes = styles();

  return (
    <div className={classes.root}>
      <Typography variant="h3" component="h1" align='left' gutterBottom>
        Portfolio
      </Typography>
      <div className={classes.tiles}>
        <GridList cellHeight={260} cols={2}>
          {tileData.map(tile => (

            <GridListTile key={tile.img} cols={1}>
              <div style={{height: '100%'}}>
                <a href={tile.url} target='_blank' rel="noopener noreferrer">
                  <img className={`${classes.image} ${classes.grow}`} src={tile.img} alt={tile.title} />
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
