import { motion } from 'framer-motion';
import { Download, Terminal } from 'lucide-react';
import { MinecraftButton } from '../ui/MinecraftButton';

export function Navbar() {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-obsidian-950/80 backdrop-blur-lg border-b-[3px] border-obsidian-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <a href="/" className="flex items-center gap-4">
          <div className="relative w-10 h-10">
            <img 
              src="/DC.png" 
              alt="Craftora Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          <span className="font-mc text-2xl tracking-wide text-white">
            Craftora
          </span>
        </a>



        <div className="flex items-center gap-4">
          <a 
            href="https://github.com/ssxAsad/craftora-webpage" 
            target="_blank" 
            rel="noreferrer"
            className="hidden sm:flex text-zinc-400 hover:text-white transition-colors"
          >
            <Terminal className="w-6 h-6" />
          </a>
          <MinecraftButton variant="primary" className="px-6 py-2.5 text-sm gap-2">
            <Download className="w-4 h-4" />
            <span>DOWNLOAD</span>
          </MinecraftButton>
        </div>
      </div>
    </motion.header>
  );
}
