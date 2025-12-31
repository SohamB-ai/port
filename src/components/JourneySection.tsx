import { GraduationCap, Target, Rocket } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const educationTimeline = [
  {
    period: '2014 – 2023',
    school: 'Vidya Niketan English Medium School',
    description: 'Std 1–10',
  },
  {
    period: '2023 – 2025',
    school: 'Cambridge International School, Akurdi',
    description: 'Science PCM (Std 11–12)',
  },
  {
    period: '2025 – 2029',
    school: 'Nxtwave Institute of Advanced Tech',
    description: 'B.Tech in Artificial Intelligence & Data Science — Sanjay Ghodawat University',
    current: true,
  },
];

const currentFocus = [
  { icon: Target, text: 'Building a personal brand on LinkedIn' },
  { icon: Rocket, text: 'Learning and mastering video editing' },
  { icon: GraduationCap, text: 'Preparing for freelancing journey' },
];

const JourneySection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="journey" className="py-16 md:py-24 relative bg-gradient-to-br from-background via-background to-primary/20">
      <div
        ref={ref}
        className={`container mx-auto px-4 sm:px-6 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-heading mb-4 text-3xl md:text-4xl lg:text-5xl">
            Current <span className="text-primary">Journey</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Current Focus */}
          <div
            className={`glass-card p-6 md:p-8 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <h3 className="text-xl md:text-2xl font-bold mb-6 text-foreground font-serif">What I'm Working On</h3>
            <div className="space-y-4">
              {currentFocus.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-4 p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-all duration-500`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <div className="p-2 rounded-lg bg-primary/20">
                    <item.icon size={24} className="text-primary" />
                  </div>
                  <span className="text-foreground font-sans">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Education Timeline */}
          <div
            className={`glass-card p-6 md:p-8 glow-purple transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-foreground flex items-center gap-3 font-serif">
              <GraduationCap className="text-primary w-5 h-5 md:w-6 md:h-6" />
              Education Timeline
            </h3>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-3 md:left-4 top-0 bottom-0 w-0.5 bg-primary" />

              {/* Timeline Items */}
              <div className="space-y-8">
                {educationTimeline.map((item, index) => (
                  <div
                    key={index}
                    className="relative pl-10 md:pl-12"
                    style={{ transitionDelay: `${500 + index * 150}ms` }}
                  >
                    {/* Timeline Dot */}
                    <div
                      className={`absolute left-0 top-1 w-6 h-6 md:w-8 md:h-8 rounded-full border-2 flex items-center justify-center ${
                        item.current
                          ? 'border-primary bg-primary/20'
                          : 'border-primary/50 bg-primary/10'
                      }`}
                    >
                      <div
                        className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${
                          item.current ? 'bg-primary animate-pulse' : 'bg-primary/50'
                        }`}
                      />
                    </div>

                    {/* Content */}
                    <div className={`p-4 rounded-lg ${item.current ? 'bg-primary/10 border border-primary/30' : 'bg-secondary/30'}`}>
                      <span className="text-sm text-muted-foreground font-sans">{item.period}</span>
                      <h4 className="text-lg font-semibold text-foreground mt-1 font-serif">
                        {item.school}
                      </h4>
                      <p className="text-muted-foreground mt-1 font-sans">{item.description}</p>
                      {item.current && (
                        <span className="inline-block mt-2 px-3 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full font-sans">
                          Currently Pursuing
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
