import React, { useContext, useEffect, useState } from 'react'
import { SongContext } from '../context/SongContext';
import { getSongsServices } from '../services/artists-service';
import { Loader } from './Loader';
import { Song } from './Song'

export const Songs = () => {
  const { setDataSongs, valueSearch } = useContext(SongContext);
  const [loading, setLoading] = useState(false);
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const getSongs = async () => {
      setLoading(true);
      const data = await getSongsServices(valueSearch);
      setDataSongs(data);
      setSongs(data);
      setLoading(false);
    }

    getSongs();
  }, [valueSearch])

  if (loading) return <Loader description={"Cargando datos de las canciones"}/>

  return (
     <>
      <h3 className='title-search'>Resultados</h3>
      <div className='container-card-songs'>
        {
          songs.map((song) => (
          <Song
            key={song.id}
            song={song}
          />
          ))
        }
      </div>
    </>
  )
}
