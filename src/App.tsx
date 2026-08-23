import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { ShowcaseSection } from './components/sections/ShowcaseSection';
import { MinecraftButton } from './components/ui/MinecraftButton';
import { Download } from 'lucide-react';

function App() {
  return (
    <div className="bg-obsidian-950 min-h-screen text-zinc-100 selection:bg-emerald-500/30 selection:text-emerald-200">
      <Navbar />
      
      <main>
        <HeroSection />
        <ShowcaseSection />
        
        {/* Footer CTA Section */}
        <section id="download" className="py-32 relative bg-obsidian-950 flex flex-col items-center justify-center text-center px-4">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-emerald-900/20 via-obsidian-950 to-obsidian-950 pointer-events-none"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-mc text-white mb-8">Ready to Start Crafting?</h2>
            <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto font-medium">
              Enjoy a seamless, silent installation. Please close the application after the first launch, and use the desktop shortcut for all future access.
            </p>
            <div className="flex justify-center mb-4">
              <MinecraftButton variant="primary" className="px-12 py-5 text-xl gap-4 drop-shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                <Download className="w-7 h-7" />
                <span>DOWNLOAD</span>
              </MinecraftButton>
            </div>
            <p className="mt-8 text-sm text-zinc-600 font-bold tracking-widest uppercase">Windows 10/11 • 64-bit</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t-[3px] border-obsidian-900 bg-[#06050a] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <img src="/DC.png" alt="Logo" className="w-8 h-8 opacity-80" />
            <span className="font-mc text-zinc-400 text-xl tracking-wider">Craftora</span>
          </div>
          <p className="text-sm text-zinc-500 font-medium">Special thanks to <a href="https://playit.gg/" target="_blank" className="text-emerald-400 hover:text-emerald-300 font-mc">PlayIt.gg</a> for powering our multiplayer hosting.</p>
          <div className="flex gap-6">
            <MinecraftButton 
              variant="secondary" 
              className="px-6 py-2 text-sm"
              onClick={() => window.open('https://github.com/YourName/Craftora', '_blank', 'noreferrer')}
            >
              AUTHOR
            </MinecraftButton>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
