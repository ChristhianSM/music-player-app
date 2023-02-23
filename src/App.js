import { useEffect, useState } from "react";
import { NavMenu } from "./components/NavMenu";
import { PlayerMusic } from "./components/PlayerMusic";
import { SearchSong } from "./components/SearchSong";
import { User } from "./components/User";
import { MatchProvider } from "./context/SongProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SpecialArtist } from "./components/SpecialArtist";
import { Songs } from "./components/Songs";
import { MyLibrery } from "./components/MyLibrary";

function App() {

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
      <BrowserRouter>
        <div className="main">
          {screenWidth >= 800 
            && <div className="container-nav-menu">
                <NavMenu />
              </div>
          }
          <div className="container-results">
            <div className="container-search-user">
              <SearchSong/>
              <User />
            </div>
            <Routes>
              <Route path="/" element = {<>
                                  <SpecialArtist />
                                  <div className="container-songs">
                                    <Songs />
                                  </div>
                                </>}/>
              <Route path="/*" element = {<MyLibrery />} />
            </Routes>
          </div>
          <PlayerMusic />
        </div>
      </BrowserRouter>
    </MatchProvider>
  );
}

export default App;
