import { motion } from 'framer-motion';
import { FileText, Wand2, CheckCircle2, Zap, Shield, Users } from 'lucide-react';

const features = [
  {
    icon: FileText,
    title: "Smart Templates",
    description: "Choose from professionally designed templates optimized for ATS systems."
  },
  {
    icon: Wand2,
    title: "AI-Powered Analysis",
    description: "Get instant feedback and suggestions to improve your resume content."
  },
  {
    icon: CheckCircle2,
    title: "ATS Optimization",
    description: "Ensure your resume passes through Applicant Tracking Systems with flying colors."
  },
  {
    icon: Zap,
    title: "Quick Generation",
    description: "Create a professional resume in minutes with our intuitive interface."
  },
  {
    icon: Shield,
    title: "Privacy Focused",
    description: "Your data is secure and never shared with third parties."
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Work with career experts and get feedback on your resume."
  }
];

const cardHover = {
  hover: {
    y: -8,
    boxShadow: "0 8px 32px 0 rgba(99,102,241,0.18)",
    scale: 1.04,
    transition: { type: "spring", stiffness: 300, damping: 18 },
  },
};

export function FeaturesSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Powerful Features</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to create a standout resume that gets noticed
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-background p-6 rounded-lg border transition-shadow duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover="hover"
              whileFocus="hover"
              variants={cardHover}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              tabIndex={0}
              aria-label={feature.title}
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
