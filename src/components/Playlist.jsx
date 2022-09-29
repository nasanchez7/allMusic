const Playlists = ({playlists}) => {


    return(
        <div className="playlistContainer">
            <div className="playlistList">
                {playlists.map((p, index)=>{
                    return(
                    <div key={index} className="playlist" style={{
                        background: `linear-gradient(357deg, rgba(0,0,0,1) 0%, rgba(51,120,255,0) 100%), url(${p.images[0].url})`
                    }}>
                        <h3>{p.name}</h3>
                    </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Playlists;

//backgroundImage: `url(${p.images[0].url})`,