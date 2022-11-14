import { useState } from "react";
import PropTypes from 'prop-types';
import { BsMoon, BsSun } from "react-icons/bs";


const ToggleMode = () => {
  const [darkMode, setDarkMode] = useState(false)

  const changeTheme = () => {
    document.body.classList.toggle("dark")
    setDarkMode(!darkMode)
  }

  return (
    <div className="flex cursor-pointer font-nunito600 text-lightModeText dark:text-darkModeText" onClick={changeTheme}>
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