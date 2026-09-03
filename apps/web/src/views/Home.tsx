'use client'; // This tells Next.js to run this file in the browser (not on the server)

// React hooks for side effects and referencing DOM elements
import { useEffect, useRef } from 'react';

// All the sections of the portfolio page, each is a separate file in /components
import Hero from '@/components/Hero'; // Full-screen top section with name + navigation buttons
import About from '@/components/About'; // Bio section with photo and description
import Experience from '@/components/Experience'; // Work history (Pharsalus, Catagama, etc.)
import GameAudio from '@/components/GameAudio'; // YouTube video showcase section
import Contact from '@/components/Contact'; // Email contact info + footer
import StreamingLinks from '@/components/StreamingLinks'; // Apple Music / Spotify / VK Music cards
import MusicPlayer from '@/components/MusicPlayer'; // Bandcamp embedded music player with tabs

// This is the main page of the site — it assembles all sections in order
export default function HomePage() {
  // containerRef points to the outer scrollable div so we can listen to its scroll events
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // --- Fix for Instagram in-app browser ---
    // Instagram's browser shrinks the viewport height after the page loads (showing its UI chrome).
    // We capture the INITIAL height before that happens and store it as a CSS variable.
    // All sections use `var(--app-height)` instead of `100vh` to avoid layout jumps.
    const initialHeight = window.innerHeight;
    document.documentElement.style.setProperty('--app-height', `${initialHeight}px`);

    // --- Scroll-triggered section animations ---
    // As the user scrolls down, each <section> element gets a 'visible' CSS class added.
    // The global CSS (global.css) uses this class to fade/slide sections into view.
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      // Find all <section> tags inside the scroll container
      const sections = container.querySelectorAll('section');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        // If the top of the section is within 95% of the viewport height, make it visible
        if (rect.top < initialHeight * 0.95) {
          section.classList.add('visible');
        }
      });
    };

    // Attach the scroll listener to the container div (not the window)
    // We use the container because the page scroll happens inside a fixed div, not the window
    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll, { passive: true }); // passive: true = better scroll performance
      handleScroll(); // Run once on mount so sections already in view become visible immediately
    }

    // Cleanup: remove the listener when the component unmounts
    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    // This is a full-screen fixed container that scrolls internally.
    // Using a fixed div (instead of letting the page scroll naturally) is the key trick
    // that makes the Instagram browser fix work — we control the scroll, not the browser.
    <div
      ref={containerRef}
      data-scroll-container // This attribute is used by Hero.tsx to find this div and scroll it programmatically
      className="fixed inset-0 bg-slate-950 overflow-x-hidden overflow-y-auto"
      style={{ height: 'var(--app-height, 100vh)' }} // Uses our captured height, falls back to 100vh
    >
      {/* Sections render top-to-bottom in this order */}
      <Hero /> {/* 1. Full-screen landing section */}
      <About /> {/* 2. Bio / introduction */}
      <GameAudio /> {/* 3. YouTube video showcase */}
      <MusicPlayer /> {/* 4. Bandcamp music embeds */}
      <Experience /> {/* 5. Work history */}
      <StreamingLinks /> {/* 6. Streaming platform cards */}
      <Contact /> {/* 7. Contact info + footer */}
    </div>
  );
}
