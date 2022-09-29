const TopSongs = ({songs}) => {


    return(
        <div className="topSongs">
            {songs.map((s, index)=>{
                return(
                    <div key={index} className="topSongContainer">
                        <div  className="song">
                            <h3> {s.name} </h3>
                            <h4> Album: {s.albumName} </h4>
                        </div>
                        <div className="play">
                            <i className='bx bx-play-circle bx-flip-vertical' ></i>
                        </div>
                    </div>

                )
            })}
        </div>
    )
}

export default TopSongs;