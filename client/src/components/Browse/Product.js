import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    actionButtons: {
        display: 'flex',
        flexDirection: 'row',
        marginRight: '10px',
    },
    MuiButtonGroup: {
        backgroundColor: 'rgb(239, 239, 239)'
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
}))

export default function Product(props) {
    const classes = useStyles();

    const [count, setCount] = React.useState(0);

    const { product, handleAddToBasket, handleRemoveFromBasket } = props;
    const displayCounter = count > 0;

    return (
        <GridListTileBar
            title={product.name}
            subtitle={<span>Price: {product.price}$</span>}
            actionIcon={
                <div className={classes.actionButtons}>
                    <ButtonGroup classes={{ root: classes.MuiButtonGroup }}>
                        <Button
                            aria-label="reduce"
                            onClick={() => {
                                setCount(Math.max(count - 1, 0));
                                handleRemoveFromBasket(product.id)
                            }}
                        >
                            <RemoveIcon fontSize="small" />
                        </Button>
                        {displayCounter && <Button disabled>{count}</Button>}
                        <Button
                            aria-label="increase"
                            onClick={() => {
                                setCount(count + 1);
                                handleAddToBasket(product.id)
                            }}
                        >
                            <AddIcon fontSize="small" />
                        </Button>
                    </ButtonGroup>
                </div>
            }
        />
    )
}