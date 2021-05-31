import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';
// import { getGift } from './../helpers/getGifs';    

export const GifGrid = ({ category}) => {

  const { data: images, loading} = useFetchGifs(category);



  return (
    <>
      <h3 className='animate__animated animate__fadeIn'> {category}</h3>
      { loading && <p className='animate__animated animate__flash'>Loading</p>}
      <div className='card-grip'>
          {
            images.map( img => 
            <GifGridItem 
              key={img.id}
              {...img}
            />)
          }
      </div>
    </>
  )
}


