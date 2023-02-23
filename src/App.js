import { useContext, useEffect, useState } from "react";
import { NavMenu } from "./components/NavMenu";
import { PlayerMusic } from "./components/PlayerMusic";
import { SearchSong } from "./components/SearchSong";
import { Songs } from "./components/Songs";
import { SpecialArtist } from "./components/SpecialArtist";
import { User } from "./components/User";
import { MatchProvider } from "./context/SongProvider";

function App() {
  const [valueSearch, setValueSearch] = useState("Romeo Santos");

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <MatchProvider>
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
          <SpecialArtist />
          <div className="container-songs">
            <Songs 
              valueSearch={valueSearch}
            />
          </div>
        </div>
        <PlayerMusic />
      </div>
    </MatchProvider>
  );
}

export default App;
