import React, { createContext, useState } from 'react'

export const GalleryContext = createContext()

const GalleryProvider = (props) => {

    const [direccion, setDireccion]=useState('column') 
   
    return (
        <GalleryContext.Provider value={{ direccion, setDireccion }}>
            {props.children}
        </GalleryContext.Provider>
    )
}

export default GalleryProvider
