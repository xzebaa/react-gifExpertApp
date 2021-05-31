
  export const getGift = async ( category ) => {

    // IU6KgrLSDw9QiYM2GgbZfsqwuJO2t0MY
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=IU6KgrLSDw9QiYM2GgbZfsqwuJO2t0MY`;
    const resp = await fetch(url);
    const { data } = await resp.json();
  
    const gifs = data.map( img => {
        return {
          id: img.id,
          title: img.title,
          url: img.images?.downsized_medium
        }
      }
    );
  
    return gifs;
  }