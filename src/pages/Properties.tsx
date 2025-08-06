import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Filter, MapPin, DollarSign, Home } from 'lucide-react';
import PropertyCard from '../components/PropertyCard';
import { motion } from 'framer-motion';

const Properties: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialSearch = searchParams.get('search') || '';
  
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [filters, setFilters] = useState({
    minPrice: '',
    maxPrice: '',
    type: '',
    bedrooms: '',
    location: ''
  });

  const allProperties = [
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
    },
    {
      id: 4,
      title: 'Waterfront Condo',
      price: 650000,
      location: 'Miami, FL',
      bedrooms: 3,
      bathrooms: 2,
      sqft: 1600,
      image: 'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=800',
      type: 'Condo'
    },
    {
      id: 5,
      title: 'Mountain Retreat',
      price: 450000,
      location: 'Aspen, CO',
      bedrooms: 2,
      bathrooms: 1,
      sqft: 1400,
      image: 'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=800',
      type: 'House'
    },
    {
      id: 6,
      title: 'Urban Loft',
      price: 385000,
      location: 'Chicago, IL',
      bedrooms: 1,
      bathrooms: 1,
      sqft: 900,
      image: 'https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg?auto=compress&cs=tinysrgb&w=800',
      type: 'Loft'
    }
  ];

  const filteredProperties = useMemo(() => {
    return allProperties.filter(property => {
      const matchesSearch = searchQuery === '' || 
        property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        property.location.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesMinPrice = !filters.minPrice || property.price >= parseInt(filters.minPrice);
      const matchesMaxPrice = !filters.maxPrice || property.price <= parseInt(filters.maxPrice);
      const matchesType = !filters.type || property.type === filters.type;
      const matchesBedrooms = !filters.bedrooms || property.bedrooms >= parseInt(filters.bedrooms);
      const matchesLocation = !filters.location || 
        property.location.toLowerCase().includes(filters.location.toLowerCase());

      return matchesSearch && matchesMinPrice && matchesMaxPrice && 
             matchesType && matchesBedrooms && matchesLocation;
    });
  }, [searchQuery, filters, allProperties]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Properties</h1>
          <p className="text-gray-600">Find your perfect property from our extensive collection</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Filter className="w-5 h-5 mr-2" />
                Filters
              </h3>

              {/* Search */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Search
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Location, property name..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <DollarSign className="inline w-4 h-4 mr-1" />
                  Price Range
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="number"
                    value={filters.minPrice}
                    onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })}
                    placeholder="Min"
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                  <input
                    type="number"
                    value={filters.maxPrice}
                    onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
                    placeholder="Max"
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Property Type */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Home className="inline w-4 h-4 mr-1" />
                  Property Type
                </label>
                <select
                  value={filters.type}
                  onChange={(e) => setFilters({ ...filters, type: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">All Types</option>
                  <option value="House">House</option>
                  <option value="Apartment">Apartment</option>
                  <option value="Condo">Condo</option>
                  <option value="Loft">Loft</option>
                </select>
              </div>

              {/* Bedrooms */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Minimum Bedrooms
                </label>
                <select
                  value={filters.bedrooms}
                  onChange={(e) => setFilters({ ...filters, bedrooms: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Any</option>
                  <option value="1">1+</option>
                  <option value="2">2+</option>
                  <option value="3">3+</option>
                  <option value="4">4+</option>
                </select>
              </div>

              {/* Location */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <MapPin className="inline w-4 h-4 mr-1" />
                  Location
                </label>
                <input
                  type="text"
                  value={filters.location}
                  onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                  placeholder="City, State"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <button
                onClick={() => {
                  setSearchQuery('');
                  setFilters({
                    minPrice: '',
                    maxPrice: '',
                    type: '',
                    bedrooms: '',
                    location: ''
                  });
                }}
                className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          </div>

          {/* Properties Grid */}
          <div className="lg:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">
                {filteredProperties.length} properties found
              </p>
            </div>

            {filteredProperties.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProperties.map((property, index) => (
                  <motion.div
                    key={property.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <PropertyCard property={property} />
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-gray-400 text-6xl mb-4">🏠</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No properties found</h3>
                <p className="text-gray-600">Try adjusting your search criteria or filters</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Properties;