import { motion } from 'framer-motion';
import { Server, Globe, Shield } from 'lucide-react';

const features = [
  {
    id: 'server-setup',
    title: 'Simplest Server Creation',
    description: 'Skip the complex technical setup. Our intuitive wizard streamlines the entire process, automatically downloading and configuring your preferred server software so you can start playing in seconds.',
    icon: Server,
    color: 'text-emerald-400',
    borderColor: 'border-emerald-500',
    bgColor: 'bg-emerald-950/30',
  },
  {
    id: 'crossplay',
    title: 'True Crossplay Integrated',
    description: 'Bridging the gap between Java and Bedrock. Native integration with GeyserMC and Floodgate allows your console and mobile friends to join your server instantly, no extra hassle required.',
    icon: Globe,
    color: 'text-diamond-400',
    borderColor: 'border-diamond-500',
    bgColor: 'bg-diamond-950/30',
  },
  {
    id: 'tunneling',
    title: 'Flexible Connection Modes',
    description: 'Connect players effortlessly through three distinct methods. Play privately on your home network, utilize automatic router setup for direct connections, or use our secure tunneling service to share your server globally without any networking hassle.',
    icon: Shield,
    color: 'text-purple-400',
    borderColor: 'border-purple-500',
    bgColor: 'bg-purple-950/30',
  }
];

export function ShowcaseSection() {
  return (
    <section id="features" className="py-32 bg-obsidian-900 relative border-t-[3px] border-obsidian-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-mc text-white mb-6">Craftora Features</h2>
          <p className="text-xl text-zinc-400 font-medium">Everything you need to run a flawless server environment.</p>
        </motion.div>

        <div className="space-y-32">
          {features.map((feature, index) => {
            const isEven = index % 2 === 0;
            const Icon = feature.icon;
            
            return (
              <motion.div 
                key={feature.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-150px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20`}
              >
                {/* Text Content */}
                <div className="flex-1 space-y-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 border-[3px] ${feature.borderColor} ${feature.bgColor} shadow-lg`}>
                    <Icon className={`w-8 h-8 ${feature.color}`} strokeWidth={2.5} />
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-mc text-white">{feature.title}</h3>
                  <p className="text-lg text-zinc-300 leading-relaxed font-medium">
                    {feature.description}
                  </p>
                </div>

                {/* Visual Representation (Minecraft Inventory Slot Style) */}
                <div className="flex-1 w-full">
                  <div className="relative aspect-video bg-obsidian-950 border-[4px] border-t-gray-600 border-l-gray-600 border-b-obsidian-800 border-r-obsidian-800 p-2 shadow-2xl flex items-center justify-center overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none"></div>
                    <div className="w-full h-full border-2 border-obsidian-800 bg-obsidian-900 flex items-center justify-center relative">
                      {/* Placeholder for actual app screenshots */}
                      <Icon className={`w-32 h-32 ${feature.color} opacity-20 group-hover:scale-110 transition-transform duration-700 ease-out`} />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-obsidian-950/50 backdrop-blur-sm">
                        <span className="font-mc text-white tracking-widest text-sm">PREVIEW UI</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
