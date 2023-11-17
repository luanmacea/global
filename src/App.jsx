import React, { useState } from "react";
import { Route, HashRouter as Router, Routes, Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import About from "./components/About/About";

const HomePage = () => {
  <>
    <Home />
    <About />
  </>;
};

function App() {
  return (
    // <Router>
    <div>
      <Header />
      {/* <Home />
      <About /> */}
      <Outlet />
      <Routes>
        <Route path="/" Component={HomePage} />
      </Routes>
    </div>
  );
}

export default App;
