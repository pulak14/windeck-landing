import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-[#f9fbff] text-[#0d0d0d]">
      {/* Navbar */}
      <header className="flex justify-between items-center px-6 py-4 shadow-sm bg-white">
        <h1 className="text-2xl font-bold text-[#4338ca]">WinDeck</h1>
        <nav className="flex items-center space-x-6 text-sm font-medium">
          <a href="#features" className="hover:text-[#4338ca]">Features</a>
          <a href="#pricing" className="hover:text-[#4338ca]">Pricing</a>
          <a href="#resources" className="hover:text-[#4338ca]">Resources</a>
          <a
            href="#waitlist"
            className="bg-[#4338ca] text-white px-4 py-2 rounded-full hover:bg-[#3730a3]"
          >
            Join the Waitlist
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="text-center px-6 py-20" id="hero">
        <span className="text-xs uppercase tracking-wide bg-[#eef2ff] text-[#4338ca] px-3 py-1 rounded-full">
          AI-Powered Proposal Generator
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold mt-4 leading-tight max-w-3xl mx-auto">
          Win more clients with AI-powered proposals — in under 60 seconds.
        </h2>
        <p className="text-gray-600 mt-4 max-w-xl mx-auto">
          Turn your client notes into stunning proposals without touching a doc.
        </p>
        <div className="flex justify-center space-x-4 mt-6">
          <a
            href="#waitlist"
            className="bg-[#4338ca] text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#3730a3]"
          >
            Join the Waitlist
          </a>
          <a
            href="#how-it-works"
            className="bg-white border border-gray-300 px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-100"
          >
            See How It Works
          </a>
        </div>
      </section>

      {/* Embedded Tally Form */}
      <section id="waitlist" className="px-4 max-w-3xl mx-auto mb-20">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold mb-4">WinDeck is built for closers!</h3>
          <iframe
            data-tally-src="https://tally.so/embed/wvzYVX?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            loading="lazy"
            width="100%"
            height="486"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="Thank you for your interest!"
          ></iframe>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              var d=document,w="https://tally.so/widgets/embed.js",v=function(){
                "undefined"!=typeof Tally?Tally.loadEmbeds():
                d.querySelectorAll("iframe[data-tally-src]:not([src])")
                .forEach(function(e){e.src=e.dataset.tallySrc});
              };
              if("undefined"!=typeof Tally)v();
              else if(d.querySelector('script[src="'+w+'"]')==null){
                var s=d.createElement("script");
                s.src=w,s.onload=v,s.onerror=v,d.body.appendChild(s)
              }`,
            }}
          ></script>
        </div>
      </section>
    </div>
  );
}

export default App;
