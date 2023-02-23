import { TYPES } from "../types/types";

export const initialStateSongs = {
  songs : [],
  songSelected : {},
  idArtist: 1272674,
  songsRecent: [],
  valueSearch: 'Romeo Santos',
  idsArtistsRecent : [],
};

export function songReducer(state, action) {
	switch (action.type) {
    case TYPES.SET_SONGS:
      return {
        ...state,
        songs: action.payload
      };
    case TYPES.SET_VALUE_SEARCH:
      return {
        ...state,
        valueSearch: action.payload
      };
    case TYPES.SET_SONG_SELECTED:
      return {
        ...state,
        songSelected: action.payload
      };
    case TYPES.SET_ID_ARTIST:
      return {
        ...state,
        idArtist: action.payload
      };
    case TYPES.SAVE_SONG_RECENT:
      return {
        ...state,
        songsRecent: [...state.songsRecent, action.payload],
      };
    case TYPES.SET_ID_ARTIST_RECENT:
      return {
        ...state,
        idsArtistsRecent: [...state.idsArtistsRecent, action.payload],
      };

		default:
			return state;
	}
}
