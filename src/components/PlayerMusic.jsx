import React, { useContext, useEffect, useRef, useState } from 'react';
import IconBtnRight from '../assets/icon-btn-right.svg';
import IconBtnLeft from '../assets/icon-btn-left.svg';
import IconPlay from '../assets/icon-play.svg';
import IconVolumen from '../assets/icon-volumen.svg';
import IconMute from '../assets/icon-mute.svg';
import IconPause from '../assets/icon-pause.svg';
import { SongContext } from '../context/SongContext';

export const PlayerMusic = () => {
  const { songs, songSelected, setSongSelected, setIdArtist } = useContext(SongContext);
  const { img, title, artist, album, mp3 } = songSelected;
  const [isPlaying, setIsPlaying] = useState(true);
  const [indexSong, setIndexSong] = useState(0);
  const [isMute, setIsMute] = useState(false);
  const audioRef = useRef();
  const volumeRef = useRef();

  useEffect(() => {
    setIsPlaying(true);
    setIndexSong(songs.indexOf(songSelected));
  }, [songSelected, songs])

  if (Object.keys(songSelected).length === 0) return null;

  const handlePrev = () => {
    if (indexSong <= 0) {
      const audio = audioRef.current;
      audio.src = songs[indexSong].mp3
    }else {
      setIdArtist(songs[indexSong - 1].id_artista);
      setSongSelected(songs[indexSong - 1]);
      setIndexSong(indexSong - 1);
    }
  }

  const handleNext = () => {
    if (indexSong !== songs.length - 1) {
      setIdArtist(songs[indexSong + 1].id_artista);
      setSongSelected(songs[indexSong + 1]);
      setIndexSong(indexSong + 1);
    }
  }

  const handlePlay = () => {
    const audio = audioRef.current;
    if(isPlaying) audio.pause();
    else audio.play();
    setIsPlaying(!isPlaying);
  }

  const handleVolumen = () => {
    const volumen = volumeRef.current;
    const audio = audioRef.current;
    volumen.value === "0" ? setIsMute(true) : setIsMute(false);
    audio.volume = volumen.value;
  }
  
  const handleMute = () => {
    const volumen = volumeRef.current;
    const audio = audioRef.current;
    
    if (!isMute) {
      audio.volume = 0;
      volumen.value = 0;
    } else {
      audio.volume = 1;
      volumen.value = 1;
    }
    setIsMute(!isMute);
  }

  const classNameAudio = isPlaying ? 'play' : 'pause';
  const classNameVolumen = isMute ? 'mute' : 'no-mute';

  return (
      <div className='container-song-play'>
        <div className='container-song-left'>
          <div className='song-play-img'>
            <img src={img} alt={title} />
          </div>
          <div className='song-play-header'>
            <p className='title'>{title}</p>
            <p className='artist'> {artist} - {album}</p>
          </div>
        </div>
        <div className='container-song-center'>
          <div className='container-buttons-play'>
            <div className='container-btn-left'>
              <img 
                src={IconBtnLeft}
                alt=""
                className='btn-left'
                onClick={handlePrev}
              />
            </div>
            <div className={`container-btn-play ${classNameAudio}`}>
              <img 
                src={ isPlaying ? IconPause : IconPlay }
                alt="" 
                className={classNameAudio}
                onClick={handlePlay}
                width = "40px"
              />
            </div>
            <div className='container-btn-right'>
              <img 
                src={IconBtnRight} 
                alt="" 
                className='btn-right'
                onClick={handleNext}
              />
            </div>
          </div>
        </div>
        <div className='container-song-right'>
          <input
            type="range"
            max= "1"
            min="0"
            step = "0.1"
            className='volumen'
            ref={volumeRef}
            onChange= {handleVolumen}
          />
          <img
            src={ isMute ? IconMute : IconVolumen}
            alt="Icono de Volumen"
            className={classNameVolumen}
            onClick = {handleMute}
          />
          <audio src={mp3} ref={audioRef} autoPlay = {isPlaying}></audio>
        </div>
      </div>
  )
}
