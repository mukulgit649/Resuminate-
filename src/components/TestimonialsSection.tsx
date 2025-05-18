import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Senior Software Engineer",
    company: "TechCorp",
    avatar: "👩‍💻",
    quote: "This tool transformed my resume into an ATS magnet. Landed interviews at top tech companies within weeks!",
    rating: 5
  },
  {
    name: "Michael Rodriguez",
    role: "Product Manager",
    company: "InnovateX",
    avatar: "👨‍💼",
    quote: "The interview coaching feature is a game-changer. It helped me prepare for questions I never thought about.",
    rating: 5
  },
  {
    name: "Priya Patel",
    role: "Data Scientist",
    company: "DataFlow",
    avatar: "👩‍🔬",
    quote: "The job matching algorithm is incredibly accurate. Found my dream role that perfectly matches my skills.",
    rating: 5
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        {/* Trusted By Banner */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-indigo-50 dark:bg-indigo-900/20 px-6 py-2 rounded-full"
          >
            <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
              Trusted by 10,000+ professionals worldwide
            </p>
          </motion.div>
        </div>

        {/* Testimonials Carousel */}
        <Carousel className="relative max-w-3xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="px-2">
                <motion.div
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="bg-card rounded-xl p-6 shadow-lg border hover:shadow-xl transition-shadow h-full flex flex-col justify-between"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-4xl">{testimonial.avatar}</div>
                    <div>
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <div className="relative flex-1">
                    <Quote className="absolute -top-2 -left-2 w-6 h-6 text-indigo-400 opacity-20" />
                    <p className="text-muted-foreground italic relative z-10">
                      {testimonial.quote}
                    </p>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-2 mt-6">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </section>
  );
}; 