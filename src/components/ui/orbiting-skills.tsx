"use client";
import React, { useEffect, useState, memo } from 'react';
import { Code } from 'lucide-react';

interface SkillConfig {
  id: string;
  orbitRadius: number;
  size: number;
  speed: number;
  logo: string;
  phaseShift: number;
  label: string;
  percentage: string;
}

interface OrbitingSkillProps {
  config: SkillConfig;
  angle: number;
  isSelected: boolean;
  onSelect: (id: string | null) => void;
}

// Base config - will be scaled based on screen size
const getSkillsConfig = (scale: number): SkillConfig[] => [
  // Inner Orbit - Coding
  { id: 'python', orbitRadius: 80 * scale, size: 36 * scale, speed: 0.8, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', phaseShift: 0, label: 'Python', percentage: '100%' },
  { id: 'html', orbitRadius: 80 * scale, size: 32 * scale, speed: 0.8, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', phaseShift: Math.PI / 2, label: 'HTML', percentage: '100%' },
  { id: 'css', orbitRadius: 80 * scale, size: 32 * scale, speed: 0.8, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', phaseShift: Math.PI, label: 'CSS', percentage: '100%' },
  { id: 'js', orbitRadius: 80 * scale, size: 32 * scale, speed: 0.8, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', phaseShift: (3 * Math.PI) / 2, label: 'JavaScript', percentage: '60%' },

  // Middle Orbit - Video Editing
  { id: 'capcut', orbitRadius: 130 * scale, size: 38 * scale, speed: -0.5, logo: '/lovable.png', phaseShift: 0, label: 'CapCut', percentage: '100%' },
  { id: 'davinci', orbitRadius: 130 * scale, size: 36 * scale, speed: -0.5, logo: 'https://img.icons8.com/color/96/davinci-resolve.png', phaseShift: (2 * Math.PI) / 3, label: 'DaVinci Resolve', percentage: '70%' },
  { id: 'premiere', orbitRadius: 130 * scale, size: 34 * scale, speed: -0.5, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-original.svg', phaseShift: (4 * Math.PI) / 3, label: 'Premiere Pro', percentage: '10%' },

  // Outer Orbit - AI & Side Skills
  { id: 'genai', orbitRadius: 180 * scale, size: 40 * scale, speed: 0.35, logo: 'https://img.icons8.com/fluency/96/artificial-intelligence.png', phaseShift: 0, label: 'Gen AI', percentage: '100%' },
  { id: 'chatgpt', orbitRadius: 180 * scale, size: 38 * scale, speed: 0.35, logo: 'https://img.icons8.com/color/96/chatgpt.png', phaseShift: Math.PI / 3, label: 'ChatGPT', percentage: '100%' },
  { id: 'lovable', orbitRadius: 180 * scale, size: 36 * scale, speed: 0.35, logo: '/youtube.png', phaseShift: (2 * Math.PI) / 3, label: 'Lovable.dev', percentage: '100%' },
  { id: 'copywriting', orbitRadius: 180 * scale, size: 34 * scale, speed: 0.35, logo: 'https://img.icons8.com/fluency/96/edit-text-file.png', phaseShift: Math.PI, label: 'Copywriting', percentage: '100%' },
  { id: 'branding', orbitRadius: 180 * scale, size: 34 * scale, speed: 0.35, logo: 'https://img.icons8.com/fluency/96/commercial.png', phaseShift: (4 * Math.PI) / 3, label: 'Personal Branding', percentage: '85%' },
  { id: 'content', orbitRadius: 180 * scale, size: 34 * scale, speed: 0.35, logo: '/capcut.png', phaseShift: (5 * Math.PI) / 3, label: 'Content Creation', percentage: '80%' },
];

const OrbitingSkill = memo(({ config, angle, isSelected, onSelect }: OrbitingSkillProps) => {
  const { orbitRadius, size, logo, label, percentage, id } = config;

  const x = Math.cos(angle) * orbitRadius;
  const y = Math.sin(angle) * orbitRadius;

  return (
    <div
      className="absolute transition-all duration-300"
      style={{
        transform: `translate(${x}px, ${y}px)`,
        zIndex: isSelected ? 100 : 10,
      }}
    >
      <div
        className={`relative flex items-center justify-center rounded-full bg-background border-2 border-primary/50 transition-all duration-300 cursor-pointer overflow-hidden ${isSelected ? 'scale-125 border-primary shadow-[0_0_20px_hsl(var(--primary)/0.5)]' : 'hover:scale-110'
          }`}
        style={{ width: size, height: size }}
        onMouseEnter={() => onSelect(id)}
        onMouseLeave={() => onSelect(null)}
      >
        <img
          src={logo}
          alt={label}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
      {isSelected && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 whitespace-nowrap px-3 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-lg shadow-lg animate-in fade-in zoom-in duration-200 pointer-events-none">
          <div className="font-bold">{label}</div>
          <div className="text-primary-foreground/80 text-center">{percentage}</div>
        </div>
      )}
    </div>
  );
});
OrbitingSkill.displayName = 'OrbitingSkill';

const GlowingOrbitPath = memo(({ radius }: { radius: number }) => {
  return (
    <div
      className="absolute rounded-full border border-primary/20"
      style={{
        width: radius * 2,
        height: radius * 2,
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    />
  );
});
GlowingOrbitPath.displayName = 'GlowingOrbitPath';

export default function OrbitingSkills() {
  const [time, setTime] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const [scale, setScale] = useState(1);

  // Handle responsive scaling
  useEffect(() => {
    const updateScale = () => {
      const width = window.innerWidth;
      if (width < 400) {
        setScale(0.55);
      } else if (width < 640) {
        setScale(0.7);
      } else if (width < 768) {
        setScale(0.85);
      } else {
        setScale(1);
      }
    };

    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  useEffect(() => {
    // Only pause if paused by hovering container (for global pause), NOT when selecting a specific skill
    if (isPaused) return;

    let animationFrameId: number;
    let lastTime = performance.now();

    const animate = (currentTime: number) => {
      const deltaTime = (currentTime - lastTime) / 1000;
      lastTime = currentTime;

      // Slower rotation when a skill is selected/hovered is optional, but let's keep it running or maybe slow it down
      setTime(prevTime => prevTime + deltaTime);
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]); // Removed selectedSkill from dependency to allow orbit to continue or just paused via isPaused

  const orbitRadii = [80 * scale, 130 * scale, 180 * scale];
  const skillsConfig = getSkillsConfig(scale);

  const containerSize = 400 * scale;
  const centerSize = 16 * scale;

  return (
    <div
      className="relative w-full flex items-center justify-center"
      style={{ height: Math.max(320, 500 * scale) }}
    >
      <div
        className="relative flex items-center justify-center"
        style={{ width: containerSize, height: containerSize }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Central Icon */}
        <div
          className="absolute z-20 flex items-center justify-center rounded-full bg-primary/20 border-2 border-primary shadow-[0_0_30px_hsl(var(--primary)/0.4)]"
          style={{ width: centerSize * 4, height: centerSize * 4 }}
        >
          <Code style={{ width: centerSize * 2, height: centerSize * 2 }} className="text-primary" />
        </div>

        {/* Orbit Paths */}
        {orbitRadii.map((radius) => (
          <GlowingOrbitPath key={radius} radius={radius} />
        ))}

        {/* Orbiting Skills */}
        {skillsConfig.map((config) => {
          const angle = time * config.speed + config.phaseShift;
          return (
            <OrbitingSkill
              key={config.id}
              config={config}
              angle={angle}
              isSelected={selectedSkill === config.id}
              onSelect={setSelectedSkill}
            />
          );
        })}
      </div>
    </div>
  );
}

