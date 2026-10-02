import { motion } from 'framer-motion';
import { Server, Globe, Shield, CheckCircle2, Play, Users, Cpu, Wifi } from 'lucide-react';

export function ShowcaseSection() {
  return (
    <section id="features" className="py-32 bg-slate-100/70 relative border-t-2 border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-28"
        >

          <h2 className="text-4xl md:text-6xl font-mc text-slate-900 mb-6 tracking-tight">
            CraftTogether Features
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 font-medium">
            Everything you need to run a flawless server environment with friends.
          </p>
        </motion.div>

        <div className="space-y-32">
          {/* Feature 1: Server Setup */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
          >
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#488f48]/15 border-2 border-[#488f48]/35 text-[#488f48] shadow-sm">
                <Server className="w-7 h-7" strokeWidth={2.2} />
              </div>
              <h3 className="text-3xl sm:text-4xl font-mc text-slate-900">Simplest Server Creation</h3>
              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                Skip the complex technical setup. Our intuitive wizard streamlines the entire process, automatically downloading and configuring your preferred server software so you can start playing in seconds.
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-[#488f48]" /> Paper / Purpur / Vanilla
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-[#488f48]" /> Auto Java Runtime
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-[#488f48]" /> 1-Click Launch
                </span>
              </div>
            </div>

            {/* Light Mockup Preview 1 */}
            <div className="flex-1 w-full">
              <div className="bg-white border-2 border-slate-200/90 rounded-2xl p-6 shadow-xl shadow-slate-200/60 relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-[#488f48] animate-pulse"></div>
                    <span className="font-mc text-sm text-slate-800 tracking-wide">Survival World #1</span>
                  </div>
                  <span className="text-xs font-bold text-[#2f5f2f] bg-[#488f48]/10 border border-[#488f48]/25 px-2.5 py-1 rounded-full">
                    PAPER 1.21.4
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-5">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                    <div className="flex items-center gap-2 text-slate-500 text-xs mb-1">
                      <Cpu className="w-3.5 h-3.5 text-[#488f48]" />
                      <span>Allocated RAM</span>
                    </div>
                    <p className="font-mc text-slate-800 text-base">4,096 MB</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                    <div className="flex items-center gap-2 text-slate-500 text-xs mb-1">
                      <Users className="w-3.5 h-3.5 text-[#488f48]" />
                      <span>Max Players</span>
                    </div>
                    <p className="font-mc text-slate-800 text-base">20 Slots</p>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#488f48]/10 border border-[#488f48]/20">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#488f48] text-white flex items-center justify-center shadow-xs">
                      <Play className="w-4 h-4 fill-white" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900">Server Running</p>
                      <p className="text-[11px] text-[#2f5f2f] font-medium">Port 25565 • 0.2% CPU</p>
                    </div>
                  </div>
                  <span className="font-mc text-[11px] bg-[#488f48] text-white px-3 py-1.5 rounded-lg shadow-xs">
                    ACTIVE
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Feature 2: Crossplay */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20"
          >
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-sky-100 border-2 border-sky-300 text-sky-600 shadow-sm">
                <Globe className="w-7 h-7" strokeWidth={2.2} />
              </div>
              <h3 className="text-3xl sm:text-4xl font-mc text-slate-900">True Crossplay Integrated</h3>
              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                Bridging the gap between Java and Bedrock. Native integration with GeyserMC and Floodgate allows your console, mobile, and PC friends to join your server instantly, no extra hassle required.
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-sky-600" /> GeyserMC Native
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-sky-600" /> Xbox & PS5 Compatible
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-sky-600" /> iOS & Android Ready
                </span>
              </div>
            </div>

            {/* Light Mockup Preview 2 */}
            <div className="flex-1 w-full">
              <div className="bg-white border-2 border-slate-200/90 rounded-2xl p-6 shadow-xl shadow-slate-200/60 relative overflow-hidden">
                <div className="text-center pb-5 border-b border-slate-100">
                  <span className="text-xs font-bold text-sky-700 bg-sky-50 border border-sky-200 px-3 py-1 rounded-full uppercase tracking-wider">
                    Dual Protocol Bridge
                  </span>
                </div>

                <div className="py-6 flex items-center justify-between gap-4">
                  <div className="flex-1 p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-center">
                    <p className="font-mc text-sm text-slate-900 mb-1">JAVA EDITION</p>
                    <p className="text-xs text-slate-500 font-medium">PC / Mac / Linux</p>
                    <span className="inline-block mt-3 text-[11px] font-bold text-[#2f5f2f] bg-[#488f48]/10 px-2 py-0.5 rounded">
                      Port 25565
                    </span>
                  </div>

                  <div className="w-10 h-10 rounded-full bg-sky-100 border border-sky-300 flex items-center justify-center shrink-0">
                    <Globe className="w-5 h-5 text-sky-600 animate-spin" style={{ animationDuration: '12s' }} />
                  </div>

                  <div className="flex-1 p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-center">
                    <p className="font-mc text-sm text-slate-900 mb-1">BEDROCK</p>
                    <p className="text-xs text-slate-500 font-medium">Consoles & Mobile</p>
                    <span className="inline-block mt-3 text-[11px] font-bold text-sky-700 bg-sky-50 px-2 py-0.5 rounded">
                      Port 19132
                    </span>
                  </div>
                </div>

                <div className="p-3 bg-sky-50 rounded-xl border border-sky-200/80 text-center text-xs text-sky-800 font-medium">
                  Floodgate enabled: No secondary Java accounts required for friends!
                </div>
              </div>
            </div>
          </motion.div>

          {/* Feature 3: Connection Modes */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
          >
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-purple-100 border-2 border-purple-300 text-purple-600 shadow-sm">
                <Shield className="w-7 h-7" strokeWidth={2.2} />
              </div>
              <h3 className="text-3xl sm:text-4xl font-mc text-slate-900">Flexible Connection Modes</h3>
              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                Connect players effortlessly through three distinct methods. Play privately on your home network, utilize automatic router setup for direct connections, or use our secure tunneling service to share your server globally without any networking hassle.
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-purple-600" /> PlayIt.gg Secure Tunneling
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-purple-600" /> No Port Forwarding Needed
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-purple-600" /> DDoS Protected
                </span>
              </div>
            </div>

            {/* Light Mockup Preview 3 */}
            <div className="flex-1 w-full">
              <div className="bg-white border-2 border-slate-200/90 rounded-2xl p-6 shadow-xl shadow-slate-200/60 relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
                  <div className="flex items-center gap-2">
                    <Wifi className="w-4 h-4 text-purple-600" />
                    <span className="font-mc text-xs text-slate-800 tracking-wider">SHAREABLE SERVER DOMAIN</span>
                  </div>
                  <span className="text-[11px] font-bold text-purple-700 bg-purple-50 border border-purple-200 px-2 py-0.5 rounded-md">
                    ENCRYPTED
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between mb-4">
                  <div>
                    <p className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">Public Address</p>
                    <code className="text-sm font-mono font-bold text-slate-800 select-all">
                      play.crafttogether.live:25565
                    </code>
                  </div>
                  <span className="px-3 py-1 bg-white border border-slate-300 rounded-md text-xs font-semibold text-slate-700 shadow-2xs">
                    Online
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="p-2.5 rounded-lg bg-purple-50/50 border border-purple-100">
                    <p className="text-[10px] text-slate-400 font-bold">LATENCY</p>
                    <p className="font-mc text-purple-700 text-sm">~18ms</p>
                  </div>
                  <div className="p-2.5 rounded-lg bg-purple-50/50 border border-purple-100">
                    <p className="text-[10px] text-slate-400 font-bold">MODE</p>
                    <p className="font-mc text-purple-700 text-sm">Tunnel</p>
                  </div>
                  <div className="p-2.5 rounded-lg bg-purple-50/50 border border-purple-100">
                    <p className="text-[10px] text-slate-400 font-bold">UPTIME</p>
                    <p className="font-mc text-purple-700 text-sm">99.9%</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
