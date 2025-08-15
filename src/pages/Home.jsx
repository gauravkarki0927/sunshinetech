import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useScrollAnimation, useParallax } from '../hooks/useScrollAnimation';
import { 
  ChevronRight, 
  Cpu, 
  HardDrive, 
  Monitor, 
  Smartphone, 
  Award, 
  Users, 
  Shield, 
  Zap,
  ArrowRight,
  Star
} from 'lucide-react';

const AnimatedCounter = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [ref, isVisible] = useScrollAnimation();

  useEffect(() => {
    if (isVisible) {
      let startTime;
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = (currentTime - startTime) / duration;

        if (progress < 1) {
          setCount(Math.floor(end * progress));
          requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isVisible, end, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
};

const Home = () => {
  const [heroRef, heroOffset] = useParallax(0.3);
  const [featuresRef, featuresVisible] = useScrollAnimation();
  const [statsRef, statsVisible] = useScrollAnimation();
  const [testimonialsRef, testimonialsVisible] = useScrollAnimation();

  const features = [
    {
      icon: Cpu,
      title: "High-Performance Processors",
      description: "Latest generation CPUs for gaming, workstations, and enterprise solutions."
    },
    {
      icon: HardDrive,
      title: "Storage Solutions",
      description: "SSDs, HDDs, and NVMe drives for all your storage needs with blazing fast speeds."
    },
    {
      icon: Monitor,
      title: "Display Technology",
      description: "4K, HDR, and high-refresh rate monitors for immersive visual experiences."
    },
    {
      icon: Smartphone,
      title: "Mobile Components",
      description: "Cutting-edge components for smartphones and portable devices."
    }
  ];

  const stats = [
    { number: 50000, suffix: '+', label: 'Happy Customers' },
    { number: 15, suffix: '', label: 'Years Experience' },
    { number: 1000, suffix: '+', label: 'Products Available' },
    { number: 99, suffix: '%', label: 'Customer Satisfaction' }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Gaming Enthusiast",
      content: "TechCore helped me build the perfect gaming rig. Their expert advice and quality components exceeded my expectations!",
      rating: 5
    },
    {
      name: "Mike Chen",
      role: "IT Manager",
      content: "Outstanding service and reliability. We've been sourcing enterprise hardware from TechCore for 3 years now.",
      rating: 5
    },
    {
      name: "Alex Rivera",
      role: "Content Creator",
      content: "The performance boost from their components transformed my workflow. Highly recommend for professional setups!",
      rating: 5
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section with Parallax */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div 
          ref={heroRef}
          className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900"
          style={{ transform: `translateY(${heroOffset}px)` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
          {/* Animated background elements */}
          <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-3 h-3 bg-purple-400 rounded-full animate-bounce"></div>
          <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-white rounded-full animate-ping"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Power Your
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> Future</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
              Discover cutting-edge computer hardware and components that deliver 
              unmatched performance for gaming, work, and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/products" 
                className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                Explore Products
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/about" 
                className="inline-flex items-center px-8 py-4 border-2 border-white hover:bg-white hover:text-gray-900 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={featuresRef}
            className={`text-center mb-16 transition-all duration-1000 ${
              featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose TechCore?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide premium hardware solutions with unmatched quality, 
              performance, and customer support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                  featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="mb-6">
                  <feature.icon className="h-12 w-12 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                ref={index === 0 ? statsRef : null}
                className={`transition-all duration-1000 ${
                  statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  <AnimatedCounter end={stat.number} />
                  {stat.suffix}
                </div>
                <div className="text-lg font-medium text-blue-100">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={testimonialsRef}
            className={`text-center mb-16 transition-all duration-1000 ${
              testimonialsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Real feedback from real customers who trust TechCore.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 ${
                  testimonialsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 300}ms` }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-blue-600">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-950 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Upgrade Your Tech?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who've transformed their computing experience with TechCore.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;