import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid';

const GiftExpertApp = (props) => {

  const [categories, setCategories] = useState([ 'los simpson']);

  return <> 
    <h2>GiftExpert</h2>
    <AddCategory setCategories={setCategories} />
    <hr />
    <ol>
      {
        categories.map( category => {
          return <GifGrid 
                    key={category} 
                    category={category}
                  />
        })
      }
    </ol>
  </>
};

export default GiftExpertApp;
