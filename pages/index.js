import React, { useState, useEffect } from 'react';
import Layout from '@/components/Layout'
import { FaBeer } from 'react-icons/fa';

export default function Home() {
  return (
    <div>
      <span className='text-lightModeInput'>home</span>
      <FaBeer />
    </div>
  )
}

Home.getLayout = (page) => <Layout>{page}</Layout>