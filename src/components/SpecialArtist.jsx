import React, { useEffect, useState } from 'react'
import { getArtistaService } from '../services/artists-service'

export const SpecialArtist = ({ idArtist = 0 }) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const { link_bi, name, fans, img_medium, img_xl } = data

  useEffect(() => {
    const getArtist = async () => {
      const data = await getArtistaService(idArtist);
      setData(data);
      setLoading(false);
    }
    getArtist();
  }, [idArtist])

  if (loading) {
    return <h6>Cargando informacion del artista</h6>
  }

  return (
    <div className='content-artist'>
    <div className='artist-img'>
      <img src={img_medium} alt='' />
    </div>
    <div className='artist-info' style={{ backgroundImage: `url(${img_xl})` }}>
      <p className='name-artist'>{name}</p>
      <p className='lo-mejor'>
        Lo mejor de {name} <span className='seguidores'> {fans} seguidores</span>
      </p>
      <p className='link-bi'>
        Si quieres conocer más de {name} dale click{' '}
        <a href={link_bi} target='_blank' rel='noreferrer'>
          aqui
        </a>
      </p>
      <div className='btns'>
        <button className='btn-reproducir'>Reproducir</button>
        <button className='btn-seguir'>seguir</button>
        <div className='card-three-artista'>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  </div>
  )
}
