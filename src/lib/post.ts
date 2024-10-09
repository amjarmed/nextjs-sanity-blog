import { client } from '@/sanity/lib/client';
import { Post } from '@/types/interfaces';

async function getPosts() {
  const query = `
  
   *[_type== 'post']|order(publishedAt desc){...,
  author->,
  category->,
  }
  
  `;
  const posts: Post[] = await client.fetch(query);
  return { posts };
}

export default getPosts;
