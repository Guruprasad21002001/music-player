import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Playlist from './Playlist';
import Track from './Track';
import 'C:/Users/GURU/Downloads/summa/music-player/src/styles/MusicPlayer.css';

function MusicPlayer() {
    const [tracks, setTracks] = useState([]);
    const [currentTrack, setCurrentTrack] = useState(null);

    useEffect(() => {
        // axios.get('https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart')
        axios.get('https://deezerdevs-deezer.p.rapidapi.com/playlist/7257349404', {
            headers: {
                'x-rapidapi-key': '671d8c8321mshf1661376c009e2bp15aa79jsn720a4c6e4972',
                'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com'
            }        
        })
            .then(response => {
                setTracks(response.data.tracks.data);
            })
            .catch(error => {
                console.error('Error fetching tracks:', error);
            });
    }, []);

    const handleTrackSelect = (track) => {
        setCurrentTrack(track);
    };

    return (
        <div className="music-player">
            <Playlist tracks={tracks} onTrackSelect={handleTrackSelect} />
            {currentTrack && <Track track={currentTrack} />}
        </div>
    );
}

export default MusicPlayer;
