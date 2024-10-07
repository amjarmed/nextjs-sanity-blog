import { ThemeProvider } from '@/components/theme-provider';
import type { Metadata } from 'next';
import { Noto_Kufi_Arabic } from 'next/font/google';
import './globals.css';

const font = Noto_Kufi_Arabic({
  subsets: ['arabic']
});

export const metadata: Metadata = {
  title: 'amjarmed- blog',
  description: 'personal blog about web development and programming'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ar' className='scroll-smooth'>
      <body className={`${font.className}  antialiased`}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
