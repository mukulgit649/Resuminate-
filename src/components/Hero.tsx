import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { fadeIn, slideIn } from "@/lib/utils";

const Hero = () => {
  return (
    <section className="py-24 px-4 md:px-8 hero-gradient relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="space-y-8"
            variants={fadeIn}
            initial="initial"
            animate="animate"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 dark:text-white">
              Your Resume. <span className="text-resuminate-primary">Supercharged by AI.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
              Analyze, Optimize & Land Your Dream Job with Resuminate. Our AI analyzes your resume and provides actionable suggestions to make it stand out.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button className="btn-primary text-lg flex items-center gap-2 group">
                Analyze My Resume
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="btn-outline text-lg">
                Generate Resume
              </Button>
            </div>
          </motion.div>
          <motion.div 
            className="relative"
            variants={slideIn}
            initial="initial"
            animate="animate"
          >
            <div className="relative animate-float">
              <div className="glassmorphism rounded-2xl p-6 relative z-20">
                <img
                  src="/placeholder.svg"
                  alt="Resuminate Dashboard"
                  className="w-full rounded-lg shadow-sm"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-resuminate-accent/20 rounded-full blur-2xl"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-resuminate-primary/20 rounded-full blur-2xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="absolute -bottom-24 left-0 right-0 h-24 bg-gradient-to-t from-resuminate-background dark:from-gray-900 to-transparent"></div>
    </section>
  );
};

export default Hero;
