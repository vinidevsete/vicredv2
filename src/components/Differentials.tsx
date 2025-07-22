import React from 'react';
import { Shield, Zap, Heart, MapPin } from 'lucide-react';

const Differentials = () => {
  const differentials = [
    {
      icon: Shield,
      title: 'Segurança e clareza',
      description: 'Processos transparentes e seguros, com informações claras sobre taxas e condições.',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: Zap,
      title: 'Agilidade real',
      description: 'Aprovação rápida e liberação do crédito em tempo recorde, sem burocracias desnecessárias.',
      gradient: 'from-[#F2B705] to-[#e6a500]'
    },
    {
      icon: Heart,
      title: 'Atendimento humanizado',
      description: 'Consultores especializados que entendem suas necessidades e oferecem soluções personalizadas.',
      gradient: 'from-red-500 to-red-600'
    },
    {
      icon: MapPin,
      title: 'Atuação regional e nacional',
      description: 'Presença consolidada no MS com atendimento em todo território nacional.',
      gradient: 'from-[#123C2B] to-[#1a5a3a]'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#123C2B] font-montserrat mb-4">
            Por que escolher a VICRED?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Somos especialistas em crédito para quem serve ao Brasil, 
            oferecendo soluções sob medida com o melhor atendimento.
          </p>
          <div className="w-24 h-1 bg-[#F2B705] mx-auto mt-6"></div>
        </div>

        {/* Differentials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentials.map((item, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              {/* Icon */}
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${item.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className="h-8 w-8" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-[#123C2B] mb-4 font-montserrat">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>

              {/* Hover indicator */}
              <div className="mt-6 w-0 group-hover:w-full h-1 bg-gradient-to-r from-[#F2B705] to-[#e6a500] transition-all duration-500 rounded-full"></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-gradient-to-r from-[#123C2B] to-[#1a5a3a] rounded-2xl p-8 lg:p-12 text-white">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-[#F2B705] mb-2">+5k</div>
              <div className="text-sm lg:text-base">Clientes atendidos</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-[#F2B705] mb-2">98%</div>
              <div className="text-sm lg:text-base">Satisfação dos clientes</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-[#F2B705] mb-2">24h</div>
              <div className="text-sm lg:text-base">Tempo médio de aprovação</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-[#F2B705] mb-2">100%</div>
              <div className="text-sm lg:text-base">Digital e seguro</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentials;