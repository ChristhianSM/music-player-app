import React, { useEffect, useState } from 'react'
import { getSongsServices } from '../services/artists-service';
import { Song } from './Song'

export const Songs = ({ valueSearch, setSongToPlay, setIdArtist }) => {
  const [loading, setLoading] = useState(false);
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const getSongs = async () => {
      setLoading(true);
      const data = await getSongsServices(valueSearch);
      setSongs(data);
      setLoading(false);
    }

    getSongs();
  }, [valueSearch, setSongToPlay, setIdArtist])
  

  if (loading) {
    return <h2>Cargando Datos...</h2>
  }

  return (
     <>
      <h3 className='title-search'>Resultados</h3>
      <div className='container-card-songs'>
        {
          songs.map((song) => (
          <Song
            key={song.id}
            song={song} 
            setSongToPlay={setSongToPlay}
            setIdArtist={setIdArtist} />
          ))
        }
      </div>
    </>
  )
}
