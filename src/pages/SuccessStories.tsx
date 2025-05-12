import React, { useState } from 'react';
import { motion } from 'framer-motion';

const successStories = [
  {
    id: 1,
    name: 'Alex Thompson',
    role: 'Senior Software Engineer',
    company: 'Google',
    image: '/success/alex.jpg',
    quote: 'ResuGenius helped me craft a resume that perfectly highlighted my technical skills and achievements. I received interview calls from top tech companies within a week!',
    story: 'After being stuck in mid-level positions for years, I used ResuGenius to revamp my resume. The ATS optimization and professional templates helped me land my dream job at Google.',
    beforeScore: 65,
    afterScore: 92,
    timeline: [
      { date: 'Week 1', event: 'Resume Optimization' },
      { date: 'Week 2', event: 'Interview Preparation' },
      { date: 'Week 3', event: 'Job Applications' },
      { date: 'Week 4', event: 'Job Offer' },
    ],
  },
  {
    id: 2,
    name: 'Maria Rodriguez',
    role: 'Marketing Director',
    company: 'Microsoft',
    image: '/success/maria.jpg',
    quote: 'The interview coaching feature was a game-changer. I felt confident and prepared for every question.',
    story: 'Transitioning from a small agency to a tech giant seemed impossible until I used ResuGenius. The platform helped me showcase my achievements in a way that resonated with tech companies.',
    beforeScore: 58,
    afterScore: 89,
    timeline: [
      { date: 'Week 1', event: 'Career Assessment' },
      { date: 'Week 2', event: 'Resume Makeover' },
      { date: 'Week 3', event: 'Interview Practice' },
      { date: 'Week 5', event: 'Job Offer' },
    ],
  },
  {
    id: 3,
    name: 'David Chen',
    role: 'Product Manager',
    company: 'Amazon',
    image: '/success/david.jpg',
    quote: 'The job matching feature helped me find positions that perfectly aligned with my skills and career goals.',
    story: 'I was looking to transition into product management, and ResuGenius helped me identify the right opportunities and prepare for the role change.',
    beforeScore: 62,
    afterScore: 91,
    timeline: [
      { date: 'Week 1', event: 'Skill Assessment' },
      { date: 'Week 2', event: 'Resume Update' },
      { date: 'Week 3', event: 'Job Search' },
      { date: 'Week 4', event: 'Job Offer' },
    ],
  },
];

const categories = ['All', 'Tech', 'Marketing', 'Management', 'Design'];

export const SuccessStories: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredStories = successStories.filter(story =>
    selectedCategory === 'All' || story.role.toLowerCase().includes(selectedCategory.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Success Stories
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real stories from professionals who transformed their careers with ResuGenius
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
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
        </div>
      </section>

      {/* Featured Story */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card rounded-xl overflow-hidden border">
            <div className="md:flex">
              <div className="md:w-1/3">
                <img
                  src={successStories[0].image}
                  alt={successStories[0].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-2/3 p-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-sm text-primary">{successStories[0].role}</span>
                  <span className="text-muted-foreground">at</span>
                  <span className="text-sm font-medium">{successStories[0].company}</span>
                </div>
                <h2 className="text-2xl font-bold mb-4">{successStories[0].name}</h2>
                <p className="text-muted-foreground mb-6 italic">"{successStories[0].quote}"</p>
                <p className="mb-6">{successStories[0].story}</p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <div className="text-sm text-muted-foreground mb-1">Before Score</div>
                    <div className="text-2xl font-bold text-primary">{successStories[0].beforeScore}</div>
                  </div>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <div className="text-sm text-muted-foreground mb-1">After Score</div>
                    <div className="text-2xl font-bold text-primary">{successStories[0].afterScore}</div>
                  </div>
                </div>
                <div className="flex gap-4">
                  {successStories[0].timeline.map((item, index) => (
                    <div key={index} className="flex-1 text-center">
                      <div className="text-sm font-medium">{item.date}</div>
                      <div className="text-xs text-muted-foreground">{item.event}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {filteredStories.slice(1).map((story, index) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl overflow-hidden border hover:border-primary transition-colors"
              >
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={story.image}
                      alt={story.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-xl font-semibold">{story.name}</h3>
                      <div className="text-sm text-muted-foreground">
                        {story.role} at {story.company}
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-6 italic">"{story.quote}"</p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-muted/50 p-3 rounded-lg">
                      <div className="text-xs text-muted-foreground mb-1">Before Score</div>
                      <div className="text-xl font-bold text-primary">{story.beforeScore}</div>
                    </div>
                    <div className="bg-muted/50 p-3 rounded-lg">
                      <div className="text-xs text-muted-foreground mb-1">After Score</div>
                      <div className="text-xl font-bold text-primary">{story.afterScore}</div>
                    </div>
                  </div>
                  <button className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary/90">
                    Read Full Story
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Career?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Join thousands of successful professionals who have used our platform to land their dream jobs
          </p>
          <button className="bg-primary text-white px-8 py-3 rounded-md hover:bg-primary/90">
            Get Started Free
          </button>
        </div>
      </section>
    </div>
  );
}; 