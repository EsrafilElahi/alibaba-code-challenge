import React from 'react';
import ToggleMode from './ToggleMode';

const Layout = (props) => {

  const { children } = props;

  return (
    <div className='w-full h-full'>
      <header className="w-full flex fixed top-0 items-center overflow-hidden justify-between shadow p-5 px-12 bg-lightModeElement dark:bg-darkModeElement">
        <div>
          <h1 className="font-nunito800 text-xl text-lightModeText dark:text-darkModeText">
            Where in the world?
          </h1>
        </div>

        <div>
          <ToggleMode />
        </div>
      </header>
      <main className='w-full pt-[6em] bg-lightModeBG dark:bg-darkModeBG overflow-x-hidden overflow-y-auto'>
        {children}
      </main>
    </div>
  )
}

export default Layout