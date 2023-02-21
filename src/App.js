import { NavMenu } from "./components/NavMenu";
import { SearchSong } from "./components/SearchSong";
import { SpecialArtist } from "./components/SpecialArtist";
import { User } from "./components/User";

function App() {
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
        <SpecialArtist />
      </div>
    </div>
  );
}

export default App;
