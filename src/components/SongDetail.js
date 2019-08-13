import React from 'react';
import { connect } from 'react-redux';
import './SongDetail.css';

const songDetail = ({ song }) => {
  if (!song) {
    return <div>Select a song</div>
  }
  return(
     <div>
        <h3 className="details">Details for:</h3>
         <img src={song.img} />
        <br />
        Artist: {song.artist}
        <br />
        <p>
          Title: {song.title}
          <br />
          Album: {song.album}
          <br />
          Duration: {song.duration}
          <br />
          Year: {song.year}
          <br />
        </p>
     </div>
  );
}

const mapStateToProps = (state) => {
  return { song: state.selectedSong }
};

export default connect(mapStateToProps)(songDetail);
