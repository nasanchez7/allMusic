import { useEffect, useState } from "react";
import Playlists from "../components/Playlist";
import TopSongs from "./TopSongs";

const InicioContainer = () => {

    const apiKey = "?apikey=ZDAzYjc3NGEtOGVkZC00ZjY0LWE1NDAtMjFjZDU3MGZiMjM1";
    const [playlist, setPlaylist] = useState(undefined);
    const [topSongs, setTopSongs] = useState(undefined);

    const getTopArtist = async () => {
        const info = await fetch(`http://api.napster.com/v2.2/playlists/featured${apiKey}&limit=10`);
        const data = await info.json();
        setPlaylist(data.playlists)
    }

    const getTopSongs = async () => {
        const info = await fetch(`http://api.napster.com/v2.2/tracks/top${apiKey}&limit=5`);
        const data = await info.json();
        setTopSongs(data.tracks)
        console.log(topSongs);
    }


    useEffect(()=>{
        getTopArtist();
        getTopSongs();
    },[])


    return (
        <div className="inicioContainer">
            <h3>Top Playlist</h3>
            {playlist === undefined ? "Cargando" : <Playlists playlists={playlist}/>}
            <h3>Top Canciones</h3>
            {topSongs === undefined ? "Cargando" : <TopSongs songs={topSongs}/>}
        </div>
    )

}

export default InicioContainer;