/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from 'motion/react';
import { MapPin, Phone, MessageCircle, Car, Shield, Clock, ArrowRight, CheckCircle2, Menu, X, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const phone = "0915286383";
  const whatsapp = "0915286383";
  const address = "Fakhre Aalam road, Peshawar Cantt, near Ufone office, Peshawar Cantonment, 25000, Pakistan";
  const mapLink = "https://maps.app.goo.gl/j6ySuJTppvJJ8Ch56";

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] } }
  };

  return (
    <div className="min-h-screen bg-brand-dark text-brand-light selection:bg-brand-accent selection:text-brand-dark font-sans">
      {/* Navigation */}
      <nav className="fixed w-full z-50 transition-all duration-300 bg-brand-dark/50 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-shrink-0 flex items-center"
            >
              <span className="font-serif text-3xl font-bold tracking-widest text-white">
                CAR<span className="text-brand-accent">CHOICE</span>
              </span>
            </motion.div>
            
            {/* Desktop Menu */}
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden md:flex items-center space-x-10"
            >
              <a href="#about" className="text-gray-300 hover:text-white transition-colors text-xs font-semibold uppercase tracking-[0.2em]">About</a>
              <a href="#inventory" className="text-gray-300 hover:text-white transition-colors text-xs font-semibold uppercase tracking-[0.2em]">Inventory</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors text-xs font-semibold uppercase tracking-[0.2em]">Contact</a>
              <a 
                href={`tel:${phone}`}
                className="group relative px-6 py-3 overflow-hidden rounded-full bg-white/5 border border-white/10 hover:border-brand-accent/50 transition-all duration-300"
              >
                <div className="absolute inset-0 w-0 bg-brand-accent transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                <span className="relative flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white group-hover:text-brand-dark transition-colors duration-300">
                  <Phone size={14} />
                  Call Now
                </span>
              </a>
            </motion.div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white p-2"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="md:hidden bg-brand-dark/95 backdrop-blur-3xl border-t border-white/5"
          >
            <div className="px-4 pt-4 pb-8 space-y-2">
              <a href="#about" onClick={() => setIsMenuOpen(false)} className="block px-4 py-4 text-sm font-medium text-gray-300 hover:text-white uppercase tracking-widest border-b border-white/5">About</a>
              <a href="#inventory" onClick={() => setIsMenuOpen(false)} className="block px-4 py-4 text-sm font-medium text-gray-300 hover:text-white uppercase tracking-widest border-b border-white/5">Inventory</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block px-4 py-4 text-sm font-medium text-gray-300 hover:text-white uppercase tracking-widest border-b border-white/5">Contact</a>
              <div className="pt-6 flex flex-col gap-4 px-4">
                <a 
                  href={`tel:${phone}`}
                  className="w-full bg-brand-accent text-brand-dark px-4 py-4 rounded-full text-center font-bold uppercase tracking-widest flex items-center justify-center gap-2"
                >
                  <Phone size={18} />
                  Call Us
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=2069&auto=format&fit=crop" 
            alt="Luxury Car" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 via-brand-dark/50 to-brand-dark"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_100%)] opacity-80"></div>
        </motion.div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="max-w-4xl"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-brand-accent"></div>
              <span className="text-brand-accent font-semibold tracking-[0.3em] uppercase text-xs">
                Premium Car Dealership
              </span>
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold text-white mb-8 leading-[0.9] tracking-tight">
              Drive <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-accent-light italic pr-4">
                Excellence.
              </span>
            </motion.h1>
            
            <motion.p variants={fadeUp} className="text-lg md:text-xl text-gray-400 max-w-xl mb-12 font-light leading-relaxed">
              Experience top-tier automotive excellence at Car Choice. Discover our premium selection of vehicles ready for you to drive home in Peshawar.
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-start gap-6">
              <a 
                href="#inventory"
                className="group relative px-8 py-4 overflow-hidden rounded-full bg-brand-accent text-brand-dark font-bold uppercase tracking-widest text-sm transition-all hover:scale-105"
              >
                <span className="relative flex items-center gap-2">
                  Explore Inventory
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              <a 
                href={mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-8 py-4 rounded-full border border-white/20 hover:border-white/50 hover:bg-white/5 transition-all text-sm font-semibold uppercase tracking-widest"
              >
                <MapPin size={16} className="text-brand-accent" />
                Visit Showroom
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-brand-accent to-transparent"></div>
        </motion.div>
      </section>

      {/* Services / Features Section - Asymmetrical Bento Grid */}
      <section id="inventory" className="py-32 relative">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-brand-accent/5 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[100px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8"
          >
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="h-[1px] w-8 bg-brand-accent"></div>
                <span className="text-brand-accent font-semibold tracking-[0.2em] uppercase text-xs">Why Choose Us</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">
                The Car Choice <br/><span className="italic text-gray-400 font-light">Advantage</span>
              </h2>
            </div>
            <p className="text-gray-400 max-w-md font-light leading-relaxed">
              We redefine the car buying experience with unparalleled service, rigorous quality standards, and a curated selection of premium vehicles.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Large Card 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:col-span-8 glass-panel p-10 lg:p-12 rounded-3xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/10 rounded-full blur-[60px] group-hover:bg-brand-accent/20 transition-colors duration-700"></div>
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-12 text-brand-accent group-hover:scale-110 transition-transform duration-500">
                  <Car size={28} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-3xl font-serif font-semibold text-white mb-4">Premium Inventory</h3>
                  <p className="text-gray-400 font-light leading-relaxed max-w-xl text-lg">
                    Choose from our extensive selection of high-quality, reliable vehicles suited for every lifestyle and budget. From luxury sedans to robust SUVs.
                  </p>
                </div>
              </div>
            </motion.div>
            
            {/* Small Card 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="md:col-span-4 glass-panel p-10 rounded-3xl relative overflow-hidden group"
            >
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-12 text-brand-accent group-hover:scale-110 transition-transform duration-500">
                  <Shield size={28} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-semibold text-white mb-3">Trusted Quality</h3>
                  <p className="text-gray-400 font-light leading-relaxed">
                    Every vehicle undergoes a strict multi-point inspection to ensure quality and safety.
                  </p>
                </div>
              </div>
            </motion.div>
            
            {/* Small Card 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:col-span-4 glass-panel p-10 rounded-3xl relative overflow-hidden group"
            >
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-12 text-brand-accent group-hover:scale-110 transition-transform duration-500">
                  <Clock size={28} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-semibold text-white mb-3">Easy Purchasing</h3>
                  <p className="text-gray-400 font-light leading-relaxed">
                    Convenient financing options and a seamless purchasing process tailored to you.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Large Card 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="md:col-span-8 glass-panel p-0 rounded-3xl relative overflow-hidden group min-h-[300px]"
            >
              <img 
                src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070&auto=format&fit=crop" 
                alt="Showroom" 
                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-40 group-hover:scale-105 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-10 lg:p-12 w-full flex flex-col sm:flex-row justify-between items-end gap-6">
                <div>
                  <h3 className="text-3xl font-serif font-semibold text-white mb-2">Visit Our Showroom</h3>
                  <p className="text-gray-300 font-light">Experience our collection in person at Peshawar Cantt.</p>
                </div>
                <a 
                  href={mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-full bg-brand-accent text-brand-dark flex items-center justify-center hover:scale-110 transition-transform shrink-0"
                >
                  <ArrowRight size={24} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section - Editorial Layout */}
      <section id="about" className="py-32 bg-brand-gray relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 relative"
            >
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=2070&auto=format&fit=crop" 
                  alt="Luxury Car Interior" 
                  className="w-full h-[600px] object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-dark/20 mix-blend-overlay"></div>
              </div>
              
              {/* Floating stat card */}
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute -bottom-10 -right-10 glass-panel p-8 rounded-2xl hidden md:block border-l-4 border-l-brand-accent"
              >
                <div className="text-5xl font-serif font-bold text-white mb-2">100%</div>
                <div className="text-sm tracking-widest uppercase text-gray-400 font-semibold">Client Satisfaction</div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[1px] w-8 bg-brand-accent"></div>
                <span className="text-brand-accent font-semibold tracking-[0.2em] uppercase text-xs">Our Legacy</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-8 leading-tight">
                Your Trusted <br/>
                <span className="italic font-light text-gray-400">Dealership</span>
              </h2>
              
              <div className="space-y-6 text-gray-400 font-light text-lg leading-relaxed mb-10">
                <p>
                  Located conveniently on Fakhre Aalam road in Peshawar Cantt, Car Choice is dedicated to providing an exceptional car buying experience. 
                </p>
                <p>
                  We understand that purchasing a car is a major decision, and we are here to help you find the perfect vehicle that matches your ambition and lifestyle.
                </p>
              </div>
              
              <ul className="space-y-5 mb-12">
                {[
                  "Centrally located near Ufone office",
                  "Clean, sanitized, and fully inspected vehicles",
                  "Transparent pricing with no hidden fees",
                  "Dedicated customer support"
                ].map((item, index) => (
                  <motion.li 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    key={index} 
                    className="flex items-center gap-4"
                  >
                    <div className="w-6 h-6 rounded-full bg-brand-accent/10 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="text-brand-accent" size={14} />
                    </div>
                    <span className="text-gray-300 font-medium">{item}</span>
                  </motion.li>
                ))}
              </ul>
              
              <a 
                href={`tel:${phone}`}
                className="inline-flex items-center gap-3 text-white font-bold uppercase tracking-widest text-sm hover:text-brand-accent transition-colors group"
              >
                Speak with our team
                <span className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-brand-accent transition-colors">
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact & Location - Dark & Sleek */}
      <section id="contact" className="py-32 relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[1px] w-8 bg-brand-accent"></div>
                <span className="text-brand-accent font-semibold tracking-[0.2em] uppercase text-xs">Connect</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-serif font-bold text-white mb-8">
                Ready to find <br/><span className="italic font-light text-gray-400">your next car?</span>
              </h2>
              <p className="text-gray-400 font-light mb-16 text-lg max-w-md leading-relaxed">
                Visit our showroom in Peshawar Cantt or contact us directly to schedule a test drive today.
              </p>
              
              <div className="space-y-10">
                <div className="group flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl glass-panel flex items-center justify-center shrink-0 group-hover:bg-brand-accent/10 transition-colors duration-500">
                    <MapPin size={24} className="text-brand-accent" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-2">Visit Our Showroom</h4>
                    <p className="text-gray-400 font-light leading-relaxed mb-3 max-w-xs">
                      {address}
                    </p>
                    <a 
                      href={mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-accent hover:text-white transition-colors"
                    >
                      Get Directions <ChevronRight size={14} />
                    </a>
                  </div>
                </div>
                
                <div className="group flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl glass-panel flex items-center justify-center shrink-0 group-hover:bg-brand-accent/10 transition-colors duration-500">
                    <Phone size={24} className="text-brand-accent" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-2">Call Us</h4>
                    <p className="text-gray-400 font-light mb-3">Available for sales and inquiries.</p>
                    <a 
                      href={`tel:${phone}`}
                      className="text-2xl font-serif text-white hover:text-brand-accent transition-colors block"
                    >
                      {phone}
                    </a>
                  </div>
                </div>
                
                <div className="group flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl glass-panel flex items-center justify-center shrink-0 group-hover:bg-[#25D366]/10 transition-colors duration-500">
                    <MessageCircle size={24} className="text-[#25D366]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-2">WhatsApp</h4>
                    <p className="text-gray-400 font-light mb-4">Message us for quick responses.</p>
                    <a 
                      href={`https://wa.me/${whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/20 px-6 py-3 rounded-full hover:bg-[#25D366] hover:text-white transition-all duration-300 text-xs font-bold uppercase tracking-widest"
                    >
                      <MessageCircle size={16} />
                      Message Now
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[500px] lg:h-auto rounded-3xl overflow-hidden shadow-2xl border border-white/5"
            >
              <img 
                src="https://images.unsplash.com/photo-1503376712341-0048236c93bf?q=80&w=2070&auto=format&fit=crop" 
                alt="Showroom Location" 
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-dark/60 mix-blend-multiply"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-8">
                <div className="glass-panel p-8 rounded-2xl backdrop-blur-2xl border border-white/10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-brand-accent/20 flex items-center justify-center">
                      <MapPin size={20} className="text-brand-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-serif font-bold text-white">CAR CHOICE</h3>
                      <p className="text-gray-400 text-xs uppercase tracking-widest mt-1">Peshawar Cantt</p>
                    </div>
                  </div>
                  <a 
                    href={mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-white text-brand-dark text-center px-6 py-4 rounded-xl hover:bg-brand-accent transition-colors text-xs font-bold uppercase tracking-widest mt-6"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-darker pt-20 pb-10 border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-brand-accent/30 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-16">
            <div className="text-center md:text-left">
              <span className="font-serif text-4xl font-bold tracking-widest text-white block mb-3">
                CAR<span className="text-brand-accent">CHOICE</span>
              </span>
              <p className="text-gray-500 text-sm font-light tracking-wide">Premium Car Dealership in Peshawar.</p>
            </div>
            
            <div className="flex items-center gap-4">
              <a href={`tel:${phone}`} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-brand-accent hover:border-brand-accent transition-all">
                <Phone size={18} />
              </a>
              <a href={`https://wa.me/${whatsapp}`} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#25D366] hover:border-[#25D366] transition-all">
                <MessageCircle size={18} />
              </a>
              <a href={mapLink} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-brand-accent hover:border-brand-accent transition-all">
                <MapPin size={18} />
              </a>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-xs tracking-widest uppercase">&copy; {new Date().getFullYear()} Car Choice. All rights reserved.</p>
            <p className="text-gray-600 text-xs tracking-widest uppercase">Peshawar Cantonment, Pakistan</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

