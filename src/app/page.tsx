'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitError, setSubmitError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');
    setSubmitError('');

    try {
      // Initialize EmailJS with your public key
      emailjs.init("YOUR_PUBLIC_KEY"); // You'll need to replace this
      
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'brizonmultimedia@gmail.com'
      };

      const result = await emailjs.send(
        'YOUR_SERVICE_ID',    // You'll need to replace this
        'YOUR_TEMPLATE_ID',    // You'll need to replace this
        templateParams
      );

      if (result.status === 200) {
        setSubmitMessage('Thank you for your message! We will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Email send error:', error);
      setSubmitError('Failed to send message. Please try again or contact us directly at brizonmultimedia@gmail.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Header */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <img src="/Images/BRIZON COMPANY LOGO.png" alt="Brizon Multimedia" className="h-8 w-auto" />
              <span className="text-lg font-semibold text-gray-800">Brizon Multimedia</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-brand-500 transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-brand-500 transition-colors">About</button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-brand-500 transition-colors">Services</button>
              <button onClick={() => scrollToSection('portfolio')} className="text-gray-700 hover:text-brand-500 transition-colors">Portfolio</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-brand-500 transition-colors">Contact</button>
            </div>
            <button className="md:hidden text-gray-700">
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
        <div className="absolute inset-0">
          <img src="/Images/Brizon Multimedia Head banner copy.jpg (1).jpeg" alt="Background" className="w-full h-full object-cover opacity-50" />
          <div className="hero-gradient absolute inset-0"></div>
        </div>
        <div className="relative z-10 text-center text-white px-6 py-12 animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 playfair">
            Brizon Multimedia
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-4xl mx-auto">
            Professional Photography, Videography & Graphic Design Services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => scrollToSection('services')} className="bg-brand-500 hover:bg-brand-600 text-white px-8 py-3 rounded-full font-semibold transition duration-300 shadow-lg transform hover:scale-105">
              Our Services
            </button>
            <button onClick={() => scrollToSection('contact')} className="border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-3 rounded-full font-semibold transition duration-300 shadow-lg transform hover:scale-105">
              Get In Touch
            </button>
            <a href="https://wa.me/2349038226928?text=Hi%20Brizon%20Multimedia,%20I'm%20interested%20in%20your%20services" target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold transition duration-300 shadow-lg transform hover:scale-105">
              <i className="fab fa-whatsapp mr-2"></i>
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 playfair">About Us</h2>
            <div className="w-24 h-1 bg-brand-500 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-8">
                Brizon Multimedia Company is made up of a group of professionals and creatives in areas of photography, videography and graphic design.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-brand-500 text-white p-3 rounded-full">
                    <i className="fas fa-bullseye"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Mission</h3>
                    <p className="text-gray-600">To provide Beautiful, reliable and good media services for all our customers.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-brand-500 text-white p-3 rounded-full">
                    <i className="fas fa-eye"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Vision</h3>
                    <p className="text-gray-600">To create a satisfying beauty for the world to behold.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <img src="/Images/brizon multimedia flyer copy.jpg.jpeg" alt="Brizon Multimedia" className="rounded-lg shadow-2xl mx-auto max-w-md hover:scale-105 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 playfair">Our Services</h2>
            <div className="w-24 h-1 bg-brand-500 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="bg-brand-500 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-camera text-3xl"></i>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Photography Coverage</h3>
              <p className="text-gray-600 mb-6">
                We cover/document weddings, house openings, birthdays, burial ceremonies, campings etc. We give the best output with high quality pictures for social media and other purposes. We equally take indoor photoshoots and outdoor photoshoots.
              </p>
              <div className="text-brand-500">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="bg-brand-500 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-video text-3xl"></i>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Videography Coverage</h3>
              <p className="text-gray-600 mb-6">
                We cover/document weddings, house openings, birthdays, burial ceremonies, campings etc. We give the best output with high quality videos for social media and other purposes, which thrillers, highlights and full videos. We equally offer Livestream for all events and many more.
              </p>
              <div className="text-brand-500">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="bg-brand-500 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-palette text-3xl"></i>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Graphic Design</h3>
              <p className="text-gray-600 mb-6">
                We create and produce High quality beautiful designs for Church flyers, social media flyers, business flyers, banners, jotter, notebook invitation cards, etc.
              </p>
              <div className="text-brand-500">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 playfair">Our Portfolio</h2>
            <div className="w-24 h-1 bg-brand-500 mx-auto"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Showcasing our best work in photography, videography, and graphic design</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Wedding Packages */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img src="/Images/Brizon wedding Diamond Package.jpg.jpeg" alt="Diamond Package" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-semibold">Diamond Package</h3>
                  <p className="text-sm">Premium Wedding Coverage</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img src="/Images/Brizon wedding Gold Package.jpg.jpeg" alt="Gold Package" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-semibold">Gold Package</h3>
                  <p className="text-sm">Professional Wedding Service</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img src="/Images/Brizon wedding Moon Package.jpg.jpeg" alt="Moon Package" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-semibold">Moon Package</h3>
                  <p className="text-sm">Complete Event Coverage</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img src="/Images/Brizon wedding SILVER Package.jpg.jpeg" alt="Silver Package" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-semibold">Silver Package</h3>
                  <p className="text-sm">Standard Photography Service</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img src="/Images/Brizon wedding Star Package.jpg.jpeg" alt="Star Package" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-semibold">Star Package</h3>
                  <p className="text-sm">Basic Event Coverage</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img src="/Images/Brizon wedding Ultimate Package.jpg.jpeg" alt="Ultimate Package" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-semibold">Ultimate Package</h3>
                  <p className="text-sm">Luxury Wedding Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 playfair">Get In Touch</h2>
            <div className="w-24 h-1 bg-brand-500 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-brand-500 text-white p-3 rounded-full">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Email</p>
                    <p className="text-gray-600">brizonmultimedia@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-green-500 text-white p-3 rounded-full">
                    <i className="fab fa-whatsapp"></i>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">WhatsApp</p>
                    <p className="text-gray-600">09038226928</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-sm text-green-700">
                  <strong>Quick Contact:</strong> 
                  <a href="https://wa.me/2349038226928?text=Hi%20Brizon%20Multimedia,%20I'm%20interested%20in%20your%20services" target="_blank" rel="noopener noreferrer" className="underline ml-1">
                    Click here to message us on WhatsApp
                  </a>
                </p>
              </div>
              
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 mt-8">Follow Us</h3>
              <div className="grid grid-cols-2 gap-4">
                <a href="https://instagram.com/brizonmultimedia" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-gray-700 hover:text-brand-500 transition-colors duration-300">
                  <i className="fab fa-instagram text-xl"></i>
                  <span>Instagram</span>
                </a>
                <a href="https://facebook.com/Brizonmultimedia" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-gray-700 hover:text-brand-500 transition-colors duration-300">
                  <i className="fab fa-facebook text-xl"></i>
                  <span>Facebook</span>
                </a>
                <a href="https://threads.net/@brizonmultimedia" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-gray-700 hover:text-brand-500 transition-colors duration-300">
                  <i className="fab fa-threads text-xl"></i>
                  <span>Threads</span>
                </a>
                <a href="https://x.com/brizonmultimedia" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-gray-700 hover:text-brand-500 transition-colors duration-300">
                  <i className="fab fa-x-twitter text-xl"></i>
                  <span>X (Twitter)</span>
                </a>
                <a href="https://tiktok.com/@brizonmultimedia" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-gray-700 hover:text-brand-500 transition-colors duration-300">
                  <i className="fab fa-tiktok text-xl"></i>
                  <span>TikTok</span>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Send Us a Message</h3>
              {submitMessage && (
                <div className="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg animate-fade-in">
                  {submitMessage}
                </div>
              )}
              {submitError && (
                <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg animate-fade-in">
                  {submitError}
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200 transition-colors"
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200 transition-colors"
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4} 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200 transition-colors resize-none"
                    required
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-brand-500 hover:bg-brand-600 disabled:bg-gray-400 text-white font-semibold py-3 rounded-lg transition duration-300 transform hover:scale-105 disabled:scale-100"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <div className="loading-spinner mr-2"></div>
                      Sending...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <img src="/Images/BRIZON COMPANY LOGO.png" alt="Brizon Multimedia" className="h-8 w-auto" />
              <span className="text-lg font-semibold">Brizon Multimedia</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400">&copy; 2024 Brizon Multimedia. All rights reserved.</p>
              <p className="text-gray-400 text-sm mt-1">Creating beauty for the world to behold</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
