import Button from '@/components/ui/button'
import React from 'react'

export default function Services() {
    return (
        <section className='bg-primary px-[4rem] py-[10rem] max-[900px]:px-[2rem] max-[900px]:mt-0 '>
            <div className='grid grid-cols-2 max-[900px]:grid-cols-1 max-[900px]:gap-[5rem]'>
                <div>
                    <h1 className='font-poppins mb-4 text-orange-600 font-semibold'>Expertise</h1>
                    <div className='grid gap-10'>
                        <h1 className='text-black font-dmSerifText service-text'>My key areas of <br /> expertise.</h1>
                        <p className='text-black w-[80%] max-[900px]:w-full font-poppins text-lg' style={{ lineHeight: 2 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum suscipit debitis quam dignissimos veritatis atque pariatur magnam obcaecati fugit reprehenderit vel numquam facere esse est deserunt, perferendis commodi voluptatem similique.</p>
                        <div>
                            <Button type='light' text='Download CV' className='px-24' />
                        </div>
                    </div>
                </div>
                <div className='grid gap-10'>
                    <div className='grid gap-5'>
                        <div className='flex items-baseline gap-2'>
                            <span className='text-amber-500 font-dmSerifText text-xl font-semibold'>01.</span>
                            <h1 className='font-dmSerifText text-black text-3xl'>Digital Marketing</h1>
                        </div>
                        <p className='text-black/50 font-poppins text-lg' style={{
                            lineHeight: 2
                        }}>Quibusdam quis autem voluptatibus earum vel ex error ea magni. Rerum quam quos. Aut asperiores sit mollitia. Rem neque et voluptatem eos quia sed eligendi et. Eaque velit eligendi ut magnam. Cumque ducimus laborum doloribus facere maxime vel earum quidem enim suscipit.</p>
                    </div>

                    <div className='grid gap-5'>
                        <div className='flex items-baseline gap-2'>
                            <span className='text-amber-500 font-dmSerifText text-xl font-semibold'>02.</span>
                            <h1 className='font-dmSerifText text-black text-3xl'>Project Management</h1>
                        </div>
                        <p className='text-black/50 font-poppins text-lg' style={{
                            lineHeight: 2
                        }}>Quibusdam quis autem voluptatibus earum vel ex error ea magni. Rerum quam quos. Aut asperiores sit mollitia. Rem neque et voluptatem eos quia sed eligendi et. Eaque velit eligendi ut magnam. Cumque ducimus laborum doloribus facere maxime vel earum quidem enim suscipit.</p>
                    </div>

                    <div className='grid gap-5'>
                        <div className='flex items-baseline gap-2'>
                            <span className='text-amber-500 font-dmSerifText text-xl font-semibold'>03.</span>
                            <h1 className='font-dmSerifText text-black text-3xl'>Content Marketing</h1>
                        </div>
                        <p className='text-black/50 font-poppins text-lg' style={{
                            lineHeight: 2
                        }}>Quibusdam quis autem voluptatibus earum vel ex error ea magni. Rerum quam quos. Aut asperiores sit mollitia. Rem neque et voluptatem eos quia sed eligendi et. Eaque velit eligendi ut magnam. Cumque ducimus laborum doloribus facere maxime vel earum quidem enim suscipit.</p>
                    </div>

                    <div className='grid gap-5'>
                        <div className='flex items-baseline gap-2'>
                            <span className='text-amber-500 font-dmSerifText text-xl font-semibold'>04.</span>
                            <h1 className='font-dmSerifText text-black text-3xl'>Research & Discovery</h1>
                        </div>
                        <p className='text-black/50 font-poppins text-lg' style={{
                            lineHeight: 2
                        }}>Quibusdam quis autem voluptatibus earum vel ex error ea magni. Rerum quam quos. Aut asperiores sit mollitia. Rem neque et voluptatem eos quia sed eligendi et. Eaque velit eligendi ut magnam. Cumque ducimus laborum doloribus facere maxime vel earum quidem enim suscipit.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
