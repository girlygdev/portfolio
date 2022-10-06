import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navigation from './components/Navigation';

const App = () => {
  const [theme, setTheme] = useState('dark');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  useEffect(() => {
    document.documentElement.classList = theme;
  }, [theme])

  return (
    <div className={`main`}>
      <Navigation toggleTheme={toggleTheme} />
      <Home />
      <About />
      <Contact />
    </div>
  )
};

export default App;