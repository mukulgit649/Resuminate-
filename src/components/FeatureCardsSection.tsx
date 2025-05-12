import { motion } from 'framer-motion';
import { FileText, BookOpen, Target, Linkedin } from 'lucide-react';

const features = [
  {
    title: 'Instant Resume Review',
    icon: FileText,
    description: 'Upload your resume and get instant, actionable feedback powered by AI. Improve your chances of landing interviews.',
    color: 'from-indigo-400 to-indigo-600',
  },
  {
    title: 'Resume Samples',
    icon: BookOpen,
    description: 'Browse curated samples and bullet points for top tech roles. Get inspired and write better resumes.',
    color: 'from-green-400 to-green-600',
  },
  {
    title: 'Resume Targeting',
    icon: Target,
    description: 'Tailor your resume for specific jobs. Match keywords and skills to maximize your ATS score.',
    color: 'from-purple-400 to-purple-600',
  },
  {
    title: 'LinkedIn Optimization',
    icon: Linkedin,
    description: 'Analyze and optimize your LinkedIn profile for recruiter visibility and job search success.',
    color: 'from-blue-400 to-blue-600',
  },
];

const cardHover = {
  hover: {
    y: -8,
    boxShadow: "0 8px 32px 0 rgba(99,102,241,0.18)",
    scale: 1.04,
    transition: { type: "spring", stiffness: 300, damping: 18 },
  },
};

export function FeatureCardsSection() {
  return (
    <section className="max-w-6xl mx-auto my-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-10 text-indigo-400">What You Can Do</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, i) => (
          <motion.div
            key={feature.title}
            className={`rounded-xl p-8 bg-gradient-to-br ${feature.color} shadow-lg border border-white/10 flex flex-col items-center text-center transition-shadow duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover="hover"
            whileFocus="hover"
            variants={cardHover}
            viewport={{ once: true }}
            tabIndex={0}
            aria-label={feature.title}
          >
            <feature.icon className="h-10 w-10 mb-4 text-white drop-shadow" />
            <h3 className="text-xl font-semibold text-white mb-2 drop-shadow">{feature.title}</h3>
            <p className="text-white/80 mb-4 text-sm">{feature.description}</p>
            {/* <button className="btn-outline text-sm px-6 py-2 border-white text-white hover:bg-white/10 transition-colors duration-200">Learn more</button> */}
          </motion.div>
        ))}
      </div>
    </section>
  );
} 