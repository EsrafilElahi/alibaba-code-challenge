import React, { useState, useEffect } from "react";
import Link from "next/link";
import PropTypes from 'prop-types';
import axios from 'axios';
import { useRouter } from "next/router";


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
  if (!direction) return;
  else if (direction === 'asc') {
    return (
      <div className={styles.arrow}>
        <KeyboardArrowUpRounded color="inherit" />
      </div>
    )
  } else {
    return (
      <div className={styles.arrow}>
        <KeyboardArrowDownRounded color="inherit" />
      </div>
    )
  }
}


const SortCountries = (props) => {
  const { data } = props;

  const [direction, setDirection] = useState()
  const [value, setValue] = useState('')
  const orderedData = orderData(data, value, direction)

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


  return (
    <div>
      <div>
        <button onClick={() => setDirectionAndValue('name')} className={styles.country_name}>
          <div>Name</div>
          {value === 'name' ? <Arrow direction={direction} /> : null}
        </button>
        <button onClick={() => setDirectionAndValue('area')} className={styles.country_area}>
          <div>Area(km<sup style={{ fontSize: '.5rem' }}>2</sup>)</div>
          {value === 'area' && <Arrow direction={direction} />}
        </button>
      </div>
    </div>
  )
}


SortCountries.propTypes = {
  // setCountries: PropTypes.func,
}
export default SortCountries