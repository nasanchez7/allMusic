import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Artista from "../components/Artista";

const ArtistContainer = () => {

    const {artistId} = useParams();
    const [artista, setArtista] = useState(undefined);
    const [img, setImg] = useState(undefined);
    const [songs, setSongs] = useState(undefined);

    const apiKey = "?apikey=ZDAzYjc3NGEtOGVkZC00ZjY0LWE1NDAtMjFjZDU3MGZiMjM1"

    const getArtist = async () => {
        const infoArtist = await fetch(`https://api.napster.com/v2.2/artists/${artistId}${apiKey}`)
        const data = await infoArtist.json();
        setArtista(data.artists[0])
    }

    const getImg = async () => {
        const infoImg = await fetch(`${artista.links.images.href}${apiKey}`);
        const dataImg = await infoImg.json();
        setImg(dataImg.images[0].url)
    }

    const getSongs = async () => {
        const infoSongs = await fetch(`${artista.links.topTracks.href}${apiKey}`);
        const dataSongs = await infoSongs.json();
        setSongs(dataSongs.tracks)
    }   

    useEffect(()=>{
        setArtista(undefined)
        getArtist();
    }, [artistId])

    useEffect(()=>{
        getImg();
        getSongs();
    }, [artista])

    return (
        <div className="artistContainer">
            {artista === undefined ? <h3>Cargando..</h3> :
            <Artista artista={artista} img={img} canciones={songs}/>
            }
            <button onClick={()=>{
                console.log(songs)
            }}>Artista detalles</button>
        </div>
    )

}

export default ArtistContainer;