import React from 'react'
import { FaFacebook, FaInstagram, FaPinterest, FaTwitterSquare } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-pink-100 text-pink-900 py-10'>
      <div className='max-w-7xl mx-auto px-4 md:flex md:justify-between'>
        
        {/* info */}
        <div className='mb-6 md:mb-0'>
          <h3 className='text-2xl font-bold text-pink-700'>HappyPie Cakery 🍰</h3>
          <p className='mt-2 text-sm'>Sweeten Your Day with Every Bite!</p>
          <p className='mt-2 text-sm'>456 Dessert Lane, Sweet City, CA 90210</p>
          <p className='text-sm'>Email: hello@happypie.com</p>
          <p className='text-sm'>Phone: (+880)0181234</p>
        </div>

        {/* customer service */}
        <div className='mb-6 md:mb-0'>
          <h3 className='text-xl font-semibold text-pink-700'>Customer Care</h3>
          <ul className='mt-2 text-sm space-y-2'>
            <li>Contact Us</li>
            <li>Delivery Info</li>
            <li>FAQs</li>
            <li>Order Status</li>
            <li>Allergen Info</li>
          </ul>
        </div>

        {/* social links */}
        <div className='mb-6 md:mb-0'>
          <h3 className='text-xl font-semibold text-pink-700'>Follow Us</h3>
          <div className='flex space-x-4 mt-2 text-pink-600 text-2xl'>
            <FaFacebook />
            <FaInstagram />
            <FaTwitterSquare />
            <FaPinterest />
          </div>
        </div>

        {/* newsletter */}
        <div>
          <h3 className='text-xl font-semibold text-pink-700'>Join the Pie Club 🧁</h3>
          <p className='mt-2 text-sm'>Get sweet deals, new cake drops & more!</p>
          <form className='mt-4 flex'>
            <input 
              type="email" 
              placeholder='Your email address' 
              className='w-full p-2 rounded-l-md bg-white text-pink-900 placeholder-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-400'
            />
            <button 
              type='submit' 
              className='bg-pink-600 text-white px-4 rounded-r-md hover:bg-pink-700 transition-all duration-200'>
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* bottom section */}
      <div className='mt-8 border-t border-pink-300 pt-6 text-center text-sm text-pink-800'>
        <p>&copy; {new Date().getFullYear()} <span className='text-pink-600 font-bold'>HappyPie Cakery</span>. All rights reserved 🍓</p>
      </div>
    </footer>
  )
}

export default Footer 
