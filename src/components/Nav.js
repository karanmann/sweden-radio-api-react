import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <nav>
      <Link to="/latestnews">Latest News</Link>
      <Link to="/Programs">Programs</Link>
      <Link to="/radiochannels">Radio Channels</Link>
      <Link to="/weather">Weather</Link>
    </nav>
  );
};
