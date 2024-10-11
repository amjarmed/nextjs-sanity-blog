'use client';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Category } from '@/types/interfaces';
import { Filter } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import qs from 'query-string';
import { FC } from 'react';

interface CategoriesFilterProps {
  categories: Category[];
}
const CategoriesFilter: FC<CategoriesFilterProps> = ({ categories }) => {
  // get current page from url
  const router = useRouter();
  // get search params from url
  const searchParams = useSearchParams();

  const currentCategory: Category | undefined = categories.find(
    (category) => category._id === searchParams.get('categoryId')
  );
  // get id of the clicked category
  const handleClick = (id: string | undefined) => {
    // handle url using query-string library
    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query: {
          categoryId: id
        }
      },
      { skipNull: true }
    );
    // push url
    router.push(url);
  };
  return (
    <>
      <DropdownMenu dir='rtl'>
        <DropdownMenuTrigger>
          <Button variant='outline'>
            {!currentCategory && <Filter className='size-4' />}
            {currentCategory?.title || ' اختر التصنيف '}
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent>
          <DropdownMenuItem onClick={() => handleClick(undefined)}>
            الكل
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          {categories.map((category) => (
            <DropdownMenuItem
              key={category._id}
              onClick={() => handleClick(category._id)}
            >
              {category.title}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
export default CategoriesFilter;
