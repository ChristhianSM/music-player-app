import React from 'react';
import IconUser from '../assets/icon-user.svg';

export const User = () => {
  return (
    <div className='container-user'>
      <img src={IconUser} alt='' />
      <p className='username'>Christhian S</p>
    </div>
  )
}
