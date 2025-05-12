import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const faqs = [
  {
    question: "What is ATS and why is it important?",
    answer: "ATS (Applicant Tracking System) is software used by employers to collect, sort, scan, and rank job applications. It's crucial because over 75% of companies use ATS to filter resumes before they reach human eyes. Our platform helps you optimize your resume to pass these systems."
  },
  {
    question: "How accurate is the AI interview coach?",
    answer: "Our AI interview coach uses advanced natural language processing to provide realistic interview simulations. It analyzes your responses for clarity, relevance, and impact, offering specific feedback on areas like communication skills, content structure, and confidence indicators."
  },
  {
    question: "Can I use Resuminate for any industry?",
    answer: "Yes! Resuminate is designed to work across all industries. Our AI adapts to industry-specific keywords, requirements, and best practices, whether you're in tech, healthcare, finance, or any other field."
  },
  {
    question: "How does the job matching work?",
    answer: "Our job matching algorithm analyzes your resume, skills, and experience to find the most relevant opportunities. It considers factors like required skills, experience level, location preferences, and company culture to provide personalized job recommendations."
  },
  {
    question: "Is my data secure with Resuminate?",
    answer: "Absolutely. We take data security seriously. Your resume and personal information are encrypted, and we never share your data with third parties. We comply with GDPR and other relevant data protection regulations."
  },
  {
    question: "What file formats are supported?",
    answer: "We support all common resume formats including PDF, DOCX, DOC, and TXT. You can also create a new resume from scratch using our templates."
  }
];

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-border">
      <button
        className="flex w-full items-center justify-between py-4 text-left"
        onClick={onClick}
      >
        <span className="text-lg font-medium">{question}</span>
        <ChevronDown
          className={cn(
            "h-5 w-5 text-muted-foreground transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="pb-4 text-muted-foreground">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-muted/50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground"
          >
            Everything you need to know about Resuminate
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}; 