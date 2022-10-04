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
        setImg([dataImg.images[0].url, dataImg.images[3].url])
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
            {artista === undefined ? 
            <div className="infoArtista" style={{
                background: `linear-gradient(357deg, rgba(0,0,0,1) 0%, rgba(51,120,255,0) 100%)`
                ,backgroundPosition: 'top',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',  
                backgroundColor: 'white'
            }} >
                <div className="img" style={{
                        backgroundColor: "white"
                        ,backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        width: "100px",
                        height: "100px"
                }}>
                </div>
                <div className="bio">
                    <h3> Artista no encontrado </h3>
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
                <div className="opcionesArtista">
                    <a href="#canciones">Canciones</a>
                    <a href="#discografia">Discografia</a>
                    <a href="#playlist">Playlist</a>
                    <a href="#biografia">Biografia</a>
                </div>
            </div>
            :
            <Artista artista={artista} img={img} canciones={songs}/>
            }
        </div>
    )

}

export default ArtistContainer;