import React, { useState, useEffect } from "react"
import axios from 'axios';


export default function FilterRegions(props) {

  const { setCountries, setLoading } = props

  const regions = [
    {
      id: "Af",
      name: "Africa",
    },
    {
      id: "As",
      name: "Asia",
    },
    {
      id: "Oc",
      name: "Oceania",
    },
    {
      id: "Am",
      name: "Americas",
    },
    {
      id: "Eu",
      name: "Europe",
    },
  ]

  const fetchCountryByRegion = async (region) => {
    setLoading(true)
    const res = await axios.get(`https://restcountries.com/v2/region/${region || 'Africa'}`)
    const data = await res.data
    setCountries(data)
    // console.log(data)
    setLoading(false)
  }

  useEffect(() => {
    fetchCountryByRegion()
  }, [])

  const handleContainerDarkMode = 'text-lightModeText dark:text-darkModeText bg-white dark:bg-darkModeElement'

  return (
    <>
      <div className="flex flex-col justify-between items-start">
        <select
          name="select"
          id="select"
          className={`min-w-[60%] md:w-[13em] py-4 p-3 rounded shadow-md border-0 outline-0 text-lightModeText dark:text-darkModeText ${handleContainerDarkMode}`}
          value={regions.name}
          onChange={(e) => fetchCountryByRegion(e.target.value)}
        >
          {regions.map(region => (
            <option key={region.id} value={region.name}>{region.name}</option>
          ))}
        </select>
      </div>
    </>
  )
}
