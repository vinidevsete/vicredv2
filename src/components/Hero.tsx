import React from 'react';
import { MessageCircle, Shield, Clock } from 'lucide-react';

const Hero = () => {
  const whatsappUrl = "https://api.whatsapp.com/send/?phone=5591985708841&text=Olá, gostaria de simular um crédito";

  return (
    <section id="inicio" className="pt-16 lg:pt-20 bg-gradient-to-br from-[#123C2B] via-[#1a5a3a] to-[#123C2B] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="animate-fade-in-up">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold font-montserrat leading-tight mb-6">
                Crédito descomplicado para quem{' '}
                <span className="text-[#F2B705]">serve ao Brasil</span>
              </h1>
              
              <p className="text-lg lg:text-xl text-gray-200 mb-6 leading-relaxed">
                Facilitamos o acesso ao crédito para servidores públicos, militares, 
                aposentados e trabalhadores CLT. Simulação gratuita e liberação rápida.
              </p>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-6">
                <div className="flex items-center">
                  <Shield className="h-5 w-5 text-[#F2B705] mr-2" />
                  <span className="text-sm font-medium">100% Seguro</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-[#F2B705] mr-2" />
                  <span className="text-sm font-medium">Liberação Rápida</span>
                </div>
                <div className="flex items-center">
                  <MessageCircle className="h-5 w-5 text-[#F2B705] mr-2" />
                  <span className="text-sm font-medium">Atendimento Humanizado</span>
                </div>
              </div>

              {/* CTA Button */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-[#F2B705] hover:bg-[#e6a500] text-[#123C2B] px-8 py-4 rounded-lg text-lg font-bold transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-105"
              >
                <img src="/WhatsApp.PNG" alt="WhatsApp" className="mr-3 h-6 w-6" />
                Simule seu crédito agora mesmo
              </a>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/CASAL.webp"
                  alt="Casal representando o público-alvo da VICRED"
                  className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#123C2B]/30 to-transparent"></div>
              </div>
              
              {/* Floating Card */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 lg:left-6 lg:transform-none bg-white text-[#123C2B] p-6 rounded-xl shadow-xl max-w-xs">
                <div className="flex items-center mb-2">
                  <img src="/WhatsApp.PNG" alt="WhatsApp" className="h-8 w-8 mr-3" />
                  <div>
                    <p className="font-bold text-lg">Simulação Gratuita</p>
                    <p className="text-sm text-gray-600">Resposta em minutos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave separator */}
      <div className="relative">
        <svg
          className="w-full h-12 lg:h-16 text-white"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            fill="currentColor"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            fill="currentColor"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;