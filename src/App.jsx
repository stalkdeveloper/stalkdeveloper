import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Service';
import FAQ from './pages/FAQ';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Experience from './pages/Experience'; 

function App() {
  return (
    <div className="bg-white text-gray-900 font-sans">
      <Navbar />
      <Home />
      <About />
      <Services />
      <Experience />
      <FAQ />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
