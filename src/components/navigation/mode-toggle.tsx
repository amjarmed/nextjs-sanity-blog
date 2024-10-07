'use client';

//import { MoonIcon, SunIcon } from '@radix-ui/react-icons';

import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Monitor, MoonIcon, SunDim } from 'lucide-react';

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu dir='rtl'>
      <DropdownMenuTrigger asChild>
        <Button variant='outline' size='icon'>
          <SunDim className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
          <MoonIcon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
          <span className='sr-only'>تغيير المظهر</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='start'>
        <DropdownMenuItem
          className='group cursor-pointer transition '
          onClick={() => setTheme('light')}
        >
          <SunDim className='size-4 me-2 group-hover:text-primary group-hover: scale-125' />
          <span>فاتح</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          className='group cursor-pointer transition '
          onClick={() => setTheme('dark')}
        >
          <MoonIcon className='size-4 me-2 group-hover:text-primary group-hover: scale-125' />
          <span>داكن</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          className='group cursor-pointer transition '
          onClick={() => setTheme('system')}
        >
          <Monitor className='size-4 me-2 group-hover:text-primary group-hover: scale-125' />
          <span>الافتراضي</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
