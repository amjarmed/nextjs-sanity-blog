import { client } from '@/sanity/lib/client';
import { Post } from '@/types/interfaces';

// get all posts
export async function getPosts(categoryId?: string) {
  const query = categoryId
    ? `
   *[_type== 'post' && category->_id == '${categoryId}']|order(publishedAt desc){...,
  author->,
  category->,
  }
  
  `
    : `
  
   *[_type== 'post']|order(publishedAt desc){...,
  author->,
  category->,
  }
  
  `;
  const posts: Post[] = await client.fetch(query);
  return { posts };
}
//althkaa-alastnaay-ai-taryfh-alwzaef-almutahh-ma-rwatbha
// get single post
export async function getPost(slug: string) {
  const query = `
   *[_type== 'post' && slug.current == '${slug}'][0]{
    ...,
  author->,
  category->,}
  `;
  const post: Post = await client.fetch(query);
  return { post };
}

export async function getRelatedPosts(
  categoryId: string | null | undefined,
  currentPostId: string | null | undefined
) {
  const query = `
  
   *[_type== 'post' && category->_id == '${categoryId}' && _id != '${currentPostId}']|order(publishedAt desc){...,
  author->,
  category->,
  }
  
  `;
  const relatedPosts: Post[] = await client.fetch(query);
  return { relatedPosts };
}
