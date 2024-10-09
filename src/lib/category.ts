import { client } from '@/sanity/lib/client';
import { Category } from '@/types/interfaces';

const getCategories = async () => {
  const query = `
  *[_type== 'category']
   `;

  const categories: Category[] = await client.fetch(query);
  return categories;
};
export default getCategories;
