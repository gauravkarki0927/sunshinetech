import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { products } from '../data/product';

const ProductDetails = () => {
  const [heroRef, heroVisible] = useScrollAnimation();
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

//   const imageGallery = [
//     product?.image,
//     "https://www.club386.com/wp-content/uploads/2022/10/Intel-Core-i9-13900K-Defender-of-the-Core-Faith.jpg?auto=compress&w=400",
//     "https://www.digitaltrends.com/wp-content/uploads/2021/11/intel-12900k-review-2.jpg?auto=compress&w=400",
//     "https://genk.mediacdn.vn/139269124445442048/2022/11/7/l1040350-16677415721526621333-1667769531899-1667769533315981712674.jpg?auto=compress&w=400"
//   ];

  const [mainImage, setMainImage] = useState(product.image[0]);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Product not found</h2>
        <Link to="/products" className="text-blue-600 hover:underline">
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={heroRef}
            className={`text-center max-w-4xl mx-auto transition-all duration-1000 ${
              heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6">
              {product.name}
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-blue-100 leading-relaxed mb-8">
              {product.description}
            </p>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* Left Column: Image Gallery */}
          <div className="flex-1">
            <img
              src={mainImage}
              alt={product.name}
              className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-xl shadow-lg mb-4"
            />
            <div className="flex w-full items-center justify-center flex-wrap gap-3 sm:gap-4">
              {product.image.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`thumbnail-${index}`}
                  onClick={() => setMainImage(img)}
                  className={`w-18 sm:w-24 h-20 sm:h-24 object-cover rounded-lg cursor-pointer border-2 transition ${
                    mainImage === img ? 'border-blue-500' : 'border-transparent'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right Column: Product Info */}
          <div className="flex-1">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg mb-6">{product.description}</p>

            <div className="mb-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-3">Key Features:</h3>
              <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-gray-700 text-sm sm:text-base">
                {product.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-3">Why This Product?</h3>
              <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-gray-700 text-sm sm:text-base">
                <li>Built for professional-grade gaming and content creation</li>
                <li>Industry-leading thermal and performance benchmarks</li>
                <li>Backed by strong warranty and brand reputation</li>
                <li>Future-proof with latest technology standards</li>
              </ul>
            </div>

            <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-2">
              ${product.price}
            </div>
            <div className="text-gray-500 text-sm sm:text-base">
              Reviews — Rating {product.rating}<span className="text-yellow-500">★</span>
            </div>
             <div className="text-gray-500 text-sm sm:text-base">
              Available <span className="font-bold">{product.stock}</span> in Stock
            </div>

            <div className="mt-6 sm:mt-8">
              <Link
                to="/products"
                className="px-4 sm:px-6 py-2 sm:py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition text-sm sm:text-base"
              >
                Back to Products
              </Link>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default ProductDetails;
