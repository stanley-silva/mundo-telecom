'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const PixelBlast = dynamic(() => import('@/components/ui/PixelBlast'), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-[#07224B]" />
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
    return <div className="absolute inset-0 bg-[#07224B] pointer-events-none" />;
  }

  // Configurações personalizadas por página para que cada uma tenha personalidade própria
  const getPresetConfig = () => {
    switch (variant) {
      case 'governo':
        return {
          shape: 'square' as const, // Quadrados estruturados e finos
          pixelSize: 4.0,
          color: '#0A2C5E',
          patternScale: 4.8,
          patternDensity: 1.1,
          pixelSizeJitter: 0.2,
          speed: 0.45,
        };
      case 'empresas':
        return {
          shape: 'diamond' as const, // Diamantes/losangos miúdos e elegantes
          pixelSize: 4.5,
          color: '#114282',
          patternScale: 5.0,
          patternDensity: 1.15,
          pixelSizeJitter: 0.25,
          speed: 0.55,
        };
      case 'quemsomos':
        return {
          shape: 'circle' as const,
          pixelSize: 4.5,
          color: '#0E356D',
          patternScale: 4.5,
          patternDensity: 1.1,
          pixelSizeJitter: 0.3,
          speed: 0.5,
        };
      case 'contato':
        return {
          shape: 'circle' as const,
          pixelSize: 4.5,
          color: '#0E3D7D',
          patternScale: 5.0,
          patternDensity: 1.15,
          pixelSizeJitter: 0.25,
          speed: 0.5,
        };
      case 'home':
      default:
        return {
          shape: 'circle' as const,
          pixelSize: 4.5,
          color: '#0E3D7D',
          patternScale: 5.2,
          patternDensity: 1.2,
          pixelSizeJitter: 0.25,
          speed: 0.5,
        };
    }
  };

  const config = getPresetConfig();

  return (
    <div className="absolute inset-0 pointer-events-none w-full h-full overflow-hidden z-0">
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
        className="w-full h-full block absolute inset-0 opacity-50"
        style={{ width: '100%', height: '100%', opacity: 0.5 }}
      />
      {/* Camada de Gradiente para contraste e legibilidade impecável */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(7,34,75,0.25)_0%,rgba(4,18,38,0.72)_100%)] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-mundo-navy-deep via-transparent to-mundo-navy-deep/40 pointer-events-none" />
    </div>
  );
};

export default HeroPixelBackground;
