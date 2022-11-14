import React from 'react';
import ToggleMode from './ToggleMode';

const Layout = (props) => {

  const { children } = props;

  const handleDarkModeHeaderClassName = 'text-lightModeText dark:text-darkModeText bg-white dark:bg-darkModeElement'
  const handleDarkModeMainClassName = 'bg-lightModeBG dark:bg-darkModeBG'

  return (
    <div className='w-full h-full'>
      <header className={`w-full flex fixed top-0 right-5 items-center overflow-hidden justify-between shadow p-5 px-20 ${handleDarkModeHeaderClassName}`}>
        <div>
          <h1 className="font-nunito800 text-2xl pl-5">
            Where in the world?
          </h1>
        </div>

        <div>
          <ToggleMode />
        </div>
      </header>
      <main className={`w-full h-full pt-[6.5em] overflow-x-hidden overflow-y-auto ${handleDarkModeMainClassName}`}>
        {children}
      </main>
    </div>
  )
}

export default Layout