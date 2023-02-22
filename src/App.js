import { useState } from "react";
import { NavMenu } from "./components/NavMenu";
import { SearchSong } from "./components/SearchSong";
import { Songs } from "./components/Songs";
import { SpecialArtist } from "./components/SpecialArtist";
import { User } from "./components/User";

function App() {

  const initial = 'my universe'
  const [valueSearch, setValueSearch] = useState(initial);
  const [idArtist, setIdArtist] = useState(1);
  const [SongToPlay, setSongToPlay] = useState({});

  return (
    <div className="main">
      <div className="container-nav-menu">
        <NavMenu />
      </div>
      <div className="container-results">
        <div className="container-search-user">
          <SearchSong />
          <User />
        </div>
        <SpecialArtist
          idArtist={idArtist}
        />
        <div className="container-songs">
          <Songs 
            valueSearch={valueSearch}
            setIdArtist={setIdArtist}
            setSongToPlay={setSongToPlay}
          />
        </div>
      </div>
      
    </div>
  );
}

export default App;
