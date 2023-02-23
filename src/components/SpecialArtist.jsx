import React, { useContext, useEffect, useState } from 'react';
import IconBtnThree from '../assets/icon-btn-three.svg';
import { SongContext } from '../context/SongContext';
import { getArtistaService } from '../services/artists-service'
import { Loader } from './Loader';

export const SpecialArtist = () => {
  
  const { idArtist, songs, setSongSelected } = useContext(SongContext);
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
  }, [idArtist]);

  const handleBtnPlay = () => {
    setSongSelected(songs[0]);
  }

  if (loading) return <Loader description={"Cargando informacion del artista"}/>

  return (
    <div className='container-artist'>
    <div className='artist-img'>
      <img src={img_medium} alt='' />
    </div>
    <div className='artist-info' style={{ backgroundImage: `url(${img_xl})` }}>
      <p className='artist-info-name'>{name}</p>
      <p className='artist-info-the-best'>
        Lo mejor de {name} <span className='artist-info-followers'> {fans} seguidores</span>
      </p>
      <p className='artist-info-link'>
        Mas informacion sobre {name} puedes ir al siguiente enlace{' '}
        <a href={link_bi} target='_blank' rel='noreferrer'>
          aqui
        </a>
      </p>
      <div className='container-buttons'>
        <button
          className='btn btn-play'
          onClick={ handleBtnPlay }
        >Reproducir</button>
        <button className='btn btn-follow'>seguir</button>
        <img 
          src={ IconBtnThree }
          alt="More options"
          className='btn-more-options'
        />
      </div>
    </div>
  </div>
  )
}
