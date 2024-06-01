import React, { useState } from 'react';
import "../index.css"
import { drink, mainimage } from '../assets';

const Page2 = () => {

  const PlugConnect  = async () => {
    try{
      if (typeof window.ic !== "undefined" && typeof window.ic.plug !== "undefined"){
        const plug = window.ic.plug;

        const connected = await plug.requestConnect({
          whitelist: ["c5kvi-uuaaa-aaaaa-qaaia-cai"]
        })

        if (connected) {
          const principal = await plug.getPrincipal()
          console.log(principal.toText())
          console.log("principle is connected as above")
  
        

      }

      // const frntCan = "c2lt4-zmaaa-aaaaa-qaaiq-cai"
      // const bckCan ="c5kvi-uuaaa-aaaaa-qaaia-cai"


    } else {
      console.error("plug wallet not found")
    }
        }catch(error){
      console.error("Plug wallet connection failed", error)
      alert("error connection to wallet")
    }
  }

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-[#1F2937] text-white">
        <a className="flex items-center justify-center" href="#">
          <CoinsIcon className="h-10 w-10 text-green-200" />
          <span className="text-4xl text-orange-400 font-bold ml-2 monofett-regular">OKRA Coin</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a className="text-sm finger-paint-regular font-medium hover:underline underline-offset-4" href="https://x.com/coin_okra?t=SEz3Ndb5QuPsCyc2hRB2Zw&s=08">
            About
          </a>
          <a className="text-sm finger-paint-regular font-medium hover:underline underline-offset-4" href="https://x.com/coin_okra?t=SEz3Ndb5QuPsCyc2hRB2Zw&s=08">
            Features
          </a>
          <a className="text-sm finger-paint-regular font-medium hover:underline underline-offset-4" href="#" onClick={PlugConnect}>
            Buy
          </a>
          <a className="text-sm finger-paint-regular font-medium hover:underline underline-offset-4" href="https://x.com/coin_okra?t=SEz3Ndb5QuPsCyc2hRB2Zw&s=08">
            Community
          </a>
        </nav>
      </header>
      <main className="flex-1 ">
        <section className="w-full pl-6 pr-6 py-12 md:py-24 lg:py-32 xl:py-48 bg-[#1F2937] text-white">
          <div className="container px- md:px-6 grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <img
              alt="OKRACOIN"
              className="overflow-hidden animate-pulse rounded-xl sm:w-full lg:order-last "
              
              src={mainimage}
              width="550"
            />
            <div className="flex flex-col space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl bungee-shade-regular text-red-300 font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Invest in the Future of Okra.😜
                </h1>
                <br />
                <p className="max-w-[600px] text-lime-400 press-start-2p-regular text-gray-300 md:text-xl">
                  <span>OKRACOIN</span> is the ultimate Okra-inspired cryptocurrency, designed to revolutionize the world of digital
                  assets.
                  <br />
                  Get your Okracoin today!
                </p>
              </div>
              <div className="flex flex-col text-orange-400 gap-2 min-[400px]:flex-row justify-center">
                <a
                  className="inline-flex  finger-paint-regular h-10 items-center justify-center rounded-md bg-[#6B7280] px-8 text-sm font-medium text-white shadow transition-colors hover:bg-[#6B7280]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#6B7280] disabled:pointer-events-none disabled:opacity-50"
                  href="#"
                  onClick={PlugConnect}
                >
                  Buy OkraCoin
                </a>
                <a
                  className="inline-flex finger-paint-regular h-10 items-center justify-center rounded-md border border-[#6B7280] bg-transparent px-8 text-sm font-medium shadow-sm transition-colors hover:bg-[#6B7280]/20 hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#6B7280] disabled:pointer-events-none disabled:opacity-50"
                  // href="https://x.com/coin_okra?t=SEz3Ndb5QuPsCyc2hRB2Zw&s=08"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#1F2937] text-white">
          <div className="container px-4 md:px-6 grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="space-y-2">
              <h2 className="text-3xl text-amber-400 bungee-shade-regular font-bold tracking-tighter md:text-4xl/tight">
                Unlock the Power of Okra Investing
              </h2>
              <p className="max-w-[600px] finger-paint-regular text-[#D1D5DB] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Okracoin offers a unique opportunity to participate in the okra-driven economy and potentially reap the
                rewards.
              </p>
            </div>
            <div className="flex flex-col text-orange-400 justify-center gap-2 min-[400px]:flex-row lg:justify-end">
              <a
                className="inline-flex finger-paint-regular h-10 items-center justify-center rounded-md bg-[#6B7280] px-8 text-sm font-medium text-white shadow transition-colors hover:bg-[#6B7280]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#6B7280] disabled:pointer-events-none disabled:opacity-50"
                href="#"
              >
                Buy OkraCoin
              </a>
              <a
                className="inline-flex finger-paint-regular h-10 items-center justify-center rounded-md border border-[#6B7280] bg-transparent px-8 text-sm font-medium shadow-sm transition-colors hover:bg-[#6B7280]/20 hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#6B7280] disabled:pointer-events-none disabled:opacity-50"
                href="https://x.com/coin_okra?t=SEz3Ndb5QuPsCyc2hRB2Zw&s=08"
              >
                Learn More
              </a>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#F3F4F6] dark:bg-[#1F2937]">
          <div className="container px-4 md:px-6 grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-[#E5E7EB] px-3 py-1 finger-paint-regular text-sm dark:bg-[#374151]">Community</div>
              <h2 className="text-3xl text-amber-400 bungee-shade-regular font-bold tracking-tighter md:text-4xl/tight ">
                Join the OkraCoin Community
              </h2>
              <p className="max-w-[600px] press-start-2p-regular text-[#6B7280] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-[#D1D5DB]">
                Connect with like-minded investors and be a part of the okra-inspired revolution.
              </p>
            </div>
            <div className="flex flex-col justify-center text-orange-400 gap-4">
              <a
                className="inline-flex finger-paint-regular h-10 items-center justify-center rounded-md bg-[#6B7280] px-8 text-sm font-medium text-white shadow transition-colors hover:bg-[#6B7280]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#6B7280] disabled:pointer-events-none disabled:opacity-50"
                href="https://t.me/okracoin"
              >
                Join Telegram
              </a>
              <a
                className="inline-flex finger-paint-regular h-10 items-center justify-center rounded-md border border-[#6B7280] bg-transparent px-8 text-sm font-medium shadow-sm transition-colors hover:bg-[#6B7280]/20 hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#6B7280] disabled:pointer-events-none disabled:opacity-50"
                href="https://x.com/coin_okra?t=SEz3Ndb5QuPsCyc2hRB2Zw&s=08"
              >
                Follow on Twitter
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-[#1F2937] text-white">
        <p className="text-xs">© 2024 OkraCoin. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Privacy Policy
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Twitter
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Discord
          </a>
        </nav>
      </footer>
    </div>
  );
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

export default Page2;
