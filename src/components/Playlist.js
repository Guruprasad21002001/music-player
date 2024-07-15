import React from 'react';
import 'C:/Users/GURU/Downloads/summa/music-player/src/styles/Playlist.css';

function Playlist({ tracks, onTrackSelect }) {
    return (
        <div className="playlist">
            <h2>Playlist</h2>
            <ul>
                {tracks.map(track => (
                    <li key={track.id} onClick={() => onTrackSelect(track)}>
                        {track.title} - {track.artist.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Playlist;
