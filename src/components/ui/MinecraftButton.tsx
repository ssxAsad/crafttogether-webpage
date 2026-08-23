import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface MinecraftButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export function MinecraftButton({ variant = 'secondary', className, children, ...props }: MinecraftButtonProps) {
  // We use borders for the 3D bevel and box-shadow for the solid 3D block elevation underneath.
  const baseStyles = "relative font-mc uppercase tracking-wider transition-all duration-75 flex items-center justify-center border-[3px] active:translate-y-[6px] overflow-visible group";
  
  const variants = {
    primary: "bg-emerald-600 text-white border-t-emerald-400 border-l-emerald-400 border-b-emerald-800 border-r-emerald-800 hover:bg-emerald-500 shadow-[0_6px_0_#022c22] active:shadow-[0_0px_0_#022c22] active:border-t-emerald-800 active:border-l-emerald-800 active:border-b-emerald-400 active:border-r-emerald-400",
    secondary: "bg-gray-700 text-white border-t-gray-500 border-l-gray-500 border-b-gray-900 border-r-gray-900 hover:bg-gray-600 shadow-[0_6px_0_#09090b] active:shadow-[0_0px_0_#09090b] active:border-t-gray-900 active:border-l-gray-900 active:border-b-gray-500 active:border-r-gray-500",
  };

  return (
    <button className={clsx(baseStyles, variants[variant], className)} {...props}>
      <div className="relative z-10 flex items-center justify-center gap-inherit w-full h-full" style={{ gap: 'inherit' }}>
        {children}
      </div>
    </button>
  );
}
