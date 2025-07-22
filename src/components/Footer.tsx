import React from 'react';
import { MapPin, Mail, Phone, Clock, Facebook, Instagram, Users } from 'lucide-react';

const Footer = () => {
  const whatsappUrl = "https://api.whatsapp.com/send/?phone=5591985708841&text=Olá, gostaria de falar com a VICRED";

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer id="contato" className="bg-[#123C2B] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <img 
                src="/VICRED LOGO SOLO SF.png" 
                alt="VICRED - Promotora de Crédito" 
                className="h-8 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Promotora de crédito especializada em servidores públicos, militares, 
              aposentados e trabalhadores CLT. Crédito descomplicado com atendimento humanizado.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-gray-700 hover:bg-[#F2B705] p-2 rounded-lg transition-colors duration-200"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-gray-700 hover:bg-[#F2B705] p-2 rounded-lg transition-colors duration-200"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Institutional Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 font-montserrat">Institucional</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('inicio')}
                  className="text-gray-300 hover:text-[#F2B705] transition-colors duration-200"
                >
                  Início
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('sobre')}
                  className="text-gray-300 hover:text-[#F2B705] transition-colors duration-200"
                >
                  Sobre
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('servicos')}
                  className="text-gray-300 hover:text-[#F2B705] transition-colors duration-200"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('faq')}
                  className="text-gray-300 hover:text-[#F2B705] transition-colors duration-200"
                >
                  FAQ
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contato')}
                  className="text-gray-300 hover:text-[#F2B705] transition-colors duration-200"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 font-montserrat">Contatos</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-[#F2B705] mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  Av. Tancredo Neves, 519<br />
                  Aero Rancho – Campo Grande/MS
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-[#F2B705] mr-3 flex-shrink-0" />
                <a
                  href="mailto:atendimento@vicred.com.br"
                  className="text-gray-300 hover:text-[#F2B705] transition-colors duration-200 text-sm"
                >
                  atendimento@vicred.com.br
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-[#F2B705] mr-3 flex-shrink-0" />
                <span className="text-gray-300 text-sm">(91) 98570-8841</span>
              </li>
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-[#F2B705] hover:bg-[#e6a500] text-[#123C2B] px-4 py-2 rounded-lg font-semibold transition-all duration-200 text-sm"
                >
                  <img src="/WhatsApp.PNG" alt="WhatsApp" className="w-4 h-4 mr-2" />
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-lg font-bold mb-6 font-montserrat">Horário de Atendimento</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-[#F2B705] mr-3 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">Segunda a quinta</p>
                  <p className="text-white font-medium text-sm">08h às 17h</p>
                </div>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-[#F2B705] mr-3 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">Sexta-feira</p>
                  <p className="text-white font-medium text-sm">08h às 15h</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} VICRED - Promotora de Crédito. Todos os direitos reservados.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Desenvolvido com tecnologia e cuidado para melhor atendê-lo.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;