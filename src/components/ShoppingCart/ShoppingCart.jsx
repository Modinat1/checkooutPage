import React from 'react';
import OrderSummary from './OrderSummary';
import NoCartItem from './NoCartItem';
import { useSelector } from 'react-redux';
import CartItemTable from './CartItemTable';

const ShoppingCart = () => {    
    const cartItems = useSelector(state => state.product.cartItems);
  return (
    <section className='container'>
      {/* <Breadcrumbs product="Shopping cart" /> */}
    {cartItems.length === 0 ? <NoCartItem/> :
      <article className='md:grid grid-cols-3 items-start gap-5'>
        <div className='col-span-2 rounded-2xl shadow-2xl shadow-[#f4f4f4]'>
          <CartItemTable/>
        </div>

        <div className='col-span-1 rounded-2xl shadow-2xl shadow-[#f4f4f4]'>
          <OrderSummary/>
        </div>
      </article>
}
    </section>
  );
};

export default ShoppingCart;


