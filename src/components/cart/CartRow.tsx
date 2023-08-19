import React from 'react';
import { BiMinus, BiPlus } from 'react-icons/bi';
import { BsTrash } from 'react-icons/bs';
import Table from '../ui/Table';
import Image from 'next/image';
import img from '../../../public/img.png';
import { useDispatch } from 'react-redux';
import {
  addProduct,
  removeProduct,
  removeSingleProduct,
} from '~/features/cart/cartSlice';
import { formatCurrency } from '~/utils/helper';

interface Item {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  quantity: number;
}

interface CartProps {
  item: Item;
}

const CartRow: React.FC<CartProps> = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <Table.Row >
      <div className='flex gap-3 items-center'>
        <div className='relative h-[100px] w-[80px]'>
          <Image className='object-cover' src={img} alt={item.title} fill />
        </div>
        <h2 className='text-grey-500'>{item.title}</h2>
      </div>
      <div>
        <h4 className='font-medium mb-3'>{formatCurrency(item.price)}</h4>
      </div>
      <div>
        <div className='w-[125px] h-[48px] flex gap-3 justify-between px-2 items-center border'>
          <button
            className='p-2'
            onClick={() => dispatch(removeProduct(item.id))}
          >
            <BiMinus className='hover:text-primary transition' />
          </button>
          <p>{item.quantity}</p>
          <button className='p-2' onClick={() => dispatch(addProduct(item))}>
            <BiPlus className='hover:text-primary transition' />
          </button>
        </div>
      </div>
      <div>
        <h4 className='font-medium mb-3'>
          {formatCurrency(item.quantity * item.price)}
        </h4>
      </div>
      <div>
        <button
          className='p-2'
          onClick={() => dispatch(removeSingleProduct(item.id))}
        >
          <BsTrash className='hover:text-primary transition' />
        </button>
      </div>
    </Table.Row>
  );
};

export default CartRow;
