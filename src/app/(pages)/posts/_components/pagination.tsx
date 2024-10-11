'use client';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagination';
import { usePathname, useSearchParams } from 'next/navigation';
import { FC } from 'react';

interface PaginationProps {
  totalPages: number;
}
const BlogPagination: FC<PaginationProps> = ({ totalPages }) => {
  // get pathname from url
  const pathname = usePathname();
  // get search params from url
  const searchParams = useSearchParams();
  // get current page from url
  const currentPage = Number(searchParams.get('page')) || 1;

  // prev and next page
  const prevPage = currentPage - 1;
  const nextPage = currentPage + 1;
  // function to generate url
  const generateUrl = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());

    return `${pathname}?${params.toString()}`;
  };
  return (
    <>
      <Pagination dir='rtl'>
        <PaginationContent>
          {/* prev page */}
          {prevPage >= 1 && (
            <PaginationItem>
              <PaginationPrevious href={generateUrl(prevPage)} />
            </PaginationItem>
          )}

          {/*  pages */}
          {Array(totalPages)
            .fill('')
            .map((_, index) => (
              <PaginationItem key={index}>
                <PaginationLink
                  href={generateUrl(index + 1)}
                  isActive={index + 1 === currentPage}
                >
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            ))}

          {/* next page */}
          {nextPage <= totalPages && (
            <PaginationItem>
              <PaginationNext href={generateUrl(nextPage)} />
            </PaginationItem>
          )}
        </PaginationContent>
      </Pagination>
    </>
  );
};
export default BlogPagination;
