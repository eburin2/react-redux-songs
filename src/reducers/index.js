import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'Two Minutes to Midnight', duration: '6:09' },
    { title: 'I\'m Eighteen', duration: '3:00' },
    { title: 'Honey Bucket', duration: '2:49' },
    { title: 'Instrument', duration: '2:40' },
    { title: 'Love on a Real Train', duration: '8:56' }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
