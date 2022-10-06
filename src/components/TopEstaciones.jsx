import { Link } from "react-router-dom";

const topEstaciones = ({estaciones}) => {


    return(
        <div className="topEstaciones">
            {estaciones.map((e,index)=>{
                return(
                        <div key={index} className="estacion" style={{
                            background: `linear-gradient(357deg, rgba(0,0,0,1) 0%, rgba(51,120,255,0) 100%), url(${e.links.mediumImage.href})`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat'
                        }}>
                            <h3>{e.name}</h3>
                            <h4>{e.artists}</h4>
                        </div>
                )
            })}
        </div>
    )
}

export default topEstaciones;