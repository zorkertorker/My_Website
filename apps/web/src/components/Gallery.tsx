"use client";

const images = [
  {
    url: "https://images.unsplash.com/photo-1500964757637-c85e8a162699?w=800&h=600&fit=crop",
    caption: "Field Recording 001"
  },
  {
    url: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&h=600&fit=crop",
    caption: "Location Scout 023"
  },
  {
    url: "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?w=800&h=600&fit=crop",
    caption: "Archive Footage"
  },
  {
    url: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=800&h=600&fit=crop",
    caption: "Environment Study"
  },
  {
    url: "https://images.unsplash.com/photo-1496070242169-b672c576566b?w=800&h=600&fit=crop",
    caption: "Abandoned Space"
  },
  {
    url: "https://images.unsplash.com/photo-1527576539890-dfa815648363?w=800&h=600&fit=crop",
    caption: "Static Capture"
  }
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 px-6 opacity-0 transition-opacity duration-1000">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-slate-100/80 tracking-widest font-mono">
          // ARCHIVE
        </h2>
        <p className="text-slate-400 mb-16 text-sm font-mono tracking-wider">
          VISUAL DOCUMENTATION
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden aspect-[4/3] border border-slate-600/40 cursor-pointer hover:border-blue-400/40 transition-all duration-300"
            >
              <img 
                src={image.url} 
                alt={image.caption}
                className="w-full h-full object-cover opacity-50 vhs-distort dreamlike-filter group-hover:opacity-60 transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/20 to-slate-900/60 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-slate-600/30">
                  <p className="text-blue-100/80 font-mono text-xs tracking-wider">{image.caption}</p>
                </div>
              </div>
              
              {/* VHS timestamp */}
              <div className="absolute top-2 right-2 text-blue-200/40 font-mono text-xs">
                {String(index + 1).padStart(3, '0')}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
