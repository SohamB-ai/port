import { useState, useEffect } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const TypingText = ({ text, className, startTyping }: { text: string; className?: string; startTyping: boolean }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!startTyping) return;
    
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 20);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, startTyping]);

  return (
    <span className={className}>
      {displayedText}
      {startTyping && currentIndex < text.length && (
        <span className="animate-blink text-primary">|</span>
      )}
    </span>
  );
};

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="about" className="py-16 md:py-24 relative bg-gradient-to-br from-background via-background to-primary/20">
      <div
        ref={ref}
        className={`container mx-auto px-4 sm:px-6 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-heading mb-4 text-3xl md:text-4xl lg:text-5xl">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Bio Section */}
          <div
            className={`glass-card p-6 md:p-8 glow-purple transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-primary font-serif">
              Who Am I?
            </h3>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg font-sans">
              <TypingText 
                text="I am Soham Shankar Belwadkar, a student at NIAT Kolhapur, a hustler, and someone who masters everything I touch. I believe in becoming the ultimate Jack of Trades, mastering skills across tech, creativity, and communication." 
                startTyping={isVisible} 
              />
            </p>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg mt-4 font-sans">
              The question <span className="text-primary italic">"What is my best?"</span> drives me forward every day.
            </p>
          </div>

          {/* Quote Card */}
          <div
            className={`relative glass-card p-6 md:p-8 border-l-4 border-primary transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Quote Mark */}
            <div className="absolute -top-2 left-4 md:left-6">
              <span className="text-4xl md:text-6xl text-primary/30 font-serif leading-none">"</span>
            </div>
            
            <blockquote className="pt-6 md:pt-8">
              <p className="text-xl md:text-2xl font-serif italic text-foreground leading-relaxed">
                "I am the jack of all trades — and I'm mastering as I grow."
              </p>
              <footer className="mt-4 text-primary font-medium font-sans">
                — Soham
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
