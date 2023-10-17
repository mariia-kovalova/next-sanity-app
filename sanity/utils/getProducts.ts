import { groq } from 'next-sanity';
import client from '../config/client';
import Product from '@/types/Product';
import Locale from '@/types/Locale';

const getProducts = async (locale: Locale): Promise<Product[]> =>
  client.fetch(
    groq`*[_type == "product"]{
      _id,
      _createdAt,
      "name": name.${locale},
      "slug": slug.current,
       "image": {
        "alt":image.alt, 
        "url": image.asset->url
      }
    }`,
  );

export default getProducts;
