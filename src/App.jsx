import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

const App = () => {
  const projects = [
    // ... (project data as provided)
  ];

  return (
    <div>
      <Header />
      <Hero />
      <Projects projects={projects} />
      <Skills />
      <Contact />
    </div>
  );
};

export default App;
