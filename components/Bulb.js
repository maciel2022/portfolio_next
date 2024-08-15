// next iimage
import { headers } from 'next/dist/client/components/headers';
import Image from 'next/image';

const Bulb = () => {
  return (
    <div className='absolute -left-36 -bottom-12 rotate-12 mix-blend-color-dodge animate-pulse duration-75 z-10w-[200px] xl:w-[260px]'>
      <Image 
        src={'/bulb.png'} 
        width={256} 
        height={200}
        alt=''
        className='w-full h-full'  
      />
    </div>
  )
};

export default Bulb;
