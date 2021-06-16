import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import Typography from '@material-ui/core/Typography'
import master from '../../images/master.png';
import donatello from '../../images/donatello.jpg';
import raphael from '../../images/raphael.png';
import shredder from '../../images/shredder.jpg';
import michell from '../../images/michell.png';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: '100%',
    height: '100%',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  productImage: {
    
  }
}));

const data = [
  {
    id: 1,
    name: 'Master Splinter',
    img: master,
    price: 50
  },
  {
    id: 2,
    name: 'Donatello Turtle',
    img: donatello,
    price: 30
  },
  {
    id: 3,
    name: 'Raphael Tutrle',
    img: raphael,
    price: 30
  },
  {
    id: 4,
    name: 'Shredder',
    img: shredder,
    price: 10
  },
]

export default function BrowseDisplay() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <GridList cellHeight={'350'} className={classes.gridList}>
        <GridListTile key="Header" cols={4} style={{ height: 'auto' }}>
          <Typography variant="h2" color="initial">Browse Products</Typography>
        </GridListTile>
        {data.map((currProduct) => (
          <GridListTile key={currProduct.id}>
            <img src={currProduct.img} alt={currProduct.name} className={classes.productImage} />
            <GridListTileBar
              title={currProduct.name}
              subtitle={<span>Price: {currProduct.price}$</span>}
              actionIcon={
                <IconButton aria-label={`info about ${currProduct.title}`} className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
