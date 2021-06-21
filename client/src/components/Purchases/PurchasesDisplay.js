import React from 'react';
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

import master from '../../images/master.png';
import donatello from '../../images/donatello.jpg';
import raphael from '../../images/raphael.png';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    flexDirection: 'row'
  },
  inline: {
    display: 'inline',
    fontSize: '1.5em'
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
export const purchases = [
  {
    id: 1,
    products: [
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
      }]
  },
  {
    id: 2,
    products: [{
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
    }
    ]
  }
]

export default function PurchasesDisplay() {
  const classes = useStyles();

  return (
    <div className={classes.purchasesContainer}>
      {
        purchases.map((currPurchase) => (
          <Card key={currPurchase.id.toString()} style={{ marginBottom: '15px' }}>
            <CardContent>
              <Typography
                variant="h2"
                color="textPrimary"
              >
                Purchase #{currPurchase.id}:
              </Typography>
              <List className={classes.root}>
                {currPurchase.products.map((currProduct, prodIndex) => (
                  <div key={currPurchase.id.toString() + "-" + prodIndex}>
                    <ListItem alignItems="flex-start">
                      <ListItemAvatar>
                        <Avatar className={classes.large} alt={currProduct.name} src={currProduct.img} />
                      </ListItemAvatar>
                      <ListItemText
                        primary={<Typography
                          variant="h4"
                          color="textPrimary"
                        >
                          {currProduct.name}
                        </Typography>}
                        secondary={
                          <span className={classes.inline}>
                            Price: {currProduct.price}$
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
