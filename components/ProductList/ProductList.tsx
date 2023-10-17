import getProducts from '@/sanity/utils/getProducts';
import ProductItem from '../PruductItem/ProductItem';
import ProductsListProps from '@/types/ProductList';

const ProductList: React.FC<ProductsListProps> = async ({ locale }) => {
  const products = await getProducts(locale);

  return (
    <ul className="flex flex-wrap items-center justify-center gap-3">
      {products.map(product => (
        <li key={product._id}>
          <ProductItem {...product} />
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
