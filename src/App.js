import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LatestNews } from "./components/LatestNews";
import { Programs } from "./components/Programs";
import { RadioChannels } from "./components/RadioChannels";
import { Weather } from "./components/Weather";
import { Main } from './components/Main'

export const App = () => {
  return (
    <BrowserRouter>
      <p>Main Page</p>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="latestnews" element={<LatestNews />} />
          <Route path="weather" element={<Weather />} />
          <Route path="programs" element={<Programs />} />
          <Route path="radiochannels" element={<RadioChannels />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
