import React from 'react'

export const PlayerMusic = ({ songToPlay }) => {

  if (Object.keys(songToPlay).length === 0) return null;

  const { img, title, artist, album, mp3 } = songToPlay;

  return (
      <div className='container-song-play'>
        <div className='song-play-img'>
          <img src={img} alt={title} />
        </div>
        <div className='song-play-header'>
          <p className='title'>{title}</p>
          <p className='artist'> {artist} - {album}</p>
        </div>
        <div className='song-play-player'>
          <audio src={mp3} autoplay='false' controls></audio>
        </div>
        <div className='container-buttons-play'>
          
        </div>
      </div>
  )
}
