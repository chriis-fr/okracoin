import React from 'react'
import "../index.css"
import { Link } from 'react-router-dom'
import {  second } from '../assets'

const Page1 = () => {

  

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
            <Link>More Experiences</Link>
          </a>
        </nav>
      </header>

      <main className='flex-1 '>
      <section className="w-full py-12  md:py-24 lg:py-32 bg-[#F3F4F6] dark:bg-[#1F2937] ">
          <div className="container px-4 md:px-6 ">
            <div className=" items-center  space-y-4 text-center justify-center">
              <div className="space-y-2 flex flex-col items-center rounded-2xl violet-gradient w-full" >
                <h2 className="text-slate-950 font-bold press-start-2p-regular tracking-tighter sm:text-4xl text-2xl pt-4 p-2">
                  Submit your experiences, tell us what you think about Okra😏
                </h2>
                <p className="max-w-[900px] text-red-900 finger-paint-regular p-2  md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
                   <span className='font-bold text-3xls'>OkraCoin</span> provides a platform for <span className='font-bold text-3xls'>YOU</span> to share with us your experience with Okra and tell the world how best it would benefit them as well.
                </p>
              </div>
            </div>
            <div>
            <main className="flex-1 py-8 px-4 md:px-8 lg:px-12">
                <div className="max-w-md mx-auto">
                  <form  className="space-y-4">
                    <div>
                      <label htmlFor="name" className="text-3xl font-bold shojumaru-regular text-lime-400">
                        Name<span className='text-sm text-red-500'> (anonymous)</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        onChange={(e) => alert("changed")}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="review" className="text-3xl font-bold shojumaru-regular text-lime-400">
                        Experience
                      </label>
                      <textarea
                        id="review"
                        onChange={(e) => setReview(e.target.value)}
                        rows={4}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <button
                      type="submit"
                      className="bg-yellow-500 text-violet-500 px-4 py-2 rounded-3xl hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <p className='cursor-pointer text-3xl font-bold shojumaru-regular text-lime-400'>submit</p>
                    </button>
                  </form>
                </div>
            </main>
            </div>
            <div className="mx-auto grid flex max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <img
                alt="Image"
                className="overflow-hidden flex justify-center items-center animate-bounce rounded-xl h-full sm:w-full lg:order-last "
                height="550"
                src={second}
                width="550"
              />
            </div>
          </div>
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
};



export default Page1