import React from 'react';
import { connect } from 'react-redux';
import './SongList.css';
import { selectSong } from '../actions';


class SongList extends React.Component {
  renderList() {
    return this.props.songs.map((song) => {
      return(
        <div id="top" className="item" key={song.title}>
          <div className="right floated content">
            <button
              id="select"
              className="ui button primary select"
              onClick={(() => this.props.selectSong(song))}
            >
              Select
            </button>
          </div>
          <div className="content">
            {song.title}
          </div>
          <audio className="audio" controls>
            <source src={song.mp3} type="audio/mpeg" />
          </audio>
        </div>
      );
    });
  }
  render() {
    return <div className="ui divided list">{this.renderList()}</div>
  }
}

const mapStateToProps = (state) => {
    return { songs: state.songs };
}

export default connect(mapStateToProps,
  //passing in action creator to the connect function
  { selectSong }
)(SongList);
