import { TYPES } from "../types/types";

export const initialStateSongs = {
  songs : [],
  songSelected : {},
  idArtist: 1272674
};

export function songReducer(state, action) {
	switch (action.type) {
    case TYPES.SET_SONGS:
      return {
        ...state,
        songs: action.payload
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

		default:
			return state;
	}
}
