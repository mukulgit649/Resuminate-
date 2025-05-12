import React, { useState } from 'react';
import { motion } from 'framer-motion';

const templates = [
  {
    id: 1,
    name: 'Modern Minimalist',
    category: 'Professional',
    style: 'Modern',
    preview: '/templates/modern-minimalist.png',
    description: 'Clean and contemporary design perfect for tech and creative roles',
    features: ['ATS-friendly', 'Customizable sections', 'Modern typography'],
  },
  {
    id: 2,
    name: 'Executive Classic',
    category: 'Professional',
    style: 'Traditional',
    preview: '/templates/executive-classic.png',
    description: 'Timeless design ideal for executive and management positions',
    features: ['Professional layout', 'Emphasis on experience', 'Elegant design'],
  },
  {
    id: 3,
    name: 'Creative Portfolio',
    category: 'Creative',
    style: 'Modern',
    preview: '/templates/creative-portfolio.png',
    description: 'Stand out with this creative design for design and marketing roles',
    features: ['Visual elements', 'Portfolio integration', 'Creative layout'],
  },
  // Add more templates as needed
];

const categories = ['All', 'Professional', 'Creative', 'Technical', 'Academic'];
const styles = ['All', 'Modern', 'Traditional', 'Creative'];

export const Templates: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedStyle, setSelectedStyle] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTemplates = templates.filter(template => {
    const matchesCategory = selectedCategory === 'All' || template.category === selectedCategory;
    const matchesStyle = selectedStyle === 'All' || template.style === selectedStyle;
    const matchesSearch = template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesStyle && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional Resume Templates
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Choose from our collection of ATS-optimized templates designed to help you land your dream job
            </p>
            <div className="max-w-xl mx-auto">
              <input
                type="text"
                placeholder="Search templates..."
                className="w-full px-4 py-3 rounded-lg border bg-background"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="flex gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm ${
                    selectedCategory === category
                      ? 'bg-primary text-white'
                      : 'bg-muted hover:bg-muted/80'
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              {styles.map(style => (
                <button
                  key={style}
                  className={`px-4 py-2 rounded-full text-sm ${
                    selectedStyle === style
                      ? 'bg-primary text-white'
                      : 'bg-muted hover:bg-muted/80'
                  }`}
                  onClick={() => setSelectedStyle(style)}
                >
                  {style}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Template Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTemplates.map(template => (
              <motion.div
                key={template.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-card rounded-xl overflow-hidden border hover:border-primary transition-colors"
              >
                <div className="aspect-[3/4] bg-muted/50 relative group">
                  <img
                    src={template.preview}
                    alt={template.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90">
                      Preview Template
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold">{template.name}</h3>
                    <span className="text-sm text-muted-foreground">{template.style}</span>
                  </div>
                  <p className="text-muted-foreground mb-4">{template.description}</p>
                  <div className="space-y-2">
                    {template.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm">
                        <svg className="w-4 h-4 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 flex gap-4">
                    <button className="flex-1 bg-primary text-white py-2 rounded-md hover:bg-primary/90">
                      Use Template
                    </button>
                    <button className="px-4 py-2 border rounded-md hover:bg-muted">
                      Download
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Can't Find What You're Looking For?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            We're constantly adding new templates. Let us know what you need!
          </p>
          <button className="bg-primary text-white px-8 py-3 rounded-md hover:bg-primary/90">
            Request a Template
          </button>
        </div>
      </section>
    </div>
  );
}; 