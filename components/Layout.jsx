import React from 'react';
import ToggleMode from './ToggleMode';

const Layout = (props) => {

  const { children } = props;

  return (
    <div>
      <header className="w-full flex items-center justify-between shadow p-5 px-12 bg-lightModeBG dark:bg-darkModeBG">
        <div>
          <h1 className="font-nunito800 text-xl text-lightModeText dark:text-darkModeText">
            Where in the world?
          </h1>
        </div>

        <div>
          <ToggleMode />
        </div>
      </header>
      <main>
        {children}
      </main>
    </div>
  )
}

export default Layout