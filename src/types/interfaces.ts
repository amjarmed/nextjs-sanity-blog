import { LucideIcon } from 'lucide-react';
import { Image, Slug } from 'sanity';

// nav links interface
export interface NavLink {
  label: string;
  href: string;
  icon: LucideIcon;
}

// type base
export type Base = {
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  _type: string;
};

// author intrface inherits from base
export interface Author extends Base {
  name: string;
  image: Image;
  bio: Block[];
  facebook?: string;
  twitter?: string;
  linkedin?: string;
  instagram?: string;
  github?: string;
  email?: string;
  website?: string;
}

// category interface inherits from base
export interface Category extends Base {
  title: string;
  description: string;
}

// post interface inherits from base
export interface Post extends Base {
  title: string;
  description: string;
  slug: Slug;
  author: Author;
  category: Category;
  mainImage: Image;
  publishedAt: Date;
  readTime: number;
  body: Block[];
}

// block interface
export interface Block {
  _key: string;
  _type: 'block';
  children: Span[];
  markDefs: unknown[];
  style: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'blockquote';
}
// span interface
export interface Span {
  _key: string;
  _type: 'span';
  marks: string[];
  text: string;
}
