import { Nav } from "./components/Nav";
import { LatestNews } from "./components/LatestNews";
import { GlobalStyle } from "./styles/styles";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <LatestNews />
    </>
  );
};
