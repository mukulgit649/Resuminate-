
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Check } from "lucide-react";

const PricingPlans = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Free",
      description: "Perfect for trying out ResuGenius",
      monthlyPrice: 0,
      yearlyPrice: 0,
      features: [
        "1 Resume Analysis",
        "Basic ATS Compatibility Check",
        "Limited Keyword Matching",
        "Export as PDF",
        "2 Basic Templates",
      ],
      buttonText: "Get Started",
      mostPopular: false,
    },
    {
      name: "Pro",
      description: "Ideal for active job seekers",
      monthlyPrice: 12.99,
      yearlyPrice: 9.99,
      features: [
        "Unlimited Resume Analysis",
        "Advanced ATS Optimization",
        "Full Keyword Matching",
        "Export in Multiple Formats",
        "10+ Premium Templates",
        "Interview Question Preparation",
      ],
      buttonText: "Start 7-Day Trial",
      mostPopular: true,
    },
    {
      name: "Premium",
      description: "For career professionals",
      monthlyPrice: 24.99,
      yearlyPrice: 19.99,
      features: [
        "Everything in Pro plan",
        "Cover Letter Analysis & Generation",
        "LinkedIn Profile Optimization",
        "1-on-1 Career Expert Session",
        "Priority Support",
        "All Future Features",
      ],
      buttonText: "Get Premium",
      mostPopular: false,
    },
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Plan
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
            Get the right plan for your career needs
          </p>
          
          <div className="flex items-center justify-center gap-3">
            <span className={`text-sm font-medium ${!isYearly ? 'text-gray-900' : 'text-gray-500'}`}>Monthly</span>
            <Switch
              checked={isYearly}
              onCheckedChange={setIsYearly}
              className="data-[state=checked]:bg-resugenius-primary"
            />
            <span className={`text-sm font-medium ${isYearly ? 'text-gray-900' : 'text-gray-500'}`}>
              Yearly <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded">Save 20%</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`card p-8 relative ${plan.mostPopular ? 'border-2 border-resugenius-primary shadow-lg' : ''}`}
            >
              {plan.mostPopular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-resugenius-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="mb-4">
                  <span className="text-4xl font-bold">
                    ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-gray-600">/{isYearly ? 'year' : 'month'}</span>
                </div>
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-resugenius-primary shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className={`w-full ${plan.mostPopular ? 'btn-primary' : 'btn-outline'}`}
              >
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
