import React from 'react'
import IconEmpty from '../assets/icon-empty.svg';

export const NoContent = ({ description }) => {
  return (
    <div className='container-no-content'>
      <div className='content'>
        <p> { description }</p>
        <img src={IconEmpty} alt="" />
      </div>
    </div>
  )
}
