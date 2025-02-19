import { useState, useEffect } from 'react';

function Tracklist() {
    const [tracklist, setTracklist] = useState([]);

    const addSong = (newSong) => {
        setTracklist(prev => [...prev, newSong])
    }

    return (
        <ul>
            {tracklist.map((song)=>(
                <li key={playlist.indexOf(song)}>
                    {song.name}
                    {song.artist}
                    {song.album}
                </li>
            ))}
        </ul>
    )
}

export default Tracklist;