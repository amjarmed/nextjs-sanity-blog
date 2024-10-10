//  rich text component

import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';

export const richTextComponents = {
  types: {
    image: ({ value }: any) => (
      <Image
        className='rounded-lg shadow-sm mx-h-96'
        src={urlFor(value).url()}
        width={720}
        height={440}
        alt={value.alt || 'image'}
      />
    )
  }
};
