import PostCard from '@/components/post-card';
import SectionTitle from '@/components/secetion-title';
import { buttonVariants } from '@/components/ui/button';
import getPosts from '@/lib/post';
import { ChevronLeftIcon } from 'lucide-react';
import Link from 'next/link';

async function PostsSection() {
  const { posts } = await getPosts();
  return (
    <section className='space-y-6 md:space-y-8	'>
      <div className='flex items-center justify-between gap-8'>
        <SectionTitle title='المقالات' />
        <Link href='/posts' className={buttonVariants({ variant: 'link' })}>
          <span>مشاهدة المزيد</span>
          <ChevronLeftIcon className='size-4' />
        </Link>
      </div>
      {/* posts cards */}
      <div className='grid gap-4 md:gap-8'>
        {posts.slice(0, 4).map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>
    </section>
  );
}

export default PostsSection;
