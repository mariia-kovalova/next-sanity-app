type Product = {
  _id: string;
  createdAt: Date;
  name: string;
  slug: string;
  image: {
    alt: string;
    url: string;
  };
};

export default Product;
