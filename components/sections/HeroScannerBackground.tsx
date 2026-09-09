'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const Scanner = dynamic(() => import('@/components/ui/Scanner'), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-[#06214A]" />
});

export const HeroScannerBackground: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="absolute inset-0 bg-[#06214A] pointer-events-none" />;
  }

  return (
    <div className="absolute inset-0 pointer-events-none w-full h-full overflow-hidden z-0">
      <Scanner
        color1="#06214A"
        color2="#1C3D6F"
        color3="#FFFFFF"
        speed={0.5}
        sweepSpeed={0.25}
        sweepWidth={1.6}
        sweepFalloff={6}
        scale={1.5}
        frequency={2}
        ripple={0.22}
        bandDensity={11}
        lineSharpness={5.5}
        glow={0.22}
        scanDirection="vertical"
        colorSpread={0.7}
        brightness={1.0}
        contrast={1.15}
        softness={1.4}
        vignette={0.45}
        scanline={true}
        grain={true}
        grainIntensity={0.05}
        opacity={1.0}
        mouseInteraction={false}
        mouseRadius={0.5}
        mouseStrength={0.5}
        className="w-full h-full block absolute inset-0"
        style={{ width: '100%', height: '100%' }}
      />
      {/* Overlay sutil para garantir contraste e legibilidade impecável dos textos */}
      <div className="absolute inset-0 bg-gradient-to-r from-mundo-navy-deep/85 via-mundo-navy-deep/60 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-mundo-navy-deep via-transparent to-mundo-navy-deep/40 pointer-events-none" />
    </div>
  );
};

export default HeroScannerBackground;
