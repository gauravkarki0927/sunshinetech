import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Award, Users, Shield, Zap, Target, Heart, Lightbulb, Globe } from 'lucide-react';

const About = () => {
  const [heroRef, heroVisible] = useScrollAnimation();
  const [missionRef, missionVisible] = useScrollAnimation();
  const [valuesRef, valuesVisible] = useScrollAnimation();
  const [teamRef, teamVisible] = useScrollAnimation();

  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for the highest quality in every product and service we deliver."
    },
    {
      icon: Shield,
      title: "Reliability",
      description: "Trusted by thousands of customers for consistent performance and support."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Always at the forefront of technology trends and breakthrough solutions."
    },
    {
      icon: Heart,
      title: "Customer First",
      description: "Your success is our priority. We build lasting relationships through exceptional service."
    }
  ];

  const team = [
    {
      name: "David Miller",
      role: "CEO & Founder",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "15+ years in tech industry, passionate about democratizing high-performance computing."
    },
    {
      name: "Sarah Chen",
      role: "CTO",
      image: "https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Former Silicon Valley engineer with expertise in hardware architecture and AI."
    },
    {
      name: "Michael Rodriguez",
      role: "Head of Sales",
      image: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Customer relationship specialist with a track record of building trust and satisfaction."
    }
  ];

  return (
    <div className="mx-auto">
      {/* Hero Section */}
      <section className="py-32 inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={heroRef}
            className={`text-center max-w-4xl mx-auto transition-all duration-1000 ${
              heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About SunshineTech
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
              We're more than just a hardware company. We're your partners in building 
              the future of computing, one component at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={missionRef}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
              missionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Founded in 2010, SunshineTech has been at the forefront of the computer hardware 
                revolution. We started with a simple belief: everyone deserves access to 
                high-performance computing solutions that don't break the bank.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Today, we've grown into a trusted partner for gamers, professionals, and 
                enterprises worldwide, but our core mission remains unchanged: to democratize 
                access to cutting-edge technology through quality products and exceptional service.
              </p>
              <div className="flex items-center space-x-8">
                <div className="text-center">
                  <Target className="h-12 w-12 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">50K+</div>
                  <div className="text-gray-600">Products Delivered</div>
                </div>
                <div className="text-center">
                  <Globe className="h-12 w-12 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">25+</div>
                  <div className="text-gray-600">Countries Served</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Modern office space"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-2xl">
                <Users className="h-8 w-8 mb-2" />
                <div className="text-2xl font-bold">15+</div>
                <div className="text-sm">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={valuesRef}
            className={`text-center mb-16 transition-all duration-1000 ${
              valuesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our company culture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${
                  valuesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="mb-6">
                  <value.icon className="h-12 w-12 text-blue-600 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-center">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={teamRef}
            className={`text-center mb-16 transition-all duration-1000 ${
              teamVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The passionate leaders driving SunshineTech's vision and growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={member.name}
                className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 ${
                  teamVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 300}ms` }}
              >
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <div className="text-blue-600 font-medium mb-4">
                    {member.role}
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-950 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Whether you're building your first PC or upgrading enterprise infrastructure, 
            we're here to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="inline-block px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Get in Touch
            </a>
            <a 
              href="/products" 
              className="inline-block px-8 py-4 border-2 border-white hover:bg-white hover:text-blue-600 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              View Products
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;