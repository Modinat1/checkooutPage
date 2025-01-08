import React from 'react';
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import { GoTrash } from "react-icons/go";

const CartDetails = ({ cart, setCart }) => {
  const handleQuantityChange = (id, delta) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const handleRemove = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <div className="cart-details">
      <table className="bg-white rounded-lg table-auto w-full border-collapse">
        <thead>
          <tr className="border-b border-gray-300">
            <th className="p-2">Product Image</th>
            <th className="p-2">Product Description</th>
            <th className="p-2">Product Actions</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id} className="hover:bg-[whitesmoke] border-b border-gray-200">
              {/* Product Image */}
              <td className="p-2 text-center">
                <div className='md:ml-5'>
                <img
                  className="w-20 h-20 object-cover"
                  src={item.img}
                  alt="product"
                />
                </div>
              </td>

              {/* Product Description */}
              <td className="p-2">
                <div className='ml-3 md:ml-36'>
                <h3 className="font-bold">{item.name}</h3>
                <p className="text-sm text-gray-600">Price: ${item.price}</p>

                <div className='md:flex items-center gap-2'>
                <small className='text-[#969696] text-[14px]'>Sold by <span className='underline capitalize'>{item.vendor}</span></small>
                <span className='hidden md:block'>|</span>
                <div onClick={() => handleRemove(item.id)} className='relative flex items-center text-[#969696] gap-x-1'>
                    <GoTrash className='cursor-pointer'/>
                    <small className='text-xs font-medium underline cursor-pointer'>Remove</small>
                </div>
                </div>
                </div>
              </td>

              {/* Product Actions */}
              <td className="flex justify-center items-start p-2">
           
                 <div className='inline-flex items-center rounded-xl border border-[#DEDEDE] gap-x-2 mt-5'>
                                    <div className='text-center px-2' style={{ borderRight: "1px solid #DEDEDE" }}>
                                        <GoPlus className='cursor-pointer' onClick={() => handleQuantityChange(item.id, 1)} />
                                    </div>
                                    <span className="font-medium">{item.quantity}</span>
                                    <div className='px-2' style={{ borderLeft: "1px solid #DEDEDE" }}>
                                        <FiMinus className='cursor-pointer' onClick={() => handleQuantityChange(item.id, -1)} />
                                    </div>
                                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CartDetails;
