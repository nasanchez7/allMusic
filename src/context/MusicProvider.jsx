import React, { useState } from 'react'
import MusicContext from './MusicContext';

const MusicProvider = ({children}) => {

    const [song, setSong] = useState("");
    const [songInfo, setInfoSong] = useState(undefined);
 
    return(
        <MusicContext.Provider value={{song, setSong, songInfo, setInfoSong}}>
            {children}
        </MusicContext.Provider>
    )
}

export default MusicProvider;