import { ArrowDown, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToPortfolio = () => {
    const element = document.querySelector("#portfolio");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video - Abstract tech/data visualization */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80"
        >
          {/* Abstract digital/tech visualization - seamless loop */}
          <source
            src="https://cdn.pixabay.com/video/2021/08/20/85597-592056009_large.mp4"
            type="video/mp4"
          />
        </video>
        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-hero-overlay/80 via-hero-overlay/70 to-hero-overlay/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Greeting */}
          <p className="text-sm md:text-base uppercase tracking-[0.3em] mb-4 opacity-80 animate-fade-in-up">
            Hello, I'm
          </p>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-4 animate-fade-in-up delay-100">
            Dieudonne Kolony
          </h1>

          {/* Role */}
          <p className="text-xl md:text-2xl lg:text-3xl font-light mb-6 opacity-90 animate-fade-in-up delay-200">
            Frontend Developer
          </p>

          {/* Value proposition */}
          <p className="text-base md:text-lg max-w-2xl mx-auto mb-10 opacity-75 leading-relaxed animate-fade-in-up delay-300">
            I craft clean, responsive, and user-focused web experiences. 
            Passionate about building digital products that make a difference.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-400">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-white/90 hover:scale-105 font-medium px-8 transition-all duration-300 shadow-lg hover:shadow-xl"
              asChild
            >
              <a href="/cv.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/50 text-white hover:bg-white/10 hover:border-white hover:scale-105 font-medium px-8 bg-transparent transition-all duration-300"
              onClick={scrollToPortfolio}
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              View My Work
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-float">
        <button
          onClick={() => {
            const element = document.querySelector("#about");
            if (element) element.scrollIntoView({ behavior: "smooth" });
          }}
          className="text-white/70 hover:text-white transition-all duration-300 hover:scale-110"
          aria-label="Scroll down"
        >
          <ArrowDown className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
};
