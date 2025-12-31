import { ExternalLink, Github, TrendingUp, Layout } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const projects = [
  {
    title: 'Python Ladder Series',
    description:
      'A complete progression from basic to advanced Python projects shared on LinkedIn. This series showcases growth, consistency, and problem-solving abilities through increasingly complex challenges.',
    tags: ['Python', 'LinkedIn', 'Learning Journey', 'Problem Solving'],
    icon: TrendingUp,
    link: 'https://www.linkedin.com/posts/soham-belwadkar-3024b536b_pythonladder-buildinpublic-python-activity-7391089278891753472-e2wB?utm_source=share&utm_medium=member_android&rcm=ACoAAFu7fnIBeLVoCrvhaLLVprGfEto8OIV_o0g',
    github: 'https://github.com/SohamB-ai',
    featured: true,
  },
  {
    title: 'Hackathon UI Projects',
    description:
      'Clean, modern UI screens created for various hackathons. These projects demonstrate design thinking, rapid prototyping skills, and the ability to create beautiful user interfaces under time constraints.',
    tags: ['UI/UX', 'Hackathon', 'Web Design', 'Rapid Prototyping'],
    icon: Layout,
    link: 'https://github.com/SohamB-ai/Dost.git',
    github: 'https://github.com/SohamB-ai',
    featured: false,
  },
];

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="projects" className="py-16 md:py-24 relative bg-gradient-to-br from-background via-background to-primary/20">
      <div
        ref={ref}
        className={`container mx-auto px-4 sm:px-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
      >
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-heading mb-4 text-3xl md:text-4xl lg:text-5xl">
            My <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto font-sans px-4">
            Showcasing my journey through code, creativity, and continuous learning
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6" />
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => project.link && window.open(project.link, '_blank')}
              className={`glass-card p-6 md:p-8 group hover:glow-purple transition-all duration-500 cursor-pointer ${project.featured ? 'gradient-border' : ''
                } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-4 md:mb-6">
                <div className="p-3 md:p-4 rounded-xl bg-primary/20 group-hover:bg-primary/30 transition-colors duration-300">
                  <project.icon size={24} className="text-primary md:w-8 md:h-8" />
                </div>
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors duration-300 text-muted-foreground hover:text-foreground"
                      aria-label="View on GitHub"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={20} />
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors duration-300 text-muted-foreground hover:text-foreground"
                      aria-label="View project"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

              {/* Project Title */}
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4 group-hover:text-primary transition-colors duration-300">
                {project.title}
              </h3>

              {/* Project Description */}
              <p className="text-muted-foreground leading-relaxed mb-4 md:mb-6 font-sans text-sm md:text-base">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20 font-sans"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Featured Badge */}
              {project.featured && (
                <div className="mt-6 pt-6 border-t border-border">
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    <TrendingUp size={16} />
                    Featured Project
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
