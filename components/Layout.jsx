import React from 'react';
import PropTypes from 'prop-types';
import ToggleMode from './ToggleMode';

const Layout = (props) => {

  const { children } = props;

  const handleHeaderDarkMode = 'text-lightModeText dark:text-darkModeText bg-white dark:bg-darkModeElement'
  const handleMainDarkMode = 'bg-lightModeBG dark:bg-darkModeBG'

  return (
    <div className={`min-h-full ${handleMainDarkMode}`}>
      <header className={`w-full flex sticky top-0 items-center overflow-hidden justify-between shadow p-5 px-7 md:px-20 ${handleHeaderDarkMode}`}>
        <div>
          <h1 className="font-nunito800 text-2xl">
            Where in the world?
          </h1>
        </div>

        <div>
          <ToggleMode />
        </div>
      </header>
      <main className={`w-full h-full ${handleMainDarkMode}`}>
        {children}
      </main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element.isRequired
  ]),
}
export default Layout