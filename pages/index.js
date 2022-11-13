import React, { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import axios from 'axios';

const Home = ({ data }) => {

  console.log('data :', data)

  return (
    <div>
      <span className='text-lightModeInput'>home</span>
    </div>
  )
}

Home.getLayout = (page) => <Layout>{page}</Layout>

export const getServerSideProps = async () => {
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