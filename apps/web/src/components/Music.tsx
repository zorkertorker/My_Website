"use client";

import { Play } from 'lucide-react';

const tracks = [
  {
    title: "The Meadow",
    date: "09.15.2023",
    duration: "12:34",
    image: "https://images.unsplash.com/photo-1500964757637-c85e8a162699?w=600&h=400&fit=crop",
  },
  {
    title: "Graveyard Transmission",
    date: "08.22.2023",
    duration: "18:45",
    image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=600&h=400&fit=crop",
  },
  {
    title: "Abandoned Structure",
    date: "07.08.2023",
    duration: "15:12",
    image: "https://images.unsplash.com/photo-1496070242169-b672c576566b?w=600&h=400&fit=crop",
  },
  {
    title: "Static Dreams",
    date: "06.14.2023",
    duration: "22:08",
    image: "https://images.unsplash.com/photo-1527576539890-dfa815648363?w=600&h=400&fit=crop",
  },
  {
    title: "Liminal Frequencies",
    date: "05.30.2023",
    duration: "16:28",
    image: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=600&h=400&fit=crop",
  },
  {
    title: "After Hours",
    date: "04.19.2023",
    duration: "19:15",
    image: "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?w=600&h=400&fit=crop",
  }
];

export default function Music() {
  return (
    <section id="music" className="py-24 px-6 opacity-0 transition-opacity duration-1000">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-slate-100/80 tracking-widest font-mono">
          // RECORDINGS
        </h2>
        <p className="text-slate-400 mb-16 text-sm font-mono tracking-wider">
          ANALOG AUDIO ARCHIVES
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tracks.map((track, index) => (
            <div
              key={index}
              className="group border border-slate-600/40 overflow-hidden hover:border-blue-400/40 transition-all duration-300 bg-slate-950/60 backdrop-blur-sm"
            >
              <div className="relative overflow-hidden aspect-video">
                <img 
                  src={track.image} 
                  alt={track.title}
                  className="w-full h-full object-cover opacity-50 vhs-distort dreamlike-filter group-hover:opacity-60 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-slate-900/60" />
                
                {/* VHS timestamp overlay */}
                <div className="absolute top-2 left-2 text-blue-200/60 font-mono text-xs">
                  {track.date}
                </div>
                
                <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 border border-blue-300/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-blue-300/10">
                  <Play className="w-6 h-6 text-blue-100/90 ml-0.5" />
                </button>
              </div>
              
              <div className="p-4 border-t border-slate-600/30">
                <h3 className="text-base font-mono text-slate-100/90 mb-2 tracking-wide">{track.title}</h3>
                
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 text-xs font-mono">{track.duration}</span>
                  <span className="text-slate-600 text-xs font-mono">[ VHS ]</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
