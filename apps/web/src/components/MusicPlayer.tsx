'use client'; // Runs in the browser — needs useState for the tab switcher

import { useState } from 'react';
import { Disc3 } from 'lucide-react'; // Spinning disc icon for the section header

// ─────────────────────────────────────────────
// MUSIC PLAYER SECTION
// Displays Bandcamp-embedded music tracks in two tabs:
//   1. ZORKER TORKER — shows the full album player (Theory of Everything)
//   2. VIDEO GAMES   — shows individual game soundtrack tracks
//
// Decorative animated GIFs float in the background as the user scrolls.
// ─────────────────────────────────────────────

// ── VIDEO GAMES TAB: Individual track list ──
// Each entry becomes one embedded Bandcamp player (120px tall strip).
// To add a new track: copy the embed URL from Bandcamp → Share/Embed → Copy embed code,
// then paste the `src` value as `embedUrl` and the track link as `link`.
const videoGameTracks = [
  {
    title: 'New Era (ambient)',
    artist: 'Zorker Torker',
    embedUrl:
      'https://bandcamp.com/EmbeddedPlayer/track=1277941866/size=large/bgcol=1c1c1a/linkcol=346c97/tracklist=false/artwork=small/transparent=true/',
    link: 'https://zorkertorker.bandcamp.com/track/new-era-ambient',
  },
  {
    title: 'Boss Fight Theme',
    artist: 'Aleksei Bagmut',
    embedUrl:
      'https://bandcamp.com/EmbeddedPlayer/track=1757715432/size=large/bgcol=333333/linkcol=346c97/tracklist=false/artwork=small/transparent=true/',
    link: 'https://zorkertorker.bandcamp.com/track/boss-fight-theme',
  },
  {
    title: 'Dreamlight Mall',
    artist: 'Zorker Torker',
    embedUrl:
      'https://bandcamp.com/EmbeddedPlayer/track=774848379/size=large/bgcol=333333/linkcol=346c97/tracklist=false/artwork=small/transparent=true/',
    link: 'https://zorkertorker.bandcamp.com/track/dreamlight-mall',
  },
  {
    title: 'Final Boss',
    artist: 'Zorker Torker',
    embedUrl:
      'https://bandcamp.com/EmbeddedPlayer/track=4101929458/size=large/bgcol=1c1c1a/linkcol=346c97/tracklist=false/artwork=small/transparent=true/',
    link: 'https://zorkertorker.bandcamp.com/track/final-boss',
  },
  {
    title: 'Sneaky Games',
    artist: 'Zorker Torker',
    embedUrl:
      'https://bandcamp.com/EmbeddedPlayer/track=1770135548/size=large/bgcol=333333/linkcol=346c97/tracklist=false/artwork=small/transparent=true/',
    link: 'https://zorkertorker.bandcamp.com/track/sneaky-games',
  },
  {
    title: 'Meta Theme',
    artist: 'Zorker Torker',
    embedUrl:
      'https://bandcamp.com/EmbeddedPlayer/track=4051089277/size=large/bgcol=333333/linkcol=346c97/tracklist=false/artwork=small/transparent=true/',
    link: 'https://zorkertorker.bandcamp.com/track/meta-theme',
  },
  {
    title: 'Main Theme Casual',
    artist: 'Zorker Torker',
    embedUrl:
      'https://bandcamp.com/EmbeddedPlayer/track=655034419/size=large/bgcol=333333/linkcol=346c97/tracklist=false/artwork=small/transparent=true/',
    link: 'https://zorkertorker.bandcamp.com/track/main-theme-casual',
  },
];

// ── ZORKER TORKER TAB: Track list ──
// Currently empty — the ZORKER TORKER tab instead shows a full album embed (see JSX below).
// If you want individual tracks here instead, add them to this array the same way as videoGameTracks.
const zorkerTorkerTracks: typeof videoGameTracks = [];

// The two possible tab values — TypeScript keeps this strict so typos are caught
type Tab = 'zorker-torker' | 'video-games';

export default function MusicPlayer() {
  // activeTab controls which tab is selected — defaults to 'video-games'
  const [activeTab, setActiveTab] = useState<Tab>('video-games');

  // Which track list to show (only used for the video-games tab;
  // zorker-torker has its own special album embed in the JSX below)
  const tracks = activeTab === 'zorker-torker' ? zorkerTorkerTracks : videoGameTracks;

  return (
    // id="music" is the anchor target for the [ MUSIC ] button in Hero.tsx
    <section id="music" className="py-16 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-4">
          <Disc3 className="w-8 h-8 text-blue-300/60" />
          <h2 className="text-4xl font-bold text-slate-100/80 tracking-widest font-mono">
            // MUSIC
          </h2>
        </div>
        <p className="text-slate-400 mb-8 text-sm font-mono tracking-wider">
          SELECTED COMPOSITIONS
        </p>

        {/* ── TABS + DECORATIVE GIFS ── */}
        {/* The GIFs are absolutely positioned so they float behind/around the music player */}
        <div className="relative">
          {/* Flying machine GIF — floats above and behind the tab area */}
          <img
            src="https://dtvoeevhaseb5.cloudfront.net/uploads/mocha-import/aaef7702-ad60-4210-a7a6-b6f1d1e8ddc2/f2f8e2d2-2215-4a52-8ae6-437adbe41875.gif"
            alt=""
            className="absolute left-1/2 -translate-x-1/2 sm:left-[300px] sm:translate-x-0 md:left-1/2 md:-translate-x-1/2 top-[50px] sm:-top-[80px] md:-top-[120px] h-[540px] sm:h-[576px] md:h-[768px] lg:h-[960px] w-auto object-contain opacity-60 pointer-events-none z-0 outline-none border-0"
            style={{ filter: 'drop-shadow(0 0 15px rgba(100, 150, 200, 0.4))' }}
          />
          {/* Train GIF — appears to the right side, lower down */}
          <img
            src="https://dtvoeevhaseb5.cloudfront.net/uploads/mocha-import/aaef7702-ad60-4210-a7a6-b6f1d1e8ddc2/5c10a85c-7015-4ae6-acec-d6c91d8ea312.gif"
            alt=""
            className="absolute left-1/2 -translate-x-1/2 sm:left-auto sm:translate-x-0 sm:right-[200px] md:right-[50px] lg:right-[100px] top-[500px] sm:top-[550px] md:top-[750px] lg:top-[850px] h-[280px] sm:h-[288px] md:h-[384px] lg:h-[480px] w-auto object-contain opacity-60 pointer-events-none z-0 outline-none border-0"
            style={{ filter: 'drop-shadow(0 0 15px rgba(100, 150, 200, 0.4))' }}
          />
          {/* Car GIF — appears even lower, on the left side */}
          <img
            src="https://dtvoeevhaseb5.cloudfront.net/uploads/mocha-import/aaef7702-ad60-4210-a7a6-b6f1d1e8ddc2/3f17fce3-9648-4d16-aa33-03fce4ee0776.gif"
            alt=""
            className="absolute left-1/2 -translate-x-1/2 sm:left-[250px] sm:translate-x-0 md:left-[50px] lg:left-[100px] top-[750px] sm:top-[800px] md:top-[1300px] lg:top-[1500px] h-[280px] sm:h-[288px] md:h-[288px] lg:h-[346px] w-auto object-contain opacity-60 pointer-events-none z-0 outline-none border-0"
            style={{ filter: 'drop-shadow(0 0 15px rgba(100, 150, 200, 0.4))' }}
          />

          {/* ── TAB BUTTONS ── */}
          {/* z-10 keeps them above the background GIFs */}
          <div className="flex gap-2 mb-8 relative z-10">
            <button
              onClick={() => setActiveTab('zorker-torker')}
              className={`px-6 py-3 font-mono text-sm tracking-wider border transition-all duration-300 ${
                activeTab === 'zorker-torker'
                  ? 'border-blue-400/60 bg-blue-950/40 text-blue-100' // Active style
                  : 'border-slate-600/40 bg-slate-950/40 text-slate-400 hover:border-slate-500/60 hover:text-slate-300' // Inactive style
              }`}
            >
              ZORKER TORKER
            </button>
            <button
              onClick={() => setActiveTab('video-games')}
              className={`px-6 py-3 font-mono text-sm tracking-wider border transition-all duration-300 ${
                activeTab === 'video-games'
                  ? 'border-blue-400/60 bg-blue-950/40 text-blue-100'
                  : 'border-slate-600/40 bg-slate-950/40 text-slate-400 hover:border-slate-500/60 hover:text-slate-300'
              }`}
            >
              VIDEO GAMES
            </button>
          </div>
        </div>

        {/* ── MUSIC CONTENT AREA ── */}
        <div className="border border-slate-600/40 bg-slate-950/60 backdrop-blur-sm p-6 md:p-8">
          {activeTab === 'zorker-torker' ? (
            // ZORKER TORKER tab: shows a full Bandcamp album player with tracklist
            // Album: "Theory of Everything" — the embed shows all tracks in the album
            <div className="flex justify-center">
              <iframe
                style={{ border: 0, width: '350px', height: '700px' }}
                src="https://bandcamp.com/EmbeddedPlayer/album=3162160537/size=large/bgcol=1c1c1a/linkcol=346c97/tracklist=true/transparent=true/"
                seamless
              >
                <a href="https://zorkertorker.bandcamp.com/album/theory-of-everything">
                  Theory of everything by Zorker Torker
                </a>
              </iframe>
            </div>
          ) : tracks.length === 0 ? (
            // VIDEO GAMES tab: fallback if the tracks array is empty
            <p className="text-slate-500 font-mono text-sm text-center py-8">Coming soon...</p>
          ) : (
            // VIDEO GAMES tab: list of individual track embeds
            // Each track gets a numbered label (01, 02...) and a 120px Bandcamp player
            <div className="space-y-6">
              {tracks.map((track, index) => (
                <div
                  key={index}
                  className="border-b border-slate-600/30 pb-6 last:border-b-0 last:pb-0"
                >
                  {/* Track number + title/artist */}
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-blue-300/60 font-mono text-sm">0{index + 1}</span>
                    <div>
                      <h3 className="text-slate-100/90 font-mono text-sm tracking-wide">
                        {track.title}
                      </h3>
                      <p className="text-slate-500 font-mono text-xs">{track.artist}</p>
                    </div>
                  </div>
                  {/* Bandcamp embedded track player */}
                  <iframe
                    style={{ border: 0, width: '100%', height: '120px', opacity: 0.8 }}
                    src={track.embedUrl}
                    seamless
                  >
                    {/* Fallback link for browsers that don't support iframes */}
                    <a href={track.link}>
                      {track.title} by {track.artist}
                    </a>
                  </iframe>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
