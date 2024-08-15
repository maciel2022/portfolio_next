// next image
import Image from "next/image";

// next link
import Link from "next/link";

// components
import Socials from '../components/Socials'

const Header = () => {
  
  return (
    <header className='absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8'>
          {/* logo */}
          <Link href={'/'}>
            <h2 className='text-xl font-light text-center xl:text-3xl'>maciel <span className='font-bold'>fernandez</span><span className="text-accent">.</span></h2>
          </Link>
          {/* socials */}
          <div className="lg:me-10">
            <Socials />
          </div>        
        </div>
      </div>
    </header>
  )
};

export default Header;
