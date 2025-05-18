import React from 'react';
import { motion } from 'framer-motion';
import { BarChart2, FileText, Target, MessageSquare, Users, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { SEO } from '@/components/SEO';
import { ChartContainer } from '@/components/ui/chart';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid } from 'recharts';

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

  // Demo progress data
  const progressData = [
    { date: '2024-05-01', ats: 72, match: 65, interview: 80 },
    { date: '2024-05-05', ats: 78, match: 70, interview: 82 },
    { date: '2024-05-10', ats: 81, match: 75, interview: 85 },
    { date: '2024-05-15', ats: 85, match: 80, interview: 88 },
    { date: '2024-05-20', ats: 87, match: 83, interview: 90 },
    { date: '2024-05-25', ats: 90, match: 85, interview: 92 },
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

          {/* Progress Over Time Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-card rounded-xl p-6 border mb-8"
          >
            <h2 className="text-xl font-semibold mb-6">Progress Over Time</h2>
            <div className="w-full h-72">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={progressData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" tick={{ fontSize: 12 }} />
                  <YAxis domain={[60, 100]} tick={{ fontSize: 12 }} />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="ats" name="ATS Score" stroke="#6366f1" strokeWidth={2} dot={{ r: 4 }} />
                  <Line type="monotone" dataKey="match" name="Job Match" stroke="#10b981" strokeWidth={2} dot={{ r: 4 }} />
                  <Line type="monotone" dataKey="interview" name="Interview Score" stroke="#f59e42" strokeWidth={2} dot={{ r: 4 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
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