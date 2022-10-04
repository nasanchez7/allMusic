import { useContext } from "react";
import MusicContext from "../context/MusicContext";

const PlaylistSongs = ({songs}) => {

    const music = useContext(MusicContext);

    return(
        <table className="songsList">
            <tbody>
                <tr>
                    <th>CANCIONES</th>
                    <th></th>
                    <th>ARTISTA</th>
                </tr>
                 {songs?.map((c, index)=>{
                    return(
                        <tr key={index} className="song">
                            <th className="nameSong">
                                <i className='bx bx-play-circle' onClick={()=>{
                                    music.setSong(c.previewURL)
                                    music.setInfoSong({
                                        ...music.infoSong,
                                        song: c.albumName,
                                        artist: c.artistName,
                                        album: c.artistName
                                    })
                                }}></i>
                                <h3>{c.albumName}</h3>
                            </th>
                            <th></th>
                            <th>{c.artistName}</th>
                        </tr>
                    )
            })} 
            </tbody>
        </table>
    )
}

export default PlaylistSongs;