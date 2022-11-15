import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { BsMoon, BsSun } from "react-icons/bs";


const ToggleMode = () => {

  const [darkMode, setDarkMode] = useState(undefined)

  useEffect(() => {
    setDarkMode(document.documentElement.classList.contains("dark"))
  }, [])

  useEffect(() => {
    if (darkMode) {
      window.document.documentElement.classList.add('dark')
      localStorage.setItem("darkMode", true)
    } else {
      window.document.documentElement.classList.remove('dark')
      localStorage.setItem("darkMode", false)
    }
  }, [darkMode])


  const toggleTheme = () => {
    setDarkMode(!darkMode)
  }


  return (
    <div className="flex cursor-pointer font-nunito600 text-lightModeText dark:text-darkModeText" onClick={toggleTheme}>
      {darkMode ? (
        <div className="flex items-center justify-center gap-2 hover:text-gray">
          <BsSun className="" />
          <span>Light Mode</span>
        </div>
      ) : (
        <div className="flex items-center justify-center gap-2 hover:text-gray">
          <BsMoon className="" />
          <span>Dark Mode</span>
        </div>
      )}
    </div>
  )
}

export default ToggleMode