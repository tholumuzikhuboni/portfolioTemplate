import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Layout, Palette, Server, Smartphone, Zap, Globe, Cloud, Lock } from 'lucide-react';

const skills = [
  { 
    name: 'React.js', 
    icon: <Code2 className="w-6 h-6" />,
    description: 'Building modern web applications with React and its ecosystem'
  },
  { 
    name: 'JavaScript', 
    icon: <Zap className="w-6 h-6" />,
    description: 'Expert in ES6+ features and modern JavaScript development'
  },
  { 
    name: 'Tailwind CSS', 
    icon: <Palette className="w-6 h-6" />,
    description: 'Creating beautiful, responsive designs with utility-first CSS'
  },
  { 
    name: 'Firebase', 
    icon: <Server className="w-6 h-6" />,
    description: 'Backend development with Firebase services'
  },
  { 
    name: 'Supabase', 
    icon: <Database className="w-6 h-6" />,
    description: 'Open source Firebase alternative with PostgreSQL'
  },
  { 
    name: 'Responsive Design', 
    icon: <Smartphone className="w-6 h-6" />,
    description: 'Creating layouts that work perfectly across all devices'
  },
  { 
    name: 'Web Performance', 
    icon: <Globe className="w-6 h-6" />,
    description: 'Optimizing applications for maximum speed and efficiency'
  },
  { 
    name: 'Cloud Services', 
    icon: <Cloud className="w-6 h-6" />,
    description: 'Experience with AWS, Google Cloud, and Azure'
  },
  { 
    name: 'Security', 
    icon: <Lock className="w-6 h-6" />,
    description: 'Implementing secure authentication and authorization'
  }
];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wider">About Me</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-2 mb-4">
            Passionate about creating
            <span className="text-blue-600 dark:text-blue-400"> beautiful web experiences</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate Frontend Developer with 5+ years of experience in building modern web applications.
            My journey in web development started with a curiosity about how things work on the internet,
            and has evolved into a deep love for creating intuitive and engaging user experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                  {skill.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {skill.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {skill.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
          >
            Let's work together
          </a>
        </motion.div>
      </div>
    </section>
  );
};