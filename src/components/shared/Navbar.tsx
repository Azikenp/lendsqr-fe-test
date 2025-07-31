import logoImg from "../../assets/logo.png";
import searchIcon from "../../assets/search.png";
import avatar from "../../assets/avatar.png";
import bellIcon from "../../assets/bell-icon.png";
import dropdown from "../../assets/dropdown.png";
import "../../scss/Navbar.scss";
import { useSearch } from "../../hooks/useSearchHook";

const Navbar = () => {
  const { searchValue, setSearchValue } = useSearch();
  return (
    <div className="navbar">
      <div className="navbar-content">
        <img className="logo" src={logoImg} alt="logo" />
        <div className="search-bar">
          <input
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            type="text"
            placeholder="Search for anything"
          />
          <button>
            <img className="logo" src={searchIcon} alt="logo" />
          </button>
        </div>
        <div className="navbar-right">
          <p className="navbar-text">Docs</p>
          <img className="icon" src={bellIcon} alt="bell-icon" />
          <div>
            <img className="avatar" src={avatar} alt="avatar" />
            <p>
              Adedeji
              <img className="dropdown" src={dropdown} alt="dropdown" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
