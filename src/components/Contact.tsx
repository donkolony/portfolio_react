import { useForm, ValidationError } from "@formspree/react";
import { Send, Github, Linkedin, Twitter, MessageCircle, Mail, MapPin, Loader2, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { AnimatedSection } from "./AnimatedSection";
import { useEffect, useState } from "react";

const socialLinks = [
  { icon: Github, href: "https://github.com/dieudonne", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/dieudonne", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/dieudonne", label: "Twitter" },
  { icon: MessageCircle, href: "https://wa.me/237600000000", label: "WhatsApp" },
];

export const Contact = () => {
  const [state, handleSubmit] = useForm("xojaedol");
  const [isFlipped, setIsFlipped] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [formKey, setFormKey] = useState(0);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (state.succeeded && !isFlipped) {
      setIsFlipped(true);
      
      // Auto flip back after 5 seconds and reset form
      const timer = setTimeout(() => {
        setIsFlipped(false);
        setFormKey(prev => prev + 1); // Reset form by changing key
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, [state.succeeded, isFlipped]);

  return (
    <section id="contact" className="section-padding bg-secondary/30">
      <div className="container-custom">
        {/* Section Header */}
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-3">
              Get in touch
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Contact Me
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto">
          {/* Contact Info */}
          <AnimatedSection animation="slide-left" delay={100}>
            <div className="space-y-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or 
                opportunities to be part of your vision. Feel free to reach out!
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all duration-300">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a href="mailto:donkolony@gmail.com" className="font-medium hover:underline">
                      donkolony@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all duration-300">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium">Cameroon</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center hover:bg-foreground hover:text-background hover:scale-110 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Contact Form with Flip Animation */}
          <AnimatedSection animation="slide-right" delay={200}>
            <div 
              className="relative h-[420px]"
              style={{ perspective: "1000px" }}
            >
              <div
                className={`relative w-full h-full transition-transform duration-700 ${
                  prefersReducedMotion ? "" : "[transform-style:preserve-3d]"
                } ${isFlipped && !prefersReducedMotion ? "[transform:rotateY(180deg)]" : ""}`}
              >
                {/* Front - Contact Form */}
                <Card 
                  className={`absolute inset-0 bg-card border-border ${
                    prefersReducedMotion ? (isFlipped ? "hidden" : "") : "[backface-visibility:hidden]"
                  }`}
                >
                  <CardContent className="p-6 md:p-8 h-full">
                    <form key={formKey} onSubmit={handleSubmit} className="space-y-6 h-full flex flex-col">
                      <div>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Your Name"
                          required
                          className="bg-background transition-all duration-200 focus:scale-[1.01]"
                        />
                        <ValidationError prefix="Name" field="name" errors={state.errors} className="text-sm text-destructive mt-1" />
                      </div>
                      <div>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Your Email"
                          required
                          className="bg-background transition-all duration-200 focus:scale-[1.01]"
                        />
                        <ValidationError prefix="Email" field="email" errors={state.errors} className="text-sm text-destructive mt-1" />
                      </div>
                      <div className="flex-1">
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Your Message"
                          required
                          rows={5}
                          className="bg-background resize-none transition-all duration-200 focus:scale-[1.01] h-full min-h-[120px]"
                        />
                        <ValidationError prefix="Message" field="message" errors={state.errors} className="text-sm text-destructive mt-1" />
                      </div>
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full hover:scale-[1.02] transition-all duration-200"
                        disabled={state.submitting}
                      >
                        {state.submitting ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>

                {/* Back - Success Message */}
                <Card 
                  className={`absolute inset-0 bg-card border-border ${
                    prefersReducedMotion 
                      ? (isFlipped ? "" : "hidden") 
                      : "[backface-visibility:hidden] [transform:rotateY(180deg)]"
                  }`}
                >
                  <CardContent className="p-6 md:p-8 h-full flex flex-col items-center justify-center text-center">
                    <div className="w-20 h-20 mx-auto rounded-full bg-green-500/10 flex items-center justify-center mb-6 animate-scale-in">
                      <CheckCircle className="h-10 w-10 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">Message Sent!</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed max-w-sm">
                      Thanks for reaching out! I'll get back to you as soon as possible.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
