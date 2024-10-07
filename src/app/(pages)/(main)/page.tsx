import { Button } from '@/components/ui/button';
import { Settings } from 'lucide-react';

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center space-y-5 h-screen'>
      <h1 className='text-4xl font-bold text-red-700 '>مرحبا بالعالم</h1>
      <Button size={'lg'} variant={'default'}>
        <Settings />
        <span className='text-lg'> الاعدادات</span>
      </Button>
    </div>
  );
}
