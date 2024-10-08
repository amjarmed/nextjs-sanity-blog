import Link from 'next/link';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className='py-4 border-t'>
      <div className='container flex justify-evenly space-x-3'>
        <Link href='/privacy-policy' className='text-sm'>
          سياسة الخصوصية
        </Link>
        <Link href='/terms-of-service' className='text-sm'>
          شروط الخدمة
        </Link>
        <Link href='https://www.amjarmed.com/' className='text-sm'>
          www.amjarmed.com
        </Link>
        <p className='text-sm'>© {currentYear} - جميع الحقوق محفوظة</p>
      </div>
    </footer>
  );
}

export default Footer;
