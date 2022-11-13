import React from 'react'

const Layout = () => {

  return (
    <header className="w-full flex items-center justify-between shadow p-5 bg-lightModeBG dark:darkModeBG">
      <div>
        <h1 className="font-nunito800 text-xl text-lightModeText dark:darkModeText">
          Where in the world?
        </h1>
      </div>

      <div>
        dark mode / light mode
      </div>
    </header>
  )
}

export default Layout