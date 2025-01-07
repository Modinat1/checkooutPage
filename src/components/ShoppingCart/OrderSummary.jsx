import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
import Btn from '../Btn';
// import Btn from '@/components/utils/Buttons/Btn';
// import paypal from '@/assets/footer/paypal.png';
// import stripe from '@/assets/footer/stripe.png';
// import skrill from '@/assets/footer/skrill.png';
// import gPay from '@/assets/footer/gpay.png';
// import applePay from '@/assets/footer/applepay.png';
// import verve from '@/assets/footer/mastercard.png';
// import visa from '@/assets/footer/visa.png';
// import payoneer from '@/assets/footer/payoneer.png';
import { Link } from 'react-router-dom';
// import DefaultModal from '@/components/utils/Modal';
// import PaymentModal from '../Checkout/PaymentModal';
// import PaymentMethods from '../Checkout/PaymentMethods';

const OrderSummary = () => {
// const OrderSummary = ({ deliveryfee, checkout }) => {
    // const [openPaymentModal, setOpenPaymentModal] = useState(false);
    // const cartItems = useSelector(state => state.product.cartItems) || [];
    // const selectedPaymentOption = useSelector(state => state.payment.selectedPaymentOption);

    // const togglePaymentModal = () => {
    //     setOpenPaymentModal(!openPaymentModal);
    // };

    // const subtotal = cartItems?.reduce((acc, item) => {
    //     const productPrice = parseFloat(item?.price) || 0;
    //     const quantity = parseInt(item?.quantity, 10) || 0;
    //     return acc + (productPrice * quantity);
    // }, 0);

    // const paymentOptions = [
    //     { id: 1, img: paypal, title: "paypal" },
    //     { id: 2, img: stripe, title: "stripe" },
    //     { id: 3, img: skrill, title: "skrill" },
    //     { id: 4, img: gPay, title: "google pay" },
    //     { id: 5, img: applePay, title: "apple pay" },
    //     { id: 6, img: verve, title: "verve" },
    //     { id: 7, img: visa, title: "visa" },
    //     { id: 8, img: payoneer, title: "payoneer" },
    // ];

    return (
        <div className='relative'>
            <div className='bg-white rounded-2xl mt-2 p-3 shadow'>
            <div className='absolute top-0 left-0 w-full h-2 bg-[#FF9E05] rounded-t-3xl'></div>
                    {/* <PaymentMethods/> */}
                <h3 className='text-[#001128] text-md font-[600] my-5'>Order Summary</h3>
                
                    <div>
                        <li className='flex justify-between items-center'>
                            <h3 className='text-[#969696] text-sm'>Items ({cartItems?.length})</h3>
                            <h3 className='font-semibold text-[#001128]'>
                                ₦{subtotal.toLocaleString()}
                            </h3>
                        </li>
                        {deliveryfee &&
                            <li className='flex justify-between items-center mt-3'>
                                <h3 className='text-[#969696] text-sm'>Delivery fee</h3>
                                <h3 className='font-semibold text-[#001128]'>
                                    ₦1,400
                                </h3>
                            </li>
                        }
                        <li className='flex justify-between items-center mt-3'>
                            <h3 className='text-[#969696] text-sm'>Subtotal</h3>
                            <h3 className='font-semibold text-[#001128]'>
                                ₦{subtotal.toLocaleString()}
                            </h3>
                        </li>
                        <hr className="my-3" />
                    </div>
                    {/* {checkout &&
                        <div className='text-[#969696] font-normal text-center text-xs my-3'>
                            <p> By placing your order, you agree to Palparcel's User</p>
                            <p><Link to='#' className='underline'>agreement opens</Link> and <Link to='#' className='underline'>privacy notice</Link></p>
                        </div>
                    }
                    {!checkout &&
                        <Link to="/home/checkout">
                            <Btn text="Continue to checkout" className="bg-[#7132A5] mt-5 w-full text-[#ffffff] rounded-3xl" />
                        </Link>
                    }
                    {checkout &&
                        <Link to="#">
                            <Btn onClick={togglePaymentModal} text="Continue to payment" className="bg-[#7132A5] mt-5 w-full text-[#ffffff] rounded-3xl" />
                        </Link>
                    } */}
                
                {/* <div className="text-center -scroll-mt-3 mb-5">
                    <h3 className='text-md font-semibold text-[#001128]'>We accept</h3>
                    <div className='flex items-center justify-between'>
                        {paymentOptions.map((payment) => (
                            <div className='my-2' key={payment.id}>
                                <img className='w-12' src={payment.img} alt={payment.title} />
                            </div>
                        ))}
                    </div>
                    <h3 className='text-sm text-[#969696] font-normal'>Transactions are 100% safe</h3>
                </div> */}
                {/* <DefaultModal subheading subtitle={selectedPaymentOption.option} closeModal={togglePaymentModal} visibilityState={openPaymentModal}>
                    <PaymentModal selectedOption={selectedPaymentOption.option} closeModal={togglePaymentModal} />
                </DefaultModal> */}
            </div>
        </div>
    );
};

export default OrderSummary;

