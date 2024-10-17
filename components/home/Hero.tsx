import React from 'react'
import HeroCarousel from './HeroCarousel'
import { Button } from '../ui/button'
import Link from 'next/link'

function Hero() {
  return (
    <section className='grid grid-cols-1 lg:grid-cols-2 gap-24 items-center'>

      <div>
        <h1 className='max-w-2xl font-bold text-4xl tracking-tight sm:text-6xl'>
          We are Changing they way people Shop
        </h1>
        <p className='mt-8 max-w-xl text-lg leading-8 text-muted-foreground'>
        Developing a small e-shop that combines
        fruits and electronics offers a unique shopping experience. 
        The fruit section will feature a vibrant array of fresh, 
        seasonal produce sourced from local farms, ensuring quality and 
        supporting the community. Customers can easily browse options, 
        complete with enticing descriptions and photos.
        The electronics section will showcase essential gadgets, 
        from smart home devices to portable accessories, 
        each accompanied by detailed reviews to guide buyers.
        The e-shop will prioritize user-friendly navigation, 
        secure payment options, and responsive customer support, 
        creating a seamless shopping experience. 
        Seasonal promotions and loyalty rewards will encourage repeat visits. 
        By merging healthy living with cutting-edge technology, 
        this e-shop aims to meet diverse customer needs while 
        promoting sustainability.
        </p>

        <Button asChild size='lg' className='mt-10'>
        <Link href='/products'>Our Products</Link>
        </Button>


      </div>

      <HeroCarousel/>

    </section>
  )
} 

export default Hero
