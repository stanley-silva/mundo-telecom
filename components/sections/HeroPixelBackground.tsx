'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const PixelBlast = dynamic(() => import('@/components/ui/PixelBlast'), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-[#F8FAFC]" />
});

export type HeroPixelVariant = 'home' | 'governo' | 'empresas' | 'quemsomos' | 'contato';

interface HeroPixelBackgroundProps {
  variant?: HeroPixelVariant;
}

export const HeroPixelBackground: React.FC<HeroPixelBackgroundProps> = ({ variant = 'home' }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="absolute inset-0 bg-[#F8FAFC] pointer-events-none" />;
  }

  // Configurações personalizadas adaptadas com elegância para o novo fundo claro
  const getPresetConfig = () => {
    switch (variant) {
      case 'governo':
        return {
          shape: 'square' as const, // Quadrados estruturados e finos
          pixelSize: 4.0,
          color: '#1E3A6E',
          patternScale: 4.8,
          patternDensity: 1.1,
          pixelSizeJitter: 0.2,
          speed: 0.45,
          opacity: 0.25,
        };
      case 'empresas':
        return {
          shape: 'diamond' as const, // Diamantes/losangos miúdos e elegantes
          pixelSize: 4.5,
          color: '#07224B',
          patternScale: 5.0,
          patternDensity: 1.15,
          pixelSizeJitter: 0.25,
          speed: 0.55,
          opacity: 0.28,
        };
      case 'quemsomos':
        return {
          shape: 'circle' as const,
          pixelSize: 4.5,
          color: '#1E3A6E',
          patternScale: 4.5,
          patternDensity: 1.1,
          pixelSizeJitter: 0.3,
          speed: 0.5,
          opacity: 0.25,
        };
      case 'contato':
        return {
          shape: 'circle' as const,
          pixelSize: 4.5,
          color: '#07224B',
          patternScale: 5.0,
          patternDensity: 1.15,
          pixelSizeJitter: 0.25,
          speed: 0.5,
          opacity: 0.28,
        };
      case 'home':
      default:
        return {
          shape: 'circle' as const,
          pixelSize: 4.5,
          color: '#07224B',
          patternScale: 5.2,
          patternDensity: 1.2,
          pixelSizeJitter: 0.25,
          speed: 0.5,
          opacity: 0.3,
        };
    }
  };

  const config = getPresetConfig();

  return (
    <div className="absolute inset-0 pointer-events-none w-full h-full overflow-hidden z-0">
      {/* Background base claro com nuance suave */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFC] via-[#FFFFFF] to-[#F8FAFC]" />

      {/* Brilhos de iluminação suave nos cantos */}
      <div className="absolute -top-32 -right-32 w-[480px] h-[480px] bg-mundo-orange/[0.07] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-[480px] h-[480px] bg-blue-600/[0.05] rounded-full blur-3xl pointer-events-none" />

      {/* Partículas interativas adaptadas para fundo claro */}
      <PixelBlast
        variant={config.shape}
        pixelSize={config.pixelSize}
        color={config.color}
        patternScale={config.patternScale}
        patternDensity={config.patternDensity}
        pixelSizeJitter={config.pixelSizeJitter}
        enableRipples={false}
        liquid={false}
        speed={config.speed}
        edgeFade={0}
        transparent
        className="w-full h-full block absolute inset-0"
        style={{ width: '100%', height: '100%', opacity: config.opacity }}
      />

      {/* Camadas sutis de gradiente para contraste e legibilidade impecáveis */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.45)_0%,rgba(248,250,252,0.85)_100%)] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/30 pointer-events-none" />
    </div>
  );
};

export default HeroPixelBackground;
