import PostCard from '@/components/post-card';
import SectionTitle from '@/components/secetion-title';
import getCategories from '@/lib/category';
import { getPosts } from '@/lib/post';
import { POSTS_PER_PAGE } from '@/lib/utils';
import { Metadata } from 'next';
import BackButton from '../post/_components/back-button';
import CategoriesFilter from './_components/categories-filter';
import BlogPagination from './_components/pagination';
//  posts page metadata
export const metadata: Metadata = {
  title: 'مقالات - مدونتي',
  description:
    'صفحة مخصصة لاستعراض كافة المقالات المجودة في المدونة مما يسهم في اثراء معلوماتك الشخصية.'
};

//=============== single posts page component =================

// pages props
interface PageProps {
  searchParams: { categoryId?: string; page?: string };
}

async function Page({ searchParams }: PageProps) {
  // Search params
  const { categoryId, page } = searchParams;
  // Get posts  by category
  const { posts } = await getPosts(categoryId);

  // Get categories
  const categories = await getCategories();

  // PAGINATION

  // Get posts count
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE); // 20 / 4 = 5
  const currentPage = Number(page) || 1;
  // displayed page
  const displayedPage = posts.slice(
    POSTS_PER_PAGE * (currentPage - 1), //page 1 = 4*(1-1) = 0, page 2 = 4*(2-1) = 4
    POSTS_PER_PAGE * currentPage //page 1= 4*1 = 4, page 2 = 4*2 = 8
  );
  // Filter posts
  return (
    <div className='space-y-8 md:space-y-12 pt-8'>
      <section className='flex items-center justify-between gap-4 '>
        <SectionTitle title='المقالات' />
        <CategoriesFilter categories={categories} />
      </section>

      {posts.length === 0 ? (
        <div className='flex  flex-col justify-center items-center space-y-8 md:space-y-12 pt-8 min-h-[70vh]'>
          <p> لا توجد مقالات في هذا التصنيف</p>
          <BackButton />
        </div>
      ) : (
        <>
          <section className='grid lg:grid-cols-2 gap-8'>
            {displayedPage.map((post) => (
              <PostCard key={post._id} post={post} />
            ))}
          </section>

          <BlogPagination totalPages={totalPages} />
        </>
      )}
    </div>
  );
}

export default Page;
