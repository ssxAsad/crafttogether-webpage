import { motion } from 'framer-motion';
import { Download, Terminal } from 'lucide-react';
import { MinecraftButton } from '../ui/MinecraftButton';

export function Navbar() {
  const scrollToDownload = () => {
    document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/85 backdrop-blur-md border-b-2 border-slate-200 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3.5 group">
          <img 
            src="/Craftora.png" 
            alt="CraftTogether Logo" 
            className="w-10 h-10 rounded-xl object-contain shadow-xs border border-[#488f48]/25 group-hover:scale-105 transition-transform duration-200"
          />
          <span className="font-mc text-2xl tracking-wide text-slate-900 group-hover:text-[#488f48] transition-colors">
            CraftTogether
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <a 
            href="#features" 
            className="font-mc text-xs tracking-wider text-slate-600 hover:text-[#488f48] transition-colors uppercase"
          >
            Features
          </a>
          <a 
            href="#download" 
            className="font-mc text-xs tracking-wider text-slate-600 hover:text-[#488f48] transition-colors uppercase"
          >
            Download
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <a 
            href="https://github.com/ssxAsad/crafttogether-webpage" 
            target="_blank" 
            rel="noreferrer"
            aria-label="GitHub Repository"
            className="hidden sm:flex p-2 text-slate-500 hover:text-[#488f48] hover:bg-slate-100 rounded-lg transition-colors"
          >
            <Terminal className="w-5 h-5" />
          </a>
          <MinecraftButton 
            variant="primary" 
            size="sm"
            className="px-5 py-2.5 text-xs sm:text-sm gap-2"
            onClick={scrollToDownload}
          >
            <Download className="w-4 h-4" />
            <span>DOWNLOAD</span>
          </MinecraftButton>
        </div>
      </div>
    </motion.header>
  );
}
