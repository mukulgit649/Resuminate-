
import { FileText, Settings, Star } from "lucide-react";
import { useEffect } from "react";

const steps = [
  {
    icon: <FileText className="h-12 w-12 text-resugenius-primary" />,
    title: "Upload Your Resume",
    description: "Upload your existing resume in PDF, Word, or plain text format.",
  },
  {
    icon: <Settings className="h-12 w-12 text-resugenius-primary" />,
    title: "AI Analysis",
    description: "Our AI reviews your resume against ATS systems and industry standards.",
  },
  {
    icon: <Star className="h-12 w-12 text-resugenius-primary" />,
    title: "Improve & Download",
    description: "Follow the suggestions, make improvements, and download your optimized resume.",
  },
];

const HowItWorks = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const stepElements = document.querySelectorAll(".step-card");
    stepElements.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      stepElements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-indigo-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How ResuGenius Works
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Get your resume optimized in just three simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="step-card card p-8 text-center opacity-0"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex justify-center mb-6">
                <div className="w-24 h-24 rounded-full bg-indigo-50 flex items-center justify-center">
                  {step.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
              <div className="mt-6">
                <span className="inline-block bg-indigo-100 text-resugenius-primary font-semibold px-4 py-1 rounded-full">
                  Step {index + 1}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
