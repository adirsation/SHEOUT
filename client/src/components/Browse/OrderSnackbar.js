import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import purchaseActions from '../../redux/actions/purchaseActions';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

export default function OrderSnackbar(props) {
    const classes = useStyles();
    const { showSnackbar } = props;
    const [open, setOpen] = React.useState(showSnackbar.isOpen);

    const dispatch = useDispatch();

    const handleClose = (event, reason) => {
        dispatch(purchaseActions.closeSnackbar());
    };

    return (
        <div className={classes.root}>
            <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={showSnackbar.severity}>
                    {showSnackbar.msg}
                </Alert>
            </Snackbar>
        </div>
    );
}