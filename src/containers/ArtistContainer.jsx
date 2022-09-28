import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ArtistContainer = () => {

    const {artistId} = useParams();
    const [artista, setArtista] = useState(undefined);
    const apiKey = "?apikey=ZDAzYjc3NGEtOGVkZC00ZjY0LWE1NDAtMjFjZDU3MGZiMjM1"

    const getArtist = async () => {
        const infoArtist = await fetch(`https://api.napster.com/v2.2/artists/${artistId}${apiKey}`)
        const data = await infoArtist.json();
        setArtista(data.artists[0])
    }

    useEffect(()=>{
        setArtista(undefined)
        getArtist();
    }, [artistId])

    return (
        <div className="artistContainer">
            <h3>artist container</h3>
            <button onClick={()=>{
                console.log(artista);
            }}>Click</button>
            {artista === undefined ? <h3>Cargando..</h3> :
            <div>
                <h3> {artista.name} </h3>
            </div>
            }
        </div>
    )

}

export default ArtistContainer;