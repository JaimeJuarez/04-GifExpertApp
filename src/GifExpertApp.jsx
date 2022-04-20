import React, { useState } from 'react'
import { AddCategory } from './Components/AddCategory';
import { GifGrid } from './Components/GifGrid';

export const GifExpertApp = ()  =>{
// const categories = ['One Punch Man', 'Samurai X', 'Dragon Ball']
const [categories, setCategories] = useState(['']);

const handleAdd = ()=>{
  setCategories([...categories ,'Naruto']);
}
  return (
    <>
      <h2>GifExpertApp</h2>

      <AddCategory setCategories = {setCategories}/>

      <hr/>
      <button onClick={handleAdd}>Agregar</button>

      <ol>
          {categories.map(category =>{
            // return <li key={category}>{category}</li>;
            console.log(category);
            return <GifGrid
            key={category}
            category={category}
            />
          })}
      </ol>

    </>
  )
}
