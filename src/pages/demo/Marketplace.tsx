import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, RefreshCw, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SEO } from '@/components/SEO';

const services = [
  { name: 'Resume Review', price: '$29', description: 'Get expert feedback on your resume.' },
  { name: 'Cover Letter Writing', price: '$19', description: 'Professional cover letter tailored to your job.' },
  { name: 'LinkedIn Optimization', price: '$25', description: 'Boost your LinkedIn profile visibility.' },
];

const Marketplace: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showServices, setShowServices] = useState(false);

  const handleShow = () => {
    setIsLoading(true);
    setTimeout(() => {
      setShowServices(true);
      setIsLoading(false);
    }, 1200);
  };

  return (
    <>
      <SEO 
        title="Marketplace - Resuminate"
        description="Browse and purchase career services from experts."
        keywords={['marketplace', 'career services', 'resume review']}
      />
      <div className="min-h-screen bg-background">
        <div className="max-w-2xl mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold mb-4">Marketplace</h1>
            <p className="text-xl text-muted-foreground">
              Browse and purchase career services from top experts
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-card rounded-xl p-8 border"
          >
            <div className="flex flex-col items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                <ShoppingCart className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-semibold">Available Services</h2>
              <Button 
                size="lg" 
                className="w-full flex items-center justify-center"
                onClick={handleShow}
                disabled={isLoading || showServices}
              >
                {isLoading ? (
                  <>
                    <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                    Loading...
                  </>
                ) : (
                  <>
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Show Services
                  </>
                )}
              </Button>
            </div>

            {showServices && (
              <div className="flex flex-col gap-6 mt-6">
                {services.map((service, idx) => (
                  <div key={idx} className="bg-muted rounded-lg p-4 flex items-center gap-4">
                    <div className="flex-1">
                      <div className="font-semibold text-lg">{service.name}</div>
                      <div className="text-muted-foreground mt-1">{service.description}</div>
                    </div>
                    <div className="font-bold text-primary text-lg">{service.price}</div>
                  </div>
                ))}
                <div className="flex justify-center mt-4">
                  <Button variant="outline" size="lg" onClick={() => setShowServices(false)}>
                    Hide Services <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Marketplace; 