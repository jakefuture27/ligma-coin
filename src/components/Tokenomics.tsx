export function Tokenomics() {
  return (
    <section id="tokenomics" className="w-full">
      <div className="panel p-8 bg-[#fdfaf6] border border-[#d3c2af]">
        <h2 className="text-2xl font-bold mb-8 text-zinc-900">Tokenomics</h2>
        <div className="flex flex-col md:flex-row gap-8 justify-between">
          {[
            { title: "Total Supply", value: "1B", desc: "No minting, locked supply." },
            { title: "Tax", value: "1%", desc: "1% flat fee directly supports Movember." },
            { title: "Liquidity", value: "Burned", desc: "Fair launch on Pump.fun." }
          ].map((item, idx) => (
            <div key={idx} className="flex-1 border-l-2 border-[#d3c2af] pl-4 py-1">
              <p className="text-zinc-500 text-sm font-medium mb-1 uppercase tracking-wider">{item.title}</p>
                <h3 className="text-3xl font-bold tracking-tight text-zinc-900 mb-1">{item.value}</h3>
                <p className="text-zinc-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
