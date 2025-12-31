import { useState, useEffect } from 'react';
import { Home, User, Code, FolderGit2, Briefcase, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '#home', icon: Home },
  { name: 'About', href: '#about', icon: User },
  { name: 'Skills', href: '#skills', icon: Code },
  { name: 'Projects', href: '#projects', icon: FolderGit2 },
  { name: 'Services', href: '#services', icon: Briefcase },
  { name: 'Contact', href: '#contact', icon: Mail },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('Home');

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => link.name);
      
      // Simple heuristic: check which section is closest to top or currently in view
      // This is a basic implementation, can be refined with intersection observer
      let current = '';
      for (const section of sections) {
        const element = document.getElementById(section.toLowerCase());
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = section;
          }
        }
      }
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex items-center gap-1 sm:gap-2 p-1.5 rounded-full bg-black/90 backdrop-blur-md border border-purple-500/20 shadow-[0_0_20px_rgba(168,85,247,0.15)]"
      >
        {navLinks.map((link) => {
          const isActive = activeSection === link.name;
          const Icon = link.icon;
          
          return (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setActiveSection(link.name)}
              className={`
                relative px-4 py-2 rounded-full flex items-center gap-2 transition-all duration-300
                ${isActive ? 'text-white' : 'text-gray-400 hover:text-white'}
              `}
            >
              {isActive && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-purple-600/20 rounded-full border border-purple-500/50"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <Icon size={18} />
                <span className="hidden sm:inline text-sm font-medium">{link.name}</span>
              </span>
            </a>
          );
        })}
      </motion.nav>
    </div>
  );
};

export default Navbar;
