import { motion } from "motion/react";
import { Drill, ShieldCheck, ArrowRight, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import PageSEO, { BUSINESS_ID } from "@/src/components/PageSEO";

const Utilities = () => {
  return (
    <div className="pt-24 min-h-screen bg-white">
      <PageSEO
        title="Underground Utility Installation | K3M Excavation — Mount Pleasant, TX"
        description="Utility trenching and routing for water, electrical, and fiber lines in Mount Pleasant and Northeast Texas. GPS-guided underground utility excavation."
        path="/services/utilities"
        image="/utilities_service.png"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/#services" },
          { name: "Underground Utilities", path: "/services/utilities" },
        ]}
        schema={{
          "@type": "Service",
          name: "Underground Utility Installation",
          description: "Utility trenching, routing, and backfill for water, electrical, and fiber lines.",
          provider: { "@id": BUSINESS_ID },
          areaServed: "Northeast Texas",
          url: "https://www.k3mexcavation.com/services/utilities",
        }}
      />
      <section className="bg-black text-white py-24 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-red/10 blur-3xl" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[2px] w-12 bg-brand-red" />
              <span className="uppercase tracking-[0.4em] font-black text-brand-red text-xs italic">Subsurface Ops</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black italic uppercase leading-none mb-8">
              UNDERGROUND <br/>
              <span className="text-brand-red">UTILITIES.</span>
            </h1>
            <p className="text-zinc-400 text-xl max-w-2xl leading-relaxed italic">
              Critical infrastructure requires surgical excavation. We handle the routing and trenching where it counts.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-black italic uppercase">The Property Arteries</h2>
              <div className="h-1 w-20 bg-brand-red" />
              <p className="text-zinc-600 leading-relaxed italic">
                From electrical conduits and water lines to septic systems and storm sewers, we provide precision trenching and backfill for all underground utilities. Our team ensures all lines are bedded properly to prevent settling and future damage.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Water Line Trenching & Installation",
                  "Electrical & Fiber Optic Conduits",
                  "Septic System Site Prep",
                  "Storm Sewer & Catch Basin Routing",
                  "Utility Trench Backfill & Compaction"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-zinc-800 font-bold italic">
                    <ShieldCheck className="w-5 h-5 text-brand-red" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="p-10 bg-zinc-900 text-white border-b-8 border-brand-red flex flex-col justify-center shadow-2xl">
               <Settings className="w-12 h-12 text-brand-red mb-10 animate-spin-slow" />
               <h3 className="text-2xl font-black italic uppercase mb-4">Precision Routing</h3>
               <p className="text-zinc-500 italic text-sm mb-8">We coordinate with utility providers to ensure every trench meets depth and bedding standards for maximum longevity and compliance.</p>
               <div className="space-y-4 pt-8 border-t border-white/10">
                  <div className="flex items-center justify-between">
                     <span className="text-[10px] font-black uppercase text-brand-red tracking-widest italic">Safety Rating</span>
                     <span className="text-white text-xs font-bold italic">OSHA Compliant Shoring</span>
                  </div>
                  <div className="flex items-center justify-between">
                     <span className="text-[10px] font-black uppercase text-brand-red tracking-widest italic">Service Depth</span>
                     <span className="text-white text-xs font-bold italic">Up to 12 FT Trenching</span>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black text-white text-center">
         <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-black italic uppercase mb-8">Building off-grid or <span className="text-brand-red">expanding?</span></h2>
            <Link to="/contact" className="inline-flex items-center gap-4 bg-brand-red text-white px-12 py-6 font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all">
               Request utility plan <ArrowRight className="w-5 h-5" />
            </Link>
         </div>
      </section>
    </div>
  );
};

export default Utilities;
