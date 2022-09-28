import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Buscador = () =>{

    useEffect(()=>{
    }, [])

    const [text, setText] = useState("");

    return(
    <div className="buscador">
        <input type="text" name="text" placeholder="Buscar artista.." autoComplete="off" onChange={(event) => {
            setText(event.target.value)
        }}/>
        <Link to={`/artist/${text}`}><i className='bx bx-search-alt-2' ></i></Link>  
    </div>
    )
};

export default Buscador;