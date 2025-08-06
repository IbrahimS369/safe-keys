import React from 'react';
import { Link } from 'react-router-dom';
import { Bed, Bath, Square, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

interface Property {
  id: number;
  title: string;
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  image: string;
  type: string;
}

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <Link to={`/property/${property.id}`}>
        <div className="relative">
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-64 object-cover"
          />
          <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            {property.type}
          </div>
          <div className="absolute top-4 right-4 bg-white text-gray-900 px-3 py-1 rounded-full text-lg font-bold">
            ${property.price.toLocaleString()}
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{property.title}</h3>
          <div className="flex items-center text-gray-600 mb-4">
            <MapPin className="w-4 h-4 mr-1" />
            <span>{property.location}</span>
          </div>

          <div className="grid grid-cols-3 gap-4 text-sm text-gray-600">
            <div className="flex items-center">
              <Bed className="w-4 h-4 mr-1 text-blue-600" />
              <span>{property.bedrooms} beds</span>
            </div>
            <div className="flex items-center">
              <Bath className="w-4 h-4 mr-1 text-blue-600" />
              <span>{property.bathrooms} baths</span>
            </div>
            <div className="flex items-center">
              <Square className="w-4 h-4 mr-1 text-blue-600" />
              <span>{property.sqft} sqft</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default PropertyCard;