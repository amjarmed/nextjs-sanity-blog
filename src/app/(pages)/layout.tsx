import Navabar from '@/components/navigation/navabar';
import React from 'react';

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <main className='relative pt-20 overflow-x-hidden	'>
      <figure className='absolute -top-60 start-[30rem] -translate-x-[50%] size-80 md:size-[30rem] bg-gradient-to-tr from-primary/70 to-transparent rounded-full blur-lg opacity-25 -z-10   '></figure>
      <Navabar />
      <div className='container space-y-12 md:space-y-20'>{children}</div>

      {/* <Footer/> */}
      {/* <FloatingButton/> */}
    </main>
  );
}
