import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import Skills from './components/Skills';

export default function ModernCardResume() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 0.2,
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 via-pink-600 to-orange-500 flex items-center justify-center p-4 sm:p-8">
      <motion.div
        className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
      >
        <div className="bg-gray-900 text-white p-8 sm:p-12">
          <motion.h1
            className="text-4xl sm:text-5xl font-extrabold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
            variants={itemVariants}
          >
            Ендальцев Михаил
          </motion.h1>
          <motion.p
            className="text-xl sm:text-2xl mb-4 text-gray-300"
            variants={itemVariants}
          >
            Full Stack Developer
          </motion.p>
          <motion.div className="flex space-x-4 mb-4" variants={itemVariants}>
            <a
              href="https://github.com/endaltsv"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:endaltsv@yandex.ru"
              className="hover:text-blue-400 transition-colors"
            >
              <Mail className="h-6 w-6" />
            </a>
          </motion.div>
          <motion.div
            className="flex items-center text-sm text-gray-400"
            variants={itemVariants}
          >
            <MapPin className="h-4 w-4 mr-2" />
            <span>Москва, Россия</span>
          </motion.div>
        </div>

        <div className="p-8 sm:p-12 bg-gray-50">
          <motion.section className="mb-8" variants={itemVariants}>
            <Skills />
          </motion.section>

          <motion.section className="mb-8" variants={itemVariants}>
            <Button
              variant="ghost"
              className="w-full justify-between text-left font-semibold text-lg mb-2"
              onClick={() => toggleSection('projects')}
            >
              Проекты
              {expandedSection === 'projects' ? (
                <ChevronUp className="h-5 w-5" />
              ) : (
                <ChevronDown className="h-5 w-5" />
              )}
            </Button>
            {expandedSection === 'projects' && (
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-white border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <h3 className="text-lg font-semibold">Шпион расходов</h3>
                    <p className="text-gray-600 mt-1">
                      Мобильное приложение для отслеживания расходов
                    </p>
                    <div className="mt-2">
                      <Badge
                        variant="outline"
                        className="mr-2 border-gray-300 text-gray-600"
                      >
                        React Native
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-white border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <h3 className="text-lg font-semibold">Poker Room</h3>
                    <p className="text-gray-600 mt-1">
                      Веб-приложение для игры в покер
                    </p>
                    <div className="mt-2">
                      <Badge
                        variant="outline"
                        className="mr-2 border-gray-300 text-gray-600"
                      >
                        React
                      </Badge>
                      <Badge
                        variant="outline"
                        className="mr-2 border-gray-300 text-gray-600"
                      >
                        Socket.io
                      </Badge>
                      <Badge
                        variant="outline"
                        className="mr-2 border-gray-300 text-gray-600"
                      >
                        NodeJs
                      </Badge>
                      <Badge
                        variant="outline"
                        className="border-gray-300 text-gray-600"
                      >
                        Express
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </motion.section>

          <motion.section variants={itemVariants}>
            <Button
              variant="ghost"
              className="w-full justify-between text-left font-semibold text-lg mb-2"
              onClick={() => toggleSection('education')}
            >
              Образование
              {expandedSection === 'education' ? (
                <ChevronUp className="h-5 w-5" />
              ) : (
                <ChevronDown className="h-5 w-5" />
              )}
            </Button>
            {expandedSection === 'education' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-white border-gray-200 shadow-sm">
                  <CardContent className="p-4">
                    <h3 className="text-lg font-semibold">
                      Специалитет | Безопасность информационных технологий в
                      правоохранительной сфере
                    </h3>
                    <p className="text-gray-600">
                      Российский технологический университет | 2022 - 2027
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </motion.section>
        </div>
      </motion.div>
    </div>
  );
}
