import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "./AnimatedSection";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface Skill {
  name: string;
  level: number;
  category: "frontend" | "backend" | "tools";
}

const skills: Skill[] = [
  { name: "HTML5", level: 90, category: "frontend" },
  { name: "CSS3", level: 80, category: "frontend" },
  { name: "JavaScript", level: 70, category: "frontend" },
  { name: "React", level: 65, category: "frontend" },
  { name: "Tailwind CSS", level: 70, category: "frontend" },
  { name: "TypeScript", level: 55, category: "frontend" },
  { name: "Node.js", level: 60, category: "backend" },
  { name: "Express.js", level: 60, category: "backend" },
  { name: "PostgreSQL", level: 55, category: "backend" },
  { name: "Python", level: 80, category: "backend" },
  { name: "Git/GitHub", level: 85, category: "tools" },
  { name: "Figma", level: 60, category: "tools" },
];

const SkillBar = ({
  name,
  level,
  isVisible,
}: {
  name: string;
  level: number;
  isVisible: boolean;
}) => (
  <div className="space-y-2">
    <div className="flex justify-between items-center">
      <span className="text-sm font-medium">{name}</span>
      <span className="text-xs text-muted-foreground">{level}%</span>
    </div>
    <div className="h-2 bg-secondary rounded-full overflow-hidden">
      <div
        className="h-full bg-foreground rounded-full transition-all duration-1000 ease-out"
        style={{ width: isVisible ? `${level}%` : "0%" }}
      />
    </div>
  </div>
);

const SkillCard = ({
  title,
  skills: skillList,
}: {
  title: string;
  skills: Skill[];
}) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <Card ref={ref} className="hover-lift bg-card border-border group">
      <CardContent className="p-6 md:p-8">
        <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-foreground group-hover:scale-150 transition-transform duration-300" />
          {title}
        </h3>
        <div className="space-y-4">
          {skillList.map((skill) => (
            <SkillBar
              key={skill.name}
              name={skill.name}
              level={skill.level}
              isVisible={isVisible}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export const Skills = () => {
  const frontendSkills = skills.filter((s) => s.category === "frontend");
  const backendSkills = skills.filter((s) => s.category === "backend");
  const toolSkills = skills.filter((s) => s.category === "tools");

  return (
    <section id="skills" className="section-padding bg-secondary/30">
      <div className="container-custom">
        {/* Section Header */}
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-3">
              What I work with
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              My Skills
            </h2>
          </div>
        </AnimatedSection>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <AnimatedSection animation="fade-up" delay={100}>
            <SkillCard title="Frontend" skills={frontendSkills} />
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={200}>
            <SkillCard title="Backend" skills={backendSkills} />
          </AnimatedSection>

          <AnimatedSection
            animation="fade-up"
            delay={300}
            className="md:col-span-2 lg:col-span-1"
          >
            <SkillCard title="Tools & Other" skills={toolSkills} />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
