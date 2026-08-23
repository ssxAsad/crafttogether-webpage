import { motion } from 'framer-motion';
import { Download, Terminal } from 'lucide-react';
import { MinecraftButton } from '../ui/MinecraftButton';

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background with CSS Shader-like effect */}
      <div className="absolute inset-0 bg-obsidian-950 z-0">
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/40 via-obsidian-950 to-obsidian-950"></div>
        {/* Subtle grid to represent blocks */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 1) 1px, transparent 1px)`,
            backgroundSize: '64px 64px',
            transform: 'perspective(1000px) rotateX(60deg) translateY(-100px) translateZ(-200px)',
            transformOrigin: 'top center'
          }}
        ></div>
        {/* Fog gradient at the bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-obsidian-950 to-transparent"></div>
      </div>

      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 variants={itemVariants} className="text-5xl sm:text-7xl lg:text-8xl font-mc text-white max-w-5xl mx-auto leading-[1.1] drop-shadow-2xl">
          Minecraft Servers <br className="hidden sm:block" />
          <span className="text-emerald-500 block mt-2">Made Easy.</span>
        </motion.h1>

        <motion.p variants={itemVariants} className="mt-8 text-lg sm:text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed font-medium">
          Easily host, manage, and share your Minecraft server with friends. A simple and hassle-free way to connect and play together.
        </motion.p>

        <motion.div variants={itemVariants} className="mt-12 flex flex-col sm:flex-row items-center gap-6">
          <MinecraftButton variant="primary" className="px-10 py-4 text-lg gap-3 w-full sm:w-auto shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:shadow-[0_0_40px_rgba(16,185,129,0.5)]">
            <Download className="w-6 h-6" />
            <span>DOWNLOAD FOR WINDOWS</span>
          </MinecraftButton>
          
          <MinecraftButton variant="secondary" className="px-8 py-4 text-lg gap-3 w-full sm:w-auto">
            <Terminal className="w-5 h-5 text-zinc-400" />
            <span>VIEW SOURCE</span>
          </MinecraftButton>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-500 font-mc text-xs"
      >
        <span>SCROLL</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-4 h-6 border-2 border-zinc-500 rounded-full flex justify-center p-1"
        >
          <div className="w-1 h-1 bg-zinc-500 rounded-full"></div>
        </motion.div>
      </motion.div>
    </section>
  );
}
