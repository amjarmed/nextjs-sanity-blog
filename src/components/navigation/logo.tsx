import { cn } from '@/lib/utils';
import { Rakkas } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

const font = Rakkas({ weight: '400', subsets: ['arabic'] });
export default function Logo() {
  return (
    <Link href='/' className={cn('text-3xl md:text-4xl', font.className)}>
      <div className='flex items-center'>
        <Image src='/logo-icon.png' alt='logo' width={32} height={32} />
        <p className='ml-2'>
          مرحبا <span className='text-primary'>بالعالم</span>
        </p>
      </div>
    </Link>
  );
}
