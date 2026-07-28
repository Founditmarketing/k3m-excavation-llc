import { motion } from "motion/react";
import { Ruler, ShieldCheck, ArrowRight, Target } from "lucide-react";
import { Link } from "react-router-dom";
import PageSEO, { BUSINESS_ID } from "@/src/components/PageSEO";

const SitePrep = () => {
  return (
    <div className="pt-24 min-h-screen bg-white">
      <PageSEO
        title="Site Prep & GPS Grading | K3M Excavation — Mount Pleasant, TX"
        description="GPS-guided site preparation and precision grading for residential and commercial pads in Mount Pleasant and Northeast Texas."
        path="/services/site-prep"
        image="/k3m2.jpg"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/#services" },
          { name: "Site Prep & GPS Grading", path: "/services/site-prep" },
        ]}
        schema={{
          "@type": "Service",
          name: "Site Prep & GPS Grading",
          description: "GPS-guided grading and pad construction for residential and commercial building sites.",
          provider: { "@id": BUSINESS_ID },
          areaServed: "Northeast Texas",
          url: "https://www.k3mexcavation.com/services/site-prep",
        }}
      />
      <section className="bg-black text-white py-24 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-red/10 blur-3xl" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[2px] w-12 bg-brand-red" />
              <span className="uppercase tracking-[0.4em] font-black text-brand-red text-xs italic">GPS Precision</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black italic uppercase leading-none mb-8">
              SITE PREP <br/>
              <span className="text-brand-red">& GRADING.</span>
            </h1>
            <p className="text-zinc-400 text-xl max-w-2xl leading-relaxed italic">
              The foundation of every project depends on precision. We deliver GPS-guided grading to ensure your site is perfectly level and stable.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-black italic uppercase">Engineering Stability</h2>
              <div className="h-1 w-20 bg-brand-red" />
              <p className="text-zinc-600 leading-relaxed italic">
                A bad grade today means a cracked foundation tomorrow. K3M Excavation specializes in commercial and residential site prep, utilizing TopCon GPS technology to achieve grading accuracy within a fraction of an inch.
              </p>
              
              <ul className="space-y-4">
                {[
                  "House Pad Construction & Compaction",
                  "Commercial Development Site Prep",
                  "Laser-Guided Final Grading",
                  "Erosion Control & Silt Fencing",
                  "Building Pad Soil Stabilization"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-zinc-800 font-bold italic">
                    <ShieldCheck className="w-5 h-5 text-brand-red" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="p-10 bg-zinc-900 text-white border-b-8 border-brand-red flex flex-col justify-center shadow-2xl">
               <Target className="w-12 h-12 text-brand-red mb-10" />
               <h3 className="text-2xl font-black italic uppercase mb-4">GPS Calibration</h3>
               <p className="text-zinc-500 italic text-sm mb-8">Our TopCon GPS-guided machinery allows for site preparation with zero margin for error, eliminating costly excavation overruns.</p>
               <div className="flex items-center gap-4 pt-8 border-t border-white/10">
                  <div className="text-4xl font-black italic text-brand-red">0.25"</div>
                  <div className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 leading-tight">Vertical Tolerance <br/>Precision Standard</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black text-white text-center">
         <div className="max-w-4xl mx-auto px-6 font-black uppercase italic">
            <h2 className="text-4xl md:text-5xl mb-8">Start With A <span className="text-brand-red">Solid Foundation.</span></h2>
            <Link to="/contact" className="inline-flex items-center gap-4 bg-brand-red text-white px-12 py-6 tracking-widest hover:bg-white hover:text-black transition-all">
               Request site analysis <ArrowRight className="w-5 h-5" />
            </Link>
         </div>
      </section>
    </div>
  );
};

export default SitePrep;
