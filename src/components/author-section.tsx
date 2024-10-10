import getAuthor from '@/lib/author';
import { urlFor } from '@/sanity/lib/image';
import { Github, Instagram, Linkedin } from 'lucide-react';
// import { PortableText } from 'next-sanity';
import { PortableText } from '@portabletext/react';
import Link from 'next/link';
import { richTextComponents } from './rich-text-component';
import { Avatar, AvatarImage } from './ui/avatar';
import { buttonVariants } from './ui/button';
import { Card } from './ui/card';

const AuthorSection = async () => {
  const { author } = await getAuthor();
  return (
    <Card className='p-6 max-w-5xl mx-auto flex flex-col items-center text-center gap-4 md:gap-6'>
      <Avatar>
        <AvatarImage src={urlFor(author.image).url()} alt={author.name} />
      </Avatar>

      <h3 className='text-xl md:text-2xl font-semibold'>{author.name}</h3>
      {/* TODO: display bio */}

      <div className=' prose dark:prose-invert prose-li:marker:text-primary prose-a:text-primary prose-headings:text-primary'>
        <PortableText value={author.bio} components={richTextComponents} />
      </div>

      <div className='flex items-center gap-6'>
        <Link
          href={author.instagram || '/'}
          className={buttonVariants({ variant: 'secondary', size: 'icon' })}
          target='_blank'
        >
          <Instagram className='size-6 text-muted-foreground' />
        </Link>
        <Link
          href={author.linkedin || '/'}
          className={buttonVariants({ variant: 'secondary', size: 'icon' })}
          target='_blank'
        >
          <Linkedin className='size-6 text-muted-foreground' />
        </Link>
        <Link
          href={author.github || '/'}
          className={buttonVariants({ variant: 'secondary', size: 'icon' })}
          target='_blank'
        >
          <Github className='size-6 text-muted-foreground' />
        </Link>
      </div>
    </Card>
  );
};

export default AuthorSection;
