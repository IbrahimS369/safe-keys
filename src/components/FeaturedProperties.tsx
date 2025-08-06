import React from 'react';
import { motion } from 'framer-motion';
import PropertyCard from './PropertyCard';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const FeaturedProperties: React.FC = () => {
  const featuredProperties = [
    {
      id: 1,
      title: 'Modern Villa with Pool',
      price: 750000,
      location: 'Beverly Hills, CA',
      bedrooms: 4,
      bathrooms: 3,
      sqft: 2500,
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
      type: 'House'
    },
    {
      id: 2,
      title: 'Downtown Luxury Apartment',
      price: 425000,
      location: 'Manhattan, NY',
      bedrooms: 2,
      bathrooms: 2,
      sqft: 1200,
      image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800',
      type: 'Apartment'
    },
    {
      id: 3,
      title: 'Suburban Family Home',
      price: 325000,
      location: 'Austin, TX',
      bedrooms: 3,
      bathrooms: 2,
      sqft: 1800,
      image: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=800',
      type: 'House'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Featured Properties
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600"
          >
            Discover our handpicked selection of premium properties
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProperties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <PropertyCard property={property} />
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/properties"
            className="inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            <span>View All Properties</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;