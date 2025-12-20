import { Briefcase, GraduationCap, Code2, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "./AnimatedSection";

const highlights = [
  {
    icon: Briefcase,
    title: "2+ Years",
    description: "Professional Experience",
  },
  {
    icon: GraduationCap,
    title: "BSc Holder",
    description: "Computer Science",
  },
  {
    icon: Code2,
    title: "15+ Projects",
    description: "Completed Successfully",
  },
  {
    icon: Heart,
    title: "Passionate",
    description: "About Clean Code",
  },
];

export const About = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-3">
              Get to know me
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              About Me
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Story */}
          <AnimatedSection animation="slide-left" delay={100}>
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                I'm a frontend developer with a passion for building beautiful, 
                functional web experiences. My journey began with curiosity about 
                how websites work, and has evolved into a deep love for crafting 
                user-centric digital solutions.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                I specialize in modern JavaScript frameworks, particularly React, 
                and take pride in writing clean, maintainable code. I believe great 
                design and solid engineering go hand in hand.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                When I'm not coding, you'll find me exploring new technologies, 
                contributing to open source, or helping aspiring developers find 
                their path in tech.
              </p>
            </div>
          </AnimatedSection>

          {/* Right side - Highlights */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <AnimatedSection key={index} animation="scale" delay={150 + index * 100}>
                <Card className="group hover-lift bg-card border-border h-full">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-secondary flex items-center justify-center group-hover:scale-110 group-hover:bg-foreground group-hover:text-background transition-all duration-300">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
