import React from 'react'

export const Images = ({images}) => {
    console.log(images);
    return(
     <img src={images.url} alt="muckshot"/>
    )
}
