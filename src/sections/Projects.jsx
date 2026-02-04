import { ArrowUpRight, Github } from 'lucide-react';
import { AnimatedBorderButton } from '@/components/AnimatedBorderButton';
const projects = [
  {
    title: 'Full-Stack E-Commerce Platform',
    description:
      'A production-ready e-commerce platform with Next.js 15, featuring authentication, PayPal/Stripe payments, admin dashboard with analytics, and real-time inventory management.',
    image: '/projects/e-commerce.PNG',
    tags: ['Next.js 15', 'MongoDB', 'TypeScript', 'Tailwind CSS'],
    link: 'https://e-commerce-platform-six-kappa.vercel.app/',
    github: 'https://github.com/asifahemmed09/e-commerce-platform',
  },
  {
    title: 'Spotify Clone',
    description:
      'A full-stack music streaming platform with real-time chat, live activity tracking, admin dashboard, and high-quality audio playback using Socket.io.',
    image: '/projects/spotify-clone.PNG',
    tags: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    link: 'https://spotify-clone-zfvi.onrender.com/',
    github: 'https://github.com/asifahemmed09/spotify-clone',
  },
  {
    title: 'Real-time Messenger App',
    description:
      'A modern messaging application with WebSocket technology, featuring group chats, typing indicators, image sharing, and real-time online status.',
    image: '/projects/realtime-messenger.PNG',
    tags: ['React', 'TypeScript', 'Socket.IO', 'MongoDB'],
    link: 'https://realtime-messenger-app-1.onrender.com/',
    github: 'https://github.com/asifahemmed09/realtime-messenger-app',
  },
  {
    title: 'TeamSync - Project Management',
    description:
      'A multi-tenant B2B platform with workspace isolation, RBAC, Google OAuth, real-time task tracking, and advanced filtering using TanStack Query.',
    image: '/projects/project-manager.PNG',
    tags: ['React', 'Node.js', 'MongoDB', 'Passport.js'],
    link: 'https://team-sync-drab-rho.vercel.app/',
    github: 'https://github.com/asifahemmed09/project-manager',
  },
  {
    title: 'Job Application Tracker',
    description:
      'An intuitive Kanban board application for managing job applications with drag-and-drop functionality, Better Auth authentication, and comprehensive tracking features.',
    image: '/projects/job-tracker.PNG',
    tags: ['Next.js 16', 'MongoDB', 'TypeScript', 'Radix UI'],
    link: 'https://job-application-tracker-six-gold.vercel.app/',
    github: 'https://github.com/asifahemmed09/job-application-tracker',
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {' '}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-linear-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a target="_blank"
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a target="_blank"
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <a target="_blank"
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <a target="_blank" href="https://github.com/asifahemmed09" className="btn btn-primary">
            <AnimatedBorderButton>
              View All Projects
              <ArrowUpRight className="w-5 h-5" />
            </AnimatedBorderButton>
          </a>
        </div>
      </div>
    </section>
  );
};
