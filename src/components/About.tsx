import React from 'react';
import { Eye, Target, Heart, Award, Clock, Shield, Users, CheckCircle } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: CheckCircle,
      title: 'Clareza',
      description: 'Transparência total em todos os processos'
    },
    {
      icon: Shield,
      title: 'Confiança',
      description: 'Segurança e credibilidade em cada operação'
    },
    {
      icon: Award,
      title: 'Resultado',
      description: 'Foco em entregar soluções efetivas'
    },
    {
      icon: Heart,
      title: 'Respeito',
      description: 'Atendimento humanizado e acolhedor'
    },
    {
      icon: Clock,
      title: 'Agilidade',
      description: 'Processos rápidos e eficientes'
    }
  ];

  return (
    <section id="sobre" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#123C2B] font-montserrat mb-4">
            Compromisso com quem confia na gente
          </h2>
          <div className="w-24 h-1 bg-[#F2B705] mx-auto"></div>
        </div>

        {/* Mission, Vision, Purpose */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Purpose */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-[#F2B705] mb-4">
              <Target className="h-12 w-12" />
            </div>
            <h3 className="text-xl font-bold text-[#123C2B] mb-4 font-montserrat">Propósito</h3>
            <p className="text-gray-700 leading-relaxed">
              Facilitar o acesso ao crédito de forma humanizada, eficiente e segura, 
              com foco em servidores públicos, militares, trabalhadores CLT e 
              beneficiários do INSS.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-[#F2B705] mb-4">
              <Users className="h-12 w-12" />
            </div>
            <h3 className="text-xl font-bold text-[#123C2B] mb-4 font-montserrat">Missão</h3>
            <p className="text-gray-700 leading-relaxed">
              Empoderar pessoas por meio de soluções financeiras claras e acessíveis, 
              com atendimento acolhedor e processos descomplicados.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-[#F2B705] mb-4">
              <Eye className="h-12 w-12" />
            </div>
            <h3 className="text-xl font-bold text-[#123C2B] mb-4 font-montserrat">Visão</h3>
            <p className="text-gray-700 leading-relaxed">
              Ser reconhecida como a promotora mais confiável e eficiente da região.
            </p>
          </div>
        </div>

        {/* Values */}
        <div>
          <h3 className="text-2xl lg:text-3xl font-bold text-[#123C2B] text-center mb-12 font-montserrat">
            Nossos Valores
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-[#F2B705] mb-4 flex justify-center">
                  <value.icon className="h-10 w-10" />
                </div>
                <h4 className="text-lg font-bold text-[#123C2B] mb-2 font-montserrat">
                  {value.title}
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;