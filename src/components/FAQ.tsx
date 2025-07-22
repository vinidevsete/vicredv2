import React, { useState } from 'react';
import { ChevronDown, ChevronUp, MessageCircle } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const whatsappUrl = "https://api.whatsapp.com/send/?phone=5591985708841&text=Olá, tenho uma dúvida sobre crédito";

  const faqs = [
    {
      question: 'Posso fazer tudo pelo WhatsApp?',
      answer: 'Sim! Todo o processo pode ser feito pelo WhatsApp, desde a simulação inicial até a assinatura do contrato. Nossa equipe te orienta em cada etapa de forma prática e segura.'
    },
    {
      question: 'Preciso ter nome limpo para contratar?',
      answer: 'Não necessariamente. Trabalhamos com diversas modalidades de crédito e analisamos cada caso individualmente. Mesmo com restrições, podemos encontrar alternativas que se adequem ao seu perfil.'
    },
    {
      question: 'Quanto tempo leva para o crédito cair na conta?',
      answer: 'Após a aprovação e assinatura do contrato, o valor é liberado em até 24 horas úteis. Em muitos casos, a liberação acontece no mesmo dia.'
    },
    {
      question: 'Quais documentos preciso enviar?',
      answer: 'Os documentos variam conforme a modalidade de crédito, mas geralmente incluem: RG, CPF, comprovante de residência, comprovante de renda e extratos bancários. Nossa equipe te orienta sobre a documentação específica.'
    },
    {
      question: 'A VICRED é uma promotora confiável?',
      answer: 'Sim! Somos uma promotora de crédito devidamente registrada e autorizada para atuar no mercado financeiro. Trabalhamos com transparência total e seguimos todas as normas regulamentares.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 lg:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#123C2B] font-montserrat mb-4">
            Dúvidas frequentes
          </h2>
          <p className="text-xl text-gray-600">
            Esclarecemos as principais dúvidas sobre nossos serviços
          </p>
          <div className="w-24 h-1 bg-[#F2B705] mx-auto mt-6"></div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-[#123C2B] pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0 text-[#F2B705]">
                  {openIndex === index ? (
                    <ChevronUp className="h-6 w-6" />
                  ) : (
                    <ChevronDown className="h-6 w-6" />
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6 animate-fadeIn">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-[#123C2B] to-[#1a5a3a] rounded-2xl p-8 lg:p-12 text-white">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4 font-montserrat">
            Ainda tem dúvidas?
          </h3>
          <p className="text-lg text-gray-200 mb-8">
            Nossa equipe está pronta para esclarecer todas as suas questões 
            e ajudar você a encontrar a melhor solução de crédito.
          </p>
          
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-[#F2B705] hover:bg-[#e6a500] text-[#123C2B] px-8 py-4 rounded-lg text-lg font-bold transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
          >
            <img src="/WhatsApp.PNG" alt="WhatsApp" className="mr-3 h-6 w-6" />
            Fale agora com um consultor
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;