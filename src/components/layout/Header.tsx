import Image from 'next/image';
import logo from '../../../public/logo.jpeg';
import iconCart from '../../../public/icon_cart.svg';
import Link from 'next/link';
import { useCart } from '~/hooks/useStore';
import { useRouter } from 'next/router';

const Header = () => {
  const { totalQuantity } = useCart();
  const router = useRouter();

  return (
    <header className='px-5 lg:px-20 py-5 bg-secondary grid grid-cols-[150px_1fr_50px] md:grid-cols-[150px_1fr_150px] gap-5'>
      {/* LOGO */}
      <Link href='/'>
        <Image src={logo} alt='hishabee logo' width={150} priority />
      </Link>

      {/* NAVBAR */}
      <ul className='flex-1 text-black text-lg uppercase flex justify-center items-center gap-5'>
        <li>
          <Link
            href='/'
            className={`hover:text-primary transition ${
              router.pathname === '/' ? 'text-primary' : ''
            }`}
          >
            home
          </Link>
        </li>
        <li>
          <Link
            href='/cart'
            className={`hover:text-primary transition ${
              router.pathname === '/cart' ? 'text-primary' : ''
            }`}
          >
            cart
          </Link>
        </li>
      </ul>

      {/* CART ICON */}
      <div className='flex justify-end'>
        <Link href={`/cart`} className='relative group'>
          <Image src={iconCart} alt='cart icon' width={30} />
          <div className='absolute -top-2 -right-2 bg-primary group-hover:bg-yellow transition duration-300 w-5 h-5 rounded-full flex justify-center items-center p-1  text-white text-xs'>
            {totalQuantity}
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
