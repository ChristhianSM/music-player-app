import React from 'react'
import Logo from '../assets/foxbel-music-logo.svg'

export const NavMenu = () => {
  return (
    <nav className='container-sidebar'>
      <div className='logo'>
        <img src={Logo} alt='' />
      </div>
      <div className='menu-librery'>
        <h2 className='menu-librery-title'>Mi Librería</h2>
        <a className='menu-item' href='./'>Recientes</a>
        <a className='menu-item' href='./'>Artistas</a>
        <a className='menu-item' href='./'>Álbums</a>
        <a className='menu-item' href='./'>Canciones</a>
        <a className='menu-item' href='./'>Estaciones</a>
      </div>
      <div className='menu-playlist'>
        <h2 className='menu-playlist-title'>Playlist</h2>
        <a className='menu-item' href='./'>Metal</a>
        <a className='menu-item' href='./'>Para Bailar</a>
        <a className='menu-item' href='./'>Rock 90s</a>
        <a className='menu-item' href='./'>Baladas</a>
      </div>
    </nav>
  )
}
