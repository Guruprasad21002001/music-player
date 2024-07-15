import React from 'react';
import { RiPlayCircleFill } from 'react-icons/ri';
import 'C:/Users/GURU/Downloads/summa/music-player/src/styles/Track.css';

function Track({ track }) {
    return (
        <div className="track">
            <h2>Now Playing</h2>
            <div className="track-info">
                <img src={track.album.cover} alt={track.title} />
                <div>
                    <h3>{track.title}</h3>
                    <p>{track.artist.name}</p>
                </div>
            </div>
            <audio controls src={track.preview}>
                Your browser does not support the audio element.
            </audio>
        </div>
    );
}

export default Track;
