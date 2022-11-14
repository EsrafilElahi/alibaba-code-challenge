import React from 'react'

const FilterSearch = (props) => {
  const { search, setSearch } = props
  return (
    <div>
      <input
        type="search"
        name="search"
        // id="search"
        placeholder="Search by country name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-3 rounded shadow placeholder-gray lg:w-1/2 outline-0"
        autoComplete="off"
      />
    </div>
  )
}

export default FilterSearch