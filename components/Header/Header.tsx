import Link from 'next/link';
import getDictionary from '@/utils/getDictionary';
import HeaderProps from '@/types/Header';
import LocaleSwitcher from '../LocaleSwitcher/LocaleSwitcher';

const Header: React.FC<HeaderProps> = async ({ locale }) => {
  const { logo } = await getDictionary(locale);

  return (
    <header className="flex items-center justify-between">
      <Link
        href="/"
        className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-lg font-bold text-transparent"
      >
        {logo}
      </Link>
      <LocaleSwitcher locale={locale} />
    </header>
  );
};

export default Header;
