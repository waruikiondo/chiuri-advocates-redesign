'use client';

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronRight, Phone, Mail, MapPin, Scale, Shield, Users, FileText, Globe, Gavel } from 'lucide-react';
import Link from 'next/link';

// --- COMPONENTS ---

const SectionHeading = ({ sub, title, align = 'center' }: { sub: string, title: string, align?: 'center' | 'left' }) => (
  <div className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}>
    <motion.span 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="text-[#C5A059] font-bold tracking-[0.2em] uppercase text-xs block mb-3"
    >
      {sub}
    </motion.span>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="font-serif text-4xl md:text-5xl text-[#111827] font-bold leading-tight"
    >
      {title}
    </motion.h2>
    <motion.div 
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      transition={{ delay: 0.2, duration: 0.8 }}
      className={`h-1 bg-[#C5A059] mt-6 ${align === 'center' ? 'mx-auto w-24' : 'w-24'}`} 
    />
  </div>
);

const NavLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <Link href={href} className="text-[#1F2937] text-sm font-bold uppercase tracking-widest hover:text-[#C5A059] transition-colors relative group">
    {children}
    <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-[#C5A059] transition-all duration-300 group-hover:w-full"></span>
  </Link>
);

const ServiceCard = ({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="bg-white p-10 border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 group cursor-pointer"
  >
    <div className="w-14 h-14 bg-[#111827] rounded-full flex items-center justify-center mb-8 group-hover:bg-[#C5A059] transition-colors duration-300">
      <Icon className="text-white w-6 h-6" />
    </div>
    <h3 className="font-serif text-xl font-bold text-[#111827] mb-4 group-hover:text-[#C5A059] transition-colors">{title}</h3>
    <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
    <div className="mt-6 flex items-center text-[#C5A059] text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0">
      Learn More <ChevronRight className="w-4 h-4 ml-1" />
    </div>
  </motion.div>
);

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#F9F9F7] font-sans text-gray-800 selection:bg-[#C5A059] selection:text-white">
      
      {/* HEADER */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md py-4 shadow-lg border-b border-[#C5A059]/20' : 'bg-transparent py-8'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-4">
            {/* LOGO IMAGE with smart filter: Inverts to white on dark hero, returns to normal on scroll */}
            <img 
              src="https://chiuriandchiuriadvocates.com/images/logo_company_02.png" 
              alt="Chiuri & Chiuri Logo" 
              className={`h-12 w-auto transition-all duration-300 ${scrolled ? '' : 'brightness-0 invert'}`}
            />
            
            <div className={`hidden lg:block border-l pl-4 ${scrolled ? 'border-gray-300' : 'border-white/20'}`}>
              <p className={`text-[10px] font-bold uppercase tracking-[0.3em] ${scrolled ? 'text-[#C5A059]' : 'text-gray-300'}`}>
                Advocates of the High Court
              </p>
            </div>
          </div>

          <div className={`hidden md:flex items-center space-x-10 ${scrolled ? 'text-[#1F2937]' : 'text-white/90'}`}>
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#firm">The Firm</NavLink>
            <NavLink href="#expertise">Practice</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>

          <button className="bg-[#C5A059] text-white px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-[#111827] transition-all duration-300 shadow-lg">
            Consultation
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ scale }} className="absolute inset-0 z-0">
             <div className="absolute inset-0 bg-[#111827]/85 z-10" />
             <div 
               className="absolute inset-0 bg-cover bg-center"
               style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')" }}
             />
        </motion.div>
        
        <div className="container mx-auto px-6 relative z-20 text-center">
          <motion.div 
            style={{ opacity }}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block py-1 px-3 border border-[#C5A059] text-[#C5A059] text-xs font-bold tracking-[0.2em] uppercase mb-8">
              Est. Thika, Kenya
            </span>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-bold mb-8 leading-[1.1]">
              Unwavering <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A059] to-[#E5C585]">Representation</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl font-light max-w-2xl mx-auto mb-12 leading-relaxed">
              We combine over a decade of litigation mastery with modern commercial acumen to protect your legacy.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link href="#contact" className="bg-white text-[#111827] px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-[#C5A059] hover:text-white transition-all duration-300">
                Book Appointment
              </Link>
              <Link href="#firm" className="border border-white/30 text-white px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-[#111827] transition-all duration-300">
                Our Profile
              </Link>
            </div>
          </motion.div>
        </div>
      </header>

      {/* METRICS STRIP */}
      <div className="bg-[#111827] border-b border-gray-800 py-12 relative z-20 -mt-20 mx-6 md:mx-20 shadow-2xl">
        <div className="container mx-auto flex flex-col md:flex-row justify-around text-center gap-8 md:gap-0">
          {[
            { label: 'Years Experience', value: '10+' },
            { label: 'Cases Won', value: '98%' },
            { label: 'Practice Areas', value: '7' },
          ].map((stat, i) => (
            <div key={i} className="group">
              <h3 className="font-serif text-4xl font-bold text-white group-hover:text-[#C5A059] transition-colors">{stat.value}</h3>
              <p className="text-gray-500 text-xs uppercase tracking-widest mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ABOUT SECTION */}
      <section id="firm" className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-[#C5A059]" />
              {/* UPDATED IMAGE HERE */}
              <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Law Firm Meeting" className="w-full relative z-10 p-6 grayscale hover:grayscale-0 transition-all duration-700" />
              <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-[#C5A059]" />
            </motion.div>
            
            <div>
              <SectionHeading align="left" sub="Who We Are" title="A Modern Standard in Legal Practice" />
              <p className="text-gray-600 mb-6 leading-loose font-light text-lg">
                Based in Thika, <span className="text-[#111827] font-semibold">Chiuri & Chiuri Advocates</span> is driven by a singular vision: to provide realistic, competent, and innovative legal solutions. 
              </p>
              <p className="text-gray-600 mb-8 leading-loose font-light">
                We do not just quote the law; we apply it strategically. From high-stakes commercial transactions to sensitive family disputes, our approach is personalized and proactive.
              </p>
              <div className="flex gap-4">
                 <div className="flex items-center gap-4 bg-[#F9F9F7] px-6 py-4 border-l-4 border-[#C5A059]">
                    <Shield className="text-[#C5A059]" />
                    <span className="font-serif text-[#111827] font-bold">Conflict Free</span>
                 </div>
                 <div className="flex items-center gap-4 bg-[#F9F9F7] px-6 py-4 border-l-4 border-[#111827]">
                    <Users className="text-[#111827]" />
                    <span className="font-serif text-[#111827] font-bold">Client Focused</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section id="expertise" className="py-32 bg-[#F9F9F7]">
        <div className="container mx-auto px-6">
          <SectionHeading sub="Our Expertise" title="Comprehensive Legal Solutions" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard 
              icon={Gavel}
              title="Litigation & Dispute Resolution" 
              desc="Strategic representation in Criminal, Civil, and Constitutional petitions focusing on solution-based outcomes."
            />
            <ServiceCard 
              icon={FileText}
              title="Conveyancing & Real Estate" 
              desc="Seamless property transfers, lease drafting, and due diligence to secure your investments."
            />
            <ServiceCard 
              icon={Globe}
              title="Commercial & Corporate" 
              desc="Banking securities, debentures, and agreements. We provide the framework for your business to thrive."
            />
            <ServiceCard 
              icon={Users}
              title="Family Law & Succession" 
              desc="Handling divorce, wills, and estate planning with dignity, privacy, and legal precision."
            />
            <ServiceCard 
              icon={Scale}
              title="Employment Law" 
              desc="Drafting contracts and mediating disputes to ensure fair and lawful workplace relationships."
            />
            <ServiceCard 
              icon={Shield}
              title="Intellectual Property" 
              desc="Registration and defense of patents, industrial designs, and trademarks to protect your brand."
            />
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section id="contact" className="py-24 bg-[#111827] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <span className="text-[#C5A059] font-bold tracking-widest uppercase text-xs mb-4 block">Get In Touch</span>
              <h2 className="font-serif text-5xl font-bold mb-8">Ready to Discuss Your Case?</h2>
              <p className="text-gray-400 mb-10 text-lg font-light leading-relaxed">
                Our charging for professional services is transparent and competitive. Visit our chambers or contact us to schedule a consultation.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-full border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-[#111827] transition-all">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-white">Equity Plaza, Thika</h5>
                    <p className="text-gray-500 text-sm">2nd Floor, Room 211</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-full border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-[#111827] transition-all">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-white">Call Us Directly</h5>
                    <p className="text-gray-500 text-sm">0723 893 454  /  0777 893 454</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-full border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-[#111827] transition-all">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-white">Email Us</h5>
                    <p className="text-gray-500 text-sm">info@chiuriandchiuriadvocates.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 bg-white p-10 rounded-sm w-full shadow-2xl">
              <h3 className="text-[#111827] font-serif text-2xl font-bold mb-6">Send an Inquiry</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="First Name" className="w-full bg-[#F9F9F7] border border-gray-200 p-4 text-sm focus:border-[#C5A059] focus:outline-none transition-colors text-gray-800" />
                  <input type="text" placeholder="Last Name" className="w-full bg-[#F9F9F7] border border-gray-200 p-4 text-sm focus:border-[#C5A059] focus:outline-none transition-colors text-gray-800" />
                </div>
                <input type="email" placeholder="Email Address" className="w-full bg-[#F9F9F7] border border-gray-200 p-4 text-sm focus:border-[#C5A059] focus:outline-none transition-colors text-gray-800" />
                <textarea rows={4} placeholder="How can we help you?" className="w-full bg-[#F9F9F7] border border-gray-200 p-4 text-sm focus:border-[#C5A059] focus:outline-none transition-colors text-gray-800"></textarea>
                <button className="w-full bg-[#111827] text-white font-bold uppercase tracking-widest py-4 hover:bg-[#C5A059] transition-all duration-300">
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-gray-600 py-12 text-sm border-t border-gray-900 flex flex-col items-center">
         <img 
            src="https://chiuriandchiuriadvocates.com/images/logo_company_02.png" 
            alt="Chiuri & Chiuri Logo" 
            className="h-10 w-auto mb-6 brightness-0 invert opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500"
          />
        <p>&copy; {new Date().getFullYear()} Chiuri & Chiuri Advocates. All rights reserved.</p>
      </footer>
    </div>
  );
}