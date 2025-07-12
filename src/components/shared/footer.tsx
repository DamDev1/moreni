import Button from '@/components/ui/button'
import React from 'react'

export default function Footer() {
    return (
        <section className='bg-[#202321] px-[4rem] py-[10rem] pb-[2rem] max-[900px]:px-[2rem] max-[900px]:mt-0 relative'>
            <div className='flex flex-col items-center justify-center gap-10'>
                <h1 className='service-text font-dmSerifText text-center'>Get started with a <br /> consultation today.</h1>
                <p className='text-primary font-poppins text-center w-[50%] max-[900px]:w-full'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptas modi, fuga esse voluptate aut praesentium consequuntur doloribus eligendi reiciendis pariatur atque, ipsam veritatis molestias deserunt delectus consequatur ut. Earum!</p>
                <Button type='filled' text='Download CV' className='px-24 mt-5' />
            </div>
            <div className='mt-[5rem]'>
                <hr className='border-gray-300/20' />
                <div className='mt-20 grid grid-cols-3 max-[900px]:grid-cols-2 max-[600px]:grid-cols-1 gap-10'>
                    <div className='grid gap-5'>
                        <h1 className='text-2xl font-dmSerifText'>About Morenii</h1>
                        <p className='text-primary font-poppins' style={{
                            lineHeight: 2
                        }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore dicta quis eum architecto porro provident veritatis incidunt quaerat repudiandae ducimus! Sit nostrum repellendus adipisci dolor quibusdam voluptate quod voluptatum cum?</p>
                    </div>
                    <div>
                        <h1 className='text-2xl font-dmSerifText text-center max-[900px]:text-left'>Site Links</h1>
                        <ul className='grid gap-4 mt-5 text-center max-[900px]:text-left'>
                            <li className='text-primary font-poppins'>Home</li>
                            <li className='text-primary font-poppins'>Services</li>
                            <li className='text-primary font-poppins'>Clients</li>
                            <li className='text-primary font-poppins'>Contact</li>
                        </ul>
                    </div>
                    < div>
                        <h1 className='text-2xl font-dmSerifText text-center max-[900px]:text-left'>Newsletter</h1>
                        <div className='grid gap-5 mt-5 text-center max-[900px]:text-left'>
                            <p className='text-primary font-poppins' style={{
                            lineHeight: 2
                        }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere ratione dignissimos.</p>
                            <input type="email" placeholder='Enter your email' className='w-full mt-5 p-3 rounded bg-gray-200 text-black' />
                            <Button text='Subscribe' type='filled' />
                        </div>
                    </div>
                </div>
            </div>
            <p className='text-center mt-20 bottom-10 flex justify-center items-center text-gray-500 '>© Copyright Monica 2025</p>
        </section>
    )
}
