const Songs = ({canciones}) => {

    return(
        <div className="songsList">
            {canciones.map((c, index)=>{
                return(
                    <div key={index} className="song">
                        <div className="top">
                            <h3> {index + 1}. </h3>
                            <h3> {c.name} </h3>
                        </div>
                        <div className="play">
                            <i className='bx bx-play-circle' ></i>
                        </div>
                    </div>
                )
            })}
        </div>
    )

}

export default Songs;