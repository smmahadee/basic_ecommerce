import Image from 'next/image';
import React from 'react';
import ProductReviews from './ProductReviews';
import Link from 'next/link';
import { ProductTypes } from '../types/ProductTypes';
import { formatCurrency } from '../../utils/helper';
import { useDispatch } from 'react-redux';
import { addProduct, removeProduct } from '~/features/cart/cartSlice';
import { useCart } from '~/hooks/useStore';

interface ProductsProps {
  product: ProductTypes;
}

const Product = ({ product }: ProductsProps) => {
  const dispatch = useDispatch();
  const { cartItems } = useCart();

  const isProductExistInCart = cartItems?.find(item => item.id === product.id);

  return (
    <div className='text-black hover:shadow-2xl transition duration-500 flex flex-col'>
      <Link href={`/${product.id}`}>
        <div className='relative h-[245px] group'>
          <Image
            className='object-contain'
            src={product?.image}
            alt=''
            fill
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            priority
          />
          <div className='absolute left-0 right-0 bottom-0 top-0 bg-black/50 invisible opacity-0 group-hover:visible  group-hover:opacity-80 flex justify-center items-center text-white uppercase transition duration-500'>
            Go To Details
          </div>
        </div>
      </Link>
      <div className='flex-1 flex flex-col'>
        <h2 className='flex-1 px-2 py-3 font-light leading-5'>
          {product?.title}
        </h2>
        <div className='px-2 flex justify-between items-center'>
          <h4 className='font-medium'>{formatCurrency(product?.price)}</h4>
          <div className='flex gap-1.5 items-center'>
            <ProductReviews rating={product?.rating?.rate} />
            <span>({product?.rating?.count})</span>
          </div>
        </div>
        {!isProductExistInCart ? (
          <button
            className='w-full bg-primary hover:bg-yellow transition duration-300 text-white uppercase py-2 text-center mt-5'
            onClick={() => dispatch(addProduct(product))}
          >
            add to cart
          </button>
        ) : (
          <button
            className='w-full bg-primary hover:bg-yellow transition duration-300  uppercase py-2 text-center mt-5 text-danger'
            onClick={() => dispatch(removeProduct(product.id))}
          >
            remove item
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
