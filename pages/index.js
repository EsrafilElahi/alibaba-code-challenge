import React, { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import axios from 'axios';
import FilterRegions from '@/components/FilterRegions';
import FilterSearch from '@/components/FilterSearch';
import CountryItem from '@/components/CountryItem';

const Home = ({ data }) => {

  const [countries, setCountries] = useState([])
  const [filteredCountries, setFilteredCountries] = useState([])
  const [search, setSearch] = useState("")
  const [loading, setLoading] = useState(null)


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

  const finalCountries = search.length > 0 ? filteredCountries : countries

  const handleContainerDarkMode = 'text-lightModeText dark:text-darkModeText bg-lightModeBG dark:bg-darkModeBG'

  return (
    <div className={`w-full h-full text-base ${handleContainerDarkMode}`}>
      <div className="py-10 px-7 md:px-20">
        <div className='flex flex-col md:flex-row gap-10 md:gap-0 justify-between'>
          <FilterSearch
            search={search}
            searchCountries={searchCountries}
          />
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
        ) : (
          <div className='display flex justify-center items-center flex-wrap gap-24 px-7 md:px-20'>
            {
              finalCountries?.map(country => (
                <CountryItem key={country.id} country={country} />
              ))
            }
          </div>
        )
      }
    </div>
  )
}

Home.getLayout = (page) => <Layout>{page}</Layout>

export const getStaticProps = async () => {
  const res = await axios(`https://restcountries.com/v2/all/`)
  const data = await res.data

  if (!data) {
    return {
      notFound: true
    }
  }

  return {
    props: { data }
  }
}

export default Home;