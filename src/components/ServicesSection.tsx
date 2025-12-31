import { Code, Video, Megaphone, Bot, Lock } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import DisplayCards from './ui/display-cards';
import NotifyMe from './NotifyMe';

const services = [
  {
    title: 'Programming Services',
    description: 'Custom webpages, small apps, and automation scripts tailored to your needs.',
    icon: Code,
  },
  {
    title: 'Video Editing',
    description: 'Professional video editing for content creators, businesses, and personal projects.',
    icon: Video,
  },
  {
    title: 'Personal Branding',
    description: 'Content writing, LinkedIn optimization, and brand strategy consulting.',
    icon: Megaphone,
  },
  {
    title: 'AI-Powered Solutions',
    description: 'Leverage AI tools to automate workflows and enhance productivity.',
    icon: Bot,
  },
];

const serviceCards = [
  {
    icon: <Code className="size-4 text-primary" />,
    title: 'Programming',
    description: 'Custom apps & automation',
    date: '2026',
    iconClassName: 'text-primary',
    titleClassName: 'text-primary',
    className:
      "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    icon: <Video className="size-4 text-primary" />,
    title: 'Video Editing',
    description: 'Professional editing',
    date: '2026',
    iconClassName: 'text-primary',
    titleClassName: 'text-primary',
    className:
      "[grid-area:stack] translate-x-6 sm:translate-x-12 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    icon: <Bot className="size-4 text-primary" />,
    title: 'AI Solutions',
    description: 'Automate workflows',
    date: '2026',
    iconClassName: 'text-primary',
    titleClassName: 'text-primary',
    className:
      "[grid-area:stack] translate-x-12 sm:translate-x-24 translate-y-20 hover:translate-y-10",
  },
];

const ServicesSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="services" className="py-16 md:py-24 relative bg-gradient-to-br from-background via-background to-primary/20">
      <div
        ref={ref}
        className={`container mx-auto px-4 sm:px-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
      >
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-heading mb-4 text-3xl md:text-4xl lg:text-5xl">
            My <span className="text-primary">Services</span>
          </h2>
          <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-primary/10 text-primary rounded-full text-sm sm:text-lg font-medium mb-4">
            <Lock size={16} className="sm:w-5 sm:h-5" />
            Coming Soon — Launching in 2026
          </div>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto font-sans px-4">
            Premium services crafted with expertise and passion
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6" />
        </div>

        {/* Display Cards */}
        <div
          className={`flex justify-center mb-12 md:mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
        >
          <DisplayCards cards={serviceCards} />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`glass-card p-4 md:p-6 relative overflow-hidden group transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              {/* Locked Overlay */}
              <div className="absolute inset-0 bg-background/60 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-center">
                  <Lock size={28} className="text-primary mx-auto mb-2 animate-pulse md:w-8 md:h-8" />
                  <span className="text-primary font-medium text-sm md:text-base">Coming Soon</span>
                </div>
              </div>

              {/* Service Icon */}
              <div className="p-3 md:p-4 rounded-xl bg-primary/20 w-fit mb-4 md:mb-6">
                <service.icon size={24} className="text-primary md:w-7 md:h-7" />
              </div>

              {/* Service Title */}
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 md:mb-3 font-serif">
                {service.title}
              </h3>

              {/* Service Description */}
              <p className="text-muted-foreground text-xs md:text-sm leading-relaxed font-sans">
                {service.description}
              </p>

              {/* Coming Soon Badge */}
              <div className="mt-4 md:mt-6">
                <span className="inline-flex items-center gap-1 px-2 md:px-3 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-full font-sans">
                  <Lock size={10} className="md:w-3 md:h-3" />
                  2026
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Notify Me Component */}
        <div
          className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <NotifyMe />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
