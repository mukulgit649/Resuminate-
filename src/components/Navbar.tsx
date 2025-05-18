import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/ModeToggle';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from "@/hooks/useAuth";

const navigation = [
  { name: 'Features', href: '/features' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'ATS Score', href: '/ats-score' },
  { name: 'Interview Coach', href: '/interview-coach' },
  { name: 'Job Matcher', href: '/job-matcher' },
  { name: 'Resume Builder', href: '/resume-builder' },
  { name: 'Dashboard', href: '/demo/Dashboard' },
];

// Add a utility class for glowing effect
const glowClass = "shadow-[0_0_12px_2px_rgba(99,102,241,0.5)] transition-shadow duration-300";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, signIn, signOut } = useAuth();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b shadow-lg" style={{ boxShadow: '0 0 24px 0 rgba(99,102,241,0.25), 0 2px 8px 0 rgba(99,102,241,0.10)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Resuminate
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={
                  `relative text-foreground/80 hover:text-primary transition-colors
                  after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left after:rounded-full`
                }
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <ModeToggle />
            <div>
              {!user ? (
                <Button
                  size="lg"
                  className="ml-4"
                  onClick={signIn}
                  variant="default"
                >
                  Get Started
                </Button>
              ) : (
                <div className="flex items-center gap-3">
                  <img
                    src={user.photoURL || ""}
                    alt={user.displayName || "User"}
                    className="w-8 h-8 rounded-full border"
                  />
                  <span className="font-medium">{user.displayName}</span>
                  <Button
                    size="sm"
                    className="ml-2"
                    variant="outline"
                    onClick={signOut}
                  >
                    Sign Out
                  </Button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <ModeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground/80 hover:text-foreground"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b"
          >
            <div className="px-4 py-4 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={
                    `block relative text-foreground/80 hover:text-primary transition-colors
                    after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left after:rounded-full`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div>
                {!user ? (
                  <Button
                    size="lg"
                    className="w-full hover:shadow-[0_0_20px_6px_rgba(99,102,241,0.8)] focus:shadow-[0_0_24px_8px_rgba(99,102,241,1)]"
                    onClick={signIn}
                    variant="default"
                  >
                    Get Started
                  </Button>
                ) : (
                  <div className="flex items-center gap-3">
                    <img
                      src={user.photoURL || ""}
                      alt={user.displayName || "User"}
                      className="w-8 h-8 rounded-full border"
                    />
                    <span className="font-medium">{user.displayName}</span>
                    <Button
                      size="sm"
                      className="ml-2"
                      variant="outline"
                      onClick={signOut}
                    >
                      Sign Out
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
