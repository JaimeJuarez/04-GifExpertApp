import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {
    const [InputValue, setInputValue] = useState('');

    const handleInputChange = (e)=>{
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) =>{
      e.preventDefault();
      if(InputValue.trim().length > 2){
          // setCategories('');
          setCategories(categories=>[InputValue,...categories]);
          setInputValue('');
}
    }
     return (
    <form onSubmit={handleSubmit}>
      <h2>Add Category</h2>
      <input
        type='text'
        placeholder='Escribe un anime a agregar'
        value={InputValue}
        onChange={handleInputChange}
      />
    </form>
  )
}

AddCategory.propTypes={
    setCategories: PropTypes.func.isRequired
}