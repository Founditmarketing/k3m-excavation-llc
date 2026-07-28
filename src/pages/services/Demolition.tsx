import { motion } from "motion/react";
import { Drill, ShieldCheck, ArrowRight, Hammer } from "lucide-react";
import { Link } from "react-router-dom";
import PageSEO, { BUSINESS_ID } from "@/src/components/PageSEO";

const Demolition = () => {
  return (
    <div className="pt-24 min-h-screen bg-white">
      <PageSEO
        title="Demolition & Site Reclamation | K3M Excavation — Mount Pleasant, TX"
        description="Structural demolition and site restoration services in Northeast Texas. K3M Excavation handles teardown and reclamation with surgical precision."
        path="/services/demolition"
        image="/demolition_service.png"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/#services" },
          { name: "Demolition & Reclamation", path: "/services/demolition" },
        ]}
        schema={{
          "@type": "Service",
          name: "Demolition & Site Reclamation",
          description: "Structural demolition and site restoration for residential and commercial properties.",
          provider: { "@id": BUSINESS_ID },
          areaServed: "Northeast Texas",
          url: "https://www.k3mexcavation.com/services/demolition",
        }}
      />
      <section className="bg-black text-white py-24 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-red/10 blur-3xl" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[2px] w-12 bg-brand-red" />
              <span className="uppercase tracking-[0.4em] font-black text-brand-red text-xs italic">Selective Removal</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black italic uppercase leading-none mb-8">
              DEMOLITION <br/>
              <span className="text-brand-red">& RECLAMATION.</span>
            </h1>
            <p className="text-zinc-400 text-xl max-w-2xl leading-relaxed italic">
              When it's time for a fresh start, we handle the teardown and site restoration with surgical precision.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-black italic uppercase">Safe. Fast. Professional.</h2>
              <div className="h-1 w-20 bg-brand-red" />
              <p className="text-zinc-600 leading-relaxed italic">
                From old barns and mobile homes to concrete slabs and commercial structures, we provide full-service demolition and site reclamation. We don't just knock things down—we sort, haul, and restore the terrain so it's ready for its next purpose.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Residential Structure Demolition",
                  "Concrete & Asphalt Slab Removal",
                  "Disaster Debris Cleanup & Hauling",
                  "Pool Removal & Backfill",
                  "Brownfield Site Reclamation"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-zinc-800 font-bold italic">
                    <ShieldCheck className="w-5 h-5 text-brand-red" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="p-10 bg-zinc-900 text-white border-b-8 border-brand-red flex flex-col justify-center shadow-2xl">
               <Hammer className="w-12 h-12 text-brand-red mb-10" />
               <h3 className="text-2xl font-black italic uppercase mb-4">Surgical Demo</h3>
               <p className="text-zinc-500 italic text-sm mb-8">We provide full-service structure removal and site reclamation. Every teardown includes sorting and industrial waste hauling for a clean slate.</p>
               <div className="space-y-2 pt-8 border-t border-white/10">
                  <div className="flex items-center gap-3">
                     <ShieldCheck className="w-4 h-4 text-brand-red" />
                     <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 italic">Bonded & Insured Ops</p>
                  </div>
                  <div className="flex items-center gap-3">
                     <ShieldCheck className="w-4 h-4 text-brand-red" />
                     <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 italic">Hazmat-Aware Clearing</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-red text-white text-center font-black italic uppercase">
         <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl mb-8">Out with the old. <span className="text-black/30">In with the new.</span></h2>
            <Link to="/contact" className="inline-flex items-center gap-4 bg-black text-white px-12 py-6 tracking-widest hover:bg-white hover:text-black transition-all">
               Schedule a teardown <ArrowRight className="w-5 h-5" />
            </Link>
         </div>
      </section>
    </div>
  );
};

export default Demolition;
