import { motion } from "motion/react";
import { Trees as Tree, ShieldCheck, ArrowRight, Truck } from "lucide-react";
import { Link } from "react-router-dom";

const LandClearing = () => {
  return (
    <div className="pt-24 min-h-screen bg-white">
      <section className="bg-black text-white py-24 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-red/10 blur-3xl" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[2px] w-12 bg-brand-red" />
              <span className="uppercase tracking-[0.4em] font-black text-brand-red text-xs italic">Service Excellence</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black italic uppercase leading-none mb-8">
              LAND CLEARING <br/>
              <span className="text-brand-red">& MULCHING.</span>
            </h1>
            <p className="text-zinc-400 text-xl max-w-2xl leading-relaxed italic">
              From overgrown brush to massive timber removal, we reclaim your property with industrial precision and environmental care.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-black italic uppercase">Zero-Waste Reclamation</h2>
              <div className="h-1 w-20 bg-brand-red" />
              <p className="text-zinc-600 leading-relaxed italic">
                We don't just push dirt. K3M utilizes high-flow forestry mulchers and heavy-duty grubbing attachments to clear land while protecting your topsoil. Whether you're preparing for a custom home build or expanding your pasture, our clearing services provide a clean slate.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Forestry Mulching & Underbrush Removal",
                  "Large Scale Tree Removal & Grubbing",
                  "Stump Removal & Disposal",
                  "Fence Line & Right-of-Way Clearing",
                  "Pasture Reclamation & Development"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-zinc-800 font-bold italic">
                    <ShieldCheck className="w-5 h-5 text-brand-red" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="p-10 bg-zinc-900 text-white border-b-8 border-brand-red flex flex-col justify-center shadow-2xl">
              <Truck className="w-12 h-12 text-brand-red mb-10" />
              <h3 className="text-2xl font-black italic uppercase mb-4">Zero-Waste Clearing</h3>
              <p className="text-zinc-500 italic text-sm mb-8">Utilizing high-flow forestry mulchers to reclaim land while returning nutrients to the soil. Minimal disturbance, maximum impact.</p>
              <div className="space-y-4 pt-8 border-t border-white/10">
                <div>
                  <p className="text-brand-red text-[10px] uppercase tracking-widest font-black mb-1">Fleet Range</p>
                  <p className="text-white text-xs font-bold italic">Industrial Skidders & D6 Dozers</p>
                </div>
                <div>
                  <p className="text-brand-red text-[10px] uppercase tracking-widest font-black mb-1">Capacity</p>
                  <p className="text-white text-xs font-bold italic">2-5 Acres Per Day Clearing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-red text-white text-center">
         <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-black italic uppercase mb-8">Ready to reclaim your land?</h2>
            <Link to="/contact" className="inline-flex items-center gap-4 bg-white text-black px-12 py-6 font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all">
               Request a Site Quote <ArrowRight className="w-5 h-5" />
            </Link>
         </div>
      </section>
    </div>
  );
};

export default LandClearing;
