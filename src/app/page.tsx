"use client"
import About from '@/components/pages/home/about'
import Clients from '@/components/pages/home/clients'
import Hero from '@/components/pages/home/hero'
import Resume from '@/components/pages/home/resume'
import Services from '@/components/pages/home/services'
import React from 'react'

export default function App() {
  return (
    <section>
      <Hero />
      <About/>
      <Services/>
      <Clients/>
      <Resume/>
    </section>
  )
}
