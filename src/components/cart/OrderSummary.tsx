import React from 'react';
import { useCart } from '~/hooks/useStore';
import { formatCurrency } from '~/utils/helper';

const OrderSummary = () => {
  const { totalAmount } = useCart();

  return (
    <section className='uppercase text-[#171717] '>
      <h2 className='text-lg  border-b border-grey-100 py-3'>Order summary</h2>

      <div className='flex justify-between items-center pt-5'>
        <h3 className='font-medium '>total amount</h3>
        <h4>{formatCurrency(totalAmount)}</h4>
      </div>
    </section>
  );
};

export default OrderSummary;
