import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PlaylistInfo from "../components/PlaylistInfo";

const PlaylistContainer = () => {

    const apiKey = "?apikey=ZDAzYjc3NGEtOGVkZC00ZjY0LWE1NDAtMjFjZDU3MGZiMjM1"
    const { playlistId } = useParams();
    const [playlistTracks, setPlaylistTracks] = useState(undefined);
    const [playlistInfo, setPlaylistInfo] = useState(undefined);
    const [img, setImg] = useState(undefined);

    const getPlaylistTracks = async () => {
        const info = await fetch(`https://api.napster.com/v2.2/playlists/${playlistId}/tracks${apiKey}&limit=10`);
        const data = await info.json()
        setPlaylistTracks(data.tracks);
    }

    const getPlaylistInfo = async () => {
        const info = await fetch(`https://api.napster.com/v2.2/playlists/${playlistId}${apiKey}`);
        const data = await info.json()
        setPlaylistInfo(data.playlists[0]);
        setImg(data.playlists[0].images[0].url);
    }

    useEffect(()=>{
        setPlaylistTracks(undefined);
        setPlaylistInfo(undefined)
        getPlaylistTracks();
        getPlaylistInfo()
    }, [playlistId])

    return(
        <div className="playlistContainer">
            {/* <h3>playlist</h3>
            <h4> {playlistId} </h4>
            <button onClick={()=>{
                console.log(playlistTracks)
            }}>tracks</button>
            <button onClick={()=>{
                console.log(playlistInfo)
            }}>info</button>
            <button onClick={()=>{
                console.log(img)
            }}>img</button> */}
            {playlistInfo === undefined ? "Cargando" : 
            <PlaylistInfo playlistInfo={playlistInfo} img={img} tracks={playlistTracks}/>
            }
        </div>
    )
}

export default PlaylistContainer;