import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography'
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

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
    height: '100%',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  actionButtons: {
    display: 'flex',
    flexDirection: 'row',
    marginRight: '10px',
  },
  MuiButtonGroup: {
    backgroundColor: 'rgb(239, 239, 239)'
  }
}));

export const data = [
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
  const [count, setCount] = React.useState(1);

  const displayCounter = count > 0;

  return (
    <div className={classes.root}>
      <GridList cellHeight={350} className={classes.gridList} cols={3}>
        <GridListTile key="Header" cols={3} style={{ height: 'auto', textAlign: 'center' }}>
          <Typography variant="h2" color="initial">Browse Products</Typography>
        </GridListTile>
        {data.map((currProduct) => (
          <GridListTile key={currProduct.id}>
            <img src={currProduct.img} alt={currProduct.name} className={classes.productImage} />
            <GridListTileBar
              title={currProduct.name}
              subtitle={<span>Price: {currProduct.price}$</span>}
              actionIcon={
                <div className={classes.actionButtons}>
                  <ButtonGroup classes={{ root: classes.MuiButtonGroup }}>
                    <Button
                      aria-label="reduce"
                      onClick={() => {
                        setCount(Math.max(count - 1, 0));
                      }}
                    >
                      <RemoveIcon fontSize="small" />
                    </Button>
                    {displayCounter && <Button disabled>{count}</Button>}
                    <Button
                      aria-label="increase"
                      onClick={() => {
                        setCount(count + 1);
                      }}
                    >
                      <AddIcon fontSize="small" />
                    </Button>
                  </ButtonGroup>
                  <IconButton aria-label={`info about ${currProduct.title}`} className={classes.icon}>
                    <AddShoppingCartIcon />
                  </IconButton>
                </div>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
