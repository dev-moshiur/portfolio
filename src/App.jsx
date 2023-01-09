import { Routes, Route } from "react-router-dom";
import "./app.scss";

import Home from "./components/pages/home/Home";
import About from "./components/pages/about/About";
import Contact from "./components/pages/contact/Contact";
import Skills from "./components/pages/skills/Skills";
import Portfolio from "./components/pages/portfolio/Portfolio";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="route">
        <Home />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
      </div>
    </div>
  );
}

export default App;
