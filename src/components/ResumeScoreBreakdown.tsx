import { motion } from 'framer-motion';
import { CheckCircle, AlertTriangle, Info, TrendingUp, AlignLeft, Sparkles, UserCheck } from 'lucide-react';

const breakdowns = [
  {
    label: 'Impact',
    score: 92,
    color: 'from-green-400 to-green-600',
    icon: TrendingUp,
    status: 'Excellent',
  },
  {
    label: 'Brevity',
    score: 74,
    color: 'from-yellow-400 to-yellow-600',
    icon: AlignLeft,
    status: 'Good',
  },
  {
    label: 'Style',
    score: 88,
    color: 'from-blue-400 to-blue-600',
    icon: Sparkles,
    status: 'Very Good',
  },
  {
    label: 'Skills',
    score: 80,
    color: 'from-purple-400 to-purple-600',
    icon: UserCheck,
    status: 'Strong',
  },
];

const tips = [
  {
    text: 'Quantify your achievements with numbers.',
    icon: CheckCircle,
    color: 'text-green-500',
  },
  {
    text: 'Use more action verbs in your bullet points.',
    icon: AlertTriangle,
    color: 'text-yellow-500',
  },
  {
    text: 'Avoid long paragraphs; use concise statements.',
    icon: Info,
    color: 'text-blue-500',
  },
];

export function ResumeScoreBreakdown() {
  return (
    <section className="max-w-3xl mx-auto my-12 p-8 bg-background rounded-xl shadow-lg border">
      {/* Overall Score */}
      <motion.div
        className="mb-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-lg font-semibold text-indigo-400">Overall Resume Score</span>
          <div className="relative w-32 h-32 flex items-center justify-center">
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" fill="none" stroke="#e0e7ff" strokeWidth="10" />
              <motion.circle
                cx="50" cy="50" r="45" fill="none"
                stroke="url(#scoreGrad)"
                strokeWidth="10"
                strokeDasharray={282.74}
                strokeDashoffset={282.74 * (1 - 0.84)}
                strokeLinecap="round"
                initial={{ strokeDashoffset: 282.74 }}
                animate={{ strokeDashoffset: 282.74 * (1 - 0.84) }}
                transition={{ duration: 1.2 }}
              />
              <defs>
                <linearGradient id="scoreGrad" x1="0" y1="0" x2="100" y2="100">
                  <stop stopColor="#6366f1" />
                  <stop offset="1" stopColor="#a5b4fc" />
                </linearGradient>
              </defs>
            </svg>
            <span className="text-4xl font-bold text-indigo-500 z-10">84</span>
          </div>
          <span className="text-sm text-muted-foreground">Based on structure, keywords, and best practices</span>
        </div>
      </motion.div>
      {/* Breakdown Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
        {breakdowns.map((b, i) => (
          <motion.div
            key={b.label}
            className="rounded-lg p-5 bg-gradient-to-br shadow-md border flex items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))` }}
            // Tailwind's bg-gradient-to-br and from/to colors
            // e.g. from-green-400 to-green-600
            // We'll use className for color, but also set a fallback bg
            // (for customizability)
            // className={`bg-gradient-to-br ${b.color}`}
          >
            <b.icon className={`h-8 w-8 ${b.color.split(' ')[0].replace('from-', 'text-')}`} />
            <div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-white drop-shadow">{b.label}</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-white/20 text-white/80 ml-2">{b.status}</span>
              </div>
              <div className="text-lg font-bold text-white drop-shadow">{b.score}/100</div>
            </div>
          </motion.div>
        ))}
      </div>
      {/* Actionable Tips */}
      <div className="mt-6">
        <span className="block text-lg font-semibold mb-3 text-indigo-400">Actionable Tips</span>
        <ul className="space-y-3">
          {tips.map((tip, i) => (
            <li key={i} className="flex items-center gap-3">
              <tip.icon className={`h-5 w-5 ${tip.color}`} />
              <span className="text-sm text-muted-foreground">{tip.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
} 