import React from 'react'
import Logo from '../assets/foxbel-music-logo.svg'
import { Link } from 'react-router-dom';

export const NavMenu = () => {
  return (
    <nav className='container-sidebar'>
      <div className='logo'>
        <Link to="/"><img src={Logo} alt='' /></Link>
      </div>
      <div className='menu-librery'>
        <h2 className='menu-librery-title'>Mi Librería</h2>
        <Link className='menu-item' to='/recientes'>Recientes</Link>
        <Link className='menu-item' to='./artistas'>Artistas</Link>
        <Link className='menu-item' to='./albumes'>Álbums</Link>
        <Link className='menu-item' to='./'>Canciones</Link>
        <Link className='menu-item' to='./estaciones'>Estaciones</Link>
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
