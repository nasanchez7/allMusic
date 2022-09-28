import { Link } from "react-router-dom";
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
                <Link>
                    <div className="item">
                        <i className='bx bxs-music'></i>
                        <li>Artistas</li>
                    </div>
                </Link>  
                <Link>
                    <div className="item">
                        <i className='bx bxs-heart'></i>
                        <li>Favoritos</li>
                    </div>
                </Link>  
            </ul>
            <div className="descriptionContainer">
                <div className="description">
                    <p>Encuentra las canciones de tus artistas favoritos
                    en allMusic.
                    </p>
                    <button>Iniciar sesion</button>
                </div>
            </div>
        </nav>
    )

}

export default Nav;