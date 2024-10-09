import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { urlFor } from '@/sanity/lib/image';
import { Calendar } from 'lucide-react';
import { FC } from 'react';
import { Image } from 'sanity';

interface AuthorAvatarProps {
  authorName: string;
  authorImage: Image;
  publishedAt: Date;
}
const AuthorAvatar: FC<AuthorAvatarProps> = ({
  authorImage,
  authorName,
  publishedAt
}) => {
  return (
    <div className='flex items-center justify-between gap-2'>
      <div className='flex items-center gap-2'>
        <Avatar>
          <AvatarImage src={urlFor(authorImage).url()} alt={authorName} />
        </Avatar>
        <p className='text-sm'>{authorName}</p>
      </div>
      {/* publish date */}
      <div className='flex items-center justify-center gap-2'>
        <Calendar className='size-4 text-primary' />
        <small>
          {new Date(publishedAt).toLocaleDateString('ar-MA', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </small>
      </div>
    </div>
  );
};
export default AuthorAvatar;
