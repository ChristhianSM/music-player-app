import React, { useContext } from 'react'
import { SongContext } from '../../context/SongContext';
import { NoContent } from '../NoContent';
import { Song } from '../Song';

export const Recent = () => {
  const { songsRecent } = useContext(SongContext);

  if (songsRecent.length === 0) return <NoContent  description={"No hay Canciones recientes para mostrar"}/>
  return (
    <div className='container-card-songs'>
      {
        songsRecent.map((song) => (
          <Song
            key={song.id}
            song={song}
          />
          ))
      }
    </div>
  )
}
