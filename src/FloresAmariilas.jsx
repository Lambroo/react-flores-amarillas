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

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Flowers Section */}
          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-amber-200">
              <h2 className="text-2xl font-semibold text-amber-800 mb-6 text-center">
                Flores Amarillas para Ti
              </h2>
              
              <div className="grid grid-cols-2 gap-4">
                {/* Sunflower */}
                <div className="bg-amber-50 p-4 rounded-xl border border-amber-200">
                  <div className="w-20 h-20 mx-auto mb-3">
                    <img
                      src="https://placeholder-image-service.onrender.com/image/80x80?prompt=A bright yellow sunflower with large center and radiating petals against a soft background&id=sunflower-1"
                      alt="Bright yellow sunflower with happy expression"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="text-center text-sm text-amber-700">Girasol</p>
                </div>

                {/* Daffodil */}
                <div className="bg-amber-50 p-4 rounded-xl border border-amber-200">
                  <div className="w-20 h-20 mx-auto mb-3">
                    <img
                      src="https://placeholder-image-service.onrender.com/image/80x80?prompt=Elegant yellow daffodil with trumpet shape and delicate petals&id=daffodil-1"
                      alt="Elegant yellow daffodil flower"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="text-center text-sm text-amber-700">Narciso</p>
                </div>

                {/* Tulip */}
                <div className="bg-amber-50 p-4 rounded-xl border border-amber-200">
                  <div className="w-20 h-20 mx-auto mb-3">
                    <img
                      src="https://placeholder-image-service.onrender.com/image/80x80?prompt=Graceful yellow tulip with cup-shaped bloom and fresh green stem&id=tulip-1"
                      alt="Graceful yellow tulip in bloom"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="text-center text-sm text-amber-700">Tulipán</p>
                </div>

                {/* Rose */}
                <div className="bg-amber-50 p-4 rounded-xl border border-amber-200">
                  <div className="w-20 h-20 mx-auto mb-3">
                    <img
                      src="https://placeholder-image-service.onrender.com/image/80x80?prompt=Beautiful yellow rose with layered petals and romantic appearance&id=rose-1"
                      alt="Beautiful yellow romantic rose"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="text-center text-sm text-amber-700">Rosa</p>
                </div>
              </div>
            </div>
          </div>

          {/* Letter Section */}
          <div className="text-center">
            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-amber-200">
              <h2 className="text-2xl font-semibold text-amber-800 mb-6">
                Una Carta Especial
              </h2>
              
              {!showLetter ? (
                <div className="space-y-4">
                  <div className="w-32 h-32 mx-auto mb-6">
                    <img
                      src="https://placeholder-image-service.onrender.com/image/128x128?prompt=Sealed envelope with yellow flower decoration and spring theme&id=envelope-1"
                      alt="Sealed envelope with yellow flower decoration"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <button
                    onClick={handleOpenLetter}
                    className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-200 shadow-lg"
                  >
                    Abrir Carta
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="bg-amber-50 p-6 rounded-xl border border-amber-200 text-left">
                    <h3 className="text-xl font-semibold text-amber-800 mb-4">
                      Mi Amor,
                    </h3>
                    <p className="text-amber-700 mb-4">
                      Aunque la distancia nos separe, la primavera me recuerda que nuestro amor
                      florece cada día. Como estas flores amarillas, quiero que sepas que brillas
                      en mi vida y iluminas mis días.
                    </p>
                    <p className="text-amber-700 mb-4">
                      Cada pétalo representa un momento feliz que hemos compartido y los muchos
                      que aún nos esperan. La primavera trae renovación, y nuestro amor se
                      renueva con cada amanecer.
                    </p>
                    <p className="text-amber-700">
                      Te extraño, te amo, y espero el día en que podamos disfrutar la primavera juntos.
                    </p>
                    <p className="text-right font-semibold text-amber-800 mt-6">
                      Con todo mi amor,
                    </p>
                  </div>
                  <button
                    onClick={handleCloseLetter}
                    className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-6 rounded-full transition-colors duration-200"
                  >
                    Cerrar Carta
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Additional Spring Elements */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-emerald-200">
            <h2 className="text-2xl font-semibold text-emerald-800 mb-6">
              Mensaje de Primavera
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3">
                  <img
                    src="https://placeholder-image-service.onrender.com/image/64x64?prompt=Butterfly with yellow wings flying over flowers&id=butterfly-1"
                    alt="Yellow butterfly symbolizing transformation"
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-emerald-700">Transformación</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3">
                  <img
                    src="https://placeholder-image-service.onrender.com/image/64x64?prompt=Warm sunlight breaking through clouds&id=sunlight-1"
                    alt="Sunlight representing hope and warmth"
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-emerald-700">Esperanza</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3">
                  <img
                    src="https://placeholder-image-service.onrender.com/image/64x64?prompt=New green leaves sprouting on branch&id=leaves-1"
                    alt="New growth symbolizing renewal"
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-emerald-700">Renovación</p>
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