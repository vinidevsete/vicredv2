import React from 'react';
import { MessageCircle, Banknote, CreditCard, Users, RefreshCw, TrendingUp } from 'lucide-react';

const Services = () => {
  const whatsappUrl = "https://api.whatsapp.com/send/?phone=5591985708841&text=Olá, gostaria de simular um crédito";

  const services = [
    {
      icon: TrendingUp,
      title: 'Empréstimo Consignado',
      description: 'Crédito com desconto direto na folha de pagamento, taxas reduzidas e aprovação facilitada.',
      highlight: 'Taxas reduzidas'
    },
    {
      icon: Banknote,
      title: 'FGTS',
      description: 'Antecipe até 10 anos do saque-aniversário de forma prática e segura.',
      highlight: 'Até 10 anos'
    },
    {
      icon: Users,
      title: 'INSS',
      description: 'Crédito consignado com parcelas descontadas diretamente do benefício.',
      highlight: 'Desconto automático'
    },
    {
      icon: CreditCard,
      title: 'Cartão Consignado com Saque',
      description: 'Crédito rotativo com possibilidade de saque direto e taxas reduzidas.',
      highlight: 'Taxas reduzidas'
    },
    {
      icon: Users,
      title: 'Prefeitura de Campo Grande e Governo',
      description: 'Condições especiais para servidores públicos municipais e estaduais.',
      highlight: 'Condições especiais'
    }
  ];

  return (
    <section id="servicos" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#123C2B] font-montserrat mb-4">
            Soluções de crédito sob medida
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Atendemos quem mais precisa com agilidade, clareza e responsabilidade. 
            Conheça nossas principais modalidades de crédito:
          </p>
          <div className="w-24 h-1 bg-[#F2B705] mx-auto mt-6"></div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group border border-gray-100"
            >
              {/* Icon and Highlight */}
              <div className="flex items-start justify-between mb-6">
                <div className="text-[#F2B705] group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-12 w-12" />
                </div>
                <span className="bg-[#123C2B] text-white text-xs px-3 py-1 rounded-full font-medium">
                  {service.highlight}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-[#123C2B] mb-4 font-montserrat">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Action Button */}
              <button className="text-[#123C2B] font-semibold hover:text-[#F2B705] transition-colors duration-200 flex items-center group-hover:translate-x-1">
                Saiba mais
                <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#123C2B] to-[#1a5a3a] rounded-2xl p-8 lg:p-12 text-center text-white">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4 font-montserrat">
            Pronto para simular seu crédito?
          </h3>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Nossa equipe especializada está pronta para encontrar a melhor solução 
            de crédito para seu perfil. Simulação gratuita e sem compromisso.
          </p>
          
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-[#F2B705] hover:bg-[#e6a500] text-[#123C2B] px-8 py-4 rounded-lg text-lg font-bold transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
          >
            <img src="/WhatsApp.PNG" alt="WhatsApp" className="mr-3 h-6 w-6" />
            Simule agora pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;