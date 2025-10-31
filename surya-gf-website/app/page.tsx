"use client";
import React, { useState } from 'react';
import { Heart, Sparkles, ArrowRight, Star } from 'lucide-react';

export default function GirlfriendProposal() {
  const [stage, setStage] = useState(0);
  const [showImage, setShowImage] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const [answer, setAnswer] = useState(null);
  const [noButtonScale, setNoButtonScale] = useState(1);
  const [yesButtonScale, setYesButtonScale] = useState(1);

  // Placeholder images - replace with your own image URLs
  const images = [
    'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=800',
    'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=800',
    'https://images.unsplash.com/photo-1518635017498-87f514b751ba?w=800',
    'https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?w=800',
    'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800'
  ];

  const handleNext = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    setImageIndex(randomIndex);
    setStage(stage + 1);
  };

  const handleYes = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    setImageIndex(randomIndex);
    setShowImage(true);
    setAnswer('yes');
    setYesButtonScale(1.2);
    setTimeout(() => setYesButtonScale(1), 300);
  };

  const handleNo = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    setImageIndex(randomIndex);
    setShowImage(true);
    setAnswer('no');
    setNoButtonScale(0.8);
    setTimeout(() => setNoButtonScale(1), 300);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4 overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          >
            <Heart className="text-pink-400 opacity-20" size={16 + Math.random() * 24} />
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-2xl w-full">
        {/* Stage 0: Initial greeting */}
        {stage === 0 && (
          <div className="bg-slate-800 bg-opacity-80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-12 border border-pink-500 border-opacity-30 animate-fadeIn">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <Heart className="text-pink-400 animate-pulse" size={64} />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-pink-300 mb-6">
                Hey... 💕
              </h1>
              <p className="text-slate-300 text-xl md:text-2xl mb-8 leading-relaxed">
                I have something important to tell you...
              </p>
              <button
                onClick={handleNext}
                className="bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-pink-500/50 transition-all duration-300 text-lg flex items-center gap-2 mx-auto"
              >
                Continue <ArrowRight size={20} />
              </button>
            </div>
          </div>
        )}

        {/* Stage 1: Building suspense */}
        {stage === 1 && (
          <div className="bg-slate-800 bg-opacity-80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-12 border border-pink-500 border-opacity-30 animate-fadeIn">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <Sparkles className="text-yellow-400 animate-spin" size={64} style={{ animationDuration: '3s' }} />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-pink-300 mb-6">
                Every time I'm with you...
              </h1>
              <p className="text-slate-300 text-lg md:text-xl mb-6 leading-relaxed">
                I feel like the luckiest person in the world ✨
              </p>
              
              {/* Image */}
              <div className="mb-6 animate-fadeIn">
                <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-pink-400 border-opacity-50">
                  <img
                    src={images[imageIndex]}
                    alt="Special moment"
                    className="w-full h-64 md:h-80 object-cover"
                  />
                </div>
              </div>
              
              <button
                onClick={handleNext}
                className="bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-pink-500/50 transition-all duration-300 text-lg flex items-center gap-2 mx-auto"
              >
                Keep going <ArrowRight size={20} />
              </button>
            </div>
          </div>
        )}

        {/* Stage 2: More suspense */}
        {stage === 2 && (
          <div className="bg-slate-800 bg-opacity-80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-12 border border-pink-500 border-opacity-30 animate-fadeIn">
            <div className="text-center">
              <div className="flex justify-center mb-6 gap-4">
                <Star className="text-yellow-300 animate-bounce" size={48} style={{ animationDelay: '0s' }} />
                <Star className="text-yellow-300 animate-bounce" size={48} style={{ animationDelay: '0.1s' }} />
                <Star className="text-yellow-300 animate-bounce" size={48} style={{ animationDelay: '0.2s' }} />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-pink-300 mb-6">
                You make me smile...
              </h1>
              <p className="text-slate-300 text-lg md:text-xl mb-6 leading-relaxed">
                Even on the hardest days 🌟
              </p>
              
              {/* Image */}
              <div className="mb-6 animate-fadeIn">
                <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-yellow-400 border-opacity-50">
                  <img
                    src={images[imageIndex]}
                    alt="Special moment"
                    className="w-full h-64 md:h-80 object-cover"
                  />
                </div>
              </div>
              
              <button
                onClick={handleNext}
                className="bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-pink-500/50 transition-all duration-300 text-lg flex items-center gap-2 mx-auto"
              >
                Almost there <ArrowRight size={20} />
              </button>
            </div>
          </div>
        )}

        {/* Stage 3: Building more */}
        {stage === 3 && (
          <div className="bg-slate-800 bg-opacity-80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-12 border border-pink-500 border-opacity-30 animate-fadeIn">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <Heart className="text-red-400 animate-pulse" size={64} />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-pink-300 mb-6">
                And I can't imagine...
              </h1>
              <p className="text-slate-300 text-lg md:text-xl mb-6 leading-relaxed">
                My life without you in it 💖
              </p>
              
              {/* Image */}
              <div className="mb-6 animate-fadeIn">
                <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-red-400 border-opacity-50">
                  <img
                    src={images[imageIndex]}
                    alt="Special moment"
                    className="w-full h-64 md:h-80 object-cover"
                  />
                </div>
              </div>
              
              <button
                onClick={handleNext}
                className="bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-pink-500/50 transition-all duration-300 text-lg flex items-center gap-2 mx-auto animate-pulse"
              >
                One more thing... <ArrowRight size={20} />
              </button>
            </div>
          </div>
        )}

        {/* Stage 4: The big question */}
        {stage === 4 && (
          <div className="bg-slate-800 bg-opacity-80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-12 border border-pink-500 border-opacity-30 animate-fadeIn">
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <Sparkles className="text-pink-400 animate-spin" size={64} style={{ animationDuration: '3s' }} />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-pink-300 mb-4 animate-pulse">
                Will You Be My Girlfriend?
              </h1>
              <p className="text-slate-300 text-lg md:text-xl mb-6">
                I've been wanting to ask you this... 💕
              </p>
            </div>

            {/* Answer display */}
            {answer && (
              <div className="mb-8 text-center">
                {answer === 'yes' ? (
                  <div className="animate-bounce">
                    <p className="text-3xl md:text-4xl font-bold text-green-400 mb-2">
                      Yes! 🎉
                    </p>
                    <p className="text-pink-300 text-xl">
                      You just made me the happiest person ever! 💖
                    </p>
                  </div>
                ) : (
                  <div className="animate-pulse">
                    <p className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
                      That's okay... 💙
                    </p>
                    <p className="text-slate-300 text-xl">
                      But maybe you'll change your mind? 🥺
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Buttons */}
            <div className="flex gap-4 justify-center mb-8">
              <button
                onClick={handleYes}
                className="bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white font-bold py-4 px-8 md:px-12 rounded-full shadow-lg hover:shadow-pink-500/50 transition-all duration-300 text-lg md:text-xl"
                style={{
                  transform: `scale(${yesButtonScale})`,
                  transition: 'transform 0.3s ease'
                }}
              >
                <Heart className="inline mr-2" size={24} />
                Yes! 💕
              </button>
              
              <button
                onClick={handleNo}
                className="bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white font-bold py-4 px-8 md:px-12 rounded-full shadow-lg hover:shadow-slate-500/50 transition-all duration-300 text-lg md:text-xl"
                style={{
                  transform: `scale(${noButtonScale})`,
                  transition: 'transform 0.3s ease'
                }}
              >
                Maybe Later
              </button>
            </div>

            {/* Image display */}
            {showImage && (
              <div className="mt-6 animate-fadeIn">
                <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-pink-400 border-opacity-50">
                  <img
                    src={images[imageIndex]}
                    alt="Special moment"
                    className="w-full h-64 md:h-96 object-cover"
                    style={{
                      animation: 'fadeIn 0.5s ease-in'
                    }}
                  />
                </div>
                <p className="text-center text-pink-300 mt-4 text-sm">
                  A special memory for us 💫
                </p>
              </div>
            )}
          </div>
        )}

        {/* Footer note */}
        {stage > 0 && (
          <p className="text-center text-slate-400 mt-6 text-sm animate-fadeIn">
            Made with 💖 just for you
          </p>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-in;
        }
      `}</style>
    </div>
  );
}