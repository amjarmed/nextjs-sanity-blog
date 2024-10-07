import { navLinks } from '@/constants/nav-links';
import { cn } from '@/lib/utils';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { buttonVariants } from '../ui/button';
import { Sheet, SheetClose, SheetContent, SheetTrigger } from '../ui/sheet';

export default function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu className='size-8 md:hidden cursor-pointer' />
      </SheetTrigger>
      <SheetContent className='py-32'>
        <nav className='flex flex-col gap-4'>
          {navLinks.map((link) => {
            const { label, href, icon: Icon } = link;
            return (
              <SheetClose key={href} asChild>
                <Link
                  href={href}
                  className={cn(
                    buttonVariants({ variant: 'ghost', size: 'lg' }),
                    'w-full flex justify-start '
                  )}
                >
                  <Icon className='size-5 ' />
                  <span>{label}</span>
                </Link>
              </SheetClose>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
