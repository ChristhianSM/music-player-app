import React, { useContext, useState } from 'react'
import IconSearch from '../assets/icon-search.svg';
import { SongContext } from '../context/SongContext';

export const SearchSong = () => {
  const { setValueSearch } = useContext(SongContext);
  const [inputValue, setInputValue] = useState('')

  const handdleInputChange = (e) => setInputValue(e.target.value);

  const handleSubtmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length >= 2) {
      setValueSearch(inputValue);
      setInputValue('');
    } else {
      setInputValue('');
    }
  }
  return (
    <form onSubmit={handleSubtmit} className='search'>
        <input
          type='text'
          value={inputValue}
          onChange={handdleInputChange}
          className='search-input'
          maxLength='30'
          placeholder='Buscar'
        />
        <img
          src={IconSearch}
          alt=''
          className='search-icon'
          onClick={() => {
            if (inputValue.trim().length >= 2) {
              setValueSearch(inputValue)
              setInputValue('')
            } else {
              setInputValue('')
            }
          }}
        />
      </form>
  )
}
