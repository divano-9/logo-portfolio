import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import ScrollToAnchor from "./utils/ScrollToAnchor";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import About from "./pages/About";
import Logo from "./pages/Logo";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="logo/:name" element={<Logo />} />
        </Route>
      </Routes>
      <ScrollToAnchor />
    </Router>
  );
}

export default App;
