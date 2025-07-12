import { ArrowDown } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function Hero() {
  return (
    <div className='px-[4rem] py-[3rem] max-[900px]:px-[2rem] mt-[5rem] max-[900px]:mt-0'>
      <div className='grid grid-cols-3 max-[900px]:flex max-[900px]:flex-col gap-10 '>
        <div className='w-full col-span-2'>
          <h1 className='text-xl text-primary relative after:absolute after:w-[20%] after:h-[2px] after:-left-[22%] after:top-3.5 after:bg-[#F1A63C]'>Hello, I&apos;m Moreni</h1>
          <div className=' mt-4 font-dmSerifText text-8xl max-[900px]:text-7xl max-[700px]:text-6xl max-[500px]:text-4xl max-[300px]:3xl'>
            <h1
              className=" text-primary hero-text"
            >
              I create marketing <br />
              strategies for your <br />
              business that get <br />
              results.
            </h1>
          </div>
        </div>
        {/* <div className='flex itemns-top justify-start absolute bottom-0 '>
            <ArrowDown className='text-primary border border-amber-500 p-3 rounded-full' size={50} />
          </div> */}
        <div>
          <div className='w-full relative grid max-[900px]:grid-cols-3 justify-end items-baseline'>
            <div className='gap-[10px] w-full h-full flex flex-col justify-center items-center opacity-0'>
              <span className='block w-full h-[1.5px] bg-orange-400/45'></span>
              <span className='block w-full h-[1.5px] bg-orange-400/45'></span>
              <span className='block w-full h-[1.5px] bg-orange-400/45'></span>
              <span className='block w-full h-[1.5px] bg-orange-400/45'></span>
              <span className='block w-full h-[1.5px] bg-orange-400/45'></span>
            </div>
           <div className='w-full h-[200px] col-span-2'>
            <div className='flex justify-end items-end'>
               <img src="/heroImage.jpeg" alt=""  className='z-10 hero-image' />  
            </div>
           </div>
          </div>
        </div>
      </div>
    </div>
  )
}
