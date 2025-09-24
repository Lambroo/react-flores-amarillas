import React, { useState, useEffect } from 'react';

const SpringGiftForPartner = () => {
  const [showLetter, setShowLetter] = useState(false);
  const [petalsFalling, setPetalsFalling] = useState(false);

  useEffect(() => {
    // Start petals falling animation after a short delay
    const timer = setTimeout(() => {
      setPetalsFalling(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleOpenLetter = () => {
    setShowLetter(true);
  };

  const handleCloseLetter = () => {
    setShowLetter(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-emerald-50 relative overflow-hidden">
      {/* Falling Petals Animation */}
      {petalsFalling && (
        <div className="absolute inset-0 pointer-events-none z-10">
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="absolute petal"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 10}s`,
              }}
            >
              <img
                src="https://placeholder-image-service.onrender.com/image/20x20?prompt=A single yellow flower petal falling gently with soft edges and delicate texture&id=petal-1"
                alt="Falling yellow flower petal"
                className="w-5 h-5 opacity-80"
              />
            </div>
          ))}
        </div>
      )}

      <div className="container mx-auto px-4 py-8 relative z-20">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-600 mb-4">
            🌸 Primavera Contigo 🌸
          </h1>
          <p className="text-lg text-amber-700">
            Un regalo de primavera para iluminar tu día
          </p>
        </div>

        {/* Large Bouquet Background */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <div className="w-full h-full flex items-center justify-center">
            <img
              src="https://placeholder-image-service.onrender.com/image/600x600?prompt=Large beautiful bouquet of yellow flowers including sunflowers roses daffodils and tulips arranged elegantly with green foliage&id=large-bouquet-1"
              alt="Large beautiful bouquet of yellow spring flowers"
              className="w-96 h-96 object-contain"
            />
          </div>
        </div>

        {/* Large Envelope Section */}
        <div className="relative z-30 flex justify-center">
          <div className="w-full max-w-2xl">
            {!showLetter ? (
              <div className="text-center cursor-pointer" onClick={handleOpenLetter}>
                <div className="bg-amber-100 rounded-2xl p-8 shadow-2xl border-4 border-amber-300 transform hover:scale-105 transition-transform duration-300">
                  <h2 className="text-3xl font-bold text-amber-800 mb-8">
                    🌸 Tu Regalo de Primavera 🌸
                  </h2>
                  
                  <div className="w-64 h-64 mx-auto mb-8 relative">
                    <img
                      src="https://placeholder-image-service.onrender.com/image/256x256?prompt=Large sealed envelope with decorative yellow flower patterns and spring theme design&id=large-envelope-1"
                      alt="Large decorative envelope waiting to be opened"
                      className="w-full h-full object-contain drop-shadow-2xl"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-amber-500 text-white font-bold py-2 px-6 rounded-full text-lg">
                        Toca para abrir
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-amber-700 text-lg font-medium">
                    Presiona el sobre para descubrir tu sorpresa
                  </p>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-2xl p-8 shadow-2xl border-4 border-amber-300">
                <div className="bg-amber-50 p-8 rounded-xl border-2 border-amber-200 text-left">
                  <h3 className="text-2xl font-bold text-amber-800 mb-6 text-center">
                    Mi Amor,
                  </h3>
                  <div className="space-y-4 text-lg">
                    <p className="text-amber-700">
                      Aunque la distancia nos separe, la primavera me recuerda que nuestro amor
                      florece cada día. Como estas flores amarillas, quiero que sepas que brillas
                      en mi vida y iluminas mis días.
                    </p>
                    <p className="text-amber-700">
                      Cada pétalo representa un momento feliz que hemos compartido y los muchos
                      que aún nos esperan. La primavera trae renovación, y nuestro amor se
                      renueva con cada amanecer.
                    </p>
                    <p className="text-amber-700">
                      Te extraño, te amo, y espero el día en que podamos disfrutar la primavera juntos.
                    </p>
                  </div>
                  <p className="text-right font-bold text-amber-800 mt-8 text-xl">
                    Con todo mi amor,
                  </p>
                </div>
                
                <div className="text-center mt-8">
                  <button
                    onClick={handleCloseLetter}
                    className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-full transition-colors duration-200 text-lg shadow-lg"
                  >
                    Cerrar Carta
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Additional Spring Elements */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-emerald-200">
            <h2 className="text-2xl font-semibold text-emerald-800 mb-6">
              El Significado de la Primavera
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3">
                  <img
                    src="https://placeholder-image-service.onrender.com/image/64x64?prompt=Butterfly with yellow wings flying over flowers&id=butterfly-1"
                    alt="Mariposa amarilla simbolizando transformación"
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-emerald-700 font-semibold">Transformación</p>
                <p className="text-sm text-emerald-600 mt-1">Nuestro amor evoluciona y crece</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3">
                  <img
                    src="https://placeholder-image-service.onrender.com/image/64x64?prompt=Warm sunlight breaking through clouds&id=sunlight-1"
                    alt="Luz solar representando esperanza"
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-emerald-700 font-semibold">Esperanza</p>
                <p className="text-sm text-emerald-600 mt-1">Pronto estaremos juntos de nuevo</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3">
                  <img
                    src="https://placeholder-image-service.onrender.com/image/64x64?prompt=New green leaves sprouting on branch&id=leaves-1"
                    alt="Nuevo crecimiento simbolizando renovación"
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-emerald-700 font-semibold">Renovación</p>
                <p className="text-sm text-emerald-600 mt-1">Nuestro amor se renueva cada día</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fall {
          0% {
            transform: translateY(-100px) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }
        
        .petal {
          animation: fall linear infinite;
          pointer-events: none;
        }
      `}</style>
    </div>
  );
};

export default SpringGiftForPartner;