import useProducts from '~/hooks/useProducts';
import Product from './Product';
import { ProductTypes } from '../types/ProductTypes';
import ProductsSkeleton from '../ui/ProductsSkeleton';

const Products = () => {
  const { products, isLoading } = useProducts();

  if (isLoading) {
    return <ProductsSkeleton />;
  }

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-10 gap-y-14'>
      {products?.length > 0 &&
        products?.map((product: ProductTypes, i: string) => (
          <Product key={i} product={product} />
        ))}
    </div>
  );
};

export default Products;
