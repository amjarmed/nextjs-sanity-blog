import AuthorSection from '@/components/author-section';
import { richTextComponents } from '@/components/rich-text-component';
import SectionTitle from '@/components/secetion-title';
import { buttonVariants } from '@/components/ui/button';
import { getPost, getRelatedPosts } from '@/lib/post';
import { urlFor } from '@/sanity/lib/image';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import BackButton from '../_components/back-button';
import RelatedPostsCard from '../_components/related-posts';
//=============== single post page component =================
// export page title and description
export const generateMetadata = async ({
  params
}: {
  params: { slug: string };
}) => {
  const { post } = await getPost(params.slug);
  if (!post)
    return {
      title: 'مقال غير موجود - مدونتي',
      description: 'المقال الذي تبحث عنه غير موجود أو تم تحويله'
    };
  return {
    title: `${post?.title} - مدونتي`,
    description: post?.description
  };
};

export default async function page({ params }: { params: { slug: string } }) {
  // get single post
  const { post } = await getPost(params.slug);
  const { relatedPosts } = await getRelatedPosts(post?.category._id, post?._id);

  if (!post) {
    return notFound();
  }
  return (
    <>
      <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
        {/* post content */}
        <section className='md:col-span-2 space-y-8 md:space-y-12'>
          <div className='space-y-2 md:space-y-4'>
            <BackButton />
            <div className='flex items-center  gap-4 text-muted-foreground  '>
              <time dateTime={post.publishedAt.toString()}>
                نشر في :{' '}
                {new Date(post.publishedAt).toLocaleDateString('ar-MA', {
                  dateStyle: 'long'
                })}
              </time>
              <span>*</span>
              <Link href={''} className={buttonVariants({ variant: 'link' })}>
                {post.category?.title}
              </Link>
            </div>
            <small className='text-muted-foreground'>
              مدة قراءة المقال : {post.readTime} دقيقة
            </small>
          </div>
          {/* post title AND description */}
          <div className='space-y-4 md:space-y-6'>
            <h1 className='text-3xl md:text-4xl font-semibold text-primary'>
              {post.title}
            </h1>
            <h5 className='text-muted-foreground text-lg'>
              {post.description}
            </h5>
          </div>
          {/* post image */}
          <Image
            src={urlFor(post.mainImage).url()}
            alt={post.title}
            width={1440}
            height={260}
            className='w-[50rem] h-80 rounded-lg'
          />
          {/* content */}
          <div className='content prose dark:prose-invert prose-li:marker:text-primary prose-a:text-primary prose-headings:text-primary'>
            <PortableText value={post.body} components={richTextComponents} />
          </div>
          <AuthorSection />
        </section>

        {/* related posts */}
        {relatedPosts && relatedPosts.length > 0 && (
          <section className='flex flex-col gap-6 md:gap-3 py-20'>
            <SectionTitle title='مقالات ذات صلة' />
            <div className='flex flex-col gap-6 md:gap-8'>
              {relatedPosts.map((post) => (
                <RelatedPostsCard key={post._id} post={post} />
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
}
