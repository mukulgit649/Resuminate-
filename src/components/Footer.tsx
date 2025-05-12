import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter } from 'lucide-react';

const footerLinks = [
  { name: 'Home', href: '/' },
  { name: 'Features', href: '/features' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Contact', href: '/contact' },
];

const socialLinks = [
  { icon: <Github className="w-5 h-5" />, href: 'https://github.com/' },
  { icon: <Linkedin className="w-5 h-5" />, href: 'https://linkedin.com/' },
  { icon: <Twitter className="w-5 h-5" />, href: 'https://twitter.com/' },
];

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-background border-t mt-16">
      <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Resuminate
          </span>
          <span className="text-xs text-muted-foreground">&copy; {new Date().getFullYear()} Resuminate. All rights reserved.</span>
        </div>
        <div className="flex flex-wrap gap-6 items-center justify-center">
          {footerLinks.map(link => (
            <Link key={link.name} to={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">
              {link.name}
            </Link>
          ))}
        </div>
        <div className="flex gap-4 items-center justify-center">
          {socialLinks.map((social, idx) => (
            <a key={idx} href={social.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
