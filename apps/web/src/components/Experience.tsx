'use client'; // Runs in the browser — no interactivity, but kept consistent with the rest

import { Briefcase } from 'lucide-react'; // Briefcase icon for the section header

// ─────────────────────────────────────────────
// EXPERIENCE SECTION
// Displays work history as a list of cards.
// All data lives in the `experiences` array below — just edit it to update the section.
// ─────────────────────────────────────────────

// ── DATA ──
// Each object is one job/client entry.
// To add a new entry, copy one of these objects and change the values.
const experiences = [
  {
    company: 'Pharsalus games',
    logo: 'https://dtvoeevhaseb5.cloudfront.net/uploads/mocha-import/aaef7702-ad60-4210-a7a6-b6f1d1e8ddc2/12f222d1-fc75-4132-88ee-134f6019ec52.png',
    role: 'Composer / Sound Designer',
    period: '2022 — Present',
    location: 'Remote',
    description: 'Creating soundtracks and UI sounds',
    projects: ['Sneaky Games', 'Chameleon: Blend and Escape', 'Penguin Escape: Nature Puzzle'],
    skills: ['Adaptive Music', 'Sound Design', 'FMOD'],
  },
  {
    company: 'Catagama',
    logo: 'https://dtvoeevhaseb5.cloudfront.net/uploads/mocha-import/aaef7702-ad60-4210-a7a6-b6f1d1e8ddc2/a7652469-7b40-4c09-906b-8ca4c0e3a84e.jpg',
    role: 'Composer',
    period: '2020 — 2022',
    location: 'Remote',
    description: 'Creating soundtracks and UI sounds.',
    projects: ['Runflexio', 'Dice Hunters'],
    skills: ['Game Scoring'],
  },
];

export default function Experience() {
  return (
    // id="experience" — not currently linked from the nav, but can be added
    <section id="experience" className="py-12 px-6 relative">
      {/* Subtle gradient overlay to break up the sections visually */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/40 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section header */}
        <div className="flex items-center gap-2 mb-2">
          <Briefcase className="w-6 h-6 text-blue-300/60" />
          <h2 className="text-3xl font-bold text-slate-100/80 tracking-widest font-mono">
            // EXPERIENCE
          </h2>
        </div>
        <p className="text-slate-400 mb-8 text-sm font-mono tracking-wider">
          PROFESSIONAL BACKGROUND
        </p>

        {/* ── EXPERIENCE CARDS ── */}
        {/* Loops over the experiences array and renders one card per entry */}
        <div className="space-y-5">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="border border-slate-600/40 bg-slate-950/60 backdrop-blur-sm p-4 md:p-5 relative overflow-hidden"
            >
              {/* Large faded index number in the background corner (01, 02...) — purely decorative */}
              <span className="absolute top-2 right-3 text-5xl font-bold text-slate-700/20 font-mono">
                0{index + 1}
              </span>

              <div className="flex flex-col md:flex-row gap-4 relative z-10">
                {/* ── COMPANY LOGO ── */}
                {/* Square box — shows the logo image if available, otherwise shows "LOGO" placeholder */}
                <div className="w-16 h-16 md:w-20 md:h-20 flex-shrink-0 border border-slate-600/40 bg-slate-900/60 flex items-center justify-center overflow-hidden">
                  {exp.logo ? (
                    <img
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      className="w-full h-full object-contain p-1.5 opacity-80"
                    />
                  ) : (
                    <span className="text-slate-600 font-mono text-xs text-center px-1">LOGO</span>
                  )}
                </div>

                {/* ── CARD CONTENT ── */}
                <div className="flex-1">
                  {/* Top row: company + role on the left, period + location on the right */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                    <div>
                      <h3 className="text-lg text-slate-100/90 font-mono tracking-wide">
                        {exp.company}
                      </h3>
                      <p className="text-blue-300/80 font-mono text-sm">{exp.role}</p>
                    </div>
                    <div className="sm:text-right">
                      <p className="text-slate-400 font-mono text-sm">{exp.period}</p>
                      <p className="text-slate-500 font-mono text-xs">{exp.location}</p>
                    </div>
                  </div>

                  {/* Short description of what was done */}
                  <p className="text-slate-300/80 font-mono text-sm leading-relaxed mb-3">
                    {exp.description}
                  </p>

                  {/* ── PROJECTS ── */}
                  {/* List of game/project names, separated by bullet points */}
                  <div className="mb-3">
                    <p className="text-slate-500 font-mono text-xs tracking-wider mb-1">
                      PROJECTS:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.projects.map((project, pIndex) => (
                        <span key={pIndex} className="text-slate-300/70 font-mono text-sm">
                          {project}
                          {pIndex < exp.projects.length - 1 ? ' •' : ''}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* ── SKILL TAGS ── */}
                  {/* Small bordered labels for tools/techniques used */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-600/30">
                    {exp.skills.map((skill, sIndex) => (
                      <span
                        key={sIndex}
                        className="px-2 py-0.5 border border-blue-400/30 text-blue-200/70 text-xs tracking-wider bg-blue-950/20 font-mono"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
