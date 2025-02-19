import { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './SearchBar.jsx';
import SearchResults from './SearchResults.jsx';
import Tracklist from './Tracklist.jsx';

function App() {
  return (
    <>
      <h1>Spotify Playlist Creator</h1>
      <div className="card">
        <p>
          Start of project, will use React, Javascript, HTML, JSON/JSX, and CSS to create a web app where you can create and safe Spotify playlists.
        </p>
      </div>
      <SearchBar />
      <SearchResults />
    </>
  )
}

export default App