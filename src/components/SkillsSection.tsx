import { Code, Video, Bot, MessageSquare } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import OrbitingSkills from './ui/orbiting-skills';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CanvasRevealEffect } from './ui/canvas-reveal-effect';

const skillsData = [
  {
    id: 1,
    title: 'Coding',
    icon: Code,
    colors: [[125, 211, 252]],
    skills: [
      { name: 'Python', level: '100%' },
      { name: 'HTML', level: '100%' },
      { name: 'CSS', level: '100%' },
      { name: 'JavaScript', level: '60%' },
    ],
  },
  {
    id: 2,
    title: 'Video Editing',
    icon: Video,
    colors: [[255, 166, 158]],
    skills: [
      { name: 'CapCut', level: '100%' },
      { name: 'DaVinci Resolve', level: '70%' },
      { name: 'Premiere Pro', level: '10%' },
      { name: 'After Effects', level: '10%' },
    ],
  },
  {
    id: 3,
    title: 'AI Tools',
    icon: Bot,
    colors: [[140, 255, 200]],
    skills: [
      { name: 'Gen AI', level: '100%' },
      { name: 'Coding AI IDEs', level: '90%' },
      { name: 'Lovable.dev', level: '100%' },
      { name: 'ChatGPT', level: '100%' },
    ],
  },
  {
    id: 4,
    title: 'Side Skills',
    icon: MessageSquare,
    colors: [[221, 160, 255]],
    skills: [
      { name: 'Copywriting', level: '100%' },
      { name: 'Communication', level: '90%' },
      { name: 'Personal Branding', level: '85%' },
      { name: 'Content Creation', level: '80%' },
    ],
  },
];

const SkillCard = ({ skill }: { skill: typeof skillsData[0] }) => {
  const [isHovered, setIsHovered] = useState(false);
  const IconComponent = skill.icon;

  return (
    <div
      className="relative border border-border/50 rounded-2xl overflow-hidden bg-card h-[280px] md:h-[320px] cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Default State - Title Card */}
      <AnimatePresence>
        {!isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex flex-col items-center justify-center p-6"
          >
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center mb-4">
              <IconComponent className="w-8 h-8 md:w-10 md:h-10 text-primary" />
            </div>
            <h4 className="text-xl md:text-2xl font-bold text-foreground text-center">{skill.title}</h4>
            <p className="text-xs text-muted-foreground mt-2">Hover to reveal</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hover State - Canvas Effect + Skills */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0"
          >
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-background"
              colors={skill.colors}
              dotSize={2}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 z-10">
              <IconComponent className="w-8 h-8 text-foreground mb-3" />
              <h4 className="text-lg font-bold text-foreground mb-4">{skill.title}</h4>
              <div className="space-y-2 w-full max-w-[200px]">
                {skill.skills.map((s, index) => (
                  <div key={index} className="flex justify-between items-center text-sm">
                    <span className="text-foreground/90">{s.name}</span>
                    <span className="text-foreground font-bold">{s.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const SkillsSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="skills" className="py-16 md:py-24 relative bg-gradient-to-br from-background via-background to-primary/20">
      <div
        ref={ref}
        className={`container mx-auto px-4 sm:px-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
      >
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-heading mb-4 text-3xl md:text-4xl lg:text-5xl">
            My <span className="text-primary">Skills</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto font-sans px-4">
            A comprehensive toolkit spanning programming, creative work, and AI technologies
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6" />
        </div>

        {/* Orbiting Skills Animation */}
        <div
          className={`mb-12 md:mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
        >
          <p className="text-center text-muted-foreground text-sm mb-4">Hover over any skill to see details</p>
          <div className="overflow-hidden">
            <OrbitingSkills />
          </div>
        </div>

        {/* Skill Category Cards */}
        <div
          className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <h3 className="text-xl md:text-2xl font-bold text-center mb-6 md:mb-8 font-serif">
            Skill <span className="text-primary">Categories</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
            {skillsData.map((skill) => (
              <SkillCard key={skill.id} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
