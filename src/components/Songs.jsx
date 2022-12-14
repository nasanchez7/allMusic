import { useContext } from "react";
import MusicContext from "../context/MusicContext";

const Songs = ({canciones}) => {

    const music = useContext(MusicContext);

    return(
        <table className="songsList">
            <tbody>
                <tr>
                    <th>TOP CANCIONES</th>
                    <th></th>
                    <th>ALBUM</th>
                </tr>
                 {canciones?.map((c, index)=>{
                    return(
                        <tr key={index} className="song">
                            <th className="nameSong">
                                <i className='bx bx-play-circle' onClick={()=>{
                                    music.setSong(c.previewURL)
                                    music.setInfoSong({
                                        ...music.infoSong,
                                        song: c.name,
                                        artist: c.artistName,
                                        album: c.albumName
                                    })
                                }}></i>
                                <h3>{c.name}</h3>
                            </th>
                            <th> {c.artistName} </th>
                            <th>{c.albumName}</th>
                        </tr>
                    )
            })} 
            </tbody>
        </table>
    )

}

export default Songs;