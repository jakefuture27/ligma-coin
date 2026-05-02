export function HowToBuy() {
  return (
    <section id="how-to-buy" className="w-full">
      <div className="panel p-8 md:p-12 bg-[#fdfaf6] border border-[#d3c2af]">
        <h2 className="text-3xl font-bold mb-8 text-zinc-900">How To Buy</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div className="flex flex-col">
            <div className="text-[#ebdcc6] text-6xl font-black mb-4 -ml-1">01</div>
            <h3 className="text-lg font-bold mb-2 text-zinc-900">Get a Wallet</h3>
            <p className="text-zinc-600 text-sm leading-relaxed">Download Phantom or your wallet of choice from the app store or Google Chrome extension store for free.</p>
          </div>
          <div className="flex flex-col">
            <div className="text-[#ebdcc6] text-6xl font-black mb-4 -ml-1">02</div>
            <h3 className="text-lg font-bold mb-2 text-zinc-900">Get Some SOL</h3>
            <p className="text-zinc-600 text-sm leading-relaxed">Have SOL in your wallet to swap for $LIGMA. If you don't have any SOL, you can buy directly on Phantom.</p>
          </div>
          <div className="flex flex-col">
            <div className="text-[#ebdcc6] text-6xl font-black mb-4 -ml-1">03</div>
            <h3 className="text-lg font-bold mb-2 text-zinc-900">Go to Pump.fun</h3>
            <p className="text-zinc-600 text-sm leading-relaxed">Connect your wallet on Pump.fun. Paste the $LIGMA contract address, select your amount, and swap.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
