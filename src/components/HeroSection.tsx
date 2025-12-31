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

      </div>
    </section>
  );
};

export default HeroSection;
