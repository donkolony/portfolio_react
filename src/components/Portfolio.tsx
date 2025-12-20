import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "./AnimatedSection";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
}

const projects: Project[] = [
  {
    title: "OCA Website",
    description:
      "A local eCommerce store featuring product showcases, seamless navigation, and a user-friendly shopping experience optimized for customer engagement.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    tags: ["WordPress"],
    githubUrl: "",
    liveUrl: "https://ouicestnous.com/",
  },
  {
    title: "Walkin Progress",
    description:
      "A non-profit organization website dedicated to shaping young minds with knowledge and skills through community-driven programs and initiatives.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
    tags: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/donkolony/walkin_progress",
    liveUrl: "https://donkolony.github.io/walkin_progress/",
  },
  {
    title: "Daniel's Portfolio",
    description:
      "A sleek developer portfolio featuring dark theme, smooth scrolling, and interactive project showcases. Built with performance and accessibility in mind.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
    tags: ["React", "Tailwind", "TypeScript"],
    githubUrl: "https://github.com/ChimeneD/portfolio",
    liveUrl: "https://chimene.dev/",
  },
];

export const Portfolio = () => {
  return (
    <section id="portfolio" className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-3">
              My recent work
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Portfolio
            </h2>
          </div>
        </AnimatedSection>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <AnimatedSection key={index} animation="scale" delay={100 + index * 100}>
              <Card className="group overflow-hidden hover-lift bg-card border-border h-full">
                {/* Image */}
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-foreground/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
                    {project.githubUrl && (
                      <Button
                        size="icon"
                        variant="secondary"
                        className="rounded-full hover:scale-110 transition-transform duration-200"
                        asChild
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-5 w-5" />
                        </a>
                      </Button>
                    )}
                    <Button
                      size="icon"
                      variant="secondary"
                      className="rounded-full hover:scale-110 transition-transform duration-200"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    </Button>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground hover:bg-foreground hover:text-background transition-colors duration-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
