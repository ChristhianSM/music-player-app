import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { SongContext } from '../context/SongContext';
import { Song } from './Song';

export const MyLibrery = () => {
  const { pathname } = useLocation();
  const { songsRecent } = useContext(SongContext);

  return (
    <div>
      <h3 className='title-library'>{pathname.substring(1, pathname.length).toUpperCase()}</h3>
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
    </div>
  )
}
