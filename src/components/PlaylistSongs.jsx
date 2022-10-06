import { useContext } from "react";
import { Link } from "react-router-dom";
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
                                    console.log(c)
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
                            <Link to={`/artist/${c.artistId}`}>
                                <th>{c.artistName}</th>
                            </Link>
                        </tr>
                    )
            })} 
            </tbody>
        </table>
    )
}

export default PlaylistSongs;