
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold text-resugenius-primary">
              Resu<span className="text-gray-900">Genius</span>
            </a>
          </div>
          
          <div className="hidden md:block">
            <nav className="ml-10 flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-resugenius-primary font-medium">
                Features
              </a>
              <a href="#" className="text-gray-700 hover:text-resugenius-primary font-medium">
                How It Works
              </a>
              <a href="#" className="text-gray-700 hover:text-resugenius-primary font-medium">
                Pricing
              </a>
              <a href="#" className="text-gray-700 hover:text-resugenius-primary font-medium">
                Blog
              </a>
            </nav>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-700 hover:text-resugenius-primary font-medium">
                Sign In
              </a>
              <Button className="btn-primary">
                Get Started
              </Button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button onClick={toggleMenu} className="p-2 rounded-md text-gray-700 hover:bg-gray-100">
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-resugenius-primary hover:bg-gray-50">
              Features
            </a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-resugenius-primary hover:bg-gray-50">
              How It Works
            </a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-resugenius-primary hover:bg-gray-50">
              Pricing
            </a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-resugenius-primary hover:bg-gray-50">
              Blog
            </a>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-resugenius-primary hover:bg-gray-50">
                Sign In
              </a>
              <div className="mt-3 px-3">
                <Button className="w-full btn-primary">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
