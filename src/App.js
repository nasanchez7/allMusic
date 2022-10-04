import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import ArtistContainer from "./containers/ArtistContainer";
import InicioContainer from "./containers/InicioContainer";
import PlaylistContainer from "./containers/PlaylistContainer";
import MusicProvider from "./context/MusicProvider";
import "./scss/styles.scss";

function App() {
  return (
      <div className="grillas">
        <MusicProvider>
          <BrowserRouter>
            <Nav/>
            <Routes>
              <Route path='/' element={<InicioContainer/>} />
              <Route path='/artist/:artistId' element={<ArtistContainer/>}/>
              <Route path='/playlist/:playlistId' element={<PlaylistContainer/>}/>
            </Routes>
          </BrowserRouter>
        </MusicProvider>
      </div>
  );
}

export default App;
