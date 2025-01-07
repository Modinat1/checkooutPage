// import React from 'react'


// const CartDetails = ({cart, setCart}) => {
   
//       const handleQuantityChange = (id, delta) => {
//         setCart((prevCart) =>
//           prevCart.map((item) =>
//             item.id === id
//               ? { ...item, quantity: Math.max(1, item.quantity + delta) }
//               : item
//           )
//         );
//       };
    
//       const handleRemove = (id) => {
//         setCart((prevCart) => prevCart.filter((item) => item.id !== id));
//       };
    
      
//   return (
//     <div className="">
//     {cart.map((item) => (
//       <div key={item.id} className="product bg-[#ffffff] p-4 rounded-lg mb-3 flex items-center gap-3">
//         <div className="w-40">
//           <img className="w-full" src={item.img} alt="product image"/>
//         </div>

//         <div>
//         <div className="product-details">
//           <h3>{item.name}</h3>
//           <p>Price: ${item.price}</p>
//         </div>

//       </div>

//       <div className="product-actions">
//           <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
//           <span>{item.quantity}</span>
//           <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
//           <button className="remove-btn" onClick={() => handleRemove(item.id)}>
//             Remove
//           </button>
//         </div>
//       </div>
//     ))}
//   </div>
//   )
// }

// export default CartDetails

import React from 'react';

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
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr className="">
            <th className="border border-gray-300 p-2">Product Image</th>
            <th className="border border-gray-300 p-2">Product Description</th>
            <th className="border border-gray-300 p-2">Product Actions</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id} className="bg-white hover:bg-gray-100">
              {/* Product Image */}
              <td className="p-2 text-center">
                <img
                  className="w-20 h-20 object-cover"
                  src={item.img}
                  alt="product"
                />
              </td>

              {/* Product Description */}
              <td className=" p-2">
                <h3 className="font-bold">{item.name}</h3>
                <p className="text-sm text-gray-600">Price: ${item.price}</p>
              </td>

              {/* Product Actions */}
              <td className="flex justify-end gap-10 items-center p-2">
                <div className="flex items-center gap-2 justify-center">
                  <button
                    className="px-2 py-1 bg-gray-300 rounded"
                    onClick={() => handleQuantityChange(item.id, -1)}
                  >
                    -
                  </button>
                  <span className="font-medium">{item.quantity}</span>
                  <button
                    className="px-2 py-1 bg-gray-300 rounded"
                    onClick={() => handleQuantityChange(item.id, 1)}
                  >
                    +
                  </button>
                </div>
                <button
                  className="mt-2 px-4 py-1 bg-[#ff4d4dbc] text-white rounded"
                  onClick={() => handleRemove(item.id)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CartDetails;
