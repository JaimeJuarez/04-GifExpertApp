import React, { useState, useEffect } from 'react';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {
  // const [count, setCount] = useState(0);
  const [images, setImages] = useState([]);
  useEffect(()=>{
    getGifs();;
  },[])
    const getGifs = async() => {
      const url = 'https://api.giphy.com/v1/gifs/search?api_key=5GB4JGhWlhC1k87UqqTd1eBaKxAZcO3N&q=Dragon+Ball+Z&limit=10';
      const resp = await fetch(url);
      const {data} = await resp.json();


      const gifs = data.map(img=>{
        return {
          id: img.id,
          title: img.title,
          url: img.images?.original.url
        }
      })
      // console.log(gifs);
      setImages(gifs);
    }
  return (
    <div>
        <h3>{category}</h3>
        {/* <h3>{count}</h3>
        <button onClick={()=>setCount(count+1)}>{count}</button> */}
            {images.map(img =>(
           <GifGridItem
            key={img.id}
            {...img} />
           ))}
    </div>
  )
}
