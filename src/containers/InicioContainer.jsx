import { useEffect, useState } from "react";
import Playlists from "../components/Playlist";

const InicioContainer = () => {

    const apiKey = "?apikey=ZDAzYjc3NGEtOGVkZC00ZjY0LWE1NDAtMjFjZDU3MGZiMjM1";
    const [playlist, setPlaylist] = useState(undefined);

    const getTopArtist = async () => {
        const info = await fetch(`http://api.napster.com/v2.2/playlists/featured${apiKey}&limit=5`);
        const data = await info.json();
        setPlaylist(data.playlists)
    }


    useEffect(()=>{
        getTopArtist();
    },[])


    return (
        <div className="inicioContainer">

            {playlist === undefined ? "Cargando" : <Playlists playlists={playlist}/>}

        </div>
    )

}

export default InicioContainer;