import { useState } from 'react';
import { Mail, Phone, Linkedin, Instagram, Github, Send } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { toast } from 'sonner';

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'sohambelwadkar7@gmail.com',
    href: 'mailto:sohambelwadkar7@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 9156735861',
    href: 'tel:+919156735861',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'soham-belwadkar',
    href: 'https://www.linkedin.com/in/soham-belwadkar-3024b536b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    value: '@zz_soham',
    href: 'https://instagram.com/zz_soham/',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'SohamB-ai',
    href: 'https://github.com/SohamB-ai',
  },
];

const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mnjqkqdl", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        toast.success("Message sent successfully!", {
          style: {
            backgroundColor: '#22c55e', // Green-500
            color: 'white',
            borderColor: '#22c55e'
          }
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        toast.error("Oops! There was a problem submitting your form");
      }
    } catch (error) {
      toast.error("Error submitting form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-16 md:py-24 relative bg-gradient-to-br from-background via-background to-primary/20">
      <div
        ref={ref}
        className={`container mx-auto px-4 sm:px-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
      >
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-heading mb-4 text-3xl md:text-4xl lg:text-5xl">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto font-sans px-4">
            Have a project in mind or just want to connect? I'd love to hear from you!
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
          {/* Contact Links */}
          <div className="space-y-4 md:space-y-6">
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6 md:mb-8">
              Connect With Me
            </h3>
            {contactLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`flex items-center gap-3 md:gap-4 p-3 md:p-4 glass-card hover:glow-purple transition-all duration-500 group ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                  }`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                <div className="p-2 md:p-3 rounded-xl bg-primary/20 group-hover:bg-primary/30 transition-colors duration-300">
                  <link.icon size={20} className="text-primary md:w-6 md:h-6" />
                </div>
                <div>
                  <p className="text-xs md:text-sm text-muted-foreground font-sans">{link.label}</p>
                  <p className="text-foreground font-medium group-hover:text-primary transition-colors duration-300 font-sans text-sm md:text-base truncate max-w-[150px] sm:max-w-none">
                    {link.value}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Contact Form */}
          <div
            className={`glass-card p-6 md:p-8 glow-purple transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
          >
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6 md:mb-8">
              Send a Message
            </h3>
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
              action="https://formspree.io/f/mnjqkqdl"
              method="POST"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-muted-foreground mb-2 font-sans"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 text-foreground placeholder:text-muted-foreground font-sans disabled:opacity-50"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-muted-foreground mb-2 font-sans"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 text-foreground placeholder:text-muted-foreground font-sans disabled:opacity-50"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-muted-foreground mb-2 font-sans"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 text-foreground placeholder:text-muted-foreground resize-none font-sans disabled:opacity-50"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="luxury-button w-full text-primary-foreground flex items-center justify-center gap-2 disabled:opacity-70"
              >
                <Send size={20} />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
