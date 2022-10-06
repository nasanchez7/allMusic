import PlaylistSongs from "./PlaylistSongs";
import { useContext, useEffect } from "react";
import MusicContext from "../context/MusicContext";

const PlaylistInfo = ({playlistInfo, tracks, img}) => {

    const music = useContext(MusicContext);

    useEffect(()=>{
        if(img === undefined){
            return
        }else{
            music.setInfoSong({
                ...music.songInfo,
                img: img
            })
        }
    }, [music.song])

    return(
        <div className="playlistInfoContainer">
            {img === undefined ? "Cargando" :
            <div className="infoPlaylist" style={{
                backgroundPosition: 'top',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'  
            }} >
                <div className="img" style={{
                    background: `url(${img})`
                        ,backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                }}>
                </div>
                <div className="bio">
                    <h3> {playlistInfo.name} </h3>
                    <p> {playlistInfo.trackCount} canciones  </p>
                    <div className="icons">
                        <div className="mix">
                            <h3>MIX</h3>
                            <i className='bx bx-play'></i>
                        </div>
                        <div className="heart">   
                            <i className='bx bxs-heart'></i>
                        </div>
                    </div>
                </div>
            </div>
            }
            <div className="infoPlaylistDos">
                {tracks === undefined ? "Cargando" :
                <PlaylistSongs songs={tracks}/>
                }
            </div>
        </div>
    )
}

export default PlaylistInfo;