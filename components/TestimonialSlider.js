// testimonial data
const testimonialData = [
  {
    image: '/t-avt-1.png',
    name: 'Andrea Smith',
    position: 'zetaroller',
    message:
      'Excelente trabajo en el desarrollo de nuestra aplicación. Profesional, eficiente y con una gran atención a los detalles. ¡Altamente recomendable!',
  },
  {
    image: '/t-avt-2.png',
    name: 'Maria Paula Laguarda',
    position: 'HHRR-teatro',
    message:
      'Trabajar con Maciel fue una experiencia fluida. Su enfoque integral y su capacidad para adaptarse a nuestras necesidades hicieron que el proceso fuera sencillo y efectivo.',
  },
  {
    image: '/t-avt-3.png',
    name: 'Maximiliano Alsina',
    position: 'ecommerce',
    message:
      'Nos entregó una solución completa que superó nuestras expectativas. Su habilidad para integrar diseño, desarrollo y SEO fue fundamental para el éxito de nuestro proyecto.',
  },
];

// next images
import Image from 'next/image';

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// icons
import  { FaQuoteLeft } from 'react-icons/fa';

// import required modules
import {Navigation, Pagination}  from 'swiper';

const TestimonialSlider = () => {
  return (
    <div>
      <Swiper 
        navigation={true}
        pagination={{
          clickable:true
        }}
        modules={[Navigation, Pagination]}
        className='h-[400px]'
      >
        {
          testimonialData.map((person, index) => {
            return (
              <SwiperSlide key={index}>
               <div className='flex flex-col items-center md:flex-row gap-x-8 h-full px-16'>
                {/* avata, name, position */}
                <div className='w-full  max-w-[360px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0'>
                  <div className='flex flex-col justify-center text-center'>
                    {/* avatar */}
                    <div className='mb-2 mx-auto'>
                      <Image
                        src={person.image}
                        width={100}
                        height={100}
                        alt=''
                      />
                    </div>
                    {/* name */}
                    <div className='text-lg'>{person.name}</div>
                    {/* position */}
                    <div className='text-[12px] uppercase font-extralight tracking-widest'>{person.position}</div>
                  </div>
                </div>
                {/* quote & message */}
                <div className='bg-pink-500/10 flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20'>
                  {/* quote icon */}
                  <div className='mb-4'>
                    <FaQuoteLeft 
                      className='text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0'
                    />
                  </div>
                  {/* message */}
                  <div className='xl:text-lg text-center md:text-left'>{person.message}</div>
                </div>
               </div>
              </SwiperSlide>
            ) 
          })
        }
      </Swiper>

    </div>
  )
};

export default TestimonialSlider;

