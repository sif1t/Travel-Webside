import React from 'react'
import {BiSearch} from 'react-icons/bi'
import {VscAccount} from 'react-icons/vsc'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {FaFacebook, FaTwitter, FaPinterest, FaInstagram, FaYoutube} from'react-icons/fa'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center h-20 px-4'>
       <div>
          <h1>BEACHES.</h1>
       </div>
       <ul className='hidden md:flex'>
         <li>Home</li>
         <li>Destinations</li>
         <li>Travel</li>
         <li>View</li>
         <li>Book</li>
       </ul>
       <div className='hidden md:flex'>
        <VscAccount size={20}/>
        < BiSearch size={20}/>
       </div>

     {/* hamburger  */}
       <div className=' md:hidden'>
         <HiOutlineMenuAlt4 size={20}/>
       </div>

       {/* mobile menu dropdown  */}
       <div className=' absolute left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col'>
         <ul>
            <h1>BEACHSE.</h1>
         <li>Home</li>
         <li>Destinations</li>
         <li>Travel</li>
         <li>View</li>
         <li>Book</li>
         <div>
             <button>Search</button>
             <button>Account</button>
         </div>
         <div>
            <FaFacebook className='icon' />
            <FaTwitter  className='icon'/>
            <FaYoutube className='icon' />
            <FaPinterest className='icon' />
            <FaInstagram  className='icon'/>
         </div>
         </ul>
       </div>
    </div>
  )
}

export default Navbar
