import { useState, useEffect } from "react";
import { getGift } from "../helpers/getGifs";

export const useFetchGifs = ( category) => {
  const [state, setState] = useState({
    data: [],
    loading: true
  });
  
  useEffect(() => {
	getGift(category).then( img =>  { setState({data: img, loading: false})})
  }, [category]);

//   setTimeout(() => {
//     setState({
//       data: [1, 2, 3],
//       loading: false
//     });
//   }, 1500);

  return state;
};

  // const [images, setImages] = useState([])

  // useEffect( () => {

  //   getGift(category).then( setImages )
    
  // }, [category]);