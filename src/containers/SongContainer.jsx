import { useContext } from "react";
import MusicContext from "../context/MusicContext";

const SongContainer = () => {

    const music = useContext(MusicContext);

    return(
        <div className="songContainer">
            {music.songInfo === undefined ? "" :
            <div className="infoSong">
                {music.song === "" ? "" :
                <img src={music.songInfo.img} alt={music.songInfo.song} />
                }
                <h3> {music.songInfo.song} </h3>
                <h4> {music.songInfo.album} </h4>
            </div>
            }
            {music.song === "" ? "" :
            <audio src={music.song} controls autoplay></audio>
            }
        </div>
    )

}

export default SongContainer;