import React, { useState, useCallback, useContext } from 'react'
import Navbar from './Navbar'
import CssBaseline from '@material-ui/core/CssBaseline'
import { makeStyles } from '@material-ui/core'
import Gallery from "react-photo-gallery"
import Carousel, { Modal, ModalGateway } from "react-images"
import { photos } from "../photos"
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { useCookies } from "react-cookie"
import { sha256 } from 'js-sha256'
import { GalleryContext } from '../context/GalleryProvider'

const estilos = makeStyles(theme => ({
    root: {
        display: 'flex'
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: '#000000',
        padding: theme.spacing(0.3),
    },
    appBar: {
        top: 'auto',
        bottom: 0,
        backgroundColor: '#000000',
    },
}))

const Contenedor = () => {

    const { direccion } = useContext(GalleryContext)

    const classes = estilos()
    const [currentImage, setCurrentImage] = useState(0)
    const [viewerIsOpen, setViewerIsOpen] = useState(false)
    const [texto, setTexto] = useState('')
    const [contador, setContador] = useState(0)
    const [conjuro, setConjuro] = useState('')
    const [cookies, setCookie] = useCookies(["user"])    

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
        setTexto('');
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    const handleCookie = () => {
        setCookie("yo_te_invoco", sha256(conjuro), {
            path: "/",
            maxAge: 568036800
        });
    };

    const escribeTexto = (e) => {
        setTexto(e.nativeEvent.path[0].title)
        setContador(contador + 1)
        if (contador === 6) {
            if (texto === "") {
                setContador(contador - 1)
            } else {
                setConjuro(texto)
            }
        } else if (contador === (6 + 6)) {
            if (texto === "") {
                setContador(contador - 1)
            } else {
                setConjuro(conjuro + " " + texto)
            }
        } else if (contador === (6 + 6 + 6)) {
            if (texto === "") {
                setContador(contador - 1)
            } else {
                setConjuro(conjuro + " " + texto)
                handleCookie()   
                console.log('invocado')            
            }
        }
    }

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Navbar />
            <div className={classes.content} onMouseOver={(e) =>
                escribeTexto(e)}>
                <div className={classes.toolbar}></div>
                <Gallery photos={photos} onClick={openLightbox} direction={direccion} />
                <ModalGateway>
                    {viewerIsOpen ? (
                        <Modal onClose={closeLightbox}>
                            <Carousel
                                currentIndex={currentImage}
                                views={photos.map(x => ({
                                    ...x,
                                    srcset: x.srcSet,
                                    caption: x.title
                                }))}
                            />
                        </Modal>
                    ) : null}
                </ModalGateway>
            </div>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="body1">{texto}</Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Contenedor
