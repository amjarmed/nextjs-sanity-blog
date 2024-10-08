'use client';

import { cn } from '@/lib/utils';
import { ArrowUpCircle } from 'lucide-react';
import React from 'react';
import { Button } from '../ui/button';

function FloatingButton() {
  //  scroll to top button
  const [isOverScreen, setIsOverScreen] = React.useState<boolean>(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsOverScreen(window.scrollY > 120);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
  return (
    <Button
      className={cn(
        'fixed bottom-12 md:bottom-8 end-6 md:end-12 transition-all rounded-full text-white',
        !isOverScreen && 'opacity-0 translate-y-6 pointer-events-none'
      )}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <ArrowUpCircle className='size-6' />
    </Button>
  );
}

export default FloatingButton;
