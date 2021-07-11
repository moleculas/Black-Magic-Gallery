import React from 'react'
import { alpha, makeStyles, AppBar, Toolbar, Typography } from "@material-ui/core"
import AcUnitIcon from '@material-ui/icons/AcUnit'


const useStyle = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    simpleButton: {
        marginLeft: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    logoIcon: {
        borderRadius: 25,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        marginRight: 10,
        padding: 3,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    appBar: {
        backgroundColor: '#000000',
    },

}));

const Navbar = (props) => {

    const classes = useStyle();

    return (
        <AppBar className={classes.appBar}>
            <Toolbar>
                <AcUnitIcon
                    fontSize="large"
                    className={classes.logoIcon}
                />
                <Typography className={classes.title} variant="h5">
                    Desarrollos artikaWeb
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;
