import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { App } from "./App";
import { LatestNews } from "./components/LatestNews";
import { Programs } from "./components/Programs";
import { RadioChannels } from "./components/RadioChannels";
import { Weather } from "./components/Weather";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="latestnews" element={<LatestNews />} />
        <Route path="programs" element={<Programs />} />
        <Route path="radiochannels" element={<RadioChannels />} />
        <Route path="weather" element={<Weather />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
