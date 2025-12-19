import { Card, CardContent } from "@/components/ui/card";

interface Skill {
  name: string;
  level: number;
  category: "frontend" | "backend" | "tools";
}

const skills: Skill[] = [
  { name: "HTML5", level: 95, category: "frontend" },
  { name: "CSS3/Sass", level: 90, category: "frontend" },
  { name: "JavaScript", level: 88, category: "frontend" },
  { name: "React", level: 85, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "TypeScript", level: 75, category: "frontend" },
  { name: "Node.js", level: 70, category: "backend" },
  { name: "Express.js", level: 65, category: "backend" },
  { name: "PostgreSQL", level: 60, category: "backend" },
  { name: "Python", level: 55, category: "backend" },
  { name: "Git/GitHub", level: 85, category: "tools" },
  { name: "Figma", level: 70, category: "tools" },
];

const SkillBar = ({ name, level }: { name: string; level: number }) => (
  <div className="space-y-2">
    <div className="flex justify-between items-center">
      <span className="text-sm font-medium">{name}</span>
      <span className="text-xs text-muted-foreground">{level}%</span>
    </div>
    <div className="h-2 bg-secondary rounded-full overflow-hidden">
      <div
        className="h-full bg-foreground rounded-full transition-all duration-1000 ease-out"
        style={{ width: `${level}%` }}
      />
    </div>
  </div>
);

export const Skills = () => {
  const frontendSkills = skills.filter((s) => s.category === "frontend");
  const backendSkills = skills.filter((s) => s.category === "backend");
  const toolSkills = skills.filter((s) => s.category === "tools");

  return (
    <section id="skills" className="section-padding bg-secondary/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-3">
            What I work with
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            My Skills
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Frontend */}
          <Card className="hover-lift bg-card border-border">
            <CardContent className="p-6 md:p-8">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-foreground" />
                Frontend
              </h3>
              <div className="space-y-4">
                {frontendSkills.map((skill) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Backend */}
          <Card className="hover-lift bg-card border-border">
            <CardContent className="p-6 md:p-8">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-foreground" />
                Backend
              </h3>
              <div className="space-y-4">
                {backendSkills.map((skill) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Tools */}
          <Card className="hover-lift bg-card border-border md:col-span-2 lg:col-span-1">
            <CardContent className="p-6 md:p-8">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-foreground" />
                Tools & Other
              </h3>
              <div className="space-y-4">
                {toolSkills.map((skill) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
