'use client'; // Runs in the browser — static content, consistent with other sections

import { Mail } from 'lucide-react'; // Email icon used next to the email address

// ─────────────────────────────────────────────
// CONTACT SECTION
// The last section of the page.
// Contains:
//   - A background image with a dark overlay
//   - A decorative helicopter GIF
//   - An email contact card
//   - The site footer with copyright
// ─────────────────────────────────────────────

export default function Contact() {
  return (
    // id="contact" is the anchor target for the [ CONTACT ] button in Hero.tsx
    <section id="contact" className="relative py-16 px-6 overflow-hidden">
      {/* ── BACKGROUND IMAGE ── */}
      {/* The image is placed inside an absolutely-positioned div so it fills the section */}
      <div
        className="absolute inset-0 z-0 bg-slate-800"
        style={{
          backgroundImage:
            'url(https://dtvoeevhaseb5.cloudfront.net/uploads/mocha-import/aaef7702-ad60-4210-a7a6-b6f1d1e8ddc2/6ab2ea48-e988-4469-8ad1-42456e22bdd6.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* The <img> tag is included as well for better loading performance on some browsers */}
        <img
          src="https://dtvoeevhaseb5.cloudfront.net/uploads/mocha-import/aaef7702-ad60-4210-a7a6-b6f1d1e8ddc2/6ab2ea48-e988-4469-8ad1-42456e22bdd6.jpg"
          alt=""
          className="w-full h-full object-cover"
          loading="eager"
          decoding="async"
        />
        {/* Dark overlay to make text readable over the background image */}
        <div className="absolute inset-0 bg-slate-900/70" />
      </div>

      {/* ── HELICOPTER DECORATION ── */}
      {/* Animated GIF positioned in the bottom-right corner (bottom on mobile, top-right on desktop) */}
      {/* pointer-events-none = the GIF doesn't block clicks */}
      <img
        src="https://dtvoeevhaseb5.cloudfront.net/uploads/mocha-import/aaef7702-ad60-4210-a7a6-b6f1d1e8ddc2/2a2f34de-a761-4b80-a112-df143684f19e.gif"
        alt=""
        className="absolute -right-16 sm:right-0 -bottom-[50px] sm:bottom-auto sm:top-16 md:top-12 z-10 h-[600px] sm:h-[400px] md:h-[500px] lg:h-[600px] pointer-events-none blur-[2px] sm:blur-none"
      />

      {/* ── CONTENT ── */}
      {/* z-10 keeps this above the background image and its overlay */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-slate-100/80 tracking-widest font-mono">
          // CONTACT
        </h2>
        <p className="text-slate-400 mb-16 text-sm font-mono tracking-wider">
          FOR INQUIRIES & COLLABORATIONS
        </p>

        {/* ── CONTACT CARD ── */}
        <div className="border border-slate-600/40 p-8 md:p-12 bg-slate-950/60 backdrop-blur-sm">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-mono text-slate-100/90 mb-4 tracking-wider">EMAIL</h3>
              {/* Clicking this opens the user's email client with the address pre-filled */}
              <a
                href="mailto:zorkertorker@gmail.com"
                className="flex items-center gap-3 text-slate-300 hover:text-blue-200/80 transition-colors group font-mono text-sm"
              >
                {/* Mail icon in a small bordered box — border brightens on hover via group-hover */}
                <div className="p-2 border border-slate-500/40 group-hover:border-blue-300/40 transition-colors bg-slate-900/40">
                  <Mail className="w-5 h-5" />
                </div>
                <span>zorkertorker@gmail.com</span>
              </a>
              {/* Social handle — displayed as plain text (not a link) */}
              <p className="mt-3 text-slate-400 font-mono text-sm tracking-wider">@zorker_torker</p>
            </div>
          </div>
        </div>

        {/* ── FOOTER ── */}
        {/* Sits at the very bottom of the page — copyright notice */}
        <footer className="mt-16 text-center text-slate-300 text-[8px] font-mono tracking-wider">
          <p className="inline-block px-2 py-1 bg-slate-900/15 backdrop-blur-sm rounded">
            © 2026 ALEXEI BAGMUT / ALL RIGHTS RESERVED
          </p>
          <p className="mt-2 text-slate-700"></p>
        </footer>
      </div>
    </section>
  );
}
