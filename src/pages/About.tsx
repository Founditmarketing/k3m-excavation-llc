import { motion } from "motion/react";
import { HardHat, Users, Target, ShieldCheck, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-12 md:py-16 overflow-hidden bg-black text-white">
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-red opacity-10 blur-3xl -z-0" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="h-[2px] w-12 bg-brand-red" />
              <span className="uppercase tracking-[0.4em] font-black text-brand-red text-xs italic">
                Our Story
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black italic uppercase leading-tight mb-6">
              ROOTED IN <br/>
              <span className="text-brand-red">NORTHEAST TEXAS.</span>
            </h1>
            <p className="text-zinc-400 text-lg md:text-xl max-w-2xl leading-relaxed italic">
              K3M Excavation is more than just heavy machinery. We are a family-owned legacy built on honest work, handshake deals, and technical precision.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="aspect-[4/5] bg-zinc-100 border border-black/5 relative overflow-hidden">
                {/* Image Placeholder with consistent style */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent" />
              </div>
              {/* Technical Badge */}
              <div className="absolute -bottom-10 -right-10 bg-brand-red text-white p-10 hidden md:block">
                 <p className="text-5xl font-black italic leading-none mb-2">20+</p>
                 <p className="text-[10px] uppercase font-bold tracking-[0.3em]">Years Operations</p>
              </div>
            </div>
            
            <div className="space-y-8">
              <h2 className="text-4xl font-black italic uppercase italic">The K3M Standard</h2>
              <div className="h-1 w-20 bg-brand-red" />
              <p className="text-zinc-600 leading-relaxed italic">
                Founded in Mount Pleasant, Texas, K3M Excavation was built on the principle that precision shouldn't be a luxury—it should be the baseline. We saw a need for an excavation contractor that combined old-school work ethic with modern technology.
              </p>
              <p className="text-zinc-600 leading-relaxed italic">
                Today, we lead the region in high-grade site prep, utilizing GPS-guided machinery to ensure that every pad, driveway, and drainage system is engineered for longevity. When we break ground, we do it with the future of your property in mind.
              </p>
              
              <div className="pt-10 grid grid-cols-2 gap-8">
                 <div>
                    <h4 className="text-brand-red font-black text-xs uppercase tracking-widest mb-4 italic">Family Owned</h4>
                    <p className="text-xs text-zinc-500 italic">Operating with the integrity of a locally owned small business.</p>
                 </div>
                 <div>
                    <h4 className="text-brand-red font-black text-xs uppercase tracking-widest mb-4 italic">GPS Guided</h4>
                    <p className="text-xs text-zinc-500 italic">Accuracy to the inch using the industry's latest site tech.</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-zinc-50">
         <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
               <h3 className="text-xs uppercase tracking-[0.5em] font-black text-brand-red mb-4 italic">Our Core Values</h3>
               <h2 className="text-4xl md:text-5xl italic uppercase font-black">Built On A Solid Foundation</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
               {[
                 { 
                   icon: Target, 
                   title: "UNMATCHED PRECISION", 
                   desc: "We don't 'eyeball' it. Every site is measured and graded with GPS accuracy to ensure perfect drainage and stability."
                 },
                 { 
                   icon: ShieldCheck, 
                   title: "TOTAL INTEGRITY", 
                   desc: "Our word is our bond. We provide transparent quotes and stick to them, delivering exactly what we promised."
                 },
                 { 
                   icon: Users, 
                   title: "COMMUNITY FIRST", 
                   desc: "We live and work in Northeast Texas. Your property isn't just a job site—it's part of our hometown."
                 }
               ].map((v, i) => (
                 <div key={i} className="bg-white p-10 border border-black/5 shadow-sm hover:shadow-xl transition-all group">
                    <div className="w-12 h-12 bg-black text-brand-red flex items-center justify-center mb-8 group-hover:bg-brand-red group-hover:text-white transition-colors">
                       <v.icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-black italic mb-4 uppercase">{v.title}</h4>
                    <p className="text-zinc-500 text-sm italic leading-relaxed">{v.desc}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

    </div>
  );
};

export default About;
