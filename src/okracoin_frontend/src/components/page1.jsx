import React from 'react'
import "../index.css"
import { Link } from 'react-router-dom'
import { drink } from '../assets'

const Page1 = () => {
  return (
    <div className="flex flex-col min-h-[100dvh]">
        <header className="px-4 lg:px-6 h-14 flex items-center bg-[#1F2937] text-white">
        <a className="flex items-center justify-center" href="#">
          <Link to="/">
          <CoinsIcon className="h-10 w-10 text-green-200" />
          </Link>
          <span className="text-4xl text-orange-400 font-bold ml-2 monofett-regular">OKRA Coin</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a className="text-sm finger-paint-regular font-medium hover:underline underline-offset-4">
            <Link to="/other">About</Link>
          </a>
          <a className="text-sm finger-paint-regular font-medium hover:underline underline-offset-4" href="https://x.com/coin_okra?t=SEz3Ndb5QuPsCyc2hRB2Zw&s=08">
            Features
          </a>
          <a className="text-sm finger-paint-regular font-medium hover:underline underline-offset-4" href="#" >
            Buy
          </a>
          <a className="text-sm finger-paint-regular font-medium hover:underline underline-offset-4" href="https://x.com/coin_okra?t=SEz3Ndb5QuPsCyc2hRB2Zw&s=08">
            Community
          </a>
        </nav>
      </header>

      <main className='flex-1'>
      <section className="w-full py-12  md:py-24 lg:py-32 bg-[#F3F4F6] dark:bg-[#1F2937] ">
          <div className="container px-4 md:px-6 ">
            <div className=" items-center  space-y-4 text-center justify-center">
              <div className="space-y-2  rounded-2xl violet-gradient w-full" >
                
                <h2 className="text-slate-950 font-bold press-start-2p-regular tracking-tighter sm:text-5xl text-3xl pt-4 p-2">
                  Revolutionize Your Investments
                </h2>
                <p className="max-w-[900px] text-red-900 finger-paint-regular p-2  md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
                   <span className='font-bold text-3xls'>OkraCoin</span> offers a unique and exciting way to participate in the okra-driven economy. Discover the
                  power of this innovative cryptocurrency.
                </p>
              </div>
            </div>
            <div className="mx-auto grid  max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <img
                alt="Image"
                className="overflow-hidden animate-bounce rounded-xl h-full sm:w-full lg:order-last "
                height="550"
                src={drink}
                width="550"
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-3xl font-bold shojumaru-regular text-lime-400">Okra-Inspired Rewards</h3>
                      <p className="text-[#6B7280] finger-paint-regular dark:text-[#D1D5DB]">
                        Earn rewards for participating in the okra-driven economy.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-3xl font-bold shojumaru-regular text-lime-400">Community-Driven Governance</h3>
                      <p className="text-[#6B7280] finger-paint-regular dark:text-[#D1D5DB]">
                        Influence the direction of OkraCoin through community voting.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-3xl font-bold shojumaru-regular text-lime-400">Deflationary Tokenomics</h3>
                      <p className="text-[#6B7280] finger-paint-regular dark:text-[#D1D5DB]">
                        Enjoy the benefits of a deflationary token model that increases scarcity.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
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

export default Page1