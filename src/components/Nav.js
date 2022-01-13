import { Link } from "react-router-dom";

import navLogo from "../assets/Sveriges Radio logo 2011.png";

import clickSound from "../assets/click.wav";

let audio = new Audio(clickSound);
audio.volume = 0.3;

const playSound = () => {
  audio.play();
};

export const Nav = () => {
  return (
    <div className="nav-container">
      <img className="nav-image" src={navLogo} alt="navlogo" />
      <div className="nav-link-container">
        <Link 
          className="nav-link" 
          to="/Programs" 
          onClick={() => playSound()}
        >
          Programs
        </Link>
        <Link
          className="nav-link"
          to="/radiochannels"
          onClick={() => playSound()}
        >
          Radio Channels
        </Link>
        <Link 
          className="nav-link" 
          to="/weather" 
          onClick={() => playSound()}
        >
          Weather
        </Link>
      </div>
    </div>
  );
};
