import React, { useState } from 'react';
import { motion } from 'framer-motion';

const blogPosts = [
  {
    id: 1,
    title: 'How to Write a Resume That Stands Out in 2024',
    category: 'Resume Writing',
    date: 'March 15, 2024',
    readTime: '8 min read',
    author: {
      name: 'Sarah Johnson',
      role: 'Career Coach',
      avatar: '/authors/sarah.jpg',
    },
    excerpt: 'Learn the latest resume writing techniques that will help you get noticed by top employers in 2024.',
    image: '/blog/resume-2024.jpg',
    tags: ['Resume Tips', 'Career Advice', 'Job Search'],
  },
  {
    id: 2,
    title: 'The Ultimate Guide to ATS Optimization',
    category: 'Resume Writing',
    date: 'March 10, 2024',
    readTime: '10 min read',
    author: {
      name: 'Michael Chen',
      role: 'HR Specialist',
      avatar: '/authors/michael.jpg',
    },
    excerpt: 'Master the art of ATS optimization and increase your chances of getting past the initial screening.',
    image: '/blog/ats-guide.jpg',
    tags: ['ATS', 'Resume Tips', 'Job Search'],
  },
  {
    id: 3,
    title: 'Top 10 Interview Questions and How to Answer Them',
    category: 'Interview Skills',
    date: 'March 5, 2024',
    readTime: '12 min read',
    author: {
      name: 'Emily Rodriguez',
      role: 'Interview Coach',
      avatar: '/authors/emily.jpg',
    },
    excerpt: 'Prepare for your next interview with our comprehensive guide to common interview questions.',
    image: '/blog/interview-questions.jpg',
    tags: ['Interview Tips', 'Career Advice'],
  },
];

const categories = ['All', 'Resume Writing', 'Interview Skills', 'Career Growth', 'Job Search'];
const tags = ['Resume Tips', 'Career Advice', 'Job Search', 'ATS', 'Interview Tips'];

export const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesTags = selectedTags.length === 0 || selectedTags.some(tag => post.tags.includes(tag));
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesTags && matchesSearch;
  });

  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Career Insights & Tips
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Expert advice and industry insights to help you advance your career
            </p>
            <div className="max-w-xl mx-auto">
              <input
                type="text"
                placeholder="Search articles..."
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
          </div>
          <div className="mt-4 flex flex-wrap gap-2 justify-center">
            {tags.map(tag => (
              <button
                key={tag}
                className={`px-3 py-1 rounded-full text-sm ${
                  selectedTags.includes(tag)
                    ? 'bg-primary/20 text-primary border border-primary'
                    : 'bg-muted hover:bg-muted/80'
                }`}
                onClick={() => toggleTag(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card rounded-xl overflow-hidden border">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-sm text-primary">{blogPosts[0].category}</span>
                  <span className="text-muted-foreground">•</span>
                  <span className="text-sm text-muted-foreground">{blogPosts[0].date}</span>
                  <span className="text-muted-foreground">•</span>
                  <span className="text-sm text-muted-foreground">{blogPosts[0].readTime}</span>
                </div>
                <h2 className="text-2xl font-bold mb-4">{blogPosts[0].title}</h2>
                <p className="text-muted-foreground mb-6">{blogPosts[0].excerpt}</p>
                <div className="flex items-center gap-4">
                  <img
                    src={blogPosts[0].author.avatar}
                    alt={blogPosts[0].author.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <div className="font-medium">{blogPosts[0].author.name}</div>
                    <div className="text-sm text-muted-foreground">{blogPosts[0].author.role}</div>
                  </div>
                </div>
                <button className="mt-6 w-full bg-primary text-white py-2 rounded-md hover:bg-primary/90">
                  Read Article
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(1).map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl overflow-hidden border hover:border-primary transition-colors"
              >
                <div className="aspect-video bg-muted/50">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-sm text-primary">{post.category}</span>
                    <span className="text-muted-foreground">•</span>
                    <span className="text-sm text-muted-foreground">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-muted rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="w-8 h-8 rounded-full"
                      />
                      <div>
                        <div className="text-sm font-medium">{post.author.name}</div>
                        <div className="text-xs text-muted-foreground">{post.readTime}</div>
                      </div>
                    </div>
                    <button className="text-primary hover:underline">
                      Read More →
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card rounded-xl p-8 border text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Get the latest career tips and industry insights delivered to your inbox
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-md border bg-background"
              />
              <button className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}; 