import { navLinks } from '@/constants/nav-links';
import Link from 'next/link';
import Logo from './logo';
import MobileNav from './mobile-nav';
import { ModeToggle } from './mode-toggle';

function Navabar() {
  return (
    <header className='fixed top-0 start-0 py-4 w-full z-40  bg-background/60 backdrop-blur-md '>
      <div className='container  flex justify-between items-center '>
        <Logo />
        <nav className='hidden md:flex items-center gap-8  '>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className='flex items-center gap-4'>
          <ModeToggle />

          <MobileNav />
        </div>
      </div>
    </header>
  );
}

export default Navabar;
