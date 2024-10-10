import { LoaderIcon } from 'lucide-react';

export default function Loader() {
  return (
    <section className='w-full h-[88vh] grid place-content-center text-muted-foreground'>
      <div className='flex flex-col items-center gap-6'>
        <LoaderIcon className='size-12 animate-spin' />
        <span className='text-lg font-semibold tracking-wider'>
          {' '}
          جار التحميل{' ...'}
        </span>
      </div>
    </section>
  );
}
