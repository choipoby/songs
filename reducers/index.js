import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "BTS", duration: "4:05" },
    { title: "AKB48", duration: "4:03" },
    { title: "izone", duration: "5:03" },
    { title: "twice", duration: "2:00" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
