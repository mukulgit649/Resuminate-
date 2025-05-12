import React from 'react';
import { motion } from 'framer-motion';
import { BarChart2, FileText, Target, MessageSquare, Users, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { SEO } from '@/components/SEO';

const Dashboard: React.FC = () => {
  const stats = [
    {
      icon: <FileText className="w-6 h-6" />,
      label: "Resume Score",
      value: "85%",
      change: "+5%",
      positive: true
    },
    {
      icon: <Target className="w-6 h-6" />,
      label: "Job Matches",
      value: "24",
      change: "+3",
      positive: true
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      label: "Interview Score",
      value: "92%",
      change: "+8%",
      positive: true
    },
    {
      icon: <Users className="w-6 h-6" />,
      label: "Profile Views",
      value: "156",
      change: "-2%",
      positive: false
    }
  ];

  const activities = [
    {
      type: "Resume Update",
      description: "Added new project experience",
      time: "2 hours ago"
    },
    {
      type: "Interview Practice",
      description: "Completed leadership questions",
      time: "Yesterday"
    },
    {
      type: "Job Match",
      description: "New match: Senior Developer at Tech Co",
      time: "2 days ago"
    }
  ];

  const skills = [
    { name: "React", score: 90 },
    { name: "TypeScript", score: 85 },
    { name: "Node.js", score: 80 },
    { name: "AWS", score: 75 }
  ];

  return (
    <>
      <SEO 
        title="Career Dashboard - Resuminate"
        description="Track your career progress and job search metrics"
        keywords={['career dashboard', 'job metrics', 'career tracking']}
      />
      
      <div className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h1 className="text-4xl font-bold mb-4">Career Dashboard</h1>
            <p className="text-xl text-muted-foreground">
              Track your progress and optimize your job search
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 border"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                    {stat.icon}
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <h3 className="text-2xl font-bold">{stat.value}</h3>
                  </div>
                </div>
                <div className={`text-sm ${stat.positive ? 'text-green-500' : 'text-red-500'} flex items-center gap-1`}>
                  <TrendingUp className="w-4 h-4" />
                  {stat.change} this week
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Skills Analysis */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-card rounded-xl p-6 border lg:col-span-2"
            >
              <h2 className="text-xl font-semibold mb-6">Skills Analysis</h2>
              <div className="space-y-6">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-primary">{skill.score}%</span>
                    </div>
                    <Progress value={skill.score} className="h-2" />
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Recent Activity */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-card rounded-xl p-6 border"
            >
              <h2 className="text-xl font-semibold mb-6">Recent Activity</h2>
              <div className="space-y-6">
                {activities.map((activity, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                    <div>
                      <p className="font-medium">{activity.type}</p>
                      <p className="text-sm text-muted-foreground">{activity.description}</p>
                      <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-6">
                View All Activity
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard; 