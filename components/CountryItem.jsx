import React from 'react'
import Link from 'next/link';

const CountryItem = (props) => {
  const { country } = props;

  console.log(country);

  return (
    <Link href="/" className='flex-[1_1_100%] lg:flex-[1_1_20%]'>
      <div className="rounded-lg text-lightModeText shadow-2xl dark:text-darkModeText bg-white dark:bg-darkModeElement p-3 transition-all duration-300">
        <div className='w-full h-full'>
          <img className='w-full h-full aspect-[4/3] object-cover rounded' src={country?.flag} alt={country?.name} />
        </div>
        <div className='flex flex-col p-5'>
          <h2 className='font-nunito800'>{country?.name}</h2>
          <div className='font-nunito600'>Population : <span className='text-gray font-nunito300'>{country?.population}</span></div>
          <div className='font-nunito600'>Region : <span className='text-gray font-nunito300'>{country?.region}</span></div>
          <div className='font-nunito600'>Capital : <span className='text-gray font-nunito300'>{country?.capital}</span></div>
        </div>
      </div>
    </Link>
  )
}

export default CountryItem