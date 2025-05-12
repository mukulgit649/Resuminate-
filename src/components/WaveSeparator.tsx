import { motion } from 'framer-motion';

export function WaveSeparator() {
  return (
    <div className="relative w-full h-28 overflow-hidden">
      {/* Back wave (blurred, glowing) */}
      <motion.svg
        className="absolute w-full h-full"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        style={{ filter: 'blur(8px)' }}
      >
        <defs>
          <linearGradient id="waveGlow" x1="0" y1="0" x2="0" y2="1">
            <stop stopColor="#6366f1" stopOpacity="0.18" />
            <stop offset="1" stopColor="#a5b4fc" stopOpacity="0.12" />
          </linearGradient>
        </defs>
        <path
          fill="url(#waveGlow)"
          d="M0,160L60,170C120,180,240,200,360,192C480,184,600,144,720,133.3C840,123,960,149,1080,154.7C1200,160,1320,144,1380,136L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        />
      </motion.svg>
      {/* Main wave */}
      <motion.svg
        className="absolute w-full h-full"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <defs>
          <linearGradient id="mainWave" x1="0" y1="0" x2="0" y2="1">
            <stop stopColor="#6366f1" stopOpacity="0.22" />
            <stop offset="1" stopColor="#a5b4fc" stopOpacity="0.13" />
          </linearGradient>
        </defs>
        <path
          fill="url(#mainWave)"
          d="M0,192L80,186.7C160,181,320,171,480,176C640,181,800,203,960,197.3C1120,192,1280,160,1360,144L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        />
      </motion.svg>
      {/* Foreground wave (white, subtle) */}
      <motion.svg
        className="absolute w-full h-full"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 0.7 }}
        transition={{ duration: 1.4 }}
      >
        <path
          fill="#fff"
          fillOpacity="0.08"
          d="M0,224L60,213.3C120,203,240,181,360,186.7C480,192,600,224,720,229.3C840,235,960,213,1080,197.3C1200,181,1320,171,1380,165.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        />
      </motion.svg>
    </div>
  );
} 