
import { Award, CheckCircle, FileText, Search } from "lucide-react";
import { useEffect, useRef } from "react";

const features = [
  {
    icon: <CheckCircle className="h-8 w-8 text-resugenius-primary" />,
    title: "Smart Resume Scoring",
    description: "Get an instant ATS compatibility score with specific improvement insights.",
  },
  {
    icon: <FileText className="h-8 w-8 text-resugenius-primary" />,
    title: "Real-time AI Suggestions",
    description: "Receive tailored recommendations to enhance your resume's impact and clarity.",
  },
  {
    icon: <Search className="h-8 w-8 text-resugenius-primary" />,
    title: "Keyword Matcher",
    description: "Match your skills and experience to job descriptions automatically.",
  },
  {
    icon: <Award className="h-8 w-8 text-resugenius-primary" />,
    title: "Role-Based Resume Generator",
    description: "Customize your resume for specific industries and positions with one click.",
  },
];

const FeaturesSection = () => {
  const featuresRef = useRef<HTMLDivElement>(null);

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

    const featuresElements = document.querySelectorAll(".feature-card");
    featuresElements.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      featuresElements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section className="py-20 px-4 md:px-8 bg-resugenius-background" ref={featuresRef}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for Your Career Success
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            ResuGenius helps you optimize your resume for every job application with powerful AI-driven tools
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card card p-6 opacity-0"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="mb-4 p-3 bg-indigo-50 rounded-xl inline-block">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
