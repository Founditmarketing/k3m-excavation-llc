import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { HardHat, Truck, Ruler, Drill, Map, Phone, ArrowRight, Menu, X, Facebook, ChevronDown, Trees, Waves, Hammer, Settings } from "lucide-react";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import { cn } from "@/src/lib/utils";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import LandClearing from "./pages/services/LandClearing";
import SitePrep from "./pages/services/SitePrep";
import Driveways from "./pages/services/Driveways";
import Drainage from "./pages/services/Drainage";
import Demolition from "./pages/services/Demolition";
import Utilities from "./pages/services/Utilities";
import GalleryPage from "./pages/Gallery";

// --- Types ---
interface Service {
  id: string;
  title: string;
  description: string;
  icon: any;
  path: string;
}

// --- Constants ---
const SERVICES: Service[] = [
  {
    id: "clearing",
    title: "Land Clearing & Mulching",
    description: "Reclaim your land with high-flow forestry mulching and professional clearing services.",
    icon: Trees,
    path: "/services/land-clearing",
    image: "/k3m1.jpg"
  },
  {
    id: "grading",
    title: "Site Prep & GPS Grading",
    description: "Precision grading and pad construction using the latest GPS site technology.",
    icon: Ruler,
    path: "/services/site-prep",
    image: "/k3m2.jpg"
  },
  {
    id: "infrastructure",
    title: "Driveways & Infrastructure",
    description: "Durable access roads, driveways, and specialized roadway stabilization.",
    icon: HardHat,
    path: "/services/driveways",
    image: "/k3m3.jpg"
  },
  {
    id: "drainage",
    title: "Ponds & Advanced Drainage",
    description: "Stock ponds, drainage correction, and water management solutions that last.",
    icon: Waves,
    path: "/services/drainage",
    image: "/pond_drainage_excavation.png"
  },
  {
    id: "demolition",
    title: "Demolition & Reclamation",
    description: "Structural removal and site restoration with surgical demolition techniques.",
    icon: Hammer,
    path: "/services/demolition",
    image: "/demolition_service.png"
  },
  {
    id: "utilities",
    title: "Underground Utilities",
    description: "Utility trenching, routing, and backfill for water, electrical, and fiber.",
    icon: Settings,
    path: "/services/utilities",
    image: "/utilities_service.png"
  },
];

const TRUST_PILLARS = [
  {
    title: "20 Years of Grit",
    description: "Experience that ensures your project is done right the first time, every time.",
  },
  {
    title: "GPS Accuracy",
    description: "Utilizing the latest GPS technology for grading that is accurate to the inch.",
  },
  {
    title: "Hometown Integrity",
    description: "Honest prices and solid results for our neighbors in Mount Pleasant and the 50-mile radius.",
  },
];

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside or navigating
  useEffect(() => {
    setIsServicesDropdownOpen(false);
    setIsMenuOpen(false);
  }, [pathname]);

  const navItems = [
    { name: "Services", href: pathname === "/" ? "#services" : "/#services", hasDropdown: true },
    { name: "Gallery", href: "/gallery" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      isScrolled ? "bg-black py-4 border-b border-white/10" : "bg-black py-6"
    )}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-white">
        <Link to="/" className="flex items-center group cursor-pointer shrink-0 transition-all">
          <img 
            src="/k3m logo.jpeg" 
            alt="K3M Excavation" 
            className="h-12 w-auto object-contain transition-all duration-300 mix-blend-screen filter invert hue-rotate-180 brightness-110 contrast-125" 
          />
        </Link>

        <div className="hidden md:flex items-center gap-10">
          <div className="flex gap-8 uppercase font-bold text-xs tracking-[0.2em] h-full items-center">
            {navItems.map((item) => (
              item.hasDropdown ? (
                <div 
                  key={item.name} 
                  className="relative h-full py-2 group"
                  onMouseEnter={() => setIsServicesDropdownOpen(true)}
                  onMouseLeave={() => setIsServicesDropdownOpen(false)}
                >
                  <a 
                    href={item.href}
                    className={cn(
                      "flex items-center gap-1 transition-colors uppercase font-bold text-xs tracking-[0.2em]",
                      pathname.startsWith("/services") ? "text-brand-red" : "text-white/60 hover:text-brand-red"
                    )}
                  >
                    {item.name} <ChevronDown className={cn("w-3 h-3 group-hover:rotate-180 transition-transform")} />
                  </a>
                  
                  <AnimatePresence>
                    {isServicesDropdownOpen && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 mt-2 w-72 bg-zinc-900 border border-white/10 p-2 shadow-2xl"
                      >
                        {SERVICES.map((service) => (
                          <Link 
                            key={service.id} 
                            to={service.path}
                            className="flex items-center gap-4 p-4 hover:bg-white/5 transition-colors group"
                          >
                            <service.icon className="w-5 h-5 text-brand-red" />
                            <div className="flex flex-col">
                              <span className="text-[10px] font-black uppercase tracking-widest text-white leading-none mb-1">{service.title}</span>
                              <span className="text-[8px] text-zinc-500 uppercase font-bold leading-none">View Details</span>
                            </div>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link 
                  key={item.name} 
                  to={item.href}
                  className={cn(
                    "transition-colors",
                    pathname === item.href ? "text-brand-red" : "text-white/60 hover:text-brand-red"
                  )}
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>
          <div className="h-4 w-px bg-white/20 mx-2" />
          <div className="text-white font-display font-extrabold text-xl italic tracking-tighter whitespace-nowrap hover:text-brand-red transition-colors">
            <a href="tel:9035634750">903.<span className="text-brand-red">563</span>.4750</a>
          </div>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-black text-white p-6 flex flex-col gap-6 md:hidden border-t border-white/10 max-h-[80vh] overflow-y-auto"
        >
          {navItems.map((item) => (
            item.hasDropdown ? (
              <div key={item.name} className="flex flex-col gap-4">
                <a 
                  href={item.href} 
                  className="text-xs uppercase font-black text-brand-red tracking-[0.2em] italic"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Our Services
                </a>
                <div className="grid grid-cols-1 gap-4 pl-4 border-l border-white/10">
                  {SERVICES.map(s => (
                    <Link key={s.id} to={s.path} className="text-lg font-display uppercase font-black italic" onClick={() => setIsMenuOpen(false)}>
                      {s.title}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link 
                key={item.name} 
                to={item.href} 
                className="text-lg font-display uppercase font-black italic" 
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            )
          ))}
          <div className="text-brand-red font-display font-black text-2xl italic border-t border-white/10 pt-6">
            <a href="tel:9035634750">903.563.4750</a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};


const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col pt-24">
      <div className="flex-grow flex flex-col lg:flex-row">
        {/* Main Content Area */}
        <div className="w-full lg:w-3/5 p-8 md:p-16 lg:p-24 flex flex-col justify-center relative overflow-hidden bg-white">
          {/* Site Texture Background */}
          <div 
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{ 
              backgroundImage: 'url("/k3m_hero.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />

          {/* Geometric Background Pattern */}
          <div className="absolute right-0 bottom-0 opacity-[0.03] w-full h-full pointer-events-none -z-10">
            <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0 100 L100 0 L100 100 Z" fill="#000" />
            </svg>
          </div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[2px] w-16 bg-brand-red" />
              <span className="uppercase tracking-[0.5em] font-bold text-brand-red text-sm italic">
                The Heavy Hitters
              </span>
            </div>
            
          <h1 className="text-4xl md:text-6xl lg:text-8xl leading-tight mb-10">
            Precision <span className="text-brand-red">Power.</span>
          </h1>
          
          <p className="text-lg md:text-xl font-medium max-w-xl text-zinc-700 leading-relaxed mb-12 italic">
            Family-owned and GPS-guided. Bringing 20 years of excavation mastery to residential and commercial projects in Northeast Texas.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <button className="bg-brand-red text-white px-10 py-5 text-sm font-bold uppercase tracking-[0.2em] hover:bg-black transition-all hover:px-12 flex items-center justify-center gap-3">
              Get a Free Estimate <ArrowRight className="w-5 h-5" />
            </button>
            <a href="tel:9035634750" className="border-4 border-black text-black px-10 py-5 text-sm font-bold uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-all text-center">
              Call Now: 903-563-4750
            </a>
          </div>
          </motion.div>
        </div>

        {/* Info Panel / Dark Sidebar */}
        <div className="w-full lg:w-2/5 flex flex-col bg-black">
          <div className="p-12 md:p-20 flex-grow flex flex-col justify-center relative overflow-hidden">
            {/* Accent line */}
            <div className="absolute top-0 right-0 w-2 h-full bg-brand-red" />
            
            <h3 className="text-xs uppercase tracking-[0.4em] font-bold text-brand-red mb-16 italic">Core Capabilities</h3>
            
            <div className="space-y-12">
              {[
                { id: "01", title: "Excavating Contractor", desc: "Elite hydraulic excavation and earthmoving." },
                { id: "02", title: "Grading Contractor", desc: "High-precision laser-guided terrain grading." },
                { id: "03", title: "Landscape Contractor", desc: "Commercial-grade site clearing and reclamation." }
              ].map((item, idx) => (
                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + (idx * 0.1) }}
                  className="flex gap-8 items-start group"
                >
                  <div className="text-5xl font-black text-brand-red italic opacity-50 group-hover:opacity-100 transition-opacity">
                    {item.id}
                  </div>
                  <div>
                    <h4 className="text-2xl text-white mb-2">{item.title}</h4>
                    <p className="text-zinc-500 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-20 pt-10 border-t border-white/10">
               <div className="flex items-center gap-4 text-white">
                  <div className="w-2 h-2 bg-brand-red animate-pulse" />
                  <span className="text-xs uppercase tracking-widest font-bold opacity-60">Currently available for Q3 projects</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-24">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-brand-red" />
              <span className="text-brand-red font-bold uppercase tracking-widest text-xs italic">Our Capabilities</span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl leading-tight">
              K3M <span className="text-brand-red">Core Services</span>
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((s, i) => (
            <Link 
              to={s.path}
              key={i}
            >
              <motion.div 
                whileHover={{ y: -5 }}
                className="relative p-10 min-h-[400px] border-2 border-brand-red/20 hover:border-brand-red transition-all group overflow-hidden flex flex-col justify-end"
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 z-0 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                  style={{ 
                    backgroundImage: `url("${s.image}")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
                {/* Overlay Layers */}
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors z-[1]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-[2]" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-brand-red/10 transition-opacity z-[3] pointer-events-none" />

                <div className="relative z-10 w-full">
                  <div className="w-14 h-14 bg-black text-brand-red flex items-center justify-center mb-8 border border-white/10 group-hover:bg-brand-red group-hover:text-white transition-colors italic font-black text-xl">
                    <s.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl mb-4 italic text-white uppercase font-black tracking-tight">
                    {s.title}
                  </h3>
                  <p className="text-sm text-zinc-300 leading-relaxed mb-6 italic">
                    {s.description}
                  </p>
                  <div className="flex items-center gap-2 text-brand-red font-black text-[10px] uppercase tracking-widest italic group-hover:gap-4 transition-all">
                    Exploration <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

const K3MCore = () => {
  return (
    <section className="py-32 bg-black text-white relative overflow-hidden">
      {/* Background Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-40 grayscale pointer-events-none"
        style={{ 
          backgroundImage: 'url("/k3m7.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      {/* Dark gradient overlay - softer to show background */}
      <div className="absolute inset-0 bg-black/60 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
         <div className="flex items-center gap-4 mb-16">
            <div className="h-[2px] w-12 bg-brand-red" />
            <h2 className="text-3xl md:text-4xl italic">The K3M Advantage</h2>
         </div>
         
         <div className="grid md:grid-cols-3 gap-16 md:gap-24">
            {TRUST_PILLARS.map((pillar, i) => (
               <div key={i} className="relative group">
                  <div className="text-7xl font-black text-brand-red opacity-10 absolute -top-10 -left-6 group-hover:opacity-20 transition-opacity italic">
                    {i + 1}
                  </div>
                  <h4 className="text-2xl mb-4 relative z-10">{pillar.title}</h4>
                  <p className="text-zinc-500 leading-relaxed relative z-10">{pillar.description}</p>
                  <div className="w-full h-1 bg-brand-red/20 mt-8 group-hover:bg-brand-red transition-colors" />
               </div>
            ))}
         </div>
      </div>
    </section>
  );
};

const PORTFOLIO_IMAGES = [
  { id: 1, url: "/k3m7.jpg", classes: "md:row-span-2" },
  { id: 2, url: "/k3m8.jpg", classes: "" },
  { id: 3, url: "/k3m9.jpg", classes: "" },
  { id: 4, url: "/k3m1.jpg", classes: "md:col-span-2" },
];

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="portfolio" className="pt-24 pb-12 bg-zinc-50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-brand-red" />
              <span className="text-brand-red font-bold uppercase tracking-widest text-xs italic">Our Projects</span>
            </div>
            <h2 className="text-4xl md:text-6xl italic">Real Work. <span className="text-brand-red">Real Results.</span></h2>
          </div>
          <a 
            href="https://www.facebook.com/profile.php?id=61582033561846" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block"
          >
            <button className="bg-brand-red text-white px-8 py-4 text-xs font-bold uppercase tracking-widest flex items-center gap-3 hover:bg-black transition-colors">
              <Facebook className="w-4 h-4" /> Follow Us On Facebook
            </button>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[300px]">
          {PORTFOLIO_IMAGES.map((img) => (
            <div 
              key={img.id} 
              className={cn(
                "bg-zinc-200 border border-black/5 relative group overflow-hidden cursor-pointer",
                img.classes
              )}
              onClick={() => setSelectedImage(img.url)}
            >
              <img 
                src={img.url} 
                alt={`Portfolio Project ${img.id}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-8 right-8 text-white hover:text-brand-red transition-colors z-10"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage}
              alt="Enlarged project"
              className="max-w-full max-h-full object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Excavation & Land Clearing',
    location: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong.');
      }

      setStatus('success');
      setFormData({ name: '', email: '', phone: '', service: 'Excavation & Land Clearing', location: '', message: '' });
    } catch (err: any) {
      setStatus('error');
      setErrorMsg(err.message || 'Failed to send. Please try again.');
    }
  };

  return (
    <section id="contact" className="pt-12 pb-24 bg-zinc-50 relative overflow-hidden">
      {/* Decorative background text */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[150px] font-black italic opacity-[0.02] whitespace-nowrap pointer-events-none select-none">
        K3M PRECISION • MT. PLEASANT TX • K3M PRECISION
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="bg-white border-2 border-black/5 shadow-2xl flex flex-col lg:flex-row items-stretch min-h-[600px]">
          
          {/* Info Side - Dark & Technical */}
          <div className="w-full lg:w-5/12 bg-black text-white p-10 md:p-16 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-2 h-full bg-brand-red z-20" />
            
            {/* Background Grid Accent */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
               <div className="h-full w-full" style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-[2px] bg-brand-red" />
                <span className="uppercase tracking-widest font-black text-xs italic text-brand-red">Hometown Grit</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight italic uppercase font-black">
                READY TO <br/>
                <span className="text-brand-red">BREAK GROUND?</span>
              </h2>
              
              <div className="space-y-10 group">
                <div>
                   <p className="text-[10px] uppercase tracking-[0.4em] font-black text-brand-red mb-2">Direct Line</p>
                   <p className="text-4xl font-extrabold italic tracking-tighter hover:text-brand-red transition-colors cursor-pointer">
                      <a href="tel:9035634750">903.563.4750</a>
                   </p>
                </div>
                <div>
                   <p className="text-[10px] uppercase tracking-[0.4em] font-black text-brand-red mb-2">Operations Area</p>
                   <p className="text-xl font-extrabold italic uppercase">Mount Pleasant & <br/>Northeast Texas</p>
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-auto pt-10 border-t border-white/10">
               <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                     <span className="w-2 h-2 bg-brand-red animate-pulse" />
                     <span className="text-[10px] uppercase font-black tracking-widest text-brand-red">GPS Tracking Active</span>
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-500 italic">50-MI RADIUS</span>
               </div>
               <p className="text-zinc-500 text-xs italic">
                  Family owned. GPS guided. Built to last.
               </p>
            </div>
          </div>

          {/* Form Side - Clean & Precise */}
          <div className="w-full lg:w-7/12 p-10 md:p-16 bg-white flex flex-col justify-center">
            <div className="mb-12">
              <h3 className="text-3xl mb-3 italic font-black uppercase tracking-tight">Request A Precision Quote</h3>
              <p className="text-zinc-500 text-sm md:text-base max-w-md">
                Complete the details below for a comprehensive site consultation and project estimate.
              </p>
            </div>

            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-16"
              >
                <div className="w-16 h-16 bg-brand-red/10 flex items-center justify-center mx-auto mb-6">
                  <ArrowRight className="w-8 h-8 text-brand-red rotate-[-90deg]" />
                </div>
                <h4 className="text-2xl font-black italic uppercase mb-3">Request Received</h4>
                <p className="text-zinc-500 mb-8 max-w-sm mx-auto">We'll review your project details and get back to you within 24 hours.</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="text-brand-red font-black uppercase text-xs tracking-widest hover:text-black transition-colors"
                >
                  Submit Another Request
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-10">
                  <div className="space-y-3 group">
                    <label className="text-[10px] uppercase tracking-widest font-black text-zinc-400 group-focus-within:text-brand-red transition-colors">Full Name</label>
                    <input 
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-zinc-50 border-b-2 border-zinc-200 p-4 outline-none focus:border-brand-red transition-all font-bold text-sm tracking-tight" 
                      placeholder="John Smith" 
                    />
                  </div>
                  <div className="space-y-3 group">
                    <label className="text-[10px] uppercase tracking-widest font-black text-zinc-400 group-focus-within:text-brand-red transition-colors">Email Address</label>
                    <input 
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-zinc-50 border-b-2 border-zinc-200 p-4 outline-none focus:border-brand-red transition-all font-bold text-sm tracking-tight" 
                      placeholder="you@example.com" 
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                  <div className="space-y-3 group">
                    <label className="text-[10px] uppercase tracking-widest font-black text-zinc-400 group-focus-within:text-brand-red transition-colors">Contact Phone</label>
                    <input 
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-zinc-50 border-b-2 border-zinc-200 p-4 outline-none focus:border-brand-red transition-all font-bold text-sm tracking-tight" 
                      placeholder="903.563.0000" 
                    />
                  </div>
                  <div className="space-y-3 group">
                    <label className="text-[10px] uppercase tracking-widest font-black text-zinc-400 group-focus-within:text-brand-red transition-colors">Service Type</label>
                    <div className="relative">
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full bg-zinc-50 border-b-2 border-zinc-200 p-4 outline-none focus:border-brand-red transition-all font-bold text-sm tracking-tight appearance-none cursor-pointer"
                      >
                        <option>Excavation & Land Clearing</option>
                        <option>Grading & Drainage</option>
                        <option>Infrastructure / Driveways</option>
                        <option>Residential Site Prep</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                        <ArrowRight className="w-4 h-4 rotate-90 text-zinc-300" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 group">
                  <label className="text-[10px] uppercase tracking-widest font-black text-zinc-400 group-focus-within:text-brand-red transition-colors">Service Location</label>
                  <input 
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full bg-zinc-50 border-b-2 border-zinc-200 p-4 outline-none focus:border-brand-red transition-all font-bold text-sm tracking-tight" 
                    placeholder="City / Area" 
                  />
                </div>

                <div className="space-y-3 group">
                  <label className="text-[10px] uppercase tracking-widest font-black text-zinc-400 group-focus-within:text-brand-red transition-colors">Project Scope</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={3} 
                    className="w-full bg-zinc-50 border-b-2 border-zinc-200 p-4 outline-none focus:border-brand-red transition-all font-bold text-sm tracking-tight resize-none" 
                    placeholder="Enter a few details about your project needs..."
                  ></textarea>
                </div>

                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-red-50 border border-red-200 text-red-700 p-4 text-sm font-bold"
                  >
                    {errorMsg}
                  </motion.div>
                )}

                <div className="pt-6">
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="group relative w-full bg-brand-red py-6 text-white font-bold uppercase tracking-[0.4em] text-lg hover:bg-black transition-all flex items-center justify-center gap-4 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    <span>{status === 'loading' ? 'Sending...' : 'Send Request'}</span>
                    <ArrowRight className={cn("w-6 h-6 transition-transform", status === 'loading' ? 'animate-pulse' : 'group-hover:translate-x-2')} />
                    
                    {/* Decorative corner accent */}
                    <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-white/20 group-hover:border-brand-red transition-colors" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 overflow-hidden relative border-t border-white/5">
       {/* Background SEO Keywords Accent */}
       <div className="absolute -bottom-10 -right-10 text-[150px] font-black italic opacity-[0.02] leading-none pointer-events-none whitespace-nowrap">
          MOUNT PLEASANT TEXAS
       </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
        <div className="flex flex-col items-start">
            <div className="flex items-center gap-3 mb-6 inline-block">
              <img 
                src="/k3m logo.jpeg" 
                alt="K3M Excavation" 
                className="h-12 w-auto object-contain mix-blend-screen filter invert hue-rotate-180 brightness-110 contrast-125" 
              />
            </div>
            <p className="text-zinc-500 text-xs leading-relaxed max-w-xs italic uppercase font-bold tracking-wider">
               20 years of excavation mastery. Family-owned operations in Mount Pleasant and Northeast Texas.
            </p>
        </div>

        <div>
           <h4 className="text-brand-red font-black uppercase tracking-[0.2em] text-[10px] mb-6 italic">Support Hub</h4>
           <div className="space-y-4">
              <p className="text-lg font-black italic hover:text-brand-red transition-colors whitespace-nowrap">
                  <a href="tel:9035634750">903.563.4750</a>
               </p>
              <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest leading-loose">Serving Mount Pleasant & <br /> Northeast Texas Region</p>
              <div className="flex gap-4 pt-2">
                  <a 
                    href="https://www.facebook.com/profile.php?id=61582033561846" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <Facebook className="w-5 h-5 text-zinc-500 hover:text-brand-red cursor-pointer transition-colors" />
                  </a>
              </div>
           </div>
        </div>

        <div className="flex flex-col md:items-end">
           <h4 className="text-brand-red font-black uppercase tracking-[0.2em] text-[10px] mb-6 italic">Core Operations</h4>
           <ul className="text-[10px] font-black tracking-[0.15em] space-y-3 text-zinc-500 uppercase md:text-right">
              <li><Link to="/services/site-prep" className="hover:text-white transition-colors block">Site Development</Link></li>
              <li><Link to="/services/land-clearing" className="hover:text-white transition-colors block">Forestry Mulching</Link></li>
              <li><Link to="/services/drainage" className="hover:text-white transition-colors block">Hydraulic Solutions</Link></li>
              <li><Link to="/gallery" className="hover:text-white transition-colors block">Project Archive</Link></li>
           </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 relative z-10">
        <p className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest">
          © {new Date().getFullYear()} K3M EXCAVATION. ALL RIGHTS RESERVED.
        </p>
        <p className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest italic">
          DRIVEN BY PRECISION.
        </p>
      </div>
    </footer>
  );
};

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <K3MCore />
      <Portfolio />
      <Contact />
    </>
  );
};

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [pathname, hash]);

  return null;
};

export default function Layout() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="font-sans">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/services/land-clearing" element={<LandClearing />} />
            <Route path="/services/site-prep" element={<SitePrep />} />
            <Route path="/services/driveways" element={<Driveways />} />
            <Route path="/services/drainage" element={<Drainage />} />
            <Route path="/services/demolition" element={<Demolition />} />
            <Route path="/services/utilities" element={<Utilities />} />
          </Routes>
        </main>
        <FooterWrapper />
      </div>
    </BrowserRouter>
  );
}

const FooterWrapper = () => {
  const { pathname } = useLocation();
  if (pathname === "/contact") return null;
  return <Footer />;
};
