import React from "react";

import Home from "./components/Home/home";
import Portfolio from "./components/portfolio/projectGallery";
import About from "./components/about-me/about-me";
import Footer from "./components/footer/footer";


const App = () => {
  return (
    <div>
      <Home />
      <Portfolio />
      <About />
      <Footer />
    </div>
  );
};

export default App;