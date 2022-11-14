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
    console.log(data)
    setLoading(false)
  }

  useEffect(() => {
    fetchCountryByRegion()
  }, [])

  return (
    <>
      <div className="flex items-start justify-between flex-col">
        <select
          name="select"
          id="select"
          className="p-3 rounded shadow"
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
