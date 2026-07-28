import { motion } from "motion/react";
import { Droplet as Drop, ShieldCheck, ArrowRight, Waves } from "lucide-react";
import { Link } from "react-router-dom";
import PageSEO, { BUSINESS_ID } from "@/src/components/PageSEO";

const Drainage = () => {
  return (
    <div className="pt-24 min-h-screen bg-white">
      <PageSEO
        title="Pond & Drainage Solutions | K3M Excavation — Mount Pleasant, TX"
        description="Stock pond construction, drainage correction, and water management solutions from K3M Excavation in Mount Pleasant and Northeast Texas."
        path="/services/drainage"
        image="/pond_drainage_excavation.png"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/#services" },
          { name: "Ponds & Advanced Drainage", path: "/services/drainage" },
        ]}
        schema={{
          "@type": "Service",
          name: "Pond & Drainage Solutions",
          description: "Stock pond excavation, drainage correction, and water management for rural and residential properties.",
          provider: { "@id": BUSINESS_ID },
          areaServed: "Northeast Texas",
          url: "https://www.k3mexcavation.com/services/drainage",
        }}
      />
      <section className="bg-black text-white py-24 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-red/10 blur-3xl" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[2px] w-12 bg-brand-red" />
              <span className="uppercase tracking-[0.4em] font-black text-brand-red text-xs italic">Flow Control</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black italic uppercase leading-none mb-8">
              DRAINAGE <br/>
              <span className="text-brand-red">& POND SOLUTIONS.</span>
            </h1>
            <p className="text-zinc-400 text-xl max-w-2xl leading-relaxed italic">
              Water is either your property's best asset or its worst enemy. We ensure it goes exactly where it needs to.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-black italic uppercase">Mastering The Flow</h2>
              <div className="h-1 w-20 bg-brand-red" />
              <p className="text-zinc-600 leading-relaxed italic">
                From stock ponds to complex site drainage systems, we use topography mapping to design and build water management solutions that last generations. We specialize in Northeast Texas clay soils and their unique drainage requirements.
              </p>
              
              <ul className="space-y-4">
                {[
                  "New Stock Pond Construction & Lining",
                  "Pond Repair, Cleaning & Expansion",
                  "Site Drainage Correction & Swales",
                  "French Drains & Underground Catch Basins",
                  "Dam Repair & Stabilization"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-zinc-800 font-bold italic">
                    <ShieldCheck className="w-5 h-5 text-brand-red" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="p-10 bg-zinc-900 text-white border-b-8 border-brand-red flex flex-col justify-center shadow-2xl">
               <Waves className="w-12 h-12 text-brand-red mb-10" />
               <h3 className="text-2xl font-black italic uppercase mb-4">Hydraulic Integrity</h3>
               <p className="text-zinc-500 italic text-sm mb-8">Our ponds are engineered with proper core trenches and spillways to ensure they hold water during droughts and manage overflow during Texas storms.</p>
               <div className="space-y-4 pt-8 border-t border-white/10">
                  <div className="flex items-center justify-between">
                     <span className="text-[10px] font-black uppercase text-brand-red tracking-widest italic">Pond Sealing</span>
                     <span className="text-white text-xs font-bold italic">Bentonite/Clay Native</span>
                  </div>
                  <div className="flex items-center justify-between">
                     <span className="text-[10px] font-black uppercase text-brand-red tracking-widest italic">Grade Swales</span>
                     <span className="text-white text-xs font-bold italic">Laser-Guided Flow</span>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black text-white text-center">
         <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-black italic uppercase mb-8">Protect your property from <span className="text-brand-red">water damage.</span></h2>
            <Link to="/contact" className="inline-flex items-center gap-4 bg-brand-red text-white px-12 py-6 font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all">
               Discuss water solutions <ArrowRight className="w-5 h-5" />
            </Link>
         </div>
      </section>
    </div>
  );
};

export default Drainage;
