import React from 'react'

const FilterSearch = (props) => {
  const { search, searchCountries } = props
  return (
    <div>
      <input
        type="search"
        name="search"
        // id="search"
        placeholder="Search for a country..."
        value={search}
        onChange={(e) => searchCountries(e.target.value)}
        className="w-full p-3 rounded shadow placeholder-gray dark:placeholder-white outline-0"
        autoComplete="off"
      />
    </div>
  )
}

export default FilterSearch