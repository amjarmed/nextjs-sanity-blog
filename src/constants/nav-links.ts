import { NavLink } from '@/types/interfaces';
import { Files, Home } from 'lucide-react';

export const navLinks: NavLink[] = [
  {
    label: 'الرئيسية',
    href: '/',
    icon: Home
  },
  {
    label: 'المقالات',
    href: '/posts',
    icon: Files
  }
];
