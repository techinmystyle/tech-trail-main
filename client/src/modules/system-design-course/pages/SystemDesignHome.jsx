import React from 'react';
import { motion } from 'framer-motion';
import { Zap, BookOpen, Globe, Server, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import SDCard from '../components/SDCard';
import { useNavigate } from 'react-router-dom';
import PopularCourses from '../../../components/PopularCourses';

export default function SystemDesignHome() {
  const navigate = useNavigate();

  const levels = [
    {
      id: 'level1',
      title: 'Level 1: Basics',
      description: 'Fundamental concepts of system design',
      icon: <BookOpen className="h-8 w-8" />,
      color: 'from-blue-500 to-indigo-700',
      topics: [
        { name: 'System Design Introduction', path: '/system-design-course/level1/system-design-intro' },
        { name: 'Client-Server Architecture', path: '/system-design-course/level1/client-server' },
        { name: 'Latency vs Throughput', path: '/system-design-course/level1/latency-vs-throughput' },
        { name: 'CAP Theorem', path: '/system-design-course/level1/cap-theorem' },
        { name: 'Scaling Strategies', path: '/system-design-course/level1/scaling' }
      ]
    },
    {
      id: 'level2',
      title: 'Level 2: Core',
      description: 'Essential components and patterns',
      icon: <Zap className="h-8 w-8" />,
      color: 'from-emerald-500 to-cyan-600',
      topics: [
        { name: 'Load Balancer', path: '/system-design-course/level2/load-balancer' },
        { name: 'Databases', path: '/system-design-course/level2/databases' },
        { name: 'Caching', path: '/system-design-course/level2/caching' },
        { name: 'Content Delivery Network', path: '/system-design-course/level2/cdn' },
        { name: 'Message Queue', path: '/system-design-course/level2/message-queue' }
      ]
    },
    {
      id: 'level3',
      title: 'Level 3: Advanced',
      description: 'Complex architectural patterns',
      icon: <Globe className="h-8 w-8" />,
      color: 'from-fuchsia-500 to-violet-700',
      topics: [
        { name: 'Microservices', path: '/system-design-course/level3/microservices' },
        { name: 'API Gateway', path: '/system-design-course/level3/api-gateway' },
        { name: 'Rate Limiting', path: '/system-design-course/level3/rate-limiting' },
        { name: 'Database Sharding', path: '/system-design-course/level3/sharding' },
        { name: 'Consistent Hashing', path: '/system-design-course/level3/consistent-hashing' }
      ]
    },
    {
      id: 'level4',
      title: 'Level 4: System Design',
      description: 'Real-world system implementations',
      icon: <Server className="h-8 w-8" />,
      color: 'from-rose-500 to-orange-600',
      topics: [
        { name: 'WhatsApp', path: '/system-design-course/level4/whatsapp' },
        { name: 'Instagram', path: '/system-design-course/level4/instagram' },
        { name: 'Netflix', path: '/system-design-course/level4/netflix' },
        { name: 'URL Shortener', path: '/system-design-course/level4/url-shortener' },
        { name: 'Uber', path: '/system-design-course/level4/uber' }
      ]
    }
  ];

  const handleTopicClick = (path) => {
    navigate(path);
  };

  return (
    <div className="mx-auto max-w-7xl space-y-8 px-4 py-5 sm:px-6 lg:px-8">
      <SDCard className="overflow-hidden" animate={false}>
        <div className="relative bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 p-8 text-white">
          <div className="absolute right-4 top-4 hidden rounded-full border border-white/30 bg-white/15 p-2 backdrop-blur sm:block">
            <Sparkles className="h-5 w-5" />
          </div>
          <h1 className="mb-3 text-4xl font-black tracking-tight md:text-5xl">
            System Design, Reimagined
          </h1>
          <p className="max-w-3xl text-sm opacity-95 sm:text-base">
            Learn architecture from first principles to real-world case studies through visual flows, practical trade-offs,
            and interview-ready patterns.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {['Scalable Patterns', 'Interview Focused', 'Visual Architecture'].map((chip) => (
              <span key={chip} className="rounded-full border border-white/35 bg-white/15 px-3 py-1 text-xs font-semibold backdrop-blur">
                {chip}
              </span>
            ))}
          </div>
        </div>
      </SDCard>

      <div className="sd-level-grid">
        {levels.map((level) => (
          <SDCard key={level.id} className="h-full">
            <div className={`bg-gradient-to-r ${level.color} text-white p-6 rounded-t-2xl`}>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold">{level.title}</h2>
                {level.icon}
              </div>
              <p className="text-sm opacity-90">{level.description}</p>
            </div>
            
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                Topics
              </h3>
              <div className="space-y-2">
                {level.topics.map((topic, index) => (
                  <button
                    key={index}
                    onClick={() => handleTopicClick(topic.path)}
                    className="w-full text-left p-4 sd-neumorphic-btn rounded-lg transition-all group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-300">
                        {topic.name}
                      </span>
                      <ArrowRight className="h-4 w-4 text-gray-400 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-indigo-500 dark:group-hover:text-indigo-300" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </SDCard>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <SDCard animate={false}>
          <div className="grid gap-3 sm:grid-cols-3">
            {['Build intuition', 'Practice trade-offs', 'Design under constraints'].map((item) => (
              <div key={item} className="sd-neumorphic-btn flex items-center gap-2 px-4 py-3">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </SDCard>
      </motion.div>

      <PopularCourses />
    </div>
  );
}
