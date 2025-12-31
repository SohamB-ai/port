import { Linkedin, Instagram, Github, Mail, Heart } from 'lucide-react';

const socialLinks = [
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/soham-belwadkar-3024b536b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    label: 'LinkedIn',
  },
  {
    icon: Instagram,
    href: 'https://instagram.com/zz_soham/',
    label: 'Instagram',
  },
  {
    icon: Github,
    href: 'https://github.com/SohamB-ai',
    label: 'GitHub',
  },
  {
    icon: Mail,
    href: 'mailto:sohambelwadkar7@gmail.com',
    label: 'Email',
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 sm:py-12 border-t border-border relative">
      {/* Gradient Separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center gap-6 sm:gap-8">
          {/* Social Links */}
          <div className="flex items-center gap-3 sm:gap-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:p-3 rounded-xl bg-secondary/50 hover:bg-primary/20 hover:glow-purple transition-all duration-300 text-muted-foreground hover:text-primary"
                aria-label={link.label}
              >
                <link.icon size={18} className="sm:w-5 sm:h-5" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center px-4">
            <p className="text-muted-foreground text-xs sm:text-sm flex items-center gap-1 justify-center font-sans flex-wrap">
              © {currentYear} Soham Belwadkar.
            </p>
            <p className="text-muted-foreground/60 text-[10px] sm:text-xs mt-2 font-sans">
              The Jack of Trades in Tech, AI & Creativity
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
