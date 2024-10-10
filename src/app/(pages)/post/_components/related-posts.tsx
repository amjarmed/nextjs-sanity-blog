import { Post } from '@/types/interfaces';
import Link from 'next/link';
import { FC } from 'react';

//======== related posts sidebar content
interface RelatedPostsCardProps {
  post: Post;
}
const RelatedPostsCard: FC<RelatedPostsCardProps> = ({ post }) => {
  return (
    <Link href={`/post/${post.slug.current}`}>
      <article className='space-y-1'>
        <p className='text-sm py-0.5 px-4 rounded-xl bg-primary text-white w-fit'>
          {post.category.title || 'غير مصنف'}
        </p>
        <h3 className='text-lg md:text-xl font-semibold'>{post.title}</h3>
        <div className='flex items-center font-semibold gap-2'>
          <h6 className='text-sm'>{post.author.name}</h6>
          <span>|</span>
          {/* used time tag for date format in arabic  */}
          <time dateTime={post.publishedAt.toString()}>
            {new Date(post.publishedAt).toLocaleDateString('ar-MA', {
              dateStyle: 'long'
            })}
          </time>
        </div>
      </article>
    </Link>
  );
};
export default RelatedPostsCard;
