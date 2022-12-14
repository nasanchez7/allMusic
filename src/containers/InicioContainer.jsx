import { useEffect, useState } from "react";
import InicioDecoracion from "../components/InicioDecoracion";
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
    }



    useEffect(()=>{

    },[])

    getTopArtist();
    getTopEstaciones();


    return (
        <div className="inicioContainer">
            <h3>Inicio</h3>
            <InicioDecoracion/>
            <div className="topTitulo">
                <h3>Playlists</h3>
            </div>
            {playlist === undefined ?  
            <div className="cargaContainer">
                <div className="card"></div>
                <div className="card"></div>
                <div className="card"></div>
                <div className="card"></div>
                <div className="card"></div>
            </div>
            : <Playlists playlists={playlist}/>}
            <div className="topTitulo">
                <h3>Estaciones</h3>
            </div>
            {topEstaciones === undefined ?  
            <div className="cargaContainer">
                <div className="card"></div>
                <div className="card"></div>
                <div className="card"></div>
                <div className="card"></div>
                <div className="card"></div>
            </div>
            :  <TopEstaciones estaciones={topEstaciones}/>}
        </div>
    )

}

export default InicioContainer;