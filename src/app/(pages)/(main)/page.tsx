import AuthorSection from '@/components/author-section';
import { Metadata } from 'next';
import CategoriesSection from './_components/categories-section';
import PostsSection from './_components/posts-section';

// export revalidate time
// todo: make it dynamic REVALIDATE_AFTER
export const revalidate = 60;

export const metadata: Metadata = {
  title: 'مدونتي ',
  description:
    'مدونة شخصية تتناول مواضيع متنوعة تشمل تجارب الحياة اليومية، تطوير الذات، التكنولوجيا، والتصوير. متابعة لأحدث المقالات والأفكار الشخصية التي تعكس رؤية الكاتب الفريدة وتجاربه.'
};

export default function Home() {
  return (
    <>
      {/* main section */}
      <section className='flex flex-col items-center justify-center gap-6 md:gap-8 text-center p-4 pt-8 md:p-8 md:pt-12'>
        <h1 className='text-2xl md:text-4xl font-bold'>
          مرحبا بك في مدونتي الشخصية
        </h1>
        <p className='max-w-[40rem] text-lg'>
          مدونة شخصية تتناول مواضيع متنوعة تشمل تجارب الحياة اليومية، تطوير
          الذات، التكنولوجيا، والتصوير. متابعة لأحدث المقالات والأفكار الشخصية
          التي تعكس رؤية الكاتب الفريدة وتجاربه.
        </p>
      </section>
      {/* another section */}
      <div className='grid md:grid-cols-5 gap-8 md:gap-16'>
        <div className='md:col-span-3'>
          <PostsSection />
        </div>
        <div className='md:col-span-2 space-y-8'>
          <CategoriesSection />
          <AuthorSection />
        </div>
      </div>
    </>
  );
}
