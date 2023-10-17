import Image from 'next/image';
import Product from '@/types/Product';

const ProductItem: React.FC<Product> = ({ image, name }) => (
  <div>
    <div className="h-[200px] w-full overflow-hidden rounded-lg border border-gray-500">
      <Image
        src={image.url}
        alt={image.alt}
        width={350}
        height={200}
        className="h-full w-full object-cover object-center"
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
      />
    </div>
    <p className="mt-4">{name}</p>
  </div>
);

export default ProductItem;
