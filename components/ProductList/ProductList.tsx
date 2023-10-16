import getProducts from '@/sanity/utils/getProducts';
import ProductItem from '../PruductItem/ProductItem';

const ProductList = async () => {
  const products = await getProducts();

  return (
    <ul className="flex gap-3">
      {products.map(product => (
        <li key={product._id}>
          <ProductItem {...product} />
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
