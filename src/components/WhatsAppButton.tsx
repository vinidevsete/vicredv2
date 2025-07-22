import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const whatsappUrl = "https://api.whatsapp.com/send/?phone=5591985708841&text=Olá, gostaria de simular um crédito";

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      // Show tooltip after button appears
      setTimeout(() => setShowTooltip(true), 1000);
      // Hide tooltip after 3 seconds
      setTimeout(() => setShowTooltip(false), 4000);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50 animate-bounce-in">
        <div className="relative">
          {/* Tooltip */}
          {showTooltip && (
            <div className="absolute bottom-16 right-0 bg-white text-[#123C2B] p-3 rounded-lg shadow-xl border border-gray-200 whitespace-nowrap animate-fade-in">
              <p className="text-sm font-medium">💬 Simule seu crédito agora!</p>
              <div className="absolute -bottom-1 right-4 w-2 h-2 bg-white transform rotate-45 border-r border-b border-gray-200"></div>
              <button
                onClick={() => setShowTooltip(false)}
                className="absolute -top-2 -right-2 bg-gray-200 hover:bg-gray-300 rounded-full p-1 transition-colors"
              >
                <X className="h-3 w-3" />
              </button>
            </div>
          )}

          {/* Main Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-14 h-14 lg:w-16 lg:h-16 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
            aria-label="Fale conosco pelo WhatsApp"
          >
            <MessageCircle className="h-7 w-7 lg:h-8 lg:w-8 group-hover:scale-110 transition-transform duration-200" />
            
            {/* Pulse Animation */}
            <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-75"></div>
          </a>

          {/* Notification Badge */}
          <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold animate-pulse">
            1
          </div>
        </div>
      </div>

      {/* Background Overlay for Mobile (when tooltip is shown) */}
      {showTooltip && (
        <div className="fixed inset-0 bg-black/10 z-40 lg:hidden" onClick={() => setShowTooltip(false)} />
      )}
    </>
  );
};

export default WhatsAppButton;