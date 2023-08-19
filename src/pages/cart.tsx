import Head from 'next/head';
import React from 'react';
import Cart from '~/components/cart/Cart';
import OrderSummary from '~/components/cart/OrderSummary';
import Header from '~/components/layout/Header';
import { useCart } from '~/hooks/useStore';
import { SITE_URL } from '~/utils/constants';
import { BsArrowRight } from 'react-icons/bs';
import Link from 'next/link';

const CartPage = () => {
  const { totalQuantity } = useCart();

  return (
    <>
      <Head>
        <title>{`${SITE_URL} - CART`}</title>
      </Head>
      <Header />

      {totalQuantity ? (
        <main className='p-5 md:p-20 grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-16'>
         
          <Cart />
          <OrderSummary />
        </main>
      ) : (
        <div className='flex  flex-col items-center'>
          <h2 className='text-2xl uppercase  mt-20 mb-10'>
            No Cart Item Found
          </h2>
          <Link
            href='/'
            className='bg-grey-300 hover:bg-secondary transition px-4 py-2 flex justify-center items-center gap-2'
          >
            Go To Products Page <BsArrowRight />
          </Link>
        </div>
      )}
    </>
  );
};

export default CartPage;
