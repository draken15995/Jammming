import { useState, useEffect } from 'react';

function Track(props) {
    const [track, setTrack] = useState({})

    return (
        <div>
            <h3>{track.name}</h3>
            <h4>{track.artist} | {track.album}</h4>
        </div>
    )
}

export default Track;