import React, { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import axios from 'axios';


const CountryDetail = ({data}) => {

  console.log(data)
  return (
    <div>country detail</div>
  )
}

CountryDetail.getLayout = (page) => <Layout>{page}</Layout>

export default CountryDetail