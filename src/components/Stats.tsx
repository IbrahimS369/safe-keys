import React from 'react';
import { motion } from 'framer-motion';
import { Home, Users, Award, MapPin } from 'lucide-react';

const Stats: React.FC = () => {
  const stats = [
    { icon: Home, value: '2,500+', label: 'Properties Sold' },
    { icon: Users, value: '1,200+', label: 'Happy Clients' },
    { icon: Award, value: '15+', label: 'Years Experience' },
    { icon: MapPin, value: '50+', label: 'Locations Covered' },
  ];

  return (
    <section className="py-16 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center text-white"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mb-4">
                  <Icon className="w-8 h-8" />
                </div>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-blue-100">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;