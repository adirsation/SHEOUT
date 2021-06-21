import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import Tooltip from '@material-ui/core/Tooltip';
import Fab from '@material-ui/core/Fab';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import Product from './Product';
import productsActions from '../../redux/actions/productsActions';
import purchaseActions from '../../redux/actions/purchaseActions';

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
  loader: {
    marginTop: '40vh',
  },
  absolute: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(3),
  },
}));

export default function BrowseDisplay(props) {
  const dispatch = useDispatch();

  const [basket, setBasket] = useState({});
  const products = useSelector(state => state.productsReducer.products);

  const handleAddToBasket = (productId) => {
    if (basket.hasOwnProperty(productId)) {
      setBasket({
        ...basket,
        [productId]: basket[productId] + 1
      })
    } else {
      setBasket({
        ...basket,
        [productId]: 1
      })
    }
  }

  const handleRemoveFromBasket = (productId) => {
    if (basket.hasOwnProperty(productId)) {
      if (basket[productId] === 1) {
        let newBasket = Object.assign({}, basket);
        delete newBasket[productId];
        setBasket(newBasket);
      } else {
        setBasket({
          ...basket,
          [productId]: basket[productId] - 1
        })
      }
    }
  }

  const handleSubmitOrder = () => {
    let order = []
    for(var key in basket) {
      order.push({
        product_id: key,
        amount: basket[key]
      })
    }
    dispatch(purchaseActions.submitOrder(order));
  }

  useEffect(() => {
    dispatch(productsActions.fetchProducts());
  }, [dispatch]);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      {!!!products
        ? <CircularProgress size={100} className={classes.loader} />
        : <>
          <GridList cellHeight={350} className={classes.gridList} cols={3}>
            <GridListTile key="Header" cols={3} style={{ height: 'auto', textAlign: 'center' }}>
              <Typography variant="h2" color="initial">Browse Products</Typography>
            </GridListTile>
            {products.map((currProduct) => (
              <GridListTile key={currProduct.id} cols={1}>
                <img src={currProduct.img} alt={currProduct.name} />
                <Product product={currProduct}
                  handleAddToBasket={handleAddToBasket}
                  handleRemoveFromBasket={() => handleRemoveFromBasket(currProduct.id)}
                />
              </GridListTile>
            ))}
          </GridList>
          {_.isEmpty(basket)
            ? ''
            : <Tooltip color="secondary" title="Add" aria-label="add">
              <Fab className={classes.absolute} onClick={handleSubmitOrder}>
                <ShoppingCartIcon />
              </Fab>
            </Tooltip>
          }
        </>
      }
    </div>
  );
}
