import Table from '@/components/utils/global/Table';
import React, { useState, useEffect } from 'react';
import { CiHeart } from "react-icons/ci";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import { useDispatch, useSelector } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeProductFromCart } from '@/Redux/features/ProductSlice';
import { addToWishlist } from '@/Redux/features/WishListSlice';
import Btn from '@/components/utils/Buttons/Btn';
import { Link } from 'react-router-dom';
import trash from '../../assets/trash.svg';

export const CartItemTable = () => {
      const [showSuccess, setShowSuccess] = useState({});
    const [showRemoveNotification, setShowRemoveNotification] = useState({});

    const dispatch = useDispatch();

    const cartItems = useSelector(state => state.product.cartItems);
    // console.log(cartItems);
    

    const handleIncrement = (item) => {
        dispatch(incrementQuantity({ id: item.id }));
    };

 const handleDecrement = (item) => {
  dispatch(decrementQuantity({ id: item.id }));
};


    const handleAddToWishlist = (item) => {
        dispatch(addToWishlist(item));
        setShowSuccess(prevState => ({ ...prevState, [item.id]: true }));
        setTimeout(() => {
            setShowSuccess(prevState => ({ ...prevState, [item.id]: false }));
        }, 2000);
    };

    const handleRemoveFromCart = (item) => {
  setShowRemoveNotification(prevState => ({ ...prevState, [item.id]: true }));

  setTimeout(() => {
    dispatch(removeProductFromCart(item.id)); 

    setShowRemoveNotification(prevState => ({ ...prevState, [item.id]: false }));
  }, 2000);
};

const tableHeadData = [
        {
            title: 'Item details',
            key: 'item_details',
        },
        {
            title: 'Quantity',
            key: 'quantity',
        },
        {
            title: 'Price',
            key: 'price',
        },
    ];

    const pageSize = 2;
    const hasData = tableHeadData?.length > 0;
    const hasPagination = hasData && tableHeadData?.length > pageSize;
    const paginationData = hasPagination
        ? {
            page: 1,
            total: Math.ceil(tableHeadData?.length / pageSize),
            limit: pageSize,
        }
        : null;

  return (
    <div>
      <Table
                data={cartItems}
                className=""
                paginationData={paginationData}
                hasPagination={hasPagination}
                loaderLength={10}
                tableHeadData={tableHeadData}
                rowComponent={(item) => {
                    const { images, id, quantity, price, description, vendor_name } = item;
                    return (
                        <tr className="border-b text-sm border-[#F4F4F4] text-black-1">
                    
                           <td className='flex items-start my-3 gap-x-5 pl-5 relative'>
                                   
                                <div className='w-20'>
                                    {images && images?.length > 0 && (
                                        <img className='w-full' src={images[0]} alt={description} />
                                    )}
                                </div>
                                <div>
                                        {showRemoveNotification[id] && 
                                         (
                                         <div className='absolute top-0 right-0 bg-[#7132A5] text-[#ffffff] text-sm font-medium p-2 rounded-lg z-50 shadow-md'>
                                            Product removed from cart
                                        </div>
                                        )}
                                    <p className='text-sm font-medium'>{description}</p>
                                    <small className='text-[#969696] text-[14px]'>Sold by <span className='underline'>{vendor_name}</span></small>
                                    
                                      <div className="flex items-center mt-2 gap-x-1">

                                      <div onClick={()=>handleAddToWishlist(item)} className='relative flex items-center text-[#969696] gap-x-1'>
                                            <CiHeart color='#969696' className='cursor-pointer' />
                                            <small className='text-xs font-medium underline cursor-pointer'>Add to Wishlist</small>
                                            {showSuccess[id] && <MessageDiv message="Product added to wishlist" />}
                                        </div>
                                        
                                         <span className='text-[#969696]'>|</span>

                                         <div onClick={() => handleRemoveFromCart(item)} className='relative flex items-center text-[#969696] gap-x-1'>
                                            <img src={trash} alt="trash cursor-pointer" />
                                            <small className='text-xs font-medium underline cursor-pointer'>Remove</small>
                                        </div>

                                        </div>
                                </div>
                            </td>
              <td>
                                <div className='inline-flex items-center rounded-xl border border-[#DEDEDE] gap-x-2'>
                                    <div className='text-center px-2' style={{ borderRight: "1px solid #DEDEDE" }}>
                                        <GoPlus className='cursor-pointer' onClick={() => handleIncrement(item)} />
                                    </div>
                                    <p className='text-center px-2'>{quantity}</p>
                                    <div className='px-2' style={{ borderLeft: "1px solid #DEDEDE" }}>
                                        <FiMinus className='cursor-pointer' onClick={() => handleDecrement(item)} />
                                    </div>
                                </div>
                            </td>
                            <td>
                                <h3 className='text-[#001128] text-md font-semibold'>₦{price}</h3>
                                <div className="flex gap-x-2 text-[#969696] text-sm font-medium">
                                    <span>₦{price}</span>
                                    <span>x</span>
                                    <span>{quantity}</span>
                                    <span>item(s)</span>
                                </div>
                            </td>
                </tr>
                    );
                }}
            />
    </div>
  )
}

export default CartItemTable

const MessageDiv = ({ message }) => {
    return (
        <div className='absolute -left-24 -top-2 z-10 bg-[#001128] text-center rounded-lg py-4 px-3'>
            <h2 className='text-[#ffffff] font-medium text-sm'>{message}</h2>
            <Link to='/home/wishlist'>
                <Btn
                    text={"Go to wishlist"}
                    className={"bg-[#7132A5] mx-auto mt-3 text-[#ffffff] px-6"}
                />
            </Link>
        </div>
    );
};

