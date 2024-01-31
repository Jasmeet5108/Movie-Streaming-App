import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {

  const [menu, setMenu] = useState("-translate-x-full");

  const hamburger = () => {
    if (menu === "-translate-x-full") {
      setMenu("translate-x-0");
    }
    document.body.style.opacity = 0.7;
  }

  const crossMenu = () => {
    if (menu === "translate-x-0") {
      setMenu("-translate-x-full");
    }
    document.body.style.opacity = 1;
  }

  return (
    <>
      <header className='sticky top-0 sm:relative bg-[#06202a] z-10'>

        <nav className='flex justify-between items-center p-2 max-w-screen-2xl mx-auto'>

          {/* Hamburger Menu */}
          <div onClick={hamburger} className='cursor-pointer flex flex-col space-y-[5px] mt-1 sm:hidden rounded-md border border-gray-500 p-2'>
            <span className='w-8 h-1 rounded-md bg-gray-300'></span>
            <span className='w-8 h-1 rounded-md bg-gray-300'></span>
            <span className='w-8 h-1 rounded-md bg-gray-300'></span>
          </div>

          {/* Appname */}
          <div className='text-white text-xl font-semibold sm:text-2xl bmd:text-3xl'>CineSphere</div>

          <div className='hidden sm:block text-white text-xl font-semibold sm:text-2xl bmd:text-3xl'>
            <Link to={"https://jasmeet-singh.vercel.app/"} target='_blank'>Jasmeet Singh</Link>
          </div>

        </nav>

      </header>

      {/* Categories */}

      {/* Movies */}
      <div className='hidden sm:block mt-4'>
        <p className='text-[26px] font-bold text-white text-center'>Movies</p>
        <ul className='text-white sm:mt-3 text-xl sm:flex sm:justify-center sm:space-x-8 blg:space-x-12 overflow-x-scroll whitespace-nowrap scrollbar-hide'>
          <li className='hover:animate-bounce'>
            <Link to="/">Now Playing</Link>
          </li>
          <li className='hover:animate-bounce'>
            <Link to="/popular">Popular</Link>
          </li>
          <li className='hover:animate-bounce'>
            <Link to="/upcoming">Upcoming</Link>
          </li>
          <li className='hover:animate-bounce'>
            <Link to="/top-rated">Top Rated</Link>
          </li>
        </ul>

        {/* TV Shows */}
        <p className='text-[26px] sm:mt-6 font-bold text-white text-center'>Tv Shows</p>
        <ul className='text-white sm:mt-3 text-xl sm:flex sm:justify-center sm:space-x-8 blg:space-x-12 overflow-x-scroll whitespace-nowrap scrollbar-hide'>
          <li className='hover:animate-bounce'>
            <Link to="/airing-today">Airing Today</Link>
          </li>
          <li className='hover:animate-bounce'>
            <Link to="/on-air">On Air</Link>
          </li>
          <li className='hover:animate-bounce'>
            <Link to="/popular-tv">Popular</Link>
          </li>
          <li className='hover:animate-bounce'>
            <Link to="/top-rated-tv">Top Rated</Link>
          </li>
        </ul>
      </div>



      {/* SideBar Menu */}
      <div id='sideBar' className={`${menu} py-2 sticky top-0 z-20 opacity-100 md:hidden rounded-md transition bg-[#113442] h-[720px] w-2/3 mt-[-60px]`}>

        {/* Movies */}
        <ul className='text-white text-xl flex flex-col justify-center items-center space-y-7 py-9'>
          <p className='font-bold text-3xl text-white underline underline-offset-8'>Movies</p>
          <li>
            <Link onClick={crossMenu} to="/">Now Playing</Link>
          </li>
          <li>
            <Link onClick={crossMenu} to="/popular">Popular</Link>
          </li>
          <li>
            <Link onClick={crossMenu} to="/upcoming">Upcoming</Link>
          </li>
          <li>
            <Link onClick={crossMenu} to="/top-rated">Top Rated</Link>
          </li>
        </ul>

        {/* TV Shows */}
        <ul className='text-white text-xl flex flex-col justify-center items-center space-y-7 py-9'>
          <p className='font-bold text-3xl text-white underline underline-offset-8'>TV Shows</p>
          <li>
            <Link onClick={crossMenu} to="/airing-today">Airing Today</Link>
          </li>
          <li>
            <Link onClick={crossMenu} to="/on-air">On Air</Link>
          </li>
          <li>
            <Link onClick={crossMenu} to="/popular-tv">Popular</Link>
          </li>
          <li>
            <Link onClick={crossMenu} to="/top-rated-tv">Top Rated</Link>
          </li>
        </ul>
        <svg onClick={crossMenu} className='absolute top-3 right-2' xmlns="http://www.w3.org/2000/svg" width="35" viewBox="0 0 24 24" fill="none">
          <path d="M19 5L5 19M5 5L19 19" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

    </>
  )
}

export default Navbar