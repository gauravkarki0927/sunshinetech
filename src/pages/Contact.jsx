import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [heroRef, heroVisible] = useScrollAnimation();
  const [formRef, formVisible] = useScrollAnimation();
  const [infoRef, infoVisible] = useScrollAnimation();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Showroom",
      details: ["123 Tech Street", "Silicon Valley, CA 94000", "United States"],
      color: "text-blue-600"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+1 (555) 123-4567", "+1 (555) 123-4568", "Toll-free: 1-800-SUNSHINETECH"],
      color: "text-green-600"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@sunshinetech.com", "support@sunshinetech.com", "sales@sunshinetech.com"],
      color: "text-purple-600"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Sun-Thu: 10:00 AM - 6:00 PM", "Friday: 10:00 AM - 4:00 PM", "Saturday: Closed"],
      color: "text-orange-600"
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      }, 1000);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900">
      {/* Hero Section */}
      <section className="py-32 bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={heroRef}
            className={`text-center max-w-4xl mx-auto transition-all duration-1000 ${
              heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
              Have questions about our products or need expert advice? 
              We're here to help you build your perfect system.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={infoRef}
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-1000 ${
              infoVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {contactInfo.map((info, index) => (
              <div
                key={info.title}
                className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 text-center group ${
                  infoVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className={`mb-6 ${info.color}`}>
                  <info.icon className="h-12 w-12 mx-auto group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {info.title}
                </h3>
                <div className="space-y-2">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div 
              ref={formRef}
              className={`transition-all duration-1000 ${
                formVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="bg-white p-8 lg:p-12 rounded-2xl shadow-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Send us a Message
                </h2>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Thank you for contacting us. We'll get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 border outline-none rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 ${
                            errors.name ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="Your full name"
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 border outline-none rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 ${
                            errors.email ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="your.email@example.com"
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border outline-none border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                          placeholder="+(977) 98123-45678"
                        />
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                          Subject *
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 border outline-none rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 ${
                            errors.subject ? 'border-red-500' : 'border-gray-300'
                          }`}
                        >
                          <option value="">Select a subject</option>
                          <option value="general">General Inquiry</option>
                          <option value="support">Technical Support</option>
                          <option value="sales">Sales Question</option>
                          <option value="partnership">Partnership</option>
                          <option value="other">Other</option>
                        </select>
                        {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border outline-none rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 resize-none ${
                          errors.message ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Tell us how we can help you..."
                      />
                      {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-purple-700 hover:bg-purple-750 cursor-pointer text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                    >
                      <Send className="h-5 w-5" />
                      <span>Send Message</span>
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Map Section */}
            <div className={`transition-all duration-1000 ${
              formVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full min-h-[600px]">
                <div className="p-8 border-b">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Visit Our Showroom
                  </h2>
                  <p className="text-gray-600">
                    Come check out our latest products in person. Our knowledgeable staff 
                    is ready to help you find exactly what you need.
                  </p>
                </div>
                
                {/* Embedded Map */}
                <div className="relative h-96 lg:h-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6249.814753849785!2d83.46478691587053!3d27.63984474412497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399685007619473d%3A0x4620e8f468867e06!2sSunshine%20Technology!5e1!3m2!1sen!2snp!4v1755257097966!5m2!1sen!2snp"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="SunshineTech Location"
                    className="w-full h-full"
                  />
                  
                  {/* Map Overlay Info */}
                  <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm p-4 rounded-lg shadow-lg">
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-6 w-6 text-blue-600" />
                      <div>
                        <div className="font-semibold text-gray-900">TechCore HQ</div>
                        <div className="text-sm text-gray-600">123 Tech Street, Silicon Valley</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions about our products and services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Do you offer warranty on all products?
                </h3>
                <p className="text-gray-600">
                  Yes, all our products come with manufacturer warranties ranging from 1-10 years 
                  depending on the component type.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Can you help me build a custom PC?
                </h3>
                <p className="text-gray-600">
                  Absolutely! Our expert team offers free consultation and custom PC building 
                  services tailored to your needs and budget.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">
                  What are your shipping options?
                </h3>
                <p className="text-gray-600">
                  We offer free standard shipping on orders over $100, with express and overnight 
                  shipping options also available.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Do you accept returns?
                </h3>
                <p className="text-gray-600">
                  Yes, we have a 30-day return policy for unused products in original packaging. 
                  Some restrictions apply to opened software and custom builds.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;