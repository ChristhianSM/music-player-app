import React from 'react';
import IconPlay from '../assets/icon-play.svg';
import IconBtnThreeVertical from '../assets/icon-btn-three-vertical.svg';

export const Song = ({ song, setSongToPlay, setIdArtist }) => {
  const { id, title, img, id_artista, artist } = song;

  const delemitText = (text = "") => {
    if (text.length > 20) {
      return text.substring(0, 20) + "...";
    }
    return text;
  };

  return (
    <div className="card-song" key={id}>
      <div className="card-song-content-img">
        <img src={img} alt={title}  className = "img-song"/>
        <button
          type="button"
          className="card-song-play"
          onClick={() => {
            setSongToPlay(song);
            setIdArtist(id_artista);
          }}
        >
          <img src={IconPlay} alt="Play" />
        </button>
        <img
          src={IconBtnThreeVertical}
          alt="More Options"
          className='card-song-more-options'
        />
      </div>
      <div className='card-song-info'>
        <h3 className="card-song-title">
          {delemitText(title)}
        </h3>
      </div>

      <h3 className="card-song-artist">{artist}</h3>
    </div>
  );
}
