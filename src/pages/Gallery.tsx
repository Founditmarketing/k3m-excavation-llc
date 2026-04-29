import { motion } from "motion/react";
import { Maximize2, Camera } from "lucide-react";

const GALLERY_IMAGES = [
  {
    url: "https://images.unsplash.com/photo-1541625602330-2277a1cd13a1?q=80&w=1200&auto=format&fit=crop",
    title: "Commercial Site Prep",
    category: "Site Prep",
    size: "col-span-2 row-span-2"
  },
  {
    url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop",
    title: "Forestry Mulching",
    category: "Land Clearing",
    size: "col-span-1 row-span-1"
  },
  {
    url: "https://images.unsplash.com/photo-1533991022833-c59748308cdc?q=80&w=800&auto=format&fit=crop",
    title: "Pond Excavation",
    category: "Drainage",
    size: "col-span-1 row-span-1"
  },
  {
    url: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1200&auto=format&fit=crop",
    title: "Retaining Wall Base",
    category: "Infrastructure",
    size: "col-span-1 row-span-1"
  },
  {
    url: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=800&auto=format&fit=crop",
    title: "Subgrade Compaction",
    category: "Site Prep",
    size: "col-span-1 row-span-1"
  },
  {
    url: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?q=80&w=800&auto=format&fit=crop",
    title: "Residential Clearing",
    category: "Land Clearing",
    size: "col-span-2 row-span-1"
  },
  {
    url: "https://images.unsplash.com/photo-1590486803833-ffc6f78d2847?q=80&w=1200&auto=format&fit=crop",
    title: "Utility Trenching",
    category: "Utilities",
    size: "col-span-2 row-span-1"
  },
  {
    url: "https://images.unsplash.com/photo-1579762593175-202120cc7e85?q=80&w=800&auto=format&fit=crop",
    title: "Driveway Grading",
    category: "Infrastructure",
    size: "col-span-1 row-span-2"
  },
  {
    url: "https://images.unsplash.com/photo-1503387837-b154d5074bd2?q=80&w=1200&auto=format&fit=crop",
    title: "Structural Demolition",
    category: "Demolition",
    size: "col-span-1 row-span-2"
  },
  {
    url: "https://images.unsplash.com/photo-1525235555444-245f7823b497?q=80&w=800&auto=format&fit=crop",
    title: "Culvert Install",
    category: "Infrastructure",
    size: "col-span-2 row-span-2"
  },
  {
    url: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800&auto=format&fit=crop",
    title: "GPS Site Mapping",
    category: "Site Prep",
    size: "col-span-2 row-span-1"
  },
  {
    url: "https://images.unsplash.com/photo-1516937622598-f848981e4ae9?q=80&w=800&auto=format&fit=crop",
    title: "Pasture Restoration",
    category: "Land Clearing",
    size: "col-span-2 row-span-1"
  }
];

const GalleryPage = () => {
  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Header section */}
      <section className="bg-black text-white py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[2px] w-12 bg-brand-red" />
            <span className="uppercase tracking-[0.4em] font-black text-brand-red text-xs italic">Operational Portfolio</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black italic uppercase leading-none mb-6">
            PROJECT <span className="text-brand-red">ARCHIVE.</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl italic leading-relaxed">
            A visual documentation of precision, power, and high-performance site solutions across Northeast Texas.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
           <div className="flex items-center gap-4 mb-12">
              <Camera className="w-5 h-5 text-brand-red" />
              <h2 className="text-2xl font-black italic uppercase italic">FIELD FOOTAGE</h2>
              <div className="flex-1 h-px bg-zinc-100" />
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[300px] grid-flow-dense">
              {GALLERY_IMAGES.map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className={`${img.size} relative group overflow-hidden bg-zinc-100 border border-zinc-200`}
                >
                  <img 
                    src={img.url} 
                    alt={img.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                    <p className="text-brand-red text-[10px] font-black uppercase tracking-widest mb-1 italic">{img.category}</p>
                    <h4 className="text-white text-xl font-black uppercase italic italic leading-none">{img.title}</h4>
                    <Maximize2 className="absolute top-6 right-6 w-5 h-5 text-white/50" />
                  </div>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-20 bg-zinc-50 border-t border-zinc-100">
         <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-[10px] uppercase font-black tracking-[0.5em] text-zinc-300 mb-8">
               K3M EXCAVATION • DRIVEN BY PRECISION
            </p>
         </div>
      </section>
    </div>
  );
};

export default GalleryPage;
