import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Layout from '@/components/Layout';
import axios from '@/lib/axios';
import FilterRegions from '@/components/FilterRegions';
import FilterSearch from '@/components/FilterSearch';
import CountryItem from '@/components/CountryItem';

const Home = (props) => {

  const { data, error } = props;

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
        ) :
          error ? (
            <h2 className="flex items-center justify-center uppercase tracking-widest pt-10 text-gray dark:text-darkModeText font-bold">
              an error occurred !!
            </h2>
          ) :
            (
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