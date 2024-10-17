import {FaHeart} from 'react-icons/fa'
import { Button } from '@/components/ui/button';

function FavoriteToggleButton({productId}:{productId:string}) {
  return (
  <Button size='icon' variant='outline' className='p-2  text-3xl cursor-pointer rounded-xl'>
    <FaHeart/>
  </Button>
  )
}

export default FavoriteToggleButton
