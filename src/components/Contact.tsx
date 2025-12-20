import { useForm, ValidationError } from "@formspree/react";
import { Send, Github, Linkedin, Twitter, MessageCircle, Mail, MapPin, Loader2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { AnimatedSection } from "./AnimatedSection";

const socialLinks = [
  { icon: Github, href: "https://github.com/dieudonne", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/dieudonne", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/dieudonne", label: "Twitter" },
  { icon: MessageCircle, href: "https://wa.me/237600000000", label: "WhatsApp" },
];

export const Contact = () => {
  const [state, handleSubmit] = useForm("xojaedol");

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

          {/* Contact Form */}
          <AnimatedSection animation="slide-right" delay={200}>
            <Card className="bg-card border-border">
              <CardContent className="p-6 md:p-8">
                {state.succeeded ? (
                  <div className="text-center py-8 space-y-4">
                    <div className="w-16 h-16 mx-auto rounded-full bg-green-500/10 flex items-center justify-center">
                      <Send className="h-8 w-8 text-green-500" />
                    </div>
                    <h3 className="text-xl font-semibold">Thanks for reaching out!</h3>
                    <p className="text-muted-foreground">I'll get back to you as soon as possible.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
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
                    <div>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Your Message"
                        required
                        rows={5}
                        className="bg-background resize-none transition-all duration-200 focus:scale-[1.01]"
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
                )}
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
