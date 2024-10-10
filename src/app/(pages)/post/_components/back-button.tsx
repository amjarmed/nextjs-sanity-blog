'use client';

import { Button } from '@/components/ui/button';
import { ChevronRightIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';

const BackButton = () => {
  const router = useRouter();
  return (
    <Button variant='link' onClick={() => router.back()}>
      <ChevronRightIcon className='w-4 h-4 mr-2' />
      <span>العودة</span>
    </Button>
  );
};

export default BackButton;
