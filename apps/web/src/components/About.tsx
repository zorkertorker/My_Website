'use client'; // Runs in the browser — no server-side logic needed here, just static content

// ─────────────────────────────────────────────
// ABOUT SECTION
// Displays a short bio with a photo and description text.
// This is a purely static section — no data fetching or interactivity.
// ─────────────────────────────────────────────

export default function About() {
  return (
    // id="about" is the anchor target for the [ ABOUT ] button in Hero.tsx
    <section id="about" className="py-16 px-6 relative">
      {/* Subtle top gradient to blend with the hero section above */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* ── HEADER ROW ── */}
        {/* Section title on the left, a decorative animated gif on the right */}
        <div className="flex items-start justify-between mb-12">
          <h2 className="text-4xl font-bold text-slate-100/80 tracking-widest font-mono">
            // ABOUT
          </h2>
          {/* Decorative GIF — purely atmospheric, no semantic meaning */}
          <img
            src="https://dtvoeevhaseb5.cloudfront.net/uploads/mocha-import/aaef7702-ad60-4210-a7a6-b6f1d1e8ddc2/9364b890-daa0-4124-bf37-74355e7fb3bb.gif"
            alt=""
            className="w-36 md:w-48 h-auto opacity-50"
            style={{ filter: 'drop-shadow(0 0 15px rgba(100, 150, 200, 0.4))' }}
          />
        </div>

        {/* ── CONTENT CARD ── */}
        {/* Dark frosted-glass card with a photo + bio text side by side */}
        <div className="border border-slate-600/40 p-8 md:p-12 bg-slate-950/60 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Photo — square crop, semi-transparent with VHS filter applied via CSS */}
            <div className="w-full md:w-64 h-64 flex-shrink-0 overflow-hidden border border-slate-600/40">
              <img
                src="https://dtvoeevhaseb5.cloudfront.net/uploads/mocha-import/aaef7702-ad60-4210-a7a6-b6f1d1e8ddc2/2abc90a6-f1d9-475e-8652-5129e342d017.png"
                alt="Studio workspace"
                className="w-full h-full object-cover opacity-60 vhs-distort dreamlike-filter" // vhs-distort and dreamlike-filter are custom CSS classes in global.css
              />
            </div>

            {/* Bio text — written by the artist, split into paragraphs */}
            <div className="flex-1 text-slate-300 space-y-4 font-mono text-sm leading-relaxed">
              <p>Welcome to the island of my dreams!</p>
              <p>
                My name is Aleksei — I'm a composer and visual artist. Here you'll find music from
                Zorker Torker project, as well as soundtracks for games I've worked on.
              </p>
              <p>
                
              </p>
              <p>
                If you need music for your game or movie, feel free to get in touch via email! Let's
                create something truly unic and vibrant together wherever you are in the world!
              </p>

              {/* ── HIDDEN: Genre tags ──
                  These were part of an earlier design showing genre labels.
                  Commented out for now — can be uncommented to add them back.
              <div className="flex flex-wrap gap-3 pt-4 border-t border-slate-600/30 mt-6">
                <span className="px-3 py-1 border border-blue-400/30 text-blue-200/80 text-xs tracking-wider bg-blue-950/20">AMBIENT</span>
                <span className="px-3 py-1 border border-blue-400/30 text-blue-200/80 text-xs tracking-wider bg-blue-950/20">FIELD RECORDING</span>
                <span className="px-3 py-1 border border-blue-400/30 text-blue-200/80 text-xs tracking-wider bg-blue-950/20">EXPERIMENTAL</span>
                <span className="px-3 py-1 border border-blue-400/30 text-blue-200/80 text-xs tracking-wider bg-blue-950/20">TAPE LOOPS</span>
              </div>
              */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
