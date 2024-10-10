import { buttonVariants } from '@/components/ui/button';
import { FileX2 } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='py-12 px-2 md:px-6'>
      <div className='w-full border border-dashed rounded-xl min-h-[40rem] grid place-content-center'>
        <div className='flex flex-col items-center gap-6'>
          {/* icon 404 */}
          <div className='size-20 grid place-content-center bg-secondary rounded-full'>
            <FileX2 className='size-12 text-muted-foreground' />
          </div>
          {/* message */}
          <div className='space-y-3 text-center'>
            <h4 className='text-lg font-semibold'>المقال غير موجود</h4>
            <p className='text-muted-foreground'>
              {' '}
              المقال الذي تبحث عنه غير موجود...
            </p>
          </div>
          {/* back button */}
          <Link
            href='/'
            className={buttonVariants({ variant: 'outline', size: 'lg' })}
          >
            <span> العودة للرئيسية </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
