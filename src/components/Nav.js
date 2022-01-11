import { Link } from "react-router-dom";

import navLogo from "../assets/Sveriges Radio logo 2011.png";

export const Nav = () => {
  return (
    <div className="nav-container">
      <img className="nav-image" src={navLogo} alt="navlogo" />
      <div className="nav-link-container">
        <Link className="nav-link" to="/Programs">Programs</Link>
        <Link className="nav-link" to="/radiochannels">Radio Channels</Link>
        <Link className="nav-link" to="/weather">Weather</Link>
      </div>
    </div>
  );
};
