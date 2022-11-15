import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Layout from '@/components/Layout';
import axios from '@/lib/axios';
import { BiChevronDown, BiChevronUp, BiMinus } from "react-icons/bi";
import { useRouter } from 'next/router';
import FilterRegions from '@/components/FilterRegions';
import FilterSearch from '@/components/FilterSearch';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';


const orderData = (data, value, direction) => {
  if (direction === 'asc') {
    return [...data].sort((a, b) => a[value] > b[value] ? 1 : -1)
  }
  if (direction === 'desc') {
    return [...data].sort((a, b) => a[value] > b[value] ? -1 : 1)
  }

  return data
}

const Arrow = ({ direction }) => {
  if (!direction) {
    return (
      <div className="">
        <BiMinus className='flex items-center w-3 h-3' />
      </div>
    )
  }
  else if (direction === 'asc') {
    return (
      <div className="">
        <BiChevronUp className='flex items-center w-4 h-4' />
      </div>
    )
  } else {
    return (
      <div className="">
        <BiChevronDown className='flex items-center w-4 h-4' />
      </div>
    )
  }
}


const CountryItem = dynamic(() => import('@/components/CountryItem'), {
  suspense: true,
})

const Home = (props) => {

  const { data, error } = props;

  const [countries, setCountries] = useState(data)
  const [filteredCountries, setFilteredCountries] = useState([])
  const [search, setSearch] = useState("")
  const [loading, setLoading] = useState(null)
  const [direction, setDirection] = useState(null)
  const [value, setValue] = useState('name')

  const router = useRouter();

  console.log(router);


  const searchCountries = (searchValue) => {
    setSearch(searchValue)

    if (search) {
      const filtered = countries.filter((country) =>
        Object.values(country)
          .join("")
          .toLowerCase()
          .includes(searchValue.toLowerCase())
      )
      setFilteredCountries(filtered)
    } else {
      setFilteredCountries(countries)
    }
  }

  const setDirectionAndValue = (value) => {
    if (!direction) {
      setDirection('desc')
    } else if (direction === 'desc') {
      setDirection('asc')
    } else {
      setDirection(null)
    }

    setValue(value)
  }

  const finalCountries = search.length > 0 ? filteredCountries : countries
  const orderedData = orderData(finalCountries, value, direction)

  const handleContainerDarkMode = 'text-lightModeText dark:text-darkModeText bg-lightModeBG dark:bg-darkModeBG'

  return (
    <div className={`w-full h-full text-base ${handleContainerDarkMode}`}>
      <div className="py-20 px-7 md:px-20">
        <div className='flex flex-col md:flex-row gap-10 md:gap-0 justify-between'>
          <FilterSearch
            search={search}
            searchCountries={searchCountries}
          />
          <div className='flex gap-4'>
            <button onClick={() => setDirectionAndValue('name')} className='flex justify-between items-center gap-2 order-btn'>
              <span>Name</span>
              {value === 'name' && <Arrow direction={direction} />}
            </button>
            <button onClick={() => setDirectionAndValue('population')} className='flex justify-between items-center gap-2 order-btn'>
              <span>Population</span>
              {value === 'population' && <Arrow direction={direction} />}
            </button>
          </div>
          <FilterRegions
            setLoading={setLoading}
            setCountries={setCountries}
          />
        </div>
      </div>
      {
        loading ? (
          <h1 className="flex items-center justify-center uppercase tracking-widest pt-10 text-gray dark:text-darkModeText font-bold">
            Loading...
          </h1>
        ) :
          error ? (
            <h2 className="flex items-center justify-center uppercase tracking-widest pt-10 text-gray dark:text-darkModeText font-bold">
              an error occurred !!
            </h2>
          ) :
            (
              <div className='flex justify-center items-center flex-wrap gap-24 px-7 md:px-20'>
                {
                  orderedData?.map(country => (
                    <Suspense
                      key={country.id}
                      fallback={`Loading...`}
                    >
                      <CountryItem country={country} />
                    </Suspense>
                  ))
                }
              </div>
            )
      }
    </div>
  )
}

Home.getLayout = (page) => <Layout>{page}</Layout>

export const getServerSideProps = async () => {
  try {
    const res = await axios.get(`/all/`)
    const data = await res.data

    if (!data) {
      return {
        notFound: true
      }
    }

    return {
      props: { data, error: false }
    }
  } catch (err) {
    return {
      props: { data: null, error: true }
    }
  }
}

Home.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  error: PropTypes.bool.isRequired
}

export default Home;