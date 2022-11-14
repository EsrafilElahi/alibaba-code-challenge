import React from 'react'
import Link from 'next/link';
import Image from 'next/image';


const CountryItem = (props) => {
  const { country } = props;

  console.log(country);

  const handleContainerDarkMode = 'text-lightModeText dark:text-darkModeText bg-white dark:bg-darkModeElement border-borderLight dark:border-borderDark'

  return (
    <Link href={`/${country?.alpha3Code}`} className='flex-[1_1_100%] md:flex-[1_1_40%] lg:flex-[1_1_20%]'>
      <div className={`rounded-2xl text-base transition-all duration-300 border-[.6em] border-solid ${handleContainerDarkMode}`}>
        <div className='w-full h-full'>
          <Image className='w-full h-full aspect-[4/3] object-cover rounded' src={country?.flag} alt={country?.name} width={100} height={100} />
        </div>
        <div className='flex flex-col p-5 rounded-lg'>
          <h2 className='font-nunito800 text-xl'>{country?.name}</h2>
          <div className='font-nunito600'>Population : <span className='text-gray font-nunito300'>{country?.population}</span></div>
          <div className='font-nunito600'>Region : <span className='text-gray font-nunito300'>{country?.region}</span></div>
          <div className='font-nunito600'>Capital : <span className='text-gray font-nunito300'>{country?.capital}</span></div>
        </div>
      </div>
    </Link>
  )
}

export default CountryItem