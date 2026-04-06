import React from 'react';
import './App.css';
import Header from './components/header/header';
import Home from './components/home/home';
import About from './components/about/About';
import Skills from './components/skills/skills';
import Services from './components/services/services';
import Qualification from './components/qualification/qualification';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
import Heading from './components/serviceHeading/heading';
import ProjectsSection from './components/projects/ProjectSection';


const App = () => {
  return (
    <>
      <Header />

      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Heading />
        <Services />
        <Qualification />
        <ProjectsSection />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
