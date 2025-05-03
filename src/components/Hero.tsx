
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="py-20 px-4 md:px-8 hero-gradient relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              Your Resume. <span className="text-resugenius-primary">Supercharged by AI.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700">
              Analyze, Optimize & Land Your Dream Job with ResuGenius. Our AI analyzes your resume and provides actionable suggestions to make it stand out.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="btn-primary text-lg flex items-center gap-2 group">
                Analyze My Resume
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="btn-outline text-lg">
                Generate Resume
              </Button>
            </div>
          </div>
          <div className="relative animate-fade-in">
            <div className="relative animate-float">
              <div className="glassmorphism rounded-2xl p-6 relative z-20">
                <img
                  src="/placeholder.svg"
                  alt="ResuGenius Dashboard"
                  className="w-full rounded-lg shadow-sm"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-resugenius-accent/20 rounded-full blur-2xl"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-resugenius-primary/20 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-24 left-0 right-0 h-24 bg-gradient-to-t from-resugenius-background to-transparent"></div>
    </section>
  );
};

export default Hero;
