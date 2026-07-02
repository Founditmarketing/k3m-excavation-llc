import React, { useState } from "react";
import { motion } from "motion/react";
import { Phone, Mail, MapPin, ArrowRight, Clock, ShieldCheck, Facebook } from "lucide-react";

const ServiceAreaMap = () => {
  return (
    <div className="relative w-full aspect-[16/10] md:aspect-[21/9] bg-zinc-900 border border-white/10 overflow-hidden group rounded-sm shadow-2xl">
      {/* Precision Grid */}
      <div className="absolute inset-0 opacity-[0.1] pointer-events-none">
        <div className="grid grid-cols-20 h-full">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="border-r border-white" />
          ))}
        </div>
        <div className="grid grid-rows-10 w-full h-full absolute top-0">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="border-b border-white" />
          ))}
        </div>
      </div>

      <svg viewBox="0 0 800 400" className="w-full h-full relative z-10 transition-transform duration-1000 group-hover:scale-105">
        {/* 50-mile radius circle (centered in wide view) */}
        <motion.circle
          cx="400"
          cy="200"
          r="150"
          fill="none"
          stroke="#AD3432"
          strokeWidth="1.5"
          strokeDasharray="8 4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        />
        
        <circle
          cx="400"
          cy="200"
          r="150"
          fill="#AD3432"
          fillOpacity="0.08"
        />

        {/* Radar Sweeps */}
        <motion.circle
          cx="400"
          cy="200"
          r="150"
          fill="none"
          stroke="#AD3432"
          strokeWidth="0.5"
          initial={{ scale: 0, opacity: 0.5 }}
          animate={{ scale: 1, opacity: 0 }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
        />

        {/* Center Point: Mount Pleasant */}
        <g className="cursor-pointer">
          <circle cx="400" cy="200" r="5" fill="#AD3432" />
          <circle cx="400" cy="200" r="15" fill="none" stroke="#AD3432" strokeWidth="1" className="animate-pulse" />
          <text x="412" y="205" className="text-[14px] font-black uppercase tracking-tighter fill-white italic">
            Mt. Pleasant HQ
          </text>
        </g>

        {/* Surrounding Major Cities for Context - Adjusted for wide view */}
        {[
          { name: "Paris", x: 300, y: 120 },
          { name: "Texarkana", x: 530, y: 130 },
          { name: "Longview", x: 480, y: 310 },
          { name: "Tyler", x: 310, y: 320 },
          { name: "Sulpur Springs", x: 270, y: 220 }
        ].map((city) => (
          <g key={city.name} className="opacity-30 hover:opacity-100 transition-opacity cursor-default">
            <circle cx={city.x} cy={city.y} r="3" fill="#fff" />
            <text x={city.x + 8} y={city.y + 4} className="text-[10px] font-bold uppercase tracking-widest fill-zinc-400">
              {city.name}
            </text>
          </g>
        ))}

        {/* Legend */}
        <line x1="400" y1="200" x2="550" y2="200" stroke="#AD3432" strokeWidth="1" />
        <text x="450" y="190" className="text-[10px] font-black uppercase tracking-[0.2em] fill-brand-red italic">
          50 MI RADIUS
        </text>
      </svg>

      {/* Dynamic Overlay */}
      <div className="absolute top-6 left-6 z-20">
         <div className="flex flex-col gap-1">
            <span className="text-[10px] font-mono text-brand-red font-bold">OPERATIONS: ACTIVE</span>
            <span className="text-[9px] font-mono text-zinc-500">LAT: 33.1557° N / LON: 94.9674° W</span>
         </div>
      </div>

      <div className="absolute bottom-6 right-6 z-20 flex items-center gap-3 bg-black/80 backdrop-blur-md p-3 border border-white/10">
         <div className="w-10 h-10 border border-brand-red flex items-center justify-center">
            <ShieldCheck className="w-5 h-5 text-brand-red" />
         </div>
         <div className="flex flex-col">
            <span className="text-[10px] font-black uppercase text-white leading-none mb-1">Precision Site Map</span>
            <span className="text-[8px] font-bold uppercase text-zinc-500 tracking-widest leading-none">Northeast Texas Region</span>
         </div>
      </div>
    </div>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    service: 'Excavation/Clearing',
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
      const res = await fetch('https://www.founditos.com/api/contact-form/c473826e-a3a8-48cc-90cc-8033f576c777', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: `Service: ${formData.service}\n\n${formData.message || ''}`,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong.');
      }

      setStatus('success');
      setFormData({ name: '', email: '', phone: '', location: '', service: 'Excavation/Clearing', message: '' });
    } catch (err: any) {
      setStatus('error');
      setErrorMsg(err.message || 'Failed to send. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Minimal Header */}
      <section className="bg-black text-white pt-32 pb-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-red/5 -skew-x-12 translate-x-1/4" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-[2px] bg-brand-red" />
            <span className="uppercase tracking-[0.4em] font-black text-brand-red text-xs italic">Direct Communication</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black italic uppercase leading-none mb-4">
            GET IN <span className="text-brand-red">TOUCH.</span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl italic max-w-xl">
            From emergency repairs to massive site developments, we respond with technical precision and local grit.
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
            
            {/* Left: Info */}
            <div className="space-y-12">
               <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-8">
                  <div className="p-8 border-l-4 border-brand-red bg-zinc-50 hover:bg-zinc-100 transition-colors">
                     <div className="flex items-center gap-3 mb-4">
                        <Phone className="w-5 h-5 text-brand-red" />
                        <span className="uppercase font-black text-xs tracking-widest text-zinc-400 italic">24/7 Support</span>
                     </div>
                     <p className="text-3xl font-black italic tracking-tighter mb-2 underline decoration-brand-red/30 hover:text-brand-red transition-colors">
                        <a href="tel:9035634750">903.563.4750</a>
                     </p>
                     <p className="text-sm text-zinc-500">Direct line to site operations.</p>
                  </div>

                  <div className="p-8 border-l-4 border-black bg-zinc-50 hover:bg-zinc-100 transition-colors">
                     <div className="flex items-center gap-3 mb-4">
                        <Mail className="w-5 h-5 text-brand-red" />
                        <span className="uppercase font-black text-xs tracking-widest text-zinc-400 italic">Official Inquiries</span>
                     </div>
                     <p className="text-2xl font-black italic tracking-tight mb-2 underline decoration-brand-red/30 hover:text-brand-red transition-colors">
                        <a href="mailto:k3mllc@hotmail.com">k3mllc@hotmail.com</a>
                     </p>
                     <p className="text-sm text-zinc-500">Send blueprints and RFP docs.</p>
                  </div>

                  <a 
                    href="https://www.facebook.com/profile.php?id=61582033561846" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-8 border-l-4 border-zinc-300 bg-zinc-50 hover:bg-zinc-100 transition-colors block"
                  >
                     <div className="flex items-center gap-3 mb-4">
                        <Facebook className="w-5 h-5 text-brand-red" />
                        <span className="uppercase font-black text-xs tracking-widest text-zinc-400 italic">Social Connection</span>
                     </div>
                     <p className="text-2xl font-black italic tracking-tight mb-2">Follow K3M</p>
                     <p className="text-sm text-zinc-500">See our latest project updates.</p>
                  </a>
               </div>
            </div>

            {/* Right: Form */}
            <div>
               <div className="bg-black text-white p-10 md:p-12 relative overflow-hidden shadow-2xl">
                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-brand-red" style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }} />
                  
                  <div className="relative z-10">
                     <div className="mb-8">
                        <h2 className="text-3xl font-black italic uppercase mb-4">PROJECT REQUEST</h2>
                        <p className="text-zinc-400 text-sm italic max-w-md">Detailed information ensures a more accurate initial site estimate.</p>
                     </div>

                     {status === 'success' ? (
                       <motion.div
                         initial={{ opacity: 0, y: 20 }}
                         animate={{ opacity: 1, y: 0 }}
                         className="text-center py-12"
                       >
                         <div className="w-16 h-16 border-2 border-brand-red flex items-center justify-center mx-auto mb-6">
                           <ArrowRight className="w-8 h-8 text-brand-red rotate-[-90deg]" />
                         </div>
                         <h4 className="text-2xl font-black italic uppercase mb-3">Request Received</h4>
                         <p className="text-zinc-400 mb-8 max-w-sm mx-auto text-sm italic">We'll review your project details and get back to you within 24 hours.</p>
                         <button
                           onClick={() => setStatus('idle')}
                           className="text-brand-red font-black uppercase text-xs tracking-widest hover:text-white transition-colors"
                         >
                           Submit Another Request
                         </button>
                       </motion.div>
                     ) : (
                       <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-8">
                           <div className="space-y-2 group">
                              <label className="text-[10px] uppercase tracking-widest font-black text-brand-red">Full Name</label>
                              <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full bg-transparent border-b-2 border-white/20 p-2 outline-none focus:border-brand-red transition-all font-bold text-lg"
                                placeholder="John Smith"
                              />
                           </div>
                           <div className="space-y-2 group">
                              <label className="text-[10px] uppercase tracking-widest font-black text-brand-red">Email Address</label>
                              <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full bg-transparent border-b-2 border-white/20 p-2 outline-none focus:border-brand-red transition-all font-bold text-lg"
                                placeholder="you@example.com"
                              />
                           </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                           <div className="space-y-2 group">
                              <label className="text-[10px] uppercase tracking-widest font-black text-brand-red">Phone Number</label>
                              <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full bg-transparent border-b-2 border-white/20 p-2 outline-none focus:border-brand-red transition-all font-bold text-lg"
                                placeholder="903-555-0100"
                              />
                           </div>
                           <div className="space-y-2 group">
                              <label className="text-[10px] uppercase tracking-widest font-black text-brand-red">Project Location</label>
                              <input
                                type="text"
                                name="location"
                                value={formData.location}
                                onChange={handleChange}
                                className="w-full bg-transparent border-b-2 border-white/20 p-2 outline-none focus:border-brand-red transition-all font-bold text-lg"
                                placeholder="Mt. Pleasant, TX"
                              />
                           </div>
                        </div>

                        <div className="space-y-2 group">
                           <label className="text-[10px] uppercase tracking-widest font-black text-brand-red">Type of Work</label>
                           <select
                             name="service"
                             value={formData.service}
                             onChange={handleChange}
                             className="w-full bg-black border-b-2 border-white/20 p-2 outline-none focus:border-brand-red transition-all font-bold text-lg appearance-none cursor-pointer"
                           >
                              <option>Excavation/Clearing</option>
                              <option>Site Prep/Grading</option>
                              <option>Driveway/Infra</option>
                              <option>Pond/Drainage</option>
                           </select>
                        </div>

                        <div className="space-y-2 group">
                           <label className="text-[10px] uppercase tracking-widest font-black text-brand-red">Brief Scope of Work</label>
                           <textarea
                             name="message"
                             value={formData.message}
                             onChange={handleChange}
                             required
                             rows={3}
                             className="w-full bg-transparent border-b-2 border-white/20 p-2 outline-none focus:border-brand-red transition-all font-bold text-lg resize-none"
                             placeholder="Describe the size and timeline of your project..."
                           ></textarea>
                        </div>

                        {status === 'error' && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-red-500/10 border border-red-500/30 text-red-300 p-4 text-sm font-bold"
                          >
                            {errorMsg}
                          </motion.div>
                        )}

                        <div className="pt-4">
                           <button
                             type="submit"
                             disabled={status === 'loading'}
                             className="group relative w-full bg-brand-red py-5 text-white font-black uppercase tracking-[0.4em] text-sm hover:bg-white hover:text-black transition-all flex items-center justify-center gap-4 overflow-hidden disabled:opacity-60 disabled:cursor-not-allowed"
                           >
                              <span className="relative z-10">{status === 'loading' ? 'Sending...' : 'Initiate Consultation'}</span>
                              <ArrowRight className={`w-5 h-5 relative z-10 transition-transform ${status === 'loading' ? 'animate-pulse' : 'group-hover:translate-x-3'}`} />
                           </button>
                        </div>
                       </form>
                     )}
                  </div>
               </div>
            </div>

          </div>

          {/* Wide Angle Map Section */}
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-zinc-100">
               <div>
                  <h3 className="text-3xl font-black italic uppercase italic mb-2">Service Region</h3>
                  <p className="text-zinc-500 italic max-w-lg">We provide precision site solutions within a 50-mile radius of our Mount Pleasant headquarters.</p>
               </div>
               <div className="flex gap-12">
                  <div>
                     <p className="text-[10px] font-black uppercase text-brand-red tracking-widest mb-1 italic">Average Response</p>
                     <p className="text-2xl font-black italic tracking-tighter">Under 24H</p>
                  </div>
                  <div className="w-px h-12 bg-zinc-200 hidden md:block" />
                  <div>
                     <p className="text-[10px] font-black uppercase text-brand-red tracking-widest mb-1 italic">Operating Range</p>
                     <p className="text-2xl font-black italic tracking-tighter">50 MI Radius</p>
                  </div>
               </div>
            </div>
            
            <ServiceAreaMap />
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 pt-4">
               {["Mt. Pleasant", "Paris", "Texarkana", "Longview", "Tyler"].map(city => (
                  <div key={city} className="bg-zinc-50 p-4 border border-zinc-100 text-center group hover:bg-black hover:text-white transition-all cursor-default">
                     <p className="text-[10px] font-black uppercase tracking-widest group-hover:text-brand-red transition-colors">{city}</p>
                  </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* Minimal Footer for Contact Page */}
      <section className="py-12 bg-zinc-50 border-t border-black/5">
         <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-[10px] uppercase font-black tracking-[0.5em] text-zinc-300">
               K3M EXCAVATION • EST 2004 • PRECISION DRIVEN
            </p>
         </div>
      </section>
    </div>
  );
};

export default Contact;
