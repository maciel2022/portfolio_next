// components
import ServiceSlider from '../../components/ServiceSlider';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';

// framer motion
import {motion} from 'framer-motion';
import {fadeIn} from '../../variants';


const Services = () => {
  return (
    <div className='h-full bg-primary/30 py-36 flex items-center'>
      <Circles />
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-x-8'>
          {/* text */}
          <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0'>
            <motion.h2 
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='h2 xl:mt-0'
            >
              <span className='text-accent'>Mis</span> servicios 
            </motion.h2>
            <motion.p 
               variants={fadeIn('up', 0.5)}
               initial='hidden'
               animate='show'
               exit='hidden'
              className='mb-4 max-w-[400px] mx-auto lg:mx-0'
            >
              Como desarrollador de software full stack, ofrezco una gama completa de servicios de desarrollo que cubren tanto el frontend como el backend de aplicaciones web. Mi objetivo es proporcionar soluciones integrales y personalizadas que respondan a las necesidades específicas de cada cliente.  
            </motion.p>
          </div>
          {/* slider */}
          <motion.div 
             variants={fadeIn('down', 0.6)}
             initial='hidden'
             animate='show'
             exit='hidden'
            className='w-full xl:max-w-[65%]'
          >
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  )
};

export default Services;
