import Head from 'next/head';
import Header from '~/components/layout/Header';
import { SITE_URL } from '~/utils/constants';
import Image from 'next/image';
import ProductReviews from '~/components/products/ProductReviews';
import img from '../../public/img.png';
import { useRouter } from 'next/router';
import useProduct from '~/hooks/useProduct';
import { formatCurrency } from '~/utils/helper';
import { useCart } from '~/hooks/useStore';
import { useDispatch } from 'react-redux';
import { addProduct, removeProduct } from '~/features/cart/cartSlice';
import ProductSkeleton from '~/components/ui/ProductSkeleton';
import Link from 'next/link';

const ProductPage = () => {
  const { id } = useRouter().query;
  const { cartItems } = useCart();
  const dispatch = useDispatch();

  const { product, isLoading } = useProduct(+id!);

  if (isLoading) {
    return <ProductSkeleton />;
  }

  const isProductExistInCart = cartItems?.find(item => item.id === product.id);

  return (
    <>
      <Head>
        <title>{`${SITE_URL} - PRODUCTS`}</title>
      </Head>
      <Header />
      <main className='p-5 md:p-20 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 text-black'>
        <div className='relative h-[690px]'>
          <Image
            className='object-contain'
            src={product?.image}
            alt=''
            fill
            priority
            sizes='(max-width: 768px) 100vw,  50vw'
          />
        </div>
        <div>
          <h2 className='py-3 text-2xl text-grey-500 mb-5 leading-normal'>
            {product?.title}
          </h2>
          <h4 className='font-medium mb-3'>{formatCurrency(product?.price)}</h4>
          <div className='flex gap-2 items-center'>
            <ProductReviews rating={product?.rating?.rate} />
            <p className='text-blue font-light text-sm'>
              {product?.rating?.count} Reviews
            </p>
          </div>

          <p className='text-grey-400 my-5'>{product?.description}</p>

          {!isProductExistInCart ? (
            <button
              className='px-4 bg-primary hover:bg-yellow transitio duration-300 text-white uppercase py-2 text-center mt-5'
              onClick={() => dispatch(addProduct(product))}
            >
              add to cart
            </button>
          ) : (
            <button
              className='px-4 bg-primary  hover:bg-yellow transitio duration-300 text-white uppercase py-2 text-center mt-5'
              onClick={() => dispatch(removeProduct(product.id))}
            >
              remove item
            </button>
          )}

          <Link
            href='/'
            className='px-4 ml-4 bg-primary hover:bg-yellow transitio duration-300 text-white uppercase py-[11.5px] text-center mt-5'
          >
            Go Back
          </Link>
        </div>
      </main>
    </>
  );
};

export default ProductPage;
