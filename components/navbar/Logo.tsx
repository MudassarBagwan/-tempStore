import React from 'react'
import { GiFruitBowl } from "react-icons/gi";
import Link from 'next/link';
import { Button } from '../ui/button';



function Logo() {
  return (
    <div>
      <Link href='/'>
      <Button size='icon'>
     <GiFruitBowl className='w-8 h-8'/>
     </Button>
     </Link>
    </div>
  )
}

export default Logo
