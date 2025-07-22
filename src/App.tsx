import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Differentials from './components/Differentials';
import Services from './components/Services';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Differentials />
        <Services />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;