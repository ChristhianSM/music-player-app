import { useEffect, useState } from "react";
import { NavMenu } from "./components/NavMenu";
import { PlayerMusic } from "./components/PlayerMusic";
import { SearchSong } from "./components/SearchSong";
import { Songs } from "./components/Songs";
import { SpecialArtist } from "./components/SpecialArtist";
import { User } from "./components/User";

function App() {

  const initial = 'my universe'
  const [valueSearch, setValueSearch] = useState(initial);
  const [idArtist, setIdArtist] = useState(1);
  const [SongToPlay, setSongToPlay] = useState({});

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="main">
      {screenWidth >= 800 
        && <div className="container-nav-menu">
            <NavMenu />
          </div>
      }
      
      <div className="container-results">
        <div className="container-search-user">
          <SearchSong
            setValueSearch={setValueSearch}
          />
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
      <PlayerMusic
        valueSearch={valueSearch}
        songToPlay={SongToPlay}
      />
    </div>
  );
}

export default App;
