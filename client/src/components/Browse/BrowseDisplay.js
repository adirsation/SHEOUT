import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Typography from '@material-ui/core/Typography'

import Product from './Product';

import master from '../../images/master.png';
import donatello from '../../images/donatello.jpg';
import raphael from '../../images/raphael.png';
import shredder from '../../images/shredder.jpg';
import michell from '../../images/michell.png';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: '100%',
    position: 'relative'
  },
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
  {
    id: 5,
    name: 'Michelangelo',
    img: michell,
    price: 30
  },
]

export default function BrowseDisplay() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={350} className={classes.gridList} cols={3}>
        <GridListTile key="Header" cols={3} style={{ height: 'auto', textAlign: 'center' }}>
          <Typography variant="h2" color="initial">Browse Products</Typography>
        </GridListTile>
        {data.map((currProduct) => (
          <GridListTile key={currProduct.id} cols={1}>
            <img src={currProduct.img} alt={currProduct.name} />
            <Product product={currProduct} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
