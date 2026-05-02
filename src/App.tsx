import { Hero } from './components/Hero';
import { Tokenomics } from './components/Tokenomics';
import { HowToBuy } from './components/HowToBuy';

const TwitterIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);



function App() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-[#f5e6d3]">
      <nav className="w-full py-5 px-6 md:px-12 flex justify-between items-center border-b border-[#d3c2af] bg-[#f5e6d3]/90 backdrop-blur-md sticky top-0 z-50">
        <div className="text-xl font-bold tracking-tight text-zinc-900 flex items-center gap-2">
          $LIGMA
        </div>
        <div className="hidden lg:flex gap-8 text-sm font-medium text-zinc-500">
          <a href="#about" className="hover:text-zinc-900 transition-colors">About</a>
          <a href="#how-to-buy" className="hover:text-zinc-900 transition-colors">How To Buy</a>
          <a href="#tokenomics" className="hover:text-zinc-900 transition-colors">Tokenomics</a>
          <a href="#chart" className="hover:text-zinc-900 transition-colors">Chart</a>
        </div>
        <div className="flex items-center gap-6">
          <div className="hidden sm:flex items-center gap-5 text-zinc-500">
            <a href="#" target="_blank" rel="noreferrer" className="hover:text-zinc-900 transition-colors">
              <TwitterIcon />
            </a>
          </div>
          <a href="https://pump.fun/DhSjD6vvywHZTJE5CDYgJnojMwNfPzLEQhMiRKXPpump" target="_blank" rel="noreferrer" className="bg-zinc-900 text-[#f5e6d3] font-semibold py-2 px-5 text-sm rounded-md hover:bg-zinc-800 transition-colors">
            Buy Now
          </a>
        </div>
      </nav>

      <main className="flex-grow flex flex-col w-full">
        <Hero />
        <div className="max-w-6xl w-full mx-auto flex flex-col px-6 pb-20 gap-10">
          <HowToBuy />
          <Tokenomics />
          
          <section id="chart" className="w-full">
            <div className="w-full h-[600px] panel overflow-hidden p-0 border border-[#d3c2af] bg-[#fdfaf6]">
              <iframe 
                src="https://dexscreener.com/solana/DhSjD6vvywHZTJE5CDYgJnojMwNfPzLEQhMiRKXPpump?embed=1&theme=light&info=0"
                className="w-full h-full border-0"
                title="DexScreener Chart"
              ></iframe>
            </div>
          </section>
        </div>
      </main>

      <footer className="border-t border-[#d3c2af] py-12 flex flex-col items-center text-center text-zinc-600 text-sm">
        <div className="flex items-center gap-6 mb-8 text-zinc-500">
          <a href="#" target="_blank" rel="noreferrer" className="hover:text-zinc-900 transition-colors">
            <TwitterIcon />
          </a>
        </div>
        <p className="mb-2 font-medium">1% of transactions go directly to Movember Foundation.</p>
        <p>&copy; {new Date().getFullYear()} Ligma. Not financial advice.</p>
      </footer>
    </div>
  );
}

export default App;
