'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import i18n from '@/i18n.config';
import getRedirectedPathName from '@/utils/getRedirectPathName';
import LocaleSwitcherProps from '@/types/Localeswitcher';

const LocaleSwitcher: React.FC<LocaleSwitcherProps> = ({
  locale: currentLocale,
}) => {
  const locales = i18n.locales;
  const pathName = usePathname();

  return (
    <ul
      aria-label="language switcher"
      className="text-[12px] uppercase md:flex xl:gap-3 xl:text-[24px]"
    >
      {locales.map(locale => (
        <li
          key={locale}
          className="flex h-[39px] w-[41px] items-center justify-center"
        >
          {locale === currentLocale ? (
            <span className="text-secondary cursor-default p-3 font-bold uppercase xl:p-0">
              {locale}
            </span>
          ) : (
            <Link
              href={getRedirectedPathName(locale, pathName)}
              className="hover:text-accent focus:text-accent p-3 font-normal uppercase transition-colors duration-300 xl:p-0"
            >
              {locale}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
};

export default LocaleSwitcher;
