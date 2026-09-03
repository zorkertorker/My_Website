'use client'; // Runs in the browser — needs useState for the mobile carousel

import { useState } from 'react';
import { Video, ChevronLeft, ChevronRight } from 'lucide-react'; // Icons for the header and carousel arrows

// ─────────────────────────────────────────────
// VIDEO SHOWCASE SECTION
// Displays YouTube videos in two different layouts:
//   - Mobile: a swipeable carousel (one video at a time, with arrows + dots)
//   - Desktop: a fixed grid (main video + short + two more)
// ─────────────────────────────────────────────

// All YouTube video IDs and metadata in one place.
// To add or remove a video, just edit this array.
// isShort: true = uses a 9:16 vertical aspect ratio (YouTube Shorts format)
const videos = [
  { id: '_82ukLFoN9o', title: 'Video 1', isShort: false },
  { id: 'nHGrbW6e64o', title: 'Video 2', isShort: true }, // Vertical short
  { id: 'Bgkl7DMhVWk', title: 'Video 3', isShort: false },
  { id: 'baDqMMsehW8', title: 'Video 4', isShort: false },
];

export default function GameAudio() {
  // currentIndex tracks which video is shown in the mobile carousel
  // Starts at 0 (first video)
  const [currentIndex, setCurrentIndex] = useState(0);

  // Go to the previous video — wraps around to the last video if at the start
  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  // Go to the next video — wraps around to the first video if at the end
  const goToNext = () => {
    setCurrentIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
  };

  // The video currently shown in the mobile carousel
  const currentVideo = videos[currentIndex];

  return (
    // id="videos" is the anchor target for the [ VIDEOS ] button in Hero.tsx
    <section id="videos" className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-4">
          <Video className="w-8 h-8 text-blue-300/60" />
          <h2 className="text-4xl font-bold text-slate-100/80 tracking-widest font-mono">
            // VIDEOS
          </h2>
        </div>
        <div className="mb-12" />

        {/* ── MOBILE CAROUSEL ── */}
        {/* Only visible on screens smaller than lg (1024px). Hidden on desktop. */}
        <div className="lg:hidden relative">
          {/* The video player — aspect ratio changes based on isShort */}
          <div className="border border-slate-600/40 bg-slate-950/60 backdrop-blur-sm p-4">
            <div
              className={`${currentVideo.isShort ? 'aspect-[9/16] max-w-[300px] mx-auto' : 'aspect-video'} w-full`}
            >
              {/* key={currentVideo.id} forces the iframe to fully reload when the video changes */}
              <iframe
                key={currentVideo.id}
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${currentVideo.id}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>

          {/* Left arrow — goes to previous video */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-10 h-10 flex items-center justify-center bg-slate-900/80 border border-slate-600/60 text-blue-200/80 hover:text-blue-100 hover:bg-slate-800/90 transition-all duration-300"
            aria-label="Previous video"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          {/* Right arrow — goes to next video */}
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-10 h-10 flex items-center justify-center bg-slate-900/80 border border-slate-600/60 text-blue-200/80 hover:text-blue-100 hover:bg-slate-800/90 transition-all duration-300"
            aria-label="Next video"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dot indicators — one dot per video, filled when active */}
          <div className="flex justify-center gap-3 mt-6">
            {videos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)} // Click a dot to jump to that video
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-blue-300/90 scale-110' // Active dot: bright + slightly bigger
                    : 'bg-slate-600/60 hover:bg-slate-500/80' // Inactive dot
                }`}
                aria-label={`Go to video ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* ── DESKTOP GRID ── */}
        {/* Only visible on lg (1024px) and above. Hidden on mobile. */}
        {/* Uses hardcoded embed URLs (not the videos array) to allow specific sizing per slot */}
        <div className="hidden lg:block">
          <div className="flex gap-6">
            {/* Main featured video — wide, landscape 16:9 */}
            <div className="flex-1 border border-slate-600/40 bg-slate-950/60 backdrop-blur-sm p-6">
              <div className="aspect-video w-full">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/_82ukLFoN9o?si=Yzn54E0GMSQ4RCkm"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
            {/* Short video — tall vertical 9:16 format */}
            <div className="w-64 border border-slate-600/40 bg-slate-950/60 backdrop-blur-sm p-6">
              <div className="aspect-[9/16] w-full max-w-[240px] mx-auto">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/nHGrbW6e64o?si=2Y2CP22bvFfFz4TB"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
          </div>

          {/* Two more videos in a 2-column grid below the main row */}
          <div className="grid grid-cols-2 gap-6 mt-6">
            <div className="border border-slate-600/40 bg-slate-950/60 backdrop-blur-sm p-6">
              <div className="aspect-video w-full">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/Bgkl7DMhVWk"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
            <div className="border border-slate-600/40 bg-slate-950/60 backdrop-blur-sm p-6">
              <div className="aspect-video w-full">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/baDqMMsehW8"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
