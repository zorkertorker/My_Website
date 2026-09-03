'use client'; // Runs in the browser — static content, but consistent with other sections

import { Music, ExternalLink } from 'lucide-react'; // Icons for the header and card links

// ─────────────────────────────────────────────
// STREAMING LINKS SECTION
// Shows clickable cards linking to streaming platforms.
// Each card has an icon, platform name, and an external link indicator.
//
// Note: The Hero section also has streaming icons — this section is a more
// prominent, dedicated "LISTEN" block further down the page.
// ─────────────────────────────────────────────

// ── DATA ──
// Each object = one streaming platform card.
// To add a new platform: copy one object, fill in name/url/color and add an icon SVG.
const streamingServices = [
  {
    name: 'Apple Music',
    url: 'https://music.apple.com/us/artist/zorker-torker/1576663134?l=ru',
    color: 'from-pink-500 to-red-500', // Gradient (not currently used in the card, but kept for future styling)
    hoverBorder: 'hover:border-pink-400/60', // Border color on hover — each platform has its own brand color
    icon: (
      // Inline SVG — Apple Music logo
      <svg className="w-4 h-4 md:w-8 md:h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.994 6.124a9.23 9.23 0 00-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043a5.022 5.022 0 00-1.877-.726 10.496 10.496 0 00-1.564-.15c-.04-.003-.083-.01-.124-.013H5.986c-.152.01-.303.017-.455.026-.747.043-1.49.123-2.193.4-1.336.53-2.3 1.452-2.865 2.78-.192.448-.292.925-.363 1.408-.056.392-.088.785-.1 1.18 0 .032-.007.062-.01.093v12.223c.01.14.017.283.027.424.05.815.154 1.624.497 2.373.65 1.42 1.738 2.353 3.234 2.802.42.127.856.187 1.293.228.555.053 1.11.06 1.667.06h11.03c.525 0 1.048-.034 1.57-.1.823-.106 1.597-.35 2.296-.81.84-.553 1.472-1.287 1.88-2.208.186-.42.293-.87.37-1.324.113-.675.138-1.358.137-2.04-.002-3.8 0-7.595-.003-11.393zm-6.423 3.99v5.712c0 .417-.058.827-.244 1.206-.29.59-.76.962-1.388 1.14-.35.1-.706.157-1.07.173-.95.042-1.785-.455-2.105-1.392-.265-.778.017-1.728.836-2.197.36-.206.757-.324 1.16-.418.418-.097.84-.176 1.256-.28.244-.06.435-.188.52-.44.02-.065.032-.136.032-.2V9.25c0-.083-.012-.166-.033-.246-.055-.207-.188-.343-.4-.382-.065-.012-.133-.018-.2-.02-.467-.022-.934-.047-1.4-.06-.732-.02-1.465-.027-2.197-.043-.52-.01-1.038-.027-1.557-.037-.082-.002-.166.006-.246.025-.2.047-.32.178-.355.38-.008.045-.012.092-.012.138v7.62c0 .36-.034.717-.172 1.054-.26.636-.714 1.075-1.37 1.29-.376.123-.768.178-1.162.2-.54.03-1.053-.043-1.528-.293-.7-.37-1.072-.964-1.1-1.752-.023-.664.263-1.207.783-1.618.31-.245.668-.397 1.046-.502.376-.105.757-.184 1.137-.27.316-.07.564-.223.66-.558.03-.104.04-.214.04-.323V5.86c0-.18.02-.357.088-.527.106-.265.303-.427.576-.483.12-.025.244-.032.366-.032 1.025.003 2.05.01 3.074.022 1.025.012 2.05.032 3.074.054.312.007.624.02.935.04.244.014.46.08.637.25.14.134.218.3.25.49.012.072.02.146.02.22v4.12z" />
      </svg>
    ),
  },
  {
    name: 'Spotify',
    url: 'https://open.spotify.com/artist/3eNOsm0EoSkhT8eHP2l9aa?si=6ezM',
    color: 'from-green-500 to-green-600',
    hoverBorder: 'hover:border-green-400/60',
    icon: (
      // Inline SVG — Spotify logo
      <svg className="w-4 h-4 md:w-8 md:h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
      </svg>
    ),
  },
  {
    name: 'VK Music',
    url: 'https://share.boom.ru/artist/19235554?share_auth=023bb971d791d1d731811a628f5db0',
    color: 'from-blue-500 to-blue-600',
    hoverBorder: 'hover:border-blue-400/60',
    icon: (
      // Inline SVG — VK logo
      <svg className="w-4 h-4 md:w-8 md:h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.862-.523-2.049-1.712-1.033-1.033-1.49-1.172-1.744-1.172-.356 0-.458.102-.458.593v1.561c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202-2.166-3.074-2.76-5.386-2.76-5.842 0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.678.863 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.318c-.068-1.186-.695-1.287-.695-1.71 0-.204.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.814-.543 1.253-1.406 2.15-3.574 2.15-3.574.119-.254.305-.491.745-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.049.17.474-.085.716-.576.716z" />
      </svg>
    ),
  },
];

export default function StreamingLinks() {
  return (
    // id="listen" — not currently linked from the main nav
    <section id="listen" className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-4">
          <Music className="w-8 h-8 text-blue-300/60" />
          <h2 className="text-4xl font-bold text-slate-100/80 tracking-widest font-mono">
            // LISTEN
          </h2>
        </div>
        <p className="text-slate-400 mb-12 text-sm font-mono tracking-wider">
          STREAM MY MUSIC ON YOUR FAVORITE PLATFORM
        </p>

        {/* ── PLATFORM CARDS ── */}
        {/* Loops over the streamingServices array and renders one card per platform */}
        {/* Uses `group` so child elements can react to the parent's hover state */}
        <div className="flex flex-row justify-center gap-4 md:gap-6">
          {streamingServices.map((service, index) => (
            <a
              key={index}
              href={service.url}
              target="_blank" // Opens in a new tab
              rel="noopener noreferrer" // Security best practice for external links
              className={`group border border-slate-600/40 ${service.hoverBorder} bg-slate-950/60 backdrop-blur-sm p-4 md:p-8 flex flex-col items-center gap-2 md:gap-4 transition-all duration-300 hover:bg-slate-900/60`}
            >
              {/* Platform icon — color changes on hover via group-hover */}
              <div className="text-slate-300 group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              {/* Platform name */}
              <span className="text-slate-200 font-mono text-sm tracking-wider">
                {service.name}
              </span>
              {/* Small external link arrow — gets brighter on hover */}
              <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-slate-300 transition-colors duration-300" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
