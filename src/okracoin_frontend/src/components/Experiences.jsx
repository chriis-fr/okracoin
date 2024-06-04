import React from 'react'
import { Link } from 'react-router-dom';

const Experiences = () => {
  return (
    <div className="flex flex-col min-h-[100dvh]">
        <header className="px-4 lg:px-6 h-14 flex items-center bg-[#1F2937] text-white">
        <a className="flex items-center justify-center" >
          <Link to="/">
          <CoinsIcon className="h-10 w-10 text-green-200" />
          </Link>
          <span className="text-4xl text-orange-400 font-bold ml-2 monofett-regular">OKRA Coin</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a className="text-sm finger-paint-regular text-red-400 font-medium hover:underline underline-offset-4">
            <Link to="/">Home</Link>
          </a>
          
          <a className="text-sm finger-paint-regular text-lime-500 font-medium hover:underline underline-offset-4">
            <Link to="/other">Back</Link>
          </a>
        </nav>
      </header>
    </div>
  )
}

function CoinsIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="8" cy="8" r="6" />
        <path d="M18.09 10.37A6 6 0 1 1 10.34 18" />
        <path d="M7 6h1v4" />
        <path d="m16.71 13.88.7.71-2.82 2.82" />
      </svg>
    );
}

export default Experiences