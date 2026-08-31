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
        pixelSize={10}
        color="#0E356D"
        patternScale={3}
        patternDensity={1.2}
        pixelSizeJitter={0.5}
        enableRipples={false}
        liquid={false}
        speed={0.6}
        edgeFade={0}
        transparent
        className="w-full h-full block absolute inset-0"
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};

export default QuemSomosHeroBackground;
