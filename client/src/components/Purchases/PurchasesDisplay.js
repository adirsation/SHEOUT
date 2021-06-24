import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import purchaseActions from '../../redux/actions/purchaseActions';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
    fontSize: '1.5em'
  },
  loader: {
    marginTop: '40vh',
  },
  purchasesContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  large: {
    width: theme.spacing(12),
    height: theme.spacing(12),
  }
}));

export default function PurchasesDisplay() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const purchases = useSelector(state => state.purchaseReducer.purchases);

  useEffect(() => {
    dispatch(purchaseActions.fetchPurchases());
  }, [dispatch]);

  return (
    !!!purchases
      ? <div className={classes.root}>
        <CircularProgress size={100} className={classes.loader} />
      </div>
      : <div className={classes.purchasesContainer}>
        {purchases.map((currPurchase) => (
          <Card key={currPurchase.id.toString()} style={{ marginBottom: '15px' }}>
            <CardContent>
              <Typography
                variant="h2"
                color="textPrimary"
              >
                Purchase #{currPurchase.id}:
              </Typography>
              <List className={classes.root}>
                {currPurchase.products.items.map((currProduct, prodIndex) => (
                  <div key={currPurchase.id.toString() + "-" + prodIndex}>
                    <ListItem alignItems="flex-start">
                      <ListItemAvatar>
                        <Avatar className={classes.large} alt={currProduct.product.name} src={currProduct.product.img} />
                      </ListItemAvatar>
                      <ListItemText
                        primary={<Typography
                          variant="h4"
                          color="textPrimary"
                        >
                          {currProduct.product.name}
                        </Typography>}
                        secondary={
                          <span className={classes.inline}>
                            Price: {currProduct.product.price}$ - Amount: {currProduct.amount}
                          </span>
                        }
                      />
                    </ListItem>
                    <Divider variant="inset" flexItem={true} component="li" orientation={'vertical'} />
                  </div>
                ))}
              </List>
            </CardContent>
          </Card>
        ))
        }
      </div>
  );
}
