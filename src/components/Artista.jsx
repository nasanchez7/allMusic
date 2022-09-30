import Songs from "./Songs"

const Artista = ({artista, img , canciones}) => {

    return(
        <div className="artistaContainer">
            <div className="infoArtista">
                {img === undefined ? "Cargando" :
                <img src={img} alt={artista.name}/>
                }
                <div className="bio">
                    <h3> {artista.name} </h3>
                    <div className="icons">
                        <div className="mix">
                            <h3>Mix</h3>
                            <i className='bx bx-play'></i>
                        </div>
                        <div className="heart">   
                            <i className='bx bxs-heart'></i>
                        </div>
                    </div>
                </div>
            </div>
            <h3>Mejores canciones</h3>
            {canciones === undefined ? "Cargando" :
            <Songs canciones={canciones}/>
            }
        </div>
       
    )
}

export default Artista