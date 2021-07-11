import React, { useState, useEffect, useContext } from 'react'
import { alpha, makeStyles, AppBar, Toolbar, Typography, Box } from "@material-ui/core"
import AcUnitIcon from '@material-ui/icons/AcUnit'
import Switch from '@material-ui/core/Switch'
import { GalleryContext } from '../context/GalleryProvider'

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
    switcherBox: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: alpha(theme.palette.common.white, 0.25),
        borderRadius: '25px',
        paddingLeft: '15px'
    }
}));

const Navbar = (props) => {

    const { setDireccion} = useContext(GalleryContext)

    const classes = useStyle()
    const [checked, setChecked] = useState(false);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    useEffect(() => {
        if (checked) {
            setDireccion('row')
        } else { 
            setDireccion('column')
        }
    }, [checked]);

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
                <Box className={classes.switcherBox}>
                    <Typography className={classes.title} variant="body1">
                        Cambiar orientación galería:
                    </Typography>
                    <Switch
                        checked={checked}
                        onChange={handleChange}
                        color="default"
                        name="checkedB"
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;
