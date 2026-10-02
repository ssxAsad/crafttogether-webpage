import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface MinecraftButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  glow?: boolean;
  children: React.ReactNode;
}

export function MinecraftButton({
  variant = 'secondary',
  size = 'md',
  glow = false,
  className,
  children,
  ...props
}: MinecraftButtonProps) {
  // Tactile 3D Minecraft beveled button with shadow depth elevation
  const baseStyles =
    "relative font-mc uppercase tracking-wider transition-all duration-75 flex items-center justify-center cursor-pointer select-none overflow-visible group";

  const sizeBorders = {
    sm: "border-[2px]",
    md: "border-[3px]",
    lg: "border-[3px]",
  };

  const variants = {
    primary: {
      colors:
        "bg-[#488f48] text-white border-t-[#67ab67] border-l-[#67ab67] border-b-[#2c5b2c] border-r-[#2c5b2c] hover:bg-[#529e52]",
      sm: glow
        ? "shadow-[0_2.5px_0_#1e3d1e,0_6px_16px_-3px_rgba(72,143,72,0.35)] hover:shadow-[0_2.5px_0_#1e3d1e,0_8px_20px_-2px_rgba(72,143,72,0.45)] active:shadow-[0_0px_0_#1e3d1e] active:translate-y-[2.5px]"
        : "shadow-[0_2.5px_0_#1e3d1e] active:shadow-[0_0px_0_#1e3d1e] active:translate-y-[2.5px]",
      md: glow
        ? "shadow-[0_4px_0_#1e3d1e,0_8px_20px_-4px_rgba(72,143,72,0.4)] hover:shadow-[0_4px_0_#1e3d1e,0_12px_26px_-3px_rgba(72,143,72,0.5)] active:shadow-[0_0px_0_#1e3d1e] active:translate-y-[4px]"
        : "shadow-[0_4px_0_#1e3d1e] active:shadow-[0_0px_0_#1e3d1e] active:translate-y-[4px]",
      lg: glow
        ? "shadow-[0_5px_0_#1e3d1e,0_10px_25px_-5px_rgba(72,143,72,0.45)] hover:shadow-[0_5px_0_#1e3d1e,0_14px_32px_-4px_rgba(72,143,72,0.6)] active:shadow-[0_0px_0_#1e3d1e,0_4px_10px_-2px_rgba(72,143,72,0.35)] active:translate-y-[5px]"
        : "shadow-[0_5px_0_#1e3d1e] active:shadow-[0_0px_0_#1e3d1e] active:translate-y-[5px]",
      activeBorders:
        "active:border-t-[#2c5b2c] active:border-l-[#2c5b2c] active:border-b-[#67ab67] active:border-r-[#67ab67]",
    },
    secondary: {
      colors:
        "bg-white text-slate-800 border-t-white border-l-white border-b-slate-300 border-r-slate-300 hover:bg-slate-50 hover:text-slate-950 hover:border-b-slate-400 hover:border-r-slate-400 shadow-[0_4px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.06)] active:shadow-none active:translate-y-[1px]",
      sm: "",
      md: "",
      lg: "",
      activeBorders:
        "active:border-t-slate-300 active:border-l-slate-300 active:border-b-white active:border-r-white",
    },
  };

  const v = variants[variant];

  return (
    <button
      className={cn(
        baseStyles,
        sizeBorders[size],
        v.colors,
        v[size],
        v.activeBorders,
        className
      )}
      {...props}
    >
      <div className="relative z-10 flex items-center justify-center gap-inherit w-full h-full" style={{ gap: 'inherit' }}>
        {children}
      </div>
    </button>
  );
}
