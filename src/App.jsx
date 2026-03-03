import { useState } from "react";
import Header from "./components/Header";
import Hero from "./pages/Hero";
import Certifications from "./components/Certifications";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import About from "./pages/About";
import Footer from "./components/Footer";
import FeaturedProject from "./pages/FeatureProject";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <FeaturedProject />
      <Certifications />
      <Skills />
      <Experience />
      <Footer />
    </>
  );
}

export default App;
