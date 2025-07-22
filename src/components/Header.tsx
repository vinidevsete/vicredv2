import React, { useState, useEffect } from 'react';
import { Menu, X, Users } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
    }
  };

  const whatsappUrl = "https://api.whatsapp.com/send/?phone=5591985708841&text=Olá, gostaria de simular um crédito";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg backdrop-blur-sm' : 'bg-white/95'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/VICRED LOGO SOLO SF.png" 
              alt="VICRED - Promotora de Crédito" 
              className="h-8 lg:h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-gray-700 hover:text-[#123C2B] transition-colors duration-200 font-medium"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('sobre')}
              className="text-gray-700 hover:text-[#123C2B] transition-colors duration-200 font-medium"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('servicos')}
              className="text-gray-700 hover:text-[#123C2B] transition-colors duration-200 font-medium"
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-gray-700 hover:text-[#123C2B] transition-colors duration-200 font-medium"
            >
              FAQ
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="text-gray-700 hover:text-[#123C2B] transition-colors duration-200 font-medium"
            >
              Contato
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#F2B705] hover:bg-[#e6a500] text-[#123C2B] px-6 py-3 rounded-lg font-semibold transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Fale com um especialista
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-[#123C2B] transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="text-left text-gray-700 hover:text-[#123C2B] transition-colors duration-200 font-medium py-2"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('sobre')}
                className="text-left text-gray-700 hover:text-[#123C2B] transition-colors duration-200 font-medium py-2"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('servicos')}
                className="text-left text-gray-700 hover:text-[#123C2B] transition-colors duration-200 font-medium py-2"
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="text-left text-gray-700 hover:text-[#123C2B] transition-colors duration-200 font-medium py-2"
              >
                FAQ
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="text-left text-gray-700 hover:text-[#123C2B] transition-colors duration-200 font-medium py-2"
              >
                Contato
              </button>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#F2B705] hover:bg-[#e6a500] text-[#123C2B] px-4 py-3 rounded-lg font-semibold transition-all duration-200 text-center"
              >
                Fale com um especialista
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;