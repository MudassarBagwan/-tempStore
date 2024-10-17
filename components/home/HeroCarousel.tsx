import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';


import img1 from '@/public/images/apple.jpg'
import img2 from '@/public/images/mango.jpg'
import img3 from '@/public/images/watermealon.jpg'
import img4 from '@/public/images/orange.jpg'
import img5 from '@/public/images/PS5.jpg'
import img6 from '@/public/images/steamdeck.jpg'

const carouselImages = [img1, img2, img3, img4,img5,img6];
function HeroCarousel() {
  return (
    <div className='hidden lg:block'>
      <Carousel>
        <CarouselContent>
        {carouselImages.map((image,index)=>{
          return <CarouselItem key={index}> 
            <Card>
              <CardContent className='p-2'>
                <Image src={image} alt="hero" className='w-full h-[24rem] rounded-md object-cover'/>

              </CardContent>

            </Card>
          </CarouselItem>
        })}

        </CarouselContent>

        <CarouselPrevious/>
        <CarouselNext/>

        
      </Carousel>
    </div>
    
  )
}

export default HeroCarousel
