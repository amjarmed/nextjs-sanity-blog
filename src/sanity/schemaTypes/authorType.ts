import { UserIcon } from '@sanity/icons';
import { defineArrayMember, defineField, defineType } from 'sanity';

export const authorType = defineType({
  name: 'author',
  title: 'Author',
  type: 'document',
  icon: UserIcon,
  fields: [
    defineField({
      name: 'name',
      type: 'string'
    }),
    defineField({
      name: 'image',
      type: 'image',
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: 'bio',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
          styles: [{ title: 'Normal', value: 'normal' }],
          lists: []
        })
      ]
    }),
    defineField({
      name: 'facebook',
      type: 'url',
      title: 'Facebook URL'
    }),
    defineField({
      name: 'twitter',
      type: 'url',
      title: 'Twitter URL'
    }),
    defineField({
      name: 'instagram',
      type: 'url',
      title: 'Instagram URL'
    }),
    defineField({
      name: 'linkedin',
      type: 'url',
      title: 'LinkedIn URL'
    }),
    defineField({
      name: 'youtube',
      type: 'url',
      title: 'YouTube URL'
    })
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image'
    }
  }
});
