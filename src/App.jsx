import React, { useState } from "react";
import { Route, HashRouter as Router, Routes, Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";

function App() {
	return (
		<div>
			<Header />
			<div className="container-content">
				<Outlet />
			</div>
			<Footer />
		</div>
	);
}

export default App;
