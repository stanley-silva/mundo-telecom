'use client';

import React, { useState, useEffect } from 'react';
import PixelBlast from '@/components/ui/PixelBlast';

export const QuemSomosHeroBackground: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="absolute inset-0 bg-[#F8FAFC] pointer-events-none w-full h-full" />;
  }

  return (
    <div className="absolute inset-0 pointer-events-none w-full h-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFC] via-[#FFFFFF] to-[#F8FAFC]" />
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-mundo-orange/[0.07] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-600/[0.05] rounded-full blur-3xl pointer-events-none" />
      <PixelBlast
        variant="circle"
        pixelSize={4.5}
        color="#07224B"
        patternScale={4.5}
        patternDensity={1.1}
        pixelSizeJitter={0.3}
        enableRipples={false}
        liquid={false}
        speed={0.5}
        edgeFade={0}
        transparent
        className="w-full h-full block absolute inset-0"
        style={{ width: '100%', height: '100%', opacity: 0.25 }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.45)_0%,rgba(248,250,252,0.85)_100%)] pointer-events-none" />
    </div>
  );
};

export default QuemSomosHeroBackground;
