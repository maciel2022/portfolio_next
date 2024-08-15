// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// icons
import  {
  RxCrop,
  RxDesktop,
  RxPencil2,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from 'react-icons/rx';

// import required modules
import {FreeMode, Pagination}  from 'swiper';

// data
const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Branding',
    description: 'Diseño de identidad visual, desarrollo de propuesta de valor, y creación de estrategias de comunicación efectivas.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Diseño',
    description: 'Lleva tu marca al siguiente nivel. Ofrezco servicios de diseño de interfaces de usuario (UI), y material gráfico personalizado.',
  },
  {
    icon: <RxDesktop />,
    title: 'Desarrollo',
    description: 'Desarrollo de software, desde aplicaciones web y móviles hasta sistemas backend y APIs, donde utilizo tecnologías modernas.',
  },
  {
    icon: <RxRocket />,
    title: 'SEO',
    description: 'Optimización de motores de búsqueda. Investigación de palabras clave, optimización de contenido.',
  },
];

const ServiceSlider = () => {
  return (
    <div>
      <Swiper 
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          960: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={{
          clickable:true
        }}
        modules={[FreeMode, Pagination]}
        className='h-[270px] sm:h-[440px] lg:h-[410px]'
      >
        {
          serviceData.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div className='bg-purple-800 bg-opacity-15 h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-purple-900 bg-opacity-15] transition-all duration-300'>
                  {/* icon */}
                  <div className='text-4xl text-accent mb-4'>{item.icon}</div>
                  {/* title & descr */}
                  <div className='mb-8'>
                    <div className='mb-2 text-lg'>{item.title}</div>
                    <p className='max-w-[350px] leading-normal'>{item.description}</p>
                  </div>
                  {/* arrow */}
                  <div className='text-3xl'>
                    <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300 ' />
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

export default ServiceSlider;
