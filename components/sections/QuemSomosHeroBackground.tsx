'use client';

import React, { useState, useEffect } from 'react';
import PixelBlast from '@/components/ui/PixelBlast';

export const QuemSomosHeroBackground: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="absolute inset-0 pointer-events-none w-full h-full" />;
  }

  return (
    <div className="absolute inset-0 pointer-events-none w-full h-full overflow-hidden">
      <PixelBlast
        variant="circle"
        pixelSize={4.5}
        color="#0E356D"
        patternScale={4.5}
        patternDensity={1.1}
        pixelSizeJitter={0.3}
        enableRipples={false}
        liquid={false}
        speed={0.5}
        edgeFade={0}
        transparent
        className="w-full h-full block absolute inset-0 opacity-50"
        style={{ width: '100%', height: '100%', opacity: 0.5 }}
      />
    </div>
  );
};

export default QuemSomosHeroBackground;
