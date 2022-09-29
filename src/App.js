import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import ArtistContainer from "./containers/ArtistContainer";
import InicioContainer from "./containers/InicioContainer";
import SongContainer from "./containers/SongContainer";
import "./scss/styles.scss";

function App() {
  return (
      <div className="grillas">
        <BrowserRouter>
          <Nav/>
          <Routes>
            <Route path='/' element={<InicioContainer/>} />
            <Route path='/artist/:artistId' element={<ArtistContainer/>}/>
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
