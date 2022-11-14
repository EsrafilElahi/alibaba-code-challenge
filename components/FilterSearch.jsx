import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineSearch } from "react-icons/ai";


const FilterSearch = (props) => {
  const { search, searchCountries } = props

  const handleContainerDarkMode = 'text-lightModeText dark:text-darkModeText bg-white dark:bg-darkModeElement'

  return (
    <label htmlFor="search" className="relative block">
      <AiOutlineSearch className="pointer-events-none text-gray ml-2 dark:text-darkModeText w-6 h-6 absolute top-1/2 transform -translate-y-1/2 left-3" />
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Search for a country..."
        value={search}
        onChange={(e) => searchCountries(e.target.value)}
        className={`w-full md:w-[27em] pl-14 py-4 p-3 rounded shadow-md border-0 placeholder-gray dark:placeholder-darkModeText outline-0 ${handleContainerDarkMode}`}
        autoComplete="off"
      />
    </label>
  )
}


FilterSearch.propTypes = {
  search: PropTypes.string,
  searchCountries: PropTypes.func,
}

export default FilterSearch