import Button from '@/components/ui/button'
import React from 'react'

export default function Resume() {
  return (
    <section className='bg-[#202321] px-[4rem] py-[10rem] max-[900px]:px-[2rem] max-[900px]:mt-0 flex flex-col items-center justify-center gap-10'>
        <h1 className='service-text font-dmSerifText text-center'>Get started with a <br /> consultation today.</h1>
        <p className='text-primary font-poppins text-center w-[50%] max-[900px]:w-full'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptas modi, fuga esse voluptate aut praesentium consequuntur doloribus eligendi reiciendis pariatur atque, ipsam veritatis molestias deserunt delectus consequatur ut. Earum!</p>
        <Button type='filled' text='Download CV' className='px-24 mt-5' />
    </section>
  )
}
