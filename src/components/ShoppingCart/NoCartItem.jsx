import React from 'react'
import cartImg from '../../assets/cartImg.png'
import Btn from '../Btn'
// import Btn from '@/components/utils/Buttons/Btn'
import { Link } from 'react-router-dom'
// import RecommendedVendor from '../ProductPage/RecommendedVendor'

const NoCartItem = () => {
  return (
    <section>
    <div className='flex items-center justify-center mt-20'>

        <div className='text-center leading-8'>
        <img className='mx-auto' src={cartImg} alt="no item in cart" />
        <h3 className='font-semibold text-[#190F00] my-3'>Your shopping cart is empty</h3>
        <p className='text-[#969696]'>Browse our categories and discover our best deals!</p>
        <Link to="/home/products/all"><Btn text={"Explore product"} className={"bg-[#7132A5] text-[#FFFFFF] rounded-3xl px-5 mx-auto mt-3"}/></Link>
        </div>

    </div>

    {/* <RecommendedVendor/> */}
    </section>
  )
}

export default NoCartItem