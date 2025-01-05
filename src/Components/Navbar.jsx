import React, { useEffect, useState } from 'react';
import { majorIslands } from '../info/Island_info';
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the page has been scrolled down
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      // Cleanup the event listener
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navValue = [
    'Hero',
    'About',
    'Map',
  ]
  const regionValue = majorIslands.map(island => island[0].title)
  
  console.log(regionValue)
  return (
    <div
      className={`navbar font-hostGrotesk fixed top-0 z-10 transition-colors duration-300 ease-out ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="w-full">
        <div className={`dropdown ${
        isScrolled ? 'text-blue5' : 'text-light-blue5'
      } duration-200 ease-in-out hover:bg-blue3 hover:text-white rounded-lg`}>
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-dark-blue"
          >
            {navValue.map(val => <li className="transition-colors ease-in-out duration-200 hover:bg-blue3 hover:text-white rounded-lg">
              <a href={`#${val}`}>
                {val}
              </a>
            </li>)}
            <li>
            <details>
              <summary className='transition-colors ease-in-out duration-200 hover:bg-blue3 hover:text-white rounded-lg'>Region</summary>
                <ul className=" rounded-t-none pl-2 bg-white">
                  {regionValue.map(val => <li className='hover:bg-blue3 rounded-lg hover:text-white'><a href={`#${val}`}>{val}</a></li>)}
                </ul>
              </details>
            </li>
            
          </ul>
        </div>
        <p className={`text-2xl font-bold ml-3 duration-300 ease-out ${
        isScrolled ? 'text-black' : 'text-light-blue5'
      }`}>Nexplore</p>
      </div>
      <div className="hidden lg:absolute lg:top-1 lg:block lg:left-1/2 lg:-translate-x-1/2">
        <ul className={`menu menu-horizontal px-[6px] gap-1  ${
        isScrolled ? 'text-black' : 'text-white'
      }`}>
          {navValue.map(val => <li className="transition-colors ease-in-out duration-200 hover:bg-blue3 hover:text-white rounded-lg">
            <a href={`#${val}`}>{val}</a>
          </li>)}
          <li>
            <details>
              <summary className='transition-colors ease-in-out duration-200 hover:bg-blue3 hover:text-white rounded-lg'>Regions</summary>
                <ul className={`   rounded-t-none ${
        isScrolled ? 'bg-white' : 'backdrop-blur-xl  bg-transparent text-white'}`}>
                  {regionValue.map(val => <li className={`hover:bg-blue3 rounded-lg hover:text-white ${val === 'Nusa Penida'? 'text-[13.5px] tracking-tighter': ''}`}><a href={`#${val}`}>{val}</a></li>)}
                </ul>
              </details>
            </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
