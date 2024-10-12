import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// number of posts per page
export const POSTS_PER_PAGE = 4;

// revalidate after 60 seconds
export const REVALIDATE_AFTER: number = 60;
