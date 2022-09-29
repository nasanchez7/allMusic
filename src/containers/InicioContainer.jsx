import { useEffect, useState } from "react";
import Playlists from "../components/Playlist";
import TopEstaciones from "../components/TopEstaciones";

const InicioContainer = () => {

    const apiKey = "?apikey=ZDAzYjc3NGEtOGVkZC00ZjY0LWE1NDAtMjFjZDU3MGZiMjM1";
    const [playlist, setPlaylist] = useState(undefined);
    const [topEstaciones, setTopEstaciones] = useState(undefined);

    const getTopArtist = async () => {
        const info = await fetch(`http://api.napster.com/v2.2/playlists/featured${apiKey}&limit=5`);
        const data = await info.json();
        setPlaylist(data.playlists)
    }

    const getTopEstaciones = async () => {
        const info = await fetch(`http://api.napster.com/v2.2/stations${apiKey}&limit=5`);
        const data = await info.json();
        setTopEstaciones(data.stations)
        console.log(topEstaciones);
    }



    useEffect(()=>{
        getTopArtist();
        getTopEstaciones();
    },[])


    return (
        <div className="inicioContainer">
            <div className="topTitulo">
                <h3>Top playlist</h3>
                <a href="#">Ver todas</a>
            </div>
            {playlist === undefined ? "Cargando" : <Playlists playlists={playlist}/>}
            <div className="topTitulo">
                <h3>Top 5 estaciones</h3>
                <a href="#">Ver todas</a>
            </div>
            {topEstaciones === undefined ? "Cargando" :  <TopEstaciones estaciones={topEstaciones}/>}
        </div>
    )

}

export default InicioContainer;