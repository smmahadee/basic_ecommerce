import Head from 'next/head';
import Header from '~/components/layout/Header';
import { SITE_URL } from '~/utils/constants';
import Products from '~/components/products/Products';
import ProductOperations from '~/components/products/ProductOperations';
import { useCart } from '~/hooks/useStore';

const HomePage = () => {
  return (
    <>
      <Head>
        <title>{`${SITE_URL} - HOME`}</title>
      </Head>
      <Header />
      <main className='px-5 md:px-20 pb-20'>
        <ProductOperations />
        <Products />
      </main>
    </>
  );
};

export default HomePage;
