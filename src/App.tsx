import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { ShowcaseSection } from './components/sections/ShowcaseSection';
import { MinecraftButton } from './components/ui/MinecraftButton';
import { Download } from 'lucide-react';

function App() {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 selection:bg-[#488f48]/20 selection:text-[#1f421f]">
      <Navbar />
      
      <main>
        <HeroSection />
        <ShowcaseSection />
        
        {/* Footer CTA Section */}
        <section id="download" className="py-32 relative bg-gradient-to-b from-slate-100/70 via-emerald-50/50 to-slate-100 border-t-2 border-slate-200 flex flex-col items-center justify-center text-center px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-emerald-100/60 via-transparent to-transparent pointer-events-none"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-mc text-slate-900 mb-6 tracking-tight">
              Ready to Start Crafting?
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 mb-10 max-w-2xl mx-auto font-medium">
              Enjoy a seamless, silent installation. Please close the application after the first launch, and use the desktop shortcut for all future access.
            </p>
            <div className="flex justify-center mb-4">
              <MinecraftButton 
                variant="primary" 
                size="lg"
                glow
                className="px-12 py-5 text-xl gap-4"
                onClick={() => alert('Download initiated! Check your downloads folder.')}
              >
                <Download className="w-7 h-7" />
                <span>DOWNLOAD</span>
              </MinecraftButton>
            </div>
            <p className="mt-8 text-xs text-slate-500 font-bold tracking-widest uppercase">
              Windows 10/11 • 64-bit
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t-2 border-slate-200 bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <img 
              src="/Craftora.png" 
              alt="CraftTogether Logo" 
              className="w-8 h-8 rounded-lg object-contain border border-[#488f48]/25 shadow-2xs" 
            />
            <span className="font-mc text-slate-900 text-xl tracking-wider">CraftTogether</span>
          </div>
          <p className="text-sm text-slate-500 font-medium">
            Special thanks to <a href="https://playit.gg/" target="_blank" rel="noreferrer" className="text-[#488f48] hover:text-[#3b773b] font-mc">PlayIt.gg</a> for powering our multiplayer hosting.
          </p>
          <div className="flex gap-6">
            <MinecraftButton 
              variant="secondary" 
              size="sm"
              className="px-6 py-2.5 text-xs tracking-wider"
              onClick={() => window.open('https://github.com/ssxAsad', '_blank', 'noreferrer')}
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
