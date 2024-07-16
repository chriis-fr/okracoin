import React, { useState } from 'react';
import "../index.css"
import { aura, drink, laura, mainimage } from '../assets';
import { Link } from 'react-router-dom';

const Page2 = () => {

  const [show, setShow] = useState(null)
  const [copy, setCopied] = useState(false)

  const PlugConnect  = async () => {
    try{
      if (typeof window.ic !== "undefined" && typeof window.ic.plug !== "undefined"){
        const plug = window.ic.plug;

        const connected = await plug.requestConnect({
          whitelist: ["bkyz2-fmaaa-aaaaa-qaaaq-cai", "bd3sg-teaaa-aaaaa-qaaba-cai"]
        })

        if (connected) {
          const principal = await plug.getPrincipal()
          console.log(principal.toText())
          console.log("principle is connected as above")
  
        // const balance = await fetchBalance(principal)

        function shortenPrincipal(principalId) {
          const principalStr = principalId.toText();
          if (principalStr.length <= 6) {
            return principalStr; // If the ID is too short, return it as is.
          }
          const start = principalStr.slice(0, 3);
          const end = principalStr.slice(-3);
          return `${start}...${end}`;
        }
      
        const newPrin = shortenPrincipal(principal)
        console.log(newPrin)
        setShow(newPrin)
      
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

  

  const copyText = async () => {
    const textToCopy = "c36a6-tiaaa-aaaam-acpxa-cai"; // Replace with your desired text
  
    try {
      await navigator.clipboard.writeText(textToCopy);
      console.log("Copied text successfully!");
      setCopied(true); // Update state for visual feedback
      setTimeout(() => setCopied(false), 5000); // Reset state after 2 seconds
    } catch (err) {
      console.error("Failed to copy text:", err);
      alert("Failed to copy text. Please check browser permissions."); // Informative error message
    }
  };
    

  return (
    <div className="flex flex-col  min-w-[80vh] min-h-[100dvh] bg-lime-100">
      <header className="px-4 fixed overflow-hidden  w-[100%] lg:px-6 h-14 flex items-center bg-[#1F2937] text-white">
        <a className="flex items-center justify-center" href="#">
          <CoinsIcon className="h-10 w-10 text-green-200" />
          <span className="text-2xl text-orange-400 font-bold ml-2 monofett-regular">OKRA Coin</span>
        </a>
        <nav className="ml-auto flex  gap-4 sm:gap-6">
          <a className="text-sm finger-paint-regular font-medium hover:underline underline-offset-4">
            <Link to="/share">Share</Link>
          </a>
          <a className="text-sm finger-paint-regular font-medium hover:underline underline-offset-4" href="https://x.com/coin_okra?t=SEz3Ndb5QuPsCyc2hRB2Zw&s=08">
            <Link to="/experiences">Experiences</Link>
          </a>
          <a className="text-sm finger-paint-regular font-medium hover:underline underline-offset-4" href="https://t.me/okracoin">
            Community
          </a>
          <a className="text-sm cursor-pointer finger-paint-regular font-medium hover:underline underline-offset-4"  onClick={PlugConnect}>
            Buy
          </a>
        </nav>
        {!show && <button onClick={PlugConnect} className='rounded-2xl m-2 w-[15%] h-[50%] hover:bg-orange-800 hover:h-[60%] bg-orange-600 hover:text-white finger-paint-regular flex items-center justify-center align-center cursor-pointer'><p className='text-sm  text-white font-bold cursor-pointer'>PLUG</p></button>}
        {show && <div onClick={() => {alert("wallet connected! Buy OKra")}} className='rounded-2xl m-2 w-[15%] violet-gradient h-[50%] hover:h-[60%] finger-paint-regular text-red-600 hover:bg-violet-500 flex items-center justify-center cursor-pointer'><p className='text-sm cursor-pointer'>{show}</p></div>}
      </header>
      <main className="flex-1 bg-lime-100">
        <section className="w-full pl-6 pr-6 py-12 md:py-24 lg:py-32 xl:py-48 bg-lime-100  text-white">
          <div className="px-6 md:px-6 grid gap-3 lg:grid-cols-[1fr_400px] lg:gap-6 xl:grid-cols-[1fr_600px]">
            <div className=' lg:order-last md:w-[100%]'>
            <img
              alt="OKRACOIN"
              className="overflow-hidden  rounded-xl lg:order-last "
              src={mainimage}
              width="500px"
            />
            </div>
            
            <div className="flex flex-col space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl bungee-shade-regular text-red-700 font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Invest in the Future of Okra.😜
                </h1>
                <br />
                <p className="max-w-[600px] text-green-900 roboto-black-italic  text-gray-300 md:text-2xl">
                  <span>OKRACOIN</span> is the ultimate Okra-inspired cryptocurrency, designed to revolutionize the world of digital
                  assets.

                  <br />
                  
                  <span className='italic'>Get your Okracoin today!</span>
                  <p className='text-red-500 pt-3 underline'>Lubricate your wallet NOWWW!!</p>
                </p>
                
              </div>
              <div className="flex flex-col text-orange-400 gap-2 min-[400px]:flex-row justify-center">
                <div
                  className="inline-flex cursor-pointer roboto-black-italic h-10 items-center justify-center rounded-md bg-[#6B7280] px-8 text-sm font-medium text-white shadow transition-colors hover:bg-[#6B7280]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#6B7280] disabled:pointer-events-none disabled:opacity-50"
                  onClick={copyText}
                >
                  <p className='font-bold'>
                    {copy ? "copied" : " copy OKR canister id to wallet" }
                  </p>
                </div>
                <div
                  className="inline-flex roboto-black-italic h-10 items-center justify-center rounded-md  border-[#6B7280] bg-transparent px-8 text-sm font-medium shadow-sm transition-colors hover:bg-[#6B7280]/20 hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#6B7280] disabled:pointer-events-none disabled:opacity-50"
                >
                  <p className=' font-bold'>
                    c36a6-tiaaa-aaaam-acpxa-cai
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12  md:py-24 lg:py-32 bg-lime-100 dark:bg-lime-300 ">
          <div className="container px-4 md:px-6 ">
            <div className=" items-center  space-y-4 text-center justify-center">
              <div className="space-y-2  rounded-2xl  w-full" >
                
                <h2 className="text-red-700 font-bold roboto-black-italic tracking-tighter sm:text-5xl text-3xl pt-4 p-2">
                  Revolutionize Your Investments
                </h2>
                <p className="max-w-[900px] text-red-900 roboto-black-italic p-2  md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
                   <span className='font-bold text-3xls'>OkraCoin</span> offers a unique and exciting way to participate in the okra-driven economy. Discover the
                  power of this innovative cryptocurrency.
                </p>
              </div>
            </div>
            <div className="mx-auto grid  max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <img
                alt="Image"
                className="overflow-hidden rounded-xl h-full sm:w-full lg:order-last "
                height="550"
                src={laura}
                width="550"
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-3xl font-bold roboto-black-italic text-lime-400">Okra-Inspired Rewards</h3>
                      <p className="text-[#6B7280] roboto-black-italic dark:text-[#D1D5DB]">
                        Earn rewards for participating in the okra-driven economy.
                      </p>
                      {/* <img
                        alt="OKRACOIN"
                        className="overflow-hidden  rounded-xl sm:w-full lg:order-last "
                        src={aura}
                        width="550"
                      /> */}
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-3xl font-bold roboto-black-italic text-lime-400">Community-Driven Governance</h3>
                      <p className="text-[#6B7280] roboto-black-italic dark:text-[#D1D5DB]">
                        Influence the direction of OkraCoin through community voting.*
                      </p>
                      {/* <img
                        alt="OKRACOIN"
                        className="overflow-hidden rounded-xl sm:w-full lg:order-last "
                        src={laura}
                        width="550"
                      /> */}
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-3xl font-bold roboto-black-italic text-lime-400">Deflationary Tokenomics</h3>
                      <p className="text-[#6B7280] roboto-black-italic dark:text-[#D1D5DB]">
                        Enjoy the benefits of a deflationary token model that increases scarcity, with 1 trillion tokens aleady in circulation
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-lime-100 text-white bg-lime-100">
          <div className="container px-4 md:px-6 grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="space-y-2">
              <h2 className="text-3xl text-red-700 roboto-black-italic font-bold tracking-tighter md:text-4xl/tight">
                Unlock the Power of Okra Investing
              </h2>
              <p className="max-w-[600px] roboto-black-italic text-green-900 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Okracoin offers a unique opportunity to participate in the okra-driven economy and potentially reap the
                rewards.
              </p>
            </div>
            <div className="flex flex-col text-orange-400 justify-center gap-2 min-[400px]:flex-row lg:justify-end">
              <a
                className="inline-flex roboto-black-italic h-10 items-center justify-center rounded-md bg-[#6B7280] px-8 text-sm font-medium text-white shadow transition-colors hover:bg-[#6B7280]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#6B7280] disabled:pointer-events-none disabled:opacity-50"
                href="#"
              >
                Buy OkraCoin
              </a>
              <a
                className="inline-flex roboto-black-italic h-10 items-center justify-center rounded-md border border-[#6B7280] bg-transparent px-8 text-sm font-medium shadow-sm transition-colors hover:bg-[#6B7280]/20 hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#6B7280] disabled:pointer-events-none disabled:opacity-50"
                href="https://gamma.app/docs/Introducing-Okra-Coin--p2oy7q8pe07m4h7?mode=doc"
              >
                Learn More
              </a>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-lime-100 dark:bg-lime-100">
          <div className="container px-4 md:px-6 grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-[#E5E7EB] px-3 py-1 roboto-black-italic text-sm dark:bg-[#374151]">Community</div>
              <h2 className="text-3xl text-red-700 roboto-black-italic font-bold tracking-tighter md:text-4xl/tight ">
                Join the OkraCoin Community
              </h2>
              <p className="max-w-[600px] roboto-black-italic text-green-900 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-[#D1D5DB]">
                Connect with like-minded investors and be a part of the okra-inspired revolution.
              </p>
            </div>
            <div className="flex flex-col justify-center text-orange-400 gap-4">
              <a
                className="inline-flex roboto-black-italic h-10 items-center justify-center rounded-md bg-[#6B7280] px-8 text-sm font-medium text-white shadow transition-colors hover:bg-[#6B7280]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#6B7280] disabled:pointer-events-none disabled:opacity-50"
                href="https://t.me/okracoin"
              >
                Join Telegram
              </a>
              <a
                className="inline-flex roboto-black-italic h-10 items-center justify-center rounded-md border border-[#6B7280] bg-transparent px-8 text-sm font-medium shadow-sm transition-colors hover:bg-[#6B7280]/20 hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#6B7280] disabled:pointer-events-none disabled:opacity-50"
                href="https://x.com/coin_okra?t=SEz3Ndb5QuPsCyc2hRB2Zw&s=08"
              >
                Follow on Twitter
              </a>
              <a
                className="inline-flex roboto-black-italic h-10 items-center justify-center rounded-md bg-[#6B7280] px-8 text-sm font-medium text-white shadow transition-colors hover:bg-[#6B7280]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#6B7280] disabled:pointer-events-none disabled:opacity-50"
                href="https://gamma.app/docs/Introducing-Okra-Coin--p2oy7q8pe07m4h7?mode=doc"
              >
                Learn More
              </a>
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
