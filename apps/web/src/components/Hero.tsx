'use client'; // Runs in the browser — needed because we use useEffect and DOM access

import { useEffect } from 'react';
import { ChevronDown } from 'lucide-react'; // Arrow icon used for the scroll-down button

export default function Hero() {
  useEffect(() => {
    // Dynamically load Google Fonts (VT323 = retro pixel font, Courier Prime = monospace)
    // These give the site its VHS / retro-terminal aesthetic
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=VT323&family=Courier+Prime&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []); // Empty array = runs once when component first appears

  // Smooth-scrolls down to the About section when the arrow button is clicked.
  // We scroll the CONTAINER div (not the window) because the page uses a fixed inner scroll div.
  // This is also important for Instagram's in-app browser compatibility.
  const scrollToAbout = () => {
    const about = document.getElementById('about');
    // Find the scroll container by its data attribute (set in Home.tsx)
    const container =
      document.querySelector('[data-scroll-container]') ||
      document.querySelector('.fixed.overflow-y-auto');
    if (about && container) {
      const containerRect = container.getBoundingClientRect();
      const aboutRect = about.getBoundingClientRect();
      // Calculate how far to scroll inside the container
      const scrollTop = container.scrollTop + aboutRect.top - containerRect.top - 20;
      container.scrollTo({ top: scrollTop, behavior: 'smooth' });
    } else if (about) {
      // Fallback: if for some reason the container isn't found, use native scroll
      about.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    // Full-screen section — height is set via CSS variable to avoid Instagram browser bugs
    <section
      className="relative min-h-[500px] md:h-screen md:min-h-screen flex items-start md:items-center justify-center overflow-hidden"
      style={{ height: 'var(--app-height, 100vh)' }}
    >
      {/* ── BACKGROUND ── */}
      <div className="absolute inset-0 bg-slate-900">
        {/* Two different hero images: one for mobile, one for desktop */}
        <img
          src="https://dtvoeevhaseb5.cloudfront.net/uploads/mocha-import/aaef7702-ad60-4210-a7a6-b6f1d1e8ddc2/99453cfe-3a0d-4aea-8125-2464883f5c57.png"
          alt="Surreal landscape"
          className="w-full h-full object-cover object-bottom hero-image-saturated md:hidden" // Only visible on mobile
          loading="eager"
          decoding="async"
          style={{ minHeight: '100%', minWidth: '100%' }}
        />
        <img
          src="https://dtvoeevhaseb5.cloudfront.net/uploads/mocha-import/aaef7702-ad60-4210-a7a6-b6f1d1e8ddc2/d2b6387f-1c06-4075-8490-09277a3428ad.png"
          alt="Surreal landscape"
          className="w-full h-full object-cover hero-image-saturated hidden md:block" // Only visible on desktop
          loading="eager"
          decoding="async"
          style={{ minHeight: '100%', minWidth: '100%' }}
        />
        {/* Dark gradient overlay — darkens top and bottom for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/20 to-slate-900/60" />
      </div>

      {/* ── VHS EFFECTS ── */}
      {/* Scan lines overlay — defined in global.css as a repeating CSS pattern */}
      <div className="absolute inset-0 scan-lines pointer-events-none" />
      {/* Fake VHS recording timestamp in the top-left corner */}
      <div className="absolute top-6 left-6 text-slate-200/70 font-mono text-sm vhs-timestamp">
        REC ● 12:34:56
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="relative z-10 text-center px-6 pt-[18vh] md:pt-0">
        <div className="dreamlike-glow">
          {' '}
          {/* CSS class adds a soft glow effect */}
          {/* Artist name — uses VT323 retro pixel font */}
          <h1
            className="text-5xl sm:text-6xl md:text-8xl font-bold mb-4 md:mb-4 text-slate-100/95 tracking-wider vhs-flicker-soft drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
            style={{
              fontFamily: 'VT323, monospace',
              textShadow: '0 2px 12px rgba(0,0,0,0.9), 0 0 40px rgba(0,0,0,0.6)',
            }}
          >
            ALEKSEI BAGMUT
          </h1>
          {/* Subtitle is commented out — can be re-enabled later */}
          {/* <p>GAME COMPOSER & SOUND DESIGNER</p> */}
        </div>

        {/* ── NAVIGATION BUTTONS ── */}
        {/* Grid on mobile (2 columns), flex row on desktop */}
        {/* Each button is an anchor link (#music, #videos, etc.) pointing to section IDs on the page */}
        <div className="grid grid-cols-2 md:flex gap-3 md:gap-4 justify-center animate-fade-in-delay-2">
          <a
            href="#music"
            className="px-5 md:px-8 py-3 md:py-3 border-2 border-blue-200/70 md:border-blue-200/30 text-blue-100 md:text-slate-100/95 font-mono text-sm md:text-sm font-semibold tracking-wider hover:bg-blue-300/20 hover:border-blue-100/90 hover:text-white transition-all duration-300 dreamlike-button text-center bg-slate-900/20 backdrop-blur-sm shadow-sm md:shadow-[0_2px_8px_rgba(0,0,0,0.15)]"
            style={{ textShadow: '0 2px 8px rgba(0,0,0,0.7)' }}
          >
            [ MUSIC ]
          </a>
          <a
            href="#videos"
            className="px-5 md:px-8 py-3 md:py-3 border-2 border-blue-200/70 md:border-blue-200/30 text-blue-100 md:text-slate-100/95 font-mono text-sm md:text-sm font-semibold tracking-wider hover:bg-blue-300/20 hover:border-blue-100/90 hover:text-white transition-all duration-300 dreamlike-button text-center bg-slate-900/20 backdrop-blur-sm shadow-sm md:shadow-[0_2px_8px_rgba(0,0,0,0.15)]"
            style={{ textShadow: '0 2px 8px rgba(0,0,0,0.7)' }}
          >
            [ VIDEOS ]
          </a>
          <a
            href="#contact"
            className="px-5 md:px-8 py-3 md:py-3 border-2 border-blue-200/70 md:border-blue-200/30 text-blue-100 md:text-slate-100/95 font-mono text-sm md:text-sm font-semibold tracking-wider hover:bg-blue-300/20 hover:border-blue-100/90 hover:text-white transition-all duration-300 dreamlike-button text-center bg-slate-900/20 backdrop-blur-sm shadow-sm md:shadow-[0_2px_8px_rgba(0,0,0,0.15)]"
            style={{ textShadow: '0 2px 8px rgba(0,0,0,0.7)' }}
          >
            [ CONTACT ]
          </a>
          <a
            href="#about"
            className="px-5 md:px-8 py-3 md:py-3 border-2 border-blue-200/70 md:border-blue-200/30 text-blue-100 md:text-slate-100/95 font-mono text-sm md:text-sm font-semibold tracking-wider hover:bg-blue-300/20 hover:border-blue-100/90 hover:text-white transition-all duration-300 dreamlike-button text-center bg-slate-900/20 backdrop-blur-sm shadow-sm md:shadow-[0_2px_8px_rgba(0,0,0,0.15)]"
            style={{ textShadow: '0 2px 8px rgba(0,0,0,0.7)' }}
          >
            [ ABOUT ]
          </a>
        </div>

        {/* ── STREAMING PLATFORM ICONS ── */}
        {/* These are inline SVG icons — no image files needed, just vector paths */}
        {/* Each links to the artist profile on that streaming platform */}
        <div className="flex gap-5 md:gap-8 justify-center mt-8 md:mt-8 animate-fade-in-delay-2">
          {/* Apple Music */}
          <a
            href="https://music.apple.com/us/artist/zorker-torker/1576663134?l=ru"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/90 hover:text-white transition-colors duration-300"
            aria-label="Apple Music"
          >
            <svg
              className="w-12 h-12 md:w-16 md:h-16 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
              style={{
                filter:
                  'drop-shadow(0 2px 12px rgba(0,0,0,0.9)) drop-shadow(0 0 40px rgba(0,0,0,0.6))',
              }}
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M23.994 6.124a9.23 9.23 0 00-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043a5.022 5.022 0 00-1.877-.726 10.496 10.496 0 00-1.564-.15c-.04-.003-.083-.01-.124-.013H5.986c-.152.01-.303.017-.455.026-.747.043-1.49.123-2.193.4-1.336.53-2.3 1.452-2.865 2.78-.192.448-.292.925-.363 1.408-.056.392-.088.785-.1 1.18 0 .032-.007.062-.01.093v12.223c.01.14.017.283.027.424.05.815.154 1.624.497 2.373.65 1.42 1.738 2.353 3.234 2.802.42.127.856.187 1.293.228.555.053 1.11.06 1.667.06h11.03c.525 0 1.048-.034 1.57-.1.823-.106 1.597-.35 2.296-.81.84-.553 1.472-1.287 1.88-2.208.186-.42.293-.87.37-1.324.113-.675.138-1.358.137-2.04-.002-3.8 0-7.595-.003-11.393zm-6.423 3.99v5.712c0 .417-.058.827-.244 1.206-.29.59-.76.962-1.388 1.14-.35.1-.706.157-1.07.173-.95.042-1.785-.455-2.105-1.392-.265-.778.017-1.728.836-2.197.36-.206.757-.324 1.16-.418.418-.097.84-.176 1.256-.28.244-.06.435-.188.52-.44.02-.065.032-.136.032-.2V9.25c0-.083-.012-.166-.033-.246-.055-.207-.188-.343-.4-.382-.065-.012-.133-.018-.2-.02-.467-.022-.934-.047-1.4-.06-.732-.02-1.465-.027-2.197-.043-.52-.01-1.038-.027-1.557-.037-.082-.002-.166.006-.246.025-.2.047-.32.178-.355.38-.008.045-.012.092-.012.138v7.62c0 .36-.034.717-.172 1.054-.26.636-.714 1.075-1.37 1.29-.376.123-.768.178-1.162.2-.54.03-1.053-.043-1.528-.293-.7-.37-1.072-.964-1.1-1.752-.023-.664.263-1.207.783-1.618.31-.245.668-.397 1.046-.502.376-.105.757-.184 1.137-.27.316-.07.564-.223.66-.558.03-.104.04-.214.04-.323V5.86c0-.18.02-.357.088-.527.106-.265.303-.427.576-.483.12-.025.244-.032.366-.032 1.025.003 2.05.01 3.074.022 1.025.012 2.05.032 3.074.054.312.007.624.02.935.04.244.014.46.08.637.25.14.134.218.3.25.49.012.072.02.146.02.22v4.12z" />
            </svg>
          </a>
          {/* Spotify */}
          <a
            href="https://open.spotify.com/artist/3eNOsm0EoSkhT8eHP2l9aa?si=6ezM"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/90 hover:text-white transition-colors duration-300"
            aria-label="Spotify"
          >
            <svg
              className="w-12 h-12 md:w-16 md:h-16 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
              style={{
                filter:
                  'drop-shadow(0 2px 12px rgba(0,0,0,0.9)) drop-shadow(0 0 40px rgba(0,0,0,0.6))',
              }}
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
            </svg>
          </a>
          {/* VK Music */}
          <a
            href="https://share.boom.ru/artist/19235554?share_auth=023bb971d791d1d731811a628f5db0"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/90 hover:text-white transition-colors duration-300"
            aria-label="VK Music"
          >
            <svg
              className="w-12 h-12 md:w-16 md:h-16 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
              style={{
                filter:
                  'drop-shadow(0 2px 12px rgba(0,0,0,0.9)) drop-shadow(0 0 40px rgba(0,0,0,0.6))',
              }}
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.862-.523-2.049-1.712-1.033-1.033-1.49-1.172-1.744-1.172-.356 0-.458.102-.458.593v1.561c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202-2.166-3.074-2.76-5.386-2.76-5.842 0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.678.863 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.318c-.068-1.186-.695-1.287-.695-1.71 0-.204.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.814-.543 1.253-1.406 2.15-3.574 2.15-3.574.119-.254.305-.491.745-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.049.17.474-.085.716-.576.716z" />
            </svg>
          </a>
          {/* YouTube */}
          <a
            href="https://www.youtube.com/channel/UC7vpVo97UAcUmrg2rpTfkbQ"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/90 hover:text-white transition-colors duration-300"
            aria-label="YouTube"
          >
            <svg
              className="w-12 h-12 md:w-16 md:h-16 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
              style={{
                filter:
                  'drop-shadow(0 2px 12px rgba(0,0,0,0.9)) drop-shadow(0 0 40px rgba(0,0,0,0.6))',
              }}
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </a>
          {/* Bandcamp */}
          <a
            href="https://zorkertorker.bandcamp.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/90 hover:text-white transition-colors duration-300"
            aria-label="Bandcamp"
          >
            <svg
              className="w-12 h-12 md:w-16 md:h-16 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
              style={{
                filter:
                  'drop-shadow(0 2px 12px rgba(0,0,0,0.9)) drop-shadow(0 0 40px rgba(0,0,0,0.6))',
              }}
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M0 18.75l7.437-13.5H24l-7.438 13.5H0z" />
            </svg>
          </a>
        </div>
      </div>

      {/* ── SCROLL DOWN BUTTON ── */}
      {/* Bouncing arrow at the bottom — calls scrollToAbout() when clicked */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-20 sm:bottom-8 left-[46%] sm:left-1/2 -translate-x-1/2 text-blue-200/60 animate-bounce cursor-pointer hover:text-blue-200/80 transition-colors flex justify-center"
        aria-label="Scroll to about section"
      >
        <ChevronDown className="w-16 h-16 md:w-14 md:h-14" />
      </button>

      {/* ── VHS TRACKING BAR ── */}
      {/* A subtle glowing line at the very bottom of the hero — purely decorative */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-300/20 to-transparent vhs-tracking" />
    </section>
  );
}
