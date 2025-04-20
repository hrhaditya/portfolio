
import { useEffect, useState, useRef } from 'react';
import { Button } from './ui/button';
import { ChevronDown, Github, Linkedin, Twitter, Mail } from 'lucide-react';
import personal from '../data/personal.json';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const parallaxRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const parallaxStyle = {
    transform: `translateY(${scrollPosition * 0.2}px)`,
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative pt-16 pb-0 overflow-hidden"
    >
      {/* Background elements for parallax effect */}
      <div 
        className="absolute inset-0 z-0 opacity-10"
        ref={parallaxRef}
        style={parallaxStyle}
      >
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/30 filter blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-primary/20 filter blur-3xl"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className={`space-y-6 transform transition-all duration-1000 ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Hi, I'm{' '}
                <span className="text-primary relative">
                  {personal.name}
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-primary/30 rounded"></span>
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-muted-foreground">
                {personal.title}
              </h2>
            </div>

            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              {personal.bio}
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group relative overflow-hidden" asChild>
                <a href="#contact">
                  <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-primary/20 group-hover:skew-x-12 group-hover:translate-x-full"></span>
                  <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-primary/10 group-hover:-skew-x-12 group-hover:translate-x-full"></span>
                  <span className="relative">Get in Touch</span>
                </a>
              </Button>
              <Button size="lg" variant="outline" className="relative hover:scale-105 transition-transform duration-300 ease-out" asChild>
                <a href="#projects">View My Work</a>
              </Button>
            </div>

            <div className="flex items-center space-x-4 pt-4">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transition-transform duration-300"
              >
                <Github size={20} />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transition-transform duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transition-transform duration-300"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div
            className={`relative transform transition-all duration-1000 delay-300 ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-primary/10 rounded-full animate-pulse-slow"></div>
              <div className="absolute inset-0 bg-gradient-to-bl from-primary/20 to-transparent rounded-full animate-pulse-slower"></div>
              <img
                src="/displaypic.jpeg"
                alt={personal.name}
                className="rounded-full object-cover w-full h-full p-4 relative z-10 hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>

      <a
        href="#projects"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
      >
        <ChevronDown size={30} />
      </a>
    </section>
  );
};

export default Hero;
