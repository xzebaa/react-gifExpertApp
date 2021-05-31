import React, { useState } from 'react';
import PropTypes from 'prop-types';


export const AddCategory = ({ setCategories }) => {

  const [inputValue, setInputValue] = useState('')

  const onChangeHandler = (event) => {
    setInputValue(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if(inputValue.trim().length <2) return;


    setCategories((categories) => [inputValue, ...categories]);

    setInputValue('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type='text'
        value={inputValue}
        onChange={onChangeHandler}
      />
    </form>
  )
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}