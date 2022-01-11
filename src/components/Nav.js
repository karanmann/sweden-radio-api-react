import { Link } from "react-router-dom";

import { NavContainer, NavImage, NavLink } from '../styles/nav'

import navLogo from "../assets/Sveriges Radio logo 2011.png";

export const Nav = () => {
  return (
    <NavContainer>
      <NavImage src={navLogo} alt="navlogo" />
      <NavLink>
        <Link to="/latestnews">Latest News</Link>
        <Link to="/Programs">Programs</Link>
        <Link to="/radiochannels">Radio Channels</Link>
        <Link to="/weather">Weather</Link>
      </NavLink>
    </NavContainer>
  );
};
