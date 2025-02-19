import React, { useState, useEffect } from "react"
import SearchBar from "./SearchBar.jsx"
import getToken from "./Spotify.js";

function SearchResults() {
    const [results, setResults] = useState([]);

    const addResult = (newResult) => {
        setResults(prev => [...prev, newResult])
    }

    const handleClick = () => addResult({
        name: "Alone",
        artist: "Sleeping With Sirens",
        album: "Alone",
        }, 
        {
            name: "Alone",
            artist: "Sleeping With Sirens",
            album: "Alone",
        },
        {
            name: "Alone",
            artist: "Sleeping With Sirens",
            album: "Alone",
        }
    );

    return (
        <div>
            <button onClick={handleClick}>test</button>
            <ul>
                {results.map((song)=>(
                    <li key={results.indexOf(song)}>
                        {song.name}
                        {song.artist}
                        {song.album}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SearchResults;