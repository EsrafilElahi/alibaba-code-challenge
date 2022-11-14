import React, { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import axios from 'axios';
import { BsArrowLeft } from "react-icons/bs";
import { useRouter } from 'next/router';
import Image from 'next/image';


export const getStaticPaths = async () => {
  const res = await axios.get("https://restcountries.com/v2/all/");
  const countries = await res.data;

  const paths = countries.map((country) => ({
    params: { countryCode: country.alpha3Code },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const countryCode = context.params.countryCode
  const res = await axios.get(`https://restcountries.com/v2/alpha/${countryCode}`);
  const country = await res.data

  return {
    props: { country }
  }
}


const CountryDetail = ({ country }) => {
  const router = useRouter();

  console.log('country : ', country)
  console.log(router.query.countryCode)

  const handleContainerDarkMode = 'text-lightModeText dark:text-darkModeText bg-lightModeBG dark:bg-darkModeBG'
  const countriesBorderDarkMode = 'border-borderLight2 dark:border-borderDark2 bg-lightModeBG dark:bg-darkModeElement'
  const handleBackButtonDarkMode = 'shadow-[0px_1px_10px_-3px] dark:shadow-[0px_1px_5px_6px_#1a2632]'

  return (
    <div className={`w-full h-full text-lg px-7 md:px-20 ${handleContainerDarkMode}`}>
      <div className='flex py-20'>
        <div className={`flex justify-center items-center py-1 px-9 cursor-pointer rounded-md gap-2 ${handleBackButtonDarkMode}`} onClick={() => router.back()}>
          <BsArrowLeft className='w-5 h-5' />
          <span>Back</span>
        </div>
      </div>
      <div className='flex flex-col md:flex-row justify-between items-center gap-10 md:gap-24'>
        <div className='w-full md:flex-[1_1_50%] lg:flex-[1_1_45%]'>
          <Image className='w-full h-full md:rounded-xl md:border-[1.5em] border-solid border-borderLight dark:border-borderDark' src={country?.flags.png} alt={country?.name} width={100} height={100} />
        </div>
        <div className='w-full md:flex-[1_1_50%] lg:flex-[1_1_55%]'>
          <div>
            <span className='text-3xl font-nunito800'>{country?.name}</span>
          </div>
          <div className='flex flex-col md:flex-row justify-start gap-28 items-start mt-5 md:mt-7'>
            <div>
              <div>
                <span className='font-nunito600'>Native Name: </span>
                <span>{country?.nativeName}</span>
              </div>
              <div>
                <span className='font-nunito600'>Population: </span>
                <span>{country?.population}</span>
              </div>
              <div>
                <span className='font-nunito600'>Region: </span>
                <span>{country?.region}</span>
              </div>
              <div>
                <span className='font-nunito600'>Sub Region: </span>
                <span>{country?.subregion}</span>
              </div>
              <div>
                <span className='font-nunito600'>Capital: </span>
                <span>{country?.capital}</span>
              </div>
            </div>
            <div className='xs-only:mt-8'>
              <div>
                <span className='font-nunito600'>Top Level Domain: </span>
                {country?.topLevelDomain?.map(domain => <span>{domain}</span>)}
              </div>
              <div>
                <span className='font-nunito600'>Currencies: </span>
                {country?.currencies?.map(currency => <span>{currency?.name}</span>)}
              </div>
              <div>
                <span className='font-nunito600'>Languages: </span>
                {country?.languages?.map(lang => <span>{lang?.name}, </span>)}
              </div>
            </div>
          </div>
          <div className='flex flex-col md:flex-row md:items-center xs-only:gap-3 xs-only:mt-7 xs-only:mb-12 md:mt-14'>
            <span className='font-nunito600 xs-only:text-xl whitespace-nowrap'>Border Countries: </span>
            <div>
              {country?.borders?.map(border => <span className={`py-1 px-8 rounded border-4 border-solid xs-only:mr-3 md:mx-3 ${countriesBorderDarkMode}`}>{border}</span>)}
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

CountryDetail.getLayout = (page) => <Layout>{page}</Layout>

export default CountryDetail