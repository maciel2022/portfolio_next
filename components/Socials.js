// links
import Link from "next/link";

// icons
import { RiTwitterXLine, RiInstagramLine, RiFacebookLine, RiGithubLine,} from 'react-icons/ri'
const Socials = () => {
  return (
    <div className='flex items-center gap-x-5 text-lg xl:mr-8'>
      <Link href={'https://x.com/MacielF1986'} className='hover:text-accent transition-all duration-300'>
        <RiTwitterXLine />
      </Link>
      <Link href={'https://www.instagram.com/maciel.fernandez'} className='hover:text-accent transition-all duration-300'>
        <RiInstagramLine />
      </Link>
      <Link href={'https://github.com/maciel2022'} className='hover:text-accent transition-all duration-300'>
        <RiGithubLine />
      </Link>
      <Link href={'https://www.facebook.com/maciel.fernandez.37'} className='hover:text-accent transition-all duration-300'>
        <RiFacebookLine />
      </Link>
    </div>
  )
};

export default Socials;
