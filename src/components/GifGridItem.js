import React from 'react'

export const GifGridItem = ({ id, title, url}) => {
  return (
    <div className='card animate__animated animate__fadeIn'>
        <img alt={title} src={url.url}/>
    <p > {title}</p> 
    </div>
  )
}
