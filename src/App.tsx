/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from 'motion/react';
import { MapPin, Phone, MessageCircle, Car, Shield, Clock, ArrowRight, CheckCircle2, Menu, X, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Hypercars');
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const phone = "03006910513";
  const whatsapp = "03006910513";
  const address = "Karachi, Pakistan";
  const mapLink = "https://maps.app.goo.gl/rSL2eL5VhwfwncqE7";

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
    <div className="min-h-screen bg-white text-black selection:bg-brand-accent selection:text-white font-sans">
      {/* Navigation */}
      <nav className="fixed w-full z-50 transition-all duration-300 bg-white/90 backdrop-blur-xl border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-shrink-0 flex items-center"
            >
              <span className="font-sans text-2xl md:text-3xl font-black tracking-tighter text-black flex items-center gap-2">
                AA<span className="text-brand-accent">MOTORS</span>
              </span>
            </motion.div>
            
            {/* Desktop Menu */}
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden md:flex items-center space-x-10"
            >
              <a href="#features" className="text-gray-500 hover:text-black transition-colors text-xs font-bold uppercase tracking-[0.2em]">Why Us</a>
              <a href="#inventory" className="text-gray-500 hover:text-black transition-colors text-xs font-bold uppercase tracking-[0.2em]">Inventory</a>
              <a href="#contact" className="text-gray-500 hover:text-black transition-colors text-xs font-bold uppercase tracking-[0.2em]">Contact</a>
              <a 
                href={`tel:${phone}`}
                className="group relative px-6 py-3 overflow-hidden rounded-full bg-black border border-black hover:border-brand-accent transition-all duration-300"
              >
                <div className="absolute inset-0 w-0 bg-brand-accent transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                <span className="relative flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-white group-hover:text-black transition-colors duration-300">
                  <Phone size={14} />
                  Call Now
                </span>
              </a>
            </motion.div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-black p-2"
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
            className="md:hidden bg-white border-t border-gray-100"
          >
            <div className="px-4 pt-4 pb-8 space-y-2">
              <a href="#features" onClick={() => setIsMenuOpen(false)} className="block px-4 py-4 text-sm font-bold text-gray-600 hover:text-black uppercase tracking-widest border-b border-gray-50">Why Us</a>
              <a href="#inventory" onClick={() => setIsMenuOpen(false)} className="block px-4 py-4 text-sm font-bold text-gray-600 hover:text-black uppercase tracking-widest border-b border-gray-50">Inventory</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block px-4 py-4 text-sm font-bold text-gray-600 hover:text-black uppercase tracking-widest border-b border-gray-50">Contact</a>
              <div className="pt-6 flex flex-col gap-4 px-4">
                <a 
                  href={`tel:${phone}`}
                  className="w-full bg-black text-white px-4 py-4 rounded-full text-center font-bold uppercase tracking-widest flex items-center justify-center gap-2"
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
      <section className="relative bg-white pt-40 pb-20 overflow-hidden">
        {/* Abstract Map Background */}
        <div className="absolute top-0 right-0 w-full lg:w-2/3 h-full pointer-events-none opacity-40">
          <svg width="100%" height="100%" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMaxYMid slice">
            <path d="M100 100 L300 200 L500 150 L700 300" stroke="#E5E7EB" strokeWidth="2" strokeDasharray="4 4"/>
            <path d="M200 400 L400 300 L600 450" stroke="#E5E7EB" strokeWidth="2" strokeDasharray="4 4"/>
            <path d="M300 200 L400 300" stroke="#E5E7EB" strokeWidth="2" strokeDasharray="4 4"/>
            <path d="M500 150 L600 50" stroke="#E5E7EB" strokeWidth="2" strokeDasharray="4 4"/>
            <path d="M700 300 L800 200" stroke="#E5E7EB" strokeWidth="2" strokeDasharray="4 4"/>
            <circle cx="100" cy="100" r="6" fill="white" stroke="#D1D5DB" strokeWidth="3"/>
            <circle cx="300" cy="200" r="6" fill="white" stroke="#D1D5DB" strokeWidth="3"/>
            <circle cx="500" cy="150" r="6" fill="white" stroke="#D1D5DB" strokeWidth="3"/>
            <circle cx="700" cy="300" r="6" fill="white" stroke="#D1D5DB" strokeWidth="3"/>
            <circle cx="200" cy="400" r="6" fill="white" stroke="#D1D5DB" strokeWidth="3"/>
            <circle cx="400" cy="300" r="6" fill="white" stroke="#D1D5DB" strokeWidth="3"/>
            <circle cx="600" cy="450" r="6" fill="white" stroke="#D1D5DB" strokeWidth="3"/>
            {/* Location Pin */}
            <path d="M450 220 L460 240 L440 240 Z" fill="#000000"/>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 gap-8 items-center text-center">
            {/* Text */}
            <div className="flex flex-col items-center">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-black leading-[1.05] tracking-tighter mb-8"
                style={{ fontFamily: 'system-ui, sans-serif', fontWeight: 'bold' }}
              >
                Premium Car Dealership in Karachi
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg text-gray-800 font-medium max-w-md leading-relaxed"
              >
                Don't deny yourself the pleasure of driving the best premium cars from around the world here and now
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section id="features" className="py-32 relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="mb-16"
          >
            <div className="mb-4">
              <span className="text-gray-400 font-semibold tracking-[0.1em] uppercase text-xs">TAKING CARE OF EVERY CLIENT</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-sans font-black text-black leading-tight tracking-tighter mb-6">
              Key Features
            </h2>
            <p className="text-gray-800 max-w-2xl text-lg font-medium leading-relaxed">
              We are all about our client's comfort and safety. That's why we provide the best service you can imagine.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature Card 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white border border-gray-100 shadow-sm p-8 rounded-3xl flex flex-col justify-between min-h-[280px] hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 rounded-full bg-[#f0f2f8] flex items-center justify-center mb-8">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-800">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-black truncate">
                All models have a premium package
              </h3>
            </motion.div>
            
            {/* Feature Card 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white border border-gray-100 shadow-sm p-8 rounded-3xl flex flex-col justify-between min-h-[280px] hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 rounded-full bg-[#fdf8f6] flex items-center justify-center mb-8">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-800">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10z"></path>
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-black truncate">
                24/7 technical support
              </h3>
            </motion.div>

            {/* Feature Card 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white border border-gray-100 shadow-sm p-8 rounded-3xl flex flex-col justify-between min-h-[280px] hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 rounded-full bg-[#f2f7f4] flex items-center justify-center mb-8">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-800">
                  <line x1="12" y1="1" x2="12" y2="23"></line>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-black truncate">
                Transparent pricing
              </h3>
            </motion.div>

            {/* Feature Card 4 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white border border-gray-100 shadow-sm p-8 rounded-3xl flex flex-col justify-between min-h-[280px] hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 rounded-full bg-[#f8f6f2] flex items-center justify-center mb-8">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-800">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  <polyline points="9 12 11 14 15 10"></polyline>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-black truncate">
                Absolute confidentiality
              </h3>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section id="inventory" className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-gray-400 font-bold tracking-[0.2em] uppercase text-xs mb-4">ONLY THE BEST CARS</div>
              <h2 className="text-5xl md:text-6xl font-sans font-black text-black mb-6 tracking-tighter">
                Our Vehicle Fleet
              </h2>
              <p className="text-gray-600 font-medium text-lg max-w-2xl mx-auto leading-relaxed">
                We provide our customers with the most incredible driving emotions.<br className="hidden md:block" />
                That's why we have only world-class cars in our fleet.
              </p>
            </motion.div>

            {/* Tabs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-12 flex flex-wrap justify-center gap-3"
            >
              {['Premium', 'Coupe', 'Hypercars', 'Sportcar', 'Cabriolet', 'Limousines'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                    activeTab === tab 
                      ? 'bg-black text-white shadow-lg shadow-black/20' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </motion.div>
          </div>

          {/* Car Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Top Row: 3 Cars */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="md:col-span-4 rounded-[20px] overflow-hidden relative group shadow-sm hover:shadow-xl transition-all duration-300 bg-[#111111] border border-gray-800 flex flex-col"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1000&auto=format&fit=crop" alt="Land Cruiser" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-3 truncate">Land Cruiser</h3>
                <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
                  With its aerodynamic curves and bold lines, this car is a standout on the road, turning heads and making a statement wherever it goes.
                </p>
                <div className="text-[22px] font-bold text-white whitespace-nowrap">
                  PKR 85,000,000
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:col-span-4 rounded-[20px] overflow-hidden relative group shadow-sm hover:shadow-xl transition-all duration-300 bg-[#111111] border border-gray-800 flex flex-col"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1559416523-140ddc3d238c?q=80&w=1000&auto=format&fit=crop" alt="Hilux Revo" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-3 truncate">Hilux Revo</h3>
                <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
                  With its aerodynamic curves and bold lines, this car is a standout on the road, turning heads and making a statement wherever it goes.
                </p>
                <div className="text-[22px] font-bold text-white whitespace-nowrap">
                  PKR 15,500,000
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="md:col-span-4 rounded-[20px] overflow-hidden relative group shadow-sm hover:shadow-xl transition-all duration-300 bg-[#111111] border border-gray-800 flex flex-col"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1590362891991-f776e747a588?q=80&w=1000&auto=format&fit=crop" alt="Honda City Aspire" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-3 truncate">Honda City Aspire</h3>
                <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
                  With its aerodynamic curves and bold lines, this car is a standout on the road, turning heads and making a statement wherever it goes.
                </p>
                <div className="text-[22px] font-bold text-white whitespace-nowrap">
                  PKR 5,800,000
                </div>
              </div>
            </motion.div>

            {/* Bottom Row: 3 Cars */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="md:col-span-4 rounded-[20px] overflow-hidden relative group shadow-sm hover:shadow-xl transition-all duration-300 bg-[#111111] border border-gray-800 flex flex-col"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1566367576585-051277d52997?q=80&w=1000&auto=format&fit=crop" alt="Prado 2002 Tz" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-3 truncate">Prado 2002 Tz</h3>
                <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
                  With its aerodynamic curves and bold lines, this car is a standout on the road, turning heads and making a statement wherever it goes.
                </p>
                <div className="text-[22px] font-bold text-white whitespace-nowrap">
                  PKR 8,500,000
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="md:col-span-4 rounded-[20px] overflow-hidden relative group shadow-sm hover:shadow-xl transition-all duration-300 bg-[#111111] border border-gray-800 flex flex-col"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1610884447640-42b8ec61a933?q=80&w=1000&auto=format&fit=crop" alt="Honda Accord 2008 Black" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-3 truncate">Honda Accord 2008 Black</h3>
                <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
                  With its aerodynamic curves and bold lines, this car is a standout on the road, turning heads and making a statement wherever it goes.
                </p>
                <div className="text-[22px] font-bold text-white whitespace-nowrap">
                  PKR 4,500,000
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="md:col-span-4 rounded-[20px] overflow-hidden relative group shadow-sm hover:shadow-xl transition-all duration-300 bg-[#111111] border border-gray-800 flex flex-col"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1621007947382-bb3c3994e3fd?q=80&w=1000&auto=format&fit=crop" alt="Toyota Raize Z White" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-3 truncate">Toyota Raize Z White</h3>
                <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
                  With its aerodynamic curves and bold lines, this car is a standout on the road, turning heads and making a statement wherever it goes.
                </p>
                <div className="text-[22px] font-bold text-white whitespace-nowrap">
                  PKR 7,500,000
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact & Location - Dark & Sleek */}
      <section id="contact" className="py-32 relative bg-gray-50">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02] invert"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[1px] w-8 bg-black"></div>
                <span className="text-black font-bold tracking-[0.2em] uppercase text-xs">Connect</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-sans font-black text-black mb-8 tracking-tighter">
                Ready to find <span className="text-black font-medium">your next car?</span>
              </h2>
              <p className="text-gray-600 font-medium mb-16 text-lg max-w-md leading-relaxed">
                Visit our showroom in Karachi or contact us directly to schedule a test drive today.
              </p>
              
              <div className="space-y-10">
                <div className="group flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center justify-center shrink-0 group-hover:border-black transition-colors duration-500">
                    <MapPin size={24} className="text-black" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black uppercase tracking-widest text-black mb-2">Visit Our Showroom</h4>
                    <p className="text-gray-600 font-medium leading-relaxed mb-3 max-w-xs">
                      {address}
                    </p>
                    <a 
                      href={mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-black hover:text-gray-600 transition-colors"
                    >
                      Get Directions <ChevronRight size={14} />
                    </a>
                  </div>
                </div>
                
                <div className="group flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center justify-center shrink-0 group-hover:border-black transition-colors duration-500">
                    <Phone size={24} className="text-black" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black uppercase tracking-widest text-black mb-2">Call Us</h4>
                    <p className="text-gray-600 font-medium mb-3">Available for sales and inquiries.</p>
                    <a 
                      href={`tel:${phone}`}
                      className="text-2xl font-sans font-black tracking-tighter text-black hover:text-gray-600 transition-colors block"
                    >
                      {phone}
                    </a>
                  </div>
                </div>
                
                <div className="group flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center justify-center shrink-0 group-hover:border-[#25D366] transition-colors duration-500">
                    <MessageCircle size={24} className="text-[#25D366]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black uppercase tracking-widest text-black mb-2">WhatsApp</h4>
                    <p className="text-gray-600 font-medium mb-4">Message us for quick responses.</p>
                    <a 
                      href={`https://wa.me/${whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/20 px-6 py-3 rounded-full hover:bg-[#25D366] hover:text-white transition-all duration-300 text-xs font-black uppercase tracking-widest"
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
              className="relative h-[500px] lg:h-auto rounded-[32px] overflow-hidden bg-[#111111] flex flex-col items-center justify-center text-center p-12 shadow-2xl"
            >
              {/* Subtle geometric background pattern */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-[30%] w-[400px] h-[400px] rounded-full border-[1.5px] border-white/5"></div>
                <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-[40%] w-[700px] h-[700px] rounded-full border-[1.5px] border-white/5"></div>
                
                {/* Dots on the circles */}
                <div className="absolute top-[35%] right-[15%] w-3 h-3 rounded-full border-[1.5px] border-white/10 bg-[#111111]"></div>
                <div className="absolute bottom-[25%] right-[5%] w-3 h-3 rounded-full border-[1.5px] border-white/10 bg-[#111111]"></div>
              </div>
              
              <div className="relative z-10 flex flex-col items-center">
                <h3 className="text-4xl md:text-5xl font-sans font-bold text-white tracking-tight mb-4">AA MOTORS</h3>
                <p className="text-gray-400 text-lg font-medium mb-10 max-w-sm leading-relaxed">
                  Visit our showroom in Karachi to explore our premium fleet.
                </p>
                
                <a 
                  href={mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full hover:bg-gray-200 transition-colors text-sm font-bold shadow-lg"
                >
                  <MapPin size={18} />
                  Open in Google Maps
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white pt-20 pb-10 border-t border-gray-200 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-16">
            <div className="text-center md:text-left">
              <span className="font-sans text-4xl font-black tracking-tighter text-black block mb-3">
                AA<span className="text-brand-accent">MOTORS</span>
              </span>
              <p className="text-gray-500 text-sm font-medium tracking-wide">Premium Car Dealership in Karachi.</p>
            </div>
            
            <div className="flex items-center gap-4">
              <a href={`tel:${phone}`} className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-black hover:border-black transition-all">
                <Phone size={18} />
              </a>
              <a href={`https://wa.me/${whatsapp}`} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-[#25D366] hover:border-[#25D366] transition-all">
                <MessageCircle size={18} />
              </a>
              <a href={mapLink} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-black hover:border-black transition-all">
                <MapPin size={18} />
              </a>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-xs font-bold tracking-widest uppercase">&copy; {new Date().getFullYear()} AA Motors. All rights reserved.</p>
            <p className="text-gray-400 text-xs font-bold tracking-widest uppercase">Karachi, Pakistan</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

