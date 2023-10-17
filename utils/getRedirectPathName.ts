import Locale from '@/types/Locale';

const getRedirectedPathName = (
  locale: Locale,
  pathName: undefined | string,
) => {
  if (!pathName) return '/';

  const segments = pathName.split('/');

  segments[1] = locale;

  return segments.join('/');
};

export default getRedirectedPathName;
