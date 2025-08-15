import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Search, Filter, Star, ShoppingCart, Eye } from 'lucide-react';
import { products } from '../data/product'

const Products = () => {
  const [heroRef, heroVisible] = useScrollAnimation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'processors', name: 'Processors' },
    { id: 'graphics', name: 'Graphics Cards' },
    { id: 'memory', name: 'Memory & Storage' },
    { id: 'motherboards', name: 'Motherboards' },
    { id: 'cooling', name: 'Cooling' },
    { id: 'cases', name: 'Cases & PSU' }
  ];


  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const ProductCard = ({ product, index }) => {
    const [cardRef, cardVisible] = useScrollAnimation();

    return (
      <div
        ref={cardRef}
        className={`bg-transparent rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group transform hover:-translate-y-2 ${cardVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        style={{ transitionDelay: `${index * 100}ms` }}
      >
        <div className="relative overflow-hidden">
          <img
            src={product.image[0]}
            alt={product.name}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 text-yellow-400 fill-current" />
              <span className="text-sm font-medium">{product.rating}</span>
            </div>
          </div>
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="flex space-x-4">
              <Link
                to={`/products/${product.id}`}
                className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-100 transition-colors duration-200"
              >
                <Eye className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
            {product.name}
          </h3>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {product.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {product.features.map((feature, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-blue-50 text-blue-600 text-sm rounded-full"
              >
                {feature}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-gray-900">
                ${product.price}
              </div>
              <div className="text-sm text-gray-500">
                {product.stock} in Stock
              </div>
            </div>
            <Link
              to={`/products/${product.id}`}
              className="bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded font-semibold transition-colors duration-200"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="mx-auto">
      {/* Hero Section */}
      <section className="py-32 bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={heroRef}
            className={`text-center max-w-4xl mx-auto transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Premium Hardware
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed mb-8">
              Discover our comprehensive collection of high-performance computer components
              designed for gaming, work, and everything in between.
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-4">
              <Filter className="text-gray-500 h-5 w-5" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="text-gray-600">
              {filteredProducts.length} products found
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-6">🔍</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                No products found
              </h3>
              <p className="text-gray-600">
                Try adjusting your search terms or category filter.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-950 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Need Help Choosing?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Our expert team is here to help you find the perfect components for your needs and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Get Expert Advice
            </button>
            <button className="px-8 py-4 border-2 border-white hover:bg-white hover:text-blue-600 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Build Configurator
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;