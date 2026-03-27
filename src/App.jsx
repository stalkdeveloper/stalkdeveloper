import React, { useState, useEffect } from 'react';
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
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDark(prefersDark);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={`${isDark ? 'dark' : ''}`}>
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <Home isDark={isDark} />
      <About isDark={isDark} />
      <Services isDark={isDark} />
      <Experience isDark={isDark} />
      <Projects isDark={isDark} />
      <FAQ isDark={isDark} />
      <Contact isDark={isDark} />
      <Footer isDark={isDark} />
    </div>
  );
}

export default App;