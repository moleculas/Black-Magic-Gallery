import { createTheme } from "@material-ui/core/styles";
//import { unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core/styles'
import { red, grey } from '@material-ui/core/colors';

const theme = createTheme({
    palette: {
        primary: { 
            main: red[900],
        },
        secondary: grey
    },
    typography: {
        h1: {
            fontFamily: [
                'Otomanopee One',
            ].join(','),
        },
        h2: {
            fontFamily: [
                'Otomanopee One',
            ].join(','),
        },
        h3: {
            fontFamily: [
                'Otomanopee One',
            ].join(','),
        },
        h4: {
            fontFamily: [
                'Otomanopee One',
            ].join(','),
        },
        h5: {
            fontFamily: [
                'Otomanopee One',
            ].join(','),
        },
        h6: {
            fontFamily: [
                'Otomanopee One',
            ].join(','),
        },
        //defecto
        body1: {
            fontFamily: [
                'Oswald',
            ].join(','),
            fontSize: '0.9rem',
            '@media (min-width:600px)': {
                fontSize: '1rem',
            }
        },
        body2: {
            fontFamily: [
                'Oswald',
            ].join(','),
            fontSize: '0.8rem',
            '@media (min-width:600px)': {
                fontSize: '0.9rem',
            }
        },
    }
})

export default theme;