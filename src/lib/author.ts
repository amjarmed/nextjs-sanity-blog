import { client } from '@/sanity/lib/client';
import { Author } from '@/types/interfaces';

async function getAuthor() {
  const query = `
  *[_type == 'author'][0]
  `;
  const author: Author = await client.fetch(query);
  return { author };
}

export default getAuthor;
