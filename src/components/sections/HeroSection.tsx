import { motion } from 'framer-motion';
import { Download, Terminal } from 'lucide-react';
import { MinecraftButton } from '../ui/MinecraftButton';

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 24, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  const scrollToDownload = () => {
    document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 overflow-hidden bg-slate-50">
      {/* Background with CSS light shader and #488f48 ambient effects */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-emerald-100/70 via-slate-50 to-slate-50"></div>
        
        {/* Subtle grid representing Minecraft blocks */}
        <div 
          className="absolute inset-0 opacity-[0.05]" 
          style={{
            backgroundImage: `linear-gradient(#488f48 1px, transparent 1px), linear-gradient(90deg, #488f48 1px, transparent 1px)`,
            backgroundSize: '64px 64px',
            transform: 'perspective(1000px) rotateX(60deg) translateY(-80px) translateZ(-150px)',
            transformOrigin: 'top center'
          }}
        ></div>

        {/* Soft bottom blend gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </div>

      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >


        <motion.h1 variants={itemVariants} className="text-5xl sm:text-7xl lg:text-8xl font-mc text-slate-900 max-w-5xl mx-auto leading-[1.08] tracking-tight drop-shadow-sm">
          Minecraft Servers <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-[#488f48] via-[#3b773b] to-[#5ca35c] bg-clip-text text-transparent block mt-2">
            Made Easy.
          </span>
        </motion.h1>

        <motion.p variants={itemVariants} className="mt-8 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium">
          Easily host, manage, and share your Minecraft server with friends. A simple and hassle-free way to connect and play together.
        </motion.p>

        <motion.div variants={itemVariants} className="mt-12 flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto">
          <MinecraftButton 
            variant="primary" 
            size="lg"
            glow
            className="px-9 py-4 text-base sm:text-lg gap-3 w-full sm:w-auto"
            onClick={scrollToDownload}
          >
            <Download className="w-6 h-6" />
            <span>DOWNLOAD FOR WINDOWS</span>
          </MinecraftButton>
          
          <MinecraftButton 
            variant="secondary" 
            size="lg"
            className="px-8 py-4 text-base sm:text-lg gap-3 w-full sm:w-auto"
            onClick={() => window.open('https://github.com/ssxAsad/crafttogether-webpage', '_blank', 'noreferrer')}
          >
            <Terminal className="w-5 h-5 text-slate-500" />
            <span>VIEW SOURCE</span>
          </MinecraftButton>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 font-mc text-[11px] tracking-wider"
      >
        <span>SCROLL</span>
        <motion.div 
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-4 h-6 border-2 border-slate-300 rounded-full flex justify-center p-1"
        >
          <div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
        </motion.div>
      </motion.div>
    </section>
  );
}
