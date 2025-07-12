"use client"
import About from '@/components/pages/home/about'
import Hero from '@/components/pages/home/hero'
import Services from '@/components/pages/home/services'
import React from 'react'

export default function App() {
  return (
    <section>
      <Hero />
      <About/>
      <Services/>
    </section>
  )
}
