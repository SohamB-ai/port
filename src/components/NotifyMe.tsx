import { Bell } from 'lucide-react';

const NotifyMe = () => {
  return (
    <div className="glass-card p-6 md:p-8 glow-purple max-w-xl mx-auto">
      <div className="text-center mb-6">
        <div className="inline-flex items-center justify-center p-3 rounded-full bg-primary/20 mb-4">
          <Bell size={24} className="text-primary" />
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-foreground font-serif mb-2">
          Get Notified
        </h3>
        <p className="text-muted-foreground text-sm md:text-base font-sans">Be the first to know when my services go live in 2026</p>
      </div>

      <div className="flex justify-center w-full">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSc5iSwSuzZBu0PAKGNc5S8hog3hbME3uuXLm5dhHuedfWhASA/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="luxury-button text-primary-foreground flex items-center justify-center gap-2 px-6 py-3 text-sm md:text-base whitespace-nowrap"
        >
          <Bell size={18} />
          <span>Notify Me</span>
        </a>
      </div>
    </div>
  );
};

export default NotifyMe;