import React from 'react'
import {BsHeadphones} from 'react-icons/bs';
import {MdOutlineTravelExplore} from 'react-icons/md';
function Search() {
  return (
    <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-3 px-4 py-16'>
      <div className=' lg:col-span-2 flex flex-col justify-evenly'>
        <div>
          <h2>LUXURY INCLUDED VACATIONS FOR TWO PEOPLE</h2>
          <p className='py-4'> Come experience the very pinnacle of luxury Caribbean all-inclusive
            vacations for couples at BEACHES Resorts. Our luxury beach resorts,
            set along the most gorgeous tropical settings and exquisite beaches
            in Saint Lucia, Jamaica, Antigua, The Bahamas, Grenada, Barbados and
            Curaçao, feature unlimited gourmet dining, unique bars serving
            premium liquors and wines, and every land and water sport, including
            complimentary green fees at our golf resorts and certified scuba
            diving at most resorts. If you are planning a wedding, BEACHES is
            the leader in Caribbean destination weddings and honeymoon packages.
            </p>
        </div>
         <div className='grid sm:grid-cols-2 gap-8 py-4'>
          <div className='flex flex-col lg:flex-row items-center text-center'>
            <button>
              <BsHeadphones size={50}/>
              </button>
              <div>
                <h1 className='py-2'>LEADING SERVICE</h1>
                <p className='py-1'>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
              </div>
              </div>
          <div className='flex flex-col lg:flex-row items-center text-center'>
            <button>
              <MdOutlineTravelExplore size={50}/>
               </button>
               <div>
                <h1 className='py-2'>LEADING SERVICE</h1>
                <p className='py-1'>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
               </div>
              </div>
         </div>
      </div>
      <div className='border text-center'>
        <p className='pt-2'>GET AN ADDITIONAL 20% OFF</p>
        <p className='py-4'>24 HOURS LEFT</p>
        <p className='bg-gray-700 text-gray-200 py-2'>BOOK NOW</p>
      </div>
       
    </div>
  )
}

export default Search
