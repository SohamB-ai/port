import { useTypingAnimation } from '@/hooks/useTypingAnimation';
import { ArrowDown } from 'lucide-react';
import AnimatedShaderBackground from './ui/animated-shader-background';

const HeroSection = () => {
  const { displayedText, isComplete } = useTypingAnimation(
    "Hi, I'm Soham Belwadkar — The Jack of Trades in Tech, AI & Creativity.",
    40,
    500
  );

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Shader Background */}
      <AnimatedShaderBackground />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading with Typing Effect */}
          <h1 className="section-heading mb-2 sm:mb-3 min-h-[60px] sm:min-h-[80px] md:min-h-[100px] text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            <span className="text-gradient">{displayedText}</span>
            {!isComplete && (
              <span className="inline-block w-0.5 sm:w-1 h-8 sm:h-12 md:h-16 bg-primary ml-1 animate-blink" />
            )}
          </h1>

          {/* Subtext */}
          <p
            className={`text-sm sm:text-lg md:text-xl text-white max-w-2xl mx-auto mb-8 sm:mb-12 transition-opacity duration-500 font-sans px-2 ${isComplete ? 'opacity-100' : 'opacity-0'
              }`}
          >
            Student at NIAT Kolhapur, AI & Data Science enthusiast, passionate hustler,
            and personal brand builder. Mastering everything I touch.
          </p>

        </div>

        {/* Contact Me Button */}
        <div className={`mt-8 transition-all duration-700 delay-500 ${isComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <button
            onClick={() => scrollToSection('contact')}
            className="group relative px-8 py-3 bg-black/80 backdrop-blur-sm border border-purple-500/50 rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:border-purple-400"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 font-medium text-white group-hover:text-purple-100 flex items-center gap-2">
              Contact Me
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
            </span>
          </button>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
