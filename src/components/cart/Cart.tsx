import { useCart } from '~/hooks/useStore';
import Table from '../ui/Table';
import CartRow from './CartRow';
import { useDispatch } from 'react-redux';
import { removeAllProduct } from '~/features/cart/cartSlice';

const JobStatusTable = () => {
  const { cartItems } = useCart();
  const dispatch = useDispatch();

  return (
    <section>
      <Table columns='1fr 100px 130px 100px 40px'>
        <Table.Header className='py-4 px-3 border-b border-grey-100 '>
          <div className=''>Products</div>
          <div>Price</div>
          <div>Quantity</div>
          <div>Total</div>
          <div>Action</div>
        </Table.Header>

        <Table.Body
          data={cartItems}
          render={(item, i) => <CartRow key={i} item={item} />}
        />
      </Table>
      <button
        className='px-4 py-2 mt-5 bg-primary hover:bg-yellow transition duration-300 uppercase text-white'
        onClick={() => dispatch(removeAllProduct())}
      >
        empty cart
      </button>
    </section>
  );
};

export default JobStatusTable;
