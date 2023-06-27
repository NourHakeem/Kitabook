import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Sidebar from "../sidebar/Sidebar";
import Favorites from "../favorites/Favorites";
import Feed from "../feed/Feed";
import Library from "../library/Library";
import Player from "../player/Player";
import Trending from "../trending";
import "./home.css";

export default function Home() {
  

  return (
    // <Router>
      <div className="main-body">
        <Sidebar />

        <Routes>
          <Route path="/*" element={<Library />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/player" element={<Player />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    // </Router>
  );
}
