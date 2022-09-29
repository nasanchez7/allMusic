const Playlists = ({playlists}) => {


    return(
        <div className="playlistList">
                {playlists.map((p, index)=>{
                    return(
                        <div key={index} className="playlist" style={{
                        background: `linear-gradient(357deg, rgba(0,0,0,1) 0%, rgba(51,120,255,0) 100%), url(${p.images[0].url})`
                        ,backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                        }}>
                        <h3>{p.name}</h3>
                        <h4> {p.trackCount} Canciones </h4>
                        </div>
                    )
                })}
        </div>
    )
}

export default Playlists;

//backgroundImage: `url(${p.images[0].url})`,