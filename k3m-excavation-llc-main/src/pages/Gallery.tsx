import { motion, AnimatePresence } from "motion/react";
import { Camera, X } from "lucide-react";
import { useState } from "react";

const GALLERY_IMAGES = [
  {
    url: "/k3m1.jpg",
    title: "Commercial Site Prep",
    category: "Site Prep",
    size: "col-span-2 row-span-2"
  },
  {
    url: "/k3m2.jpg",
    title: "Forestry Mulching",
    category: "Land Clearing",
    size: "col-span-1 row-span-1"
  },
  {
    url: "/k3m3.jpg",
    title: "Pond Excavation",
    category: "Drainage",
    size: "col-span-1 row-span-1"
  },
  {
    url: "/k3m4.jpg",
    title: "Retaining Wall Base",
    category: "Infrastructure",
    size: "col-span-1 row-span-1"
  },
  {
    url: "/k3m5.jpg",
    title: "Subgrade Compaction",
    category: "Site Prep",
    size: "col-span-1 row-span-1"
  },
  {
    url: "/k3m6.jpg",
    title: "Residential Clearing",
    category: "Land Clearing",
    size: "col-span-2 row-span-1"
  },
  {
    url: "/k3m7.jpg",
    title: "Utility Trenching",
    category: "Utilities",
    size: "col-span-2 row-span-1"
  },
  {
    url: "/k3m8.jpg",
    title: "Driveway Grading",
    category: "Infrastructure",
    size: "col-span-1 row-span-2"
  },
  {
    url: "/k3m9.jpg",
    title: "Structural Demolition",
    category: "Demolition",
    size: "col-span-1 row-span-2"
  },
  {
    url: "/k3m1.jpg",
    title: "Culvert Install",
    category: "Infrastructure",
    size: "col-span-2 row-span-2"
  },
  {
    url: "/k3m2.jpg",
    title: "GPS Site Mapping",
    category: "Site Prep",
    size: "col-span-2 row-span-1"
  },
  {
    url: "/k3m3.jpg",
    title: "Pasture Restoration",
    category: "Land Clearing",
    size: "col-span-2 row-span-1"
  }
];

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="pt-24 min-h-screen bg-white relative">
      {/* Header section */}
      <section className="bg-black text-white py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/k3m10.jpg')] bg-cover bg-center" />
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
                  className={`${img.size} relative group overflow-hidden bg-zinc-100 border border-zinc-200 cursor-pointer`}
                  onClick={() => setSelectedImage(img.url)}
                >
                  <img 
                    src={img.url} 
                    alt={img.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
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
    </div>
  );
};

export default GalleryPage;
