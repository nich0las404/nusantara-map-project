import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar font-hostGrotesk sticky top-0 z-10 bg-base-100">
  <div className="w-full">
    <div className="dropdown text-blue5 duration-200 ease-in-out hover:bg-blue3 hover:text-white rounded-lg">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-dark-blue">
        <li className='transition-colors ease-in-out duration-200  hover:bg-blue3 hover:text-white rounded-lg'><a>Home</a></li>
        <li className='transition-colors ease-in-out duration-200  hover:bg-blue3 hover:text-white rounded-lg'>
          <a>Map</a>
        </li>
        <li className='transition-colors ease-in-out duration-200  hover:bg-blue3 hover:text-white rounded-lg'><a>About</a></li>
      </ul>
    </div>
    <p className="text-2xl font-bold ml-3">Nexplore</p>
  </div>
  <div className="hidden lg:absolute lg:top-1 lg:block lg:left-1/2 lg:-translate-x-1/2">
    <ul className="menu menu-horizontal px-[6px] gap-1">
      <li className='transition-colors ease-in-out duration-200  hover:bg-blue3 hover:text-white rounded-lg'><a>Home</a></li>
      <li className='transition-colors ease-in-out duration-200  hover:bg-blue3 hover:text-white rounded-lg'>
        <a href="">Map</a>
      </li>
      <li className='transition-colors ease-in-out duration-200  hover:bg-blue3 hover:text-white rounded-lg'><a>About</a></li>
    </ul>
  </div>
  
</div>
  )
}

export default Navbar