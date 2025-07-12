'use client'
import React from 'react'
import Logo from '../ui/logo'
import Button from '../ui/button'
import { AlignJustify } from 'lucide-react';

export default function Header() {
    const handleClick = () => {
        console.log("Button clicked");
    }
    return (
        <div className="py-[2rem] px-[4rem] max-[900px]:px-[2rem]">
            <div className='flex justify-between items-center '>
                <div className='flex gap-[2rem] items-baseline'>
                    <Logo />
                    <nav className='max-[900px]:hidden flex'>
                        <ul className='flex gap-5'>
                            <li className='text-[#b1b1b1]'>About</li>
                            <li className='text-[#b1b1b1]'>Services</li>
                            <li className='text-[#b1b1b1]'>Journal</li>
                            <li className='text-[#b1b1b1]'>Contact</li>
                        </ul>
                    </nav>
                </div>
                <div className='max-[900px]:hidden'>
                    <Button text='Get Started' type="filled"   onClick={handleClick}/>
                </div>
                <div className='border cursor-pointer border-primary rounded p-2 hidden max-[900px]:flex items-center justify-center'>
                    <AlignJustify className='text-primary' size={30}/>
                </div>
            </div>
        </div>
    )
}
