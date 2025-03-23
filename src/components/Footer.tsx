
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { Separator } from './ui/separator';
import personal from '../data/personal.json';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold text-primary">{personal.name}</h3>
            <p className="text-muted-foreground">{personal.title}</p>
          </div>
          
          <div className="flex items-center space-x-4">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={personal.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <Separator className="my-6" />
        
        <div className="text-center text-sm text-muted-foreground">
          <p>
            &copy; {currentYear} {personal.name}. All rights reserved.
          </p>
          <p className="mt-1">
            Made with <span className="text-red-500">❤</span> using React and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
