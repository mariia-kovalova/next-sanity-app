import { groq } from 'next-sanity';
import Product from '@/types/Product';
import client from '../config/client';

const getProducts = async (): Promise<Product[]> => {
  return client.fetch(
    groq`*[_type == "product"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url
    }`,
  );
};

export default getProducts;
