import { Link } from "react-router-dom";
import SongContainer from "../containers/SongContainer";
import Buscador from "./Buscador";

const Nav = () => {

    return(
        <nav>
            <div className="logoBuscador">
                <Link to={"/"}>
                    <div className="logo">
                        <i className='bx bx-signal-5'></i>
                        <h3>allMusic</h3>
                    </div>
                </Link>  
                <Buscador/>
            </div>
            <ul>
                <Link to={"/"}>
                    <div className="item">
                        <i className='bx bxs-home-alt-2'></i>
                        <li>Inicio</li>
                    </div>
                </Link>  
                <Link to={`/artist/korn`}>
                    <div className="item">
                        <i className='bx bxs-music'></i>
                        <li>Artistas</li>
                    </div>
                </Link>
                <Link to={'/playlist/pp.225974698'}>
                    <div className="item">
                        <i className='bx bxs-playlist'></i>
                        <li>Playlist</li>
                    </div>
                </Link>   
                <Link>
                    <div className="item">
                        <i className='bx bxs-heart'></i>
                        <li>Estaciones</li>
                    </div>
                </Link>  
            </ul>
            <SongContainer/>
        </nav>
    )

}

export default Nav;