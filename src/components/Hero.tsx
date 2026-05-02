export function Hero() {
  return (
    <section id="about" className="pt-20 pb-16 px-6 flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
      <div className="mb-6 flex flex-col sm:flex-row items-center justify-center gap-3 bg-white/40 border border-[#d3c2af] rounded-full px-6 py-2 shadow-sm">
        <span className="text-zinc-600 font-semibold text-xs tracking-widest uppercase">In Support Of</span>
        <img src="https://cdn.sanity.io/images/d6x1mtv1/mo-com-production/b8c4017a2f5dcafa4aad200f2e5d9e1cd16bf828-300x105.png" alt="Movember Foundation" className="h-5 md:h-6" />
      </div>
      <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 text-zinc-900">
        Simple. Clean. <br/><span className="text-zinc-500">Movember focused.</span>
      </h1>
      
      <p className="text-lg md:text-xl text-zinc-600 max-w-2xl mx-auto mb-8 leading-relaxed font-medium">
        Men are dying too young. We can’t afford to stay silent.
      </p>

      <div className="flex justify-center items-center gap-3 sm:gap-4 mb-10 hover:grayscale-0 grayscale transition-all duration-500">
        <img src="/images/media__1777722556949.jpg" className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-xl border border-[#d3c2af] hover:scale-105 transition-transform shadow-sm" alt="Movember Campaign" />
        <img src="/images/media__1777722563579.jpg" className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-xl border border-[#d3c2af] hover:scale-105 transition-transform shadow-sm" alt="Movember Awareness" />
        <img src="/images/media__1777722565891.jpg" className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-xl border border-[#d3c2af] hover:scale-105 transition-transform shadow-sm" alt="Mens Health" />
        <img src="/images/media__1777722569453.png" className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-xl border border-[#d3c2af] bg-white/40 hover:scale-105 transition-transform shadow-sm" alt="Movember Logo" />
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4 mb-16 w-full max-w-md mx-auto sm:max-w-none justify-center">
        <a href="https://pump.fun/DhSjD6vvywHZTJE5CDYgJnojMwNfPzLEQhMiRKXPpump" target="_blank" rel="noreferrer" className="btn-primary">Buy on Pump.fun</a>
        <a href="https://us.movember.com/" target="_blank" rel="noreferrer" className="btn-secondary">Visit Movember</a>
      </div>

      <div className="text-left w-full max-w-lg panel p-6 mx-auto cursor-pointer hover:bg-[#e8dcc8] transition-colors" onClick={() => navigator.clipboard.writeText('DhSjD6vvywHZTJE5CDYgJnojMwNfPzLEQhMiRKXPpump')} title="Copy Contract Address">
        <div className="flex justify-between items-center mb-2">
          <p className="text-zinc-500 text-xs font-semibold uppercase tracking-wider">Contract Address</p>
          <span className="text-zinc-500 text-xs font-medium">Click to duplicate</span>
        </div>
        <div className="flex justify-between items-center bg-[#fdfaf6] p-3 rounded-lg border border-[#d3c2af]">
          <code className="text-zinc-800 font-mono text-sm sm:text-base break-all">DhSjD6vvywHZTJE5CDYgJnojMwNfPzLEQhMiRKXPpump</code>
        </div>
      </div>
    </section>
  )
}
