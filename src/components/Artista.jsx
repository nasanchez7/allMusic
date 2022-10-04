import Songs from "./Songs"
import { useContext, useEffect } from "react";
import MusicContext from "../context/MusicContext";

const Artista = ({artista, img , canciones}) => {

    const music = useContext(MusicContext);

    useEffect(()=>{
        if(img === undefined){
            return
        }else{
            music.setInfoSong({
                ...music.songInfo,
                img: img[0]
            })
        }
    }, [music.song])

    return(
        <div className="artistaContainer">
            {img === undefined ? 
            
            <div className="infoArtista" style={{
                background: `linear-gradient(357deg, rgba(0,0,0,1) 0%, rgba(51,120,255,0) 100%)`
                ,backgroundPosition: 'top',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',  
                backgroundColor: 'white'
            }} >
                <div className="img" style={{
                        backgroundColor: "black"
                        ,backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        width: "100px",
                        height: "100px"
                }}>
                </div>
                <div className="bio">
                    <h3> ....... </h3>
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

                <div className="infoArtista" style={{
                    background: `linear-gradient(357deg, rgba(0,0,0,1) 0%, rgba(51,120,255,0) 100%), url(${img[1]})`
                    ,backgroundPosition: 'top',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',  
                    backgroundColor: 'white'
                }} >
                    <div className="img" style={{
                        background: `url(${img[0]})`
                            ,backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat'
                    }}>
                    </div>
                    <div className="bio">
                        <h3> {artista.name} </h3>
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
            }
            <div className="infoArtistaDos">
                <a href="" name="canciones"></a>
                {canciones === undefined ? "Cargando" :
                <Songs canciones={canciones} />
                }
            </div>
        </div>
    )
}

export default Artista