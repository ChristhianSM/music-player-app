import { useReducer } from "react";
import { songReducer, initialStateSongs } from "../reducer/songReducer";
import { SongContext } from "./SongContext";
import { TYPES } from "../types/types";

export const MatchProvider = ({ children }) => {

  const [state, dispatch] = useReducer(songReducer, initialStateSongs);
  
  const setDataSongs = (data) => {
    const newState = {
      type: TYPES.SET_SONGS,
      payload : data
    }
    dispatch(newState);
  }

  const setValueSearch = (value) => {
    const newState = {
      type: TYPES.SET_VALUE_SEARCH,
      payload : value
    }
    dispatch(newState);
  }

  const setSongSelected = (song) => {
    const newState = {
      type: TYPES.SET_SONG_SELECTED,
      payload : song
    }
    dispatch(newState);
  }

  const setIdArtist = (id) => {
    const newState = {
      type: TYPES.SET_ID_ARTIST,
      payload : id
    }
    dispatch(newState);
  }

  const saveSongRecent = (song) => {
    const existSong = state.songsRecent.some( item => item.id === song.id);
    if (!existSong) {
      const newState = {
        type: TYPES.SAVE_SONG_RECENT,
        payload : song
      }
      dispatch(newState);
    }
  }

  const data = {
    ...state,
    setDataSongs,
    setValueSearch,
    setIdArtist,
    setSongSelected,
    saveSongRecent,
  };

  return <SongContext.Provider value={ data }>
    { children }
  </SongContext.Provider>;

};

