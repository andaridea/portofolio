import React, { useState, useEffect } from 'react';
import lottie from 'lottie-web';
import './App.css';
import HomePage from './pages/homepage';
import Navbar from './components/navbar';
import About from './pages/about';
import Footer from './components/footer';
import Contact from './pages/contact';
import Project from './pages/project';
import Certification from './pages/certificate';
import loaderAnimation from '../loader.json';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isLoading) {
      const animation = lottie.loadAnimation({
        container: document.getElementById('lottie-container'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: loaderAnimation,
        rendererSettings: {
          scaleMode: 'exactFit', // Memastikan animasi tidak diubah skala
        },
      });

      return () => {
        animation.destroy();
      };
    }
  }, [isLoading]);

  return (
    <>
      {isLoading ? (
        <div className='container'>
        <div id="lottie-container"></div>
        </div>
      ) : (
        <>
          <Navbar />
          <HomePage />
          <About />
          <Project />
          <Certification />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
