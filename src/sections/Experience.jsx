import React from 'react';

const experiences = [
  {
    period: "2024 — Present",
    role: "Aspiring Full Stack Developer",
    company: "Self-Directed Learning",
    description:
      "Deep diving into modern web technologies. Currently building a portfolio of applications focusing on performance, accessibility, and clean code architecture.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js","Express.js","MongoDB"],
    current: true,
  },
  {
    period: "2023 — 2024",
    role: "Lead Developer",
    company: "EduConnect a Learning Platform",
    description:
      "Architected and deployed a full-stack web application. Solved complex state management issues and implemented a responsive design that works across all devices.",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    current: false,
  },
  {
    period: "2023",
    role: "Open Source Contributor",
    company: "GitHub Community",
    description:
      "Contributed to various open-source projects by fixing UI bugs, improving documentation, and collaborating with other developers to enhance feature sets.",
    technologies: ["JavaScript", "Git", "Markdown", "CSS"],
    current: false,
  },
  {
    period: "2020 — 2024",
    role: "Computer Science Student",
    company: "Southeast University",
    description:
      "Focused on Data Structures, Algorithms, and Software Engineering principles. Completed several academic projects",
    technologies: ["Python", "Java", "SQL", "C++"],
    current: false,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/4 w-96
       h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span
            className="text-secondary-foreground text-sm
           font-medium tracking-wider uppercase animate-fade-in"
          >
            Evolution
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold
           mt-4 mb-6 animate-fade-in animation-delay-100
            text-secondary-foreground"
          >
            My technical{" "}
            <span className="font-serif italic font-normal text-white">
              {" "}
              journey.
            </span>
          </h2>

          <p
            className="text-muted-foreground
           animate-fade-in animation-delay-200"
          >
            A timeline of my growth as a developer—from writing my first line of code 
            to building full-scale applications and contributing to the community.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div
                    className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}
                  >
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-4">
                      {exp.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};