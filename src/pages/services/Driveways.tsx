import { motion } from "motion/react";
import { Truck, ShieldCheck, ArrowRight, HardHat } from "lucide-react";
import { Link } from "react-router-dom";

const Driveways = () => {
  return (
    <div className="pt-24 min-h-screen bg-white">
      <section className="bg-black text-white py-24 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-red/10 blur-3xl" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[2px] w-12 bg-brand-red" />
              <span className="uppercase tracking-[0.4em] font-black text-brand-red text-xs italic">Road Logistics</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black italic uppercase leading-none mb-8">
              DRIVEWAYS <br/>
              <span className="text-brand-red">& INFRASTRUCTURE.</span>
            </h1>
            <p className="text-zinc-400 text-xl max-w-2xl leading-relaxed italic">
              From ranch roads to residential drives, we build durable infrastructure that stands up to the Texas elements.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-black italic uppercase">Built For The Long Haul</h2>
              <div className="h-1 w-20 bg-brand-red" />
              <p className="text-zinc-600 leading-relaxed italic">
                A driveway is more than just gravel—it's an engineered system. We handle everything from sub-grade preparation and stabilization to final stone placement and culvert installation.
              </p>
              
              <ul className="space-y-4">
                {[
                  "New Driveway Construction (Crushed Stone/Base)",
                  "Ranch Road Development & Maintenance",
                  "Culvert Installation & Ditching",
                  "Dump Trailer & Material Hauling",
                  "Roadway Stabilization & Geotextiles"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-zinc-800 font-bold italic">
                    <ShieldCheck className="w-5 h-5 text-brand-red" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="p-10 bg-zinc-900 text-white border-b-8 border-brand-red flex flex-col justify-center shadow-2xl">
               <HardHat className="w-12 h-12 text-brand-red mb-10" />
               <h3 className="text-2xl font-black italic uppercase mb-4">Civil Endurance</h3>
               <p className="text-zinc-500 italic text-sm mb-8">We utilize specialized sub-grade stabilization techniques to ensure that your private roads and driveways resist washouts and heavy load settling.</p>
               <div className="grid grid-cols-2 gap-4 pt-8 border-t border-white/10">
                  <div className="p-4 bg-white/5 border border-white/10">
                     <p className="text-[10px] font-black uppercase text-brand-red mb-1">Base Prep</p>
                     <p className="text-white text-[10px] font-bold">Compacted Limestone</p>
                  </div>
                  <div className="p-4 bg-white/5 border border-white/10">
                     <p className="text-[10px] font-black uppercase text-brand-red mb-1">Stabilization</p>
                     <p className="text-white text-[10px] font-bold">Geotextile Lining</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-red text-white text-center">
         <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-black italic uppercase mb-8">Need a durable entrance?</h2>
            <Link to="/contact" className="inline-flex items-center gap-4 bg-white text-black px-12 py-6 font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all">
               Get a quote <ArrowRight className="w-5 h-5" />
            </Link>
         </div>
      </section>
    </div>
  );
};

export default Driveways;
