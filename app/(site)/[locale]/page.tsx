import ProductList from '@/components/ProductList/ProductList';
import Locale from '@/types/Locale';

export default function Home({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  return (
    <main>
      <ProductList locale={locale} />
    </main>
  );
}
