import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { write } from '../assets';
import { experience } from '../agent';
// import { experience } from "../../../declarations/okracoin_backend"

const Experiences = () => {

    const [expo, setExpo] = useState([])

    useEffect(() => {
      const fetchData = async () => {
        const fetchedNotes = await experience.readNotes();
        setExpo(fetchedNotes)
      };

      fetchData()
    }, [])

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
            <Link to="/share">Share</Link>
          </a>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full pl-6 pr-6 py-12 md:py-24 lg:py-32 xl:py-48 bg-[#1F2937] text-white">
        <div className="container px-6 md:px-6 grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <p className='flex items-center justify-center text-4xl pb-2 bungee-shade-regular text-red-300 font-bold tracking-tighter'>Gain insight from what others say</p>
        </div>
        <section className=" grid border grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4 md:p-6">
            <div className='container px-6 md:px-6 grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]'>
                {
                  expo.length >= 1 && expo.map((note, index) => {
                    return(
                      <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden dark:bg-gray-950">
                        <div className="p-4 md:p-6">
                        <h3 className="text-3xl font-bold shojumaru-regular text-orange-400">{note.title}</h3>
                        <p className="mt-2 text-lime-400 press-start-2p-regular text-sm">
                          {note.content}
                        </p>
                        </div>
                        <div>
                        <img
                        alt="OKRACOIN"
                        className="overflow-hidden  animate-pulse rounded-[80%] sm:w-full lg:order-last "
                        width="550"
                        src={write}
                      />
                        </div>
                      </div>
                    )
                  })
                }
                {expo.length === 0 && 
                  <div className='flex flex-col space-y-4 container px-6 md:px-6 grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]'>
                  <div className='flex flex-col space-y-4'>
                  <h1 className='text-3xl font-bold shojumaru-regular text-lime-400'>
                      Oops, nothing to see here! 
                      <br />
                      Be the first to share your experience
                  </h1>
              </div>
              <div >
              <img
                    alt="OKRACOIN"
                    className="overflow-hidden  animate-pulse rounded-[80%] sm:w-full lg:order-last "
                    width="550"
                    src={write}
                  />
              </div>
              </div>
                }
        </div>
        </section>
        </section>
        
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-[#1F2937] text-white">
        <p className="text-xs">© 2024 OkraCoin. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4" href="https://termify.io/terms-of-service-generator">
            Terms of Service
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="https://termify.io/privacy-policy-generator">
            Privacy Policy
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="https://x.com/coin_okra?t=SEz3Ndb5QuPsCyc2hRB2Zw&s=08">
            Twitter
          </a>
          <a className="text-xs hover:underline underline-offset-4" onClick={() => {alert("Discord coming soon")}}>
            Discord
          </a>
        </nav>
      </footer>
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