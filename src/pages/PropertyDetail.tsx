import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Bed, Bath, Square, MapPin, Calendar, Car, Wifi, Dumbbell, Shield, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const PropertyDetail: React.FC = () => {
  const { id } = useParams();
  const [currentImage, setCurrentImage] = useState(0);

  // Mock data - in a real app, this would be fetched based on the ID
  const property = {
    id: parseInt(id || '1'),
    title: 'Modern Villa with Pool',
    price: 750000,
    location: '123 Beverly Hills Drive, Beverly Hills, CA 90210',
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2500,
    type: 'House',
    yearBuilt: 2020,
    parking: 2,
    description: 'This stunning modern villa offers the perfect blend of luxury and comfort. Located in the heart of Beverly Hills, this property features an open-concept design with high-end finishes throughout. The spacious living areas flow seamlessly to the outdoor entertainment space, complete with a sparkling pool and beautifully landscaped gardens.',
    images: [
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    amenities: [
      'High-Speed Internet',
      'Fitness Center',
      'Swimming Pool',
      'Security System',
      'Parking Garage',
      'Modern Kitchen'
    ],
    agent: {
      name: 'Sarah Johnson',
      phone: '(555) 123-4567',
      email: 'sarah@realestatepro.com'
    }
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % property.images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + property.images.length) % property.images.length);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            to="/properties"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Properties
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <div className="relative mb-8">
              <div className="relative h-96 rounded-lg overflow-hidden">
                <img
                  src={property.images[currentImage]}
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 p-2 rounded-full transition-all"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 p-2 rounded-full transition-all"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {property.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImage(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === currentImage ? 'bg-white' : 'bg-white bg-opacity-50'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Thumbnail Images */}
              <div className="grid grid-cols-4 gap-2 mt-4">
                {property.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`relative h-20 rounded-lg overflow-hidden ${
                      index === currentImage ? 'ring-2 ring-blue-600' : ''
                    }`}
                  >
                    <img
                      src={image}
                      alt={`View ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Property Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <div className="mb-6">
                <div className="flex flex-wrap items-center justify-between mb-4">
                  <h1 className="text-3xl font-bold text-gray-900">{property.title}</h1>
                  <div className="text-3xl font-bold text-blue-600">
                    ${property.price.toLocaleString()}
                  </div>
                </div>
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>{property.location}</span>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 p-6 bg-gray-50 rounded-lg">
                <div className="text-center">
                  <Bed className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                  <div className="font-semibold">{property.bedrooms}</div>
                  <div className="text-sm text-gray-600">Bedrooms</div>
                </div>
                <div className="text-center">
                  <Bath className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                  <div className="font-semibold">{property.bathrooms}</div>
                  <div className="text-sm text-gray-600">Bathrooms</div>
                </div>
                <div className="text-center">
                  <Square className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                  <div className="font-semibold">{property.sqft}</div>
                  <div className="text-sm text-gray-600">Sq Ft</div>
                </div>
                <div className="text-center">
                  <Car className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                  <div className="font-semibold">{property.parking}</div>
                  <div className="text-sm text-gray-600">Parking</div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Description</h3>
                <p className="text-gray-600 leading-relaxed">{property.description}</p>
              </div>

              {/* Additional Details */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Property Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 text-blue-600 mr-3" />
                    <span className="text-gray-600">Built in {property.yearBuilt}</span>
                  </div>
                  <div className="flex items-center">
                    <Square className="w-5 h-5 text-blue-600 mr-3" />
                    <span className="text-gray-600">Property Type: {property.type}</span>
                  </div>
                </div>
              </div>

              {/* Amenities */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Amenities</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {property.amenities.map((amenity, index) => {
                    const getIcon = (amenity: string) => {
                      if (amenity.includes('Internet')) return Wifi;
                      if (amenity.includes('Fitness')) return Dumbbell;
                      if (amenity.includes('Security')) return Shield;
                      if (amenity.includes('Parking')) return Car;
                      return Square;
                    };
                    const Icon = getIcon(amenity);
                    
                    return (
                      <div key={index} className="flex items-center">
                        <Icon className="w-5 h-5 text-green-600 mr-3" />
                        <span className="text-gray-700">{amenity}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-lg shadow-lg p-6 sticky top-8"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Agent</h3>
              
              <div className="mb-6">
                <div className="text-lg font-semibold text-gray-900 mb-1">
                  {property.agent.name}
                </div>
                <div className="text-gray-600 mb-2">{property.agent.phone}</div>
                <div className="text-gray-600">{property.agent.email}</div>
              </div>

              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    placeholder="I'm interested in this property..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Send Message
                </button>
              </form>

              <div className="mt-6 pt-6 border-t">
                <button className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors font-medium mb-3">
                  Call {property.agent.phone}
                </button>
                <button className="w-full bg-gray-100 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-200 transition-colors font-medium">
                  Schedule Tour
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;