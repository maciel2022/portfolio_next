import React, {useState} from "react";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
  SiNodedotjs,
  SiPhp,
  SiPycharm,
  SiPython,
  SiCplusplus,
  SiReact,
  SiNativescript,
  SiTailwindcss,
  SiBootstrap,
  SiSwiper,
  SiLaravel,
  SiFastapi,
  SiSass,
  SiGulp,
  SiNpm,
  SiComposer,
  SiPypi,
  SiVite,
  SiVitess,
  SiDocker,
  SiGit,
  SiGithub,
  SiExpress,
  SiRedux,
  SiSolidity,
  SiEthereum,
  SiMysql,
  SiPostgresql,
  SiMariadb,
  SiMongodb,
  SiPhpmyadmin,
} from "react-icons/si";

// components
import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';

// framer motion
import {motion} from 'framer-motion'
import {fadeIn} from '../../variants'

// counter
import CountUp from "react-countup";

//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Lenguajes',
        icons: [
          <SiCplusplus />,
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <SiPhp />,
          <SiNodedotjs />,
          <SiPython />,
          <SiSolidity />,
        ],
      },
      {
        title: 'Librerías',
        icons: [
          <SiReact />, 
          <SiTailwindcss />, 
          <SiBootstrap />,    
          <SiRedux />,   
          <SiSwiper />,    
        ],
      },
      {
        title: 'Frameworks',
        icons: [
          <SiLaravel />, 
          <SiExpress />, 
          <SiNextdotjs />, 
          <SiFastapi />, 
        ],
      },
      {
        title: 'Tools',
        icons: [
          <SiSass />, 
          <SiGulp />, 
          <SiNpm />, 
          <SiComposer />, 
          <SiPypi />, 
          <SiVite />, 
          <SiDocker />, 
          <SiGit />, 
          <SiGithub />,   
          <SiEthereum />, 
        ],
      },
      {
        title: 'Base de Datos',
        icons: [
          <SiMysql />, 
          <SiPostgresql />, 
          <SiMariadb />, 
          <SiMongodb />, 
          <SiPhpmyadmin />, 
        ],
      },
    ],
  },
  {
    title: 'experiencia',
    info: [
      {
        title: 'Full Stack Developer - Freelance',
        stage: '2023 - actualidad',
      },
      {
        title: 'Web Developer - SGFDevs.',
        stage: '2023 - actualidad',
      },
      {
        title: 'Profesor Base de Datos - IFT 194 (Miramar)',
        stage: '2023 - actualidad',
      },
      {
        title: 'SET extruidos - PepsiCo',
        stage: '2017 - 2023',
      },
    ],
  },
  {
    title: 'titulos',
    info: [
      {
        title: 'Técnico Superior en Desarrollo de Software - ISFT 204',
        stage: '2023',
      },
      {
        title: 'Dearrollo Web Completo - Udemy',
        stage: '2023',
      },
      {
        title: 'Agente Propaganda Médica - Instituto Pinos de Anchorena',
        stage: '2012',
      },
      {
        title: 'Técnico en Industria de Procesos - EET 3',
        stage: '2004',
      },
    ],
  },
  {
    title: 'premios',
    info: [
      {
        title: 'Latina Blockchaim Hackathon - Winner',
        stage: '2024',
      },
    ],
  },
];

const About = () => {
  
  const[index, setIndex] = useState(0)

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left ">
      <Circles />
      {/* avatar img */}
      <motion.div
        variants={fadeIn('right', 0.2)} 
        initial='hidden'
        animate='show'
        exit='hidden'
        className='hidden xl:flex absolute max-h-[700px] bottom-0 -left-[370px] z-0'
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6 relative z-10">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2 
            variants={fadeIn('right', 0.2)} 
            initial='hidden'
            animate='show'
            exit='hidden'
            className="h2"
          >
            Historias <span className="text-accent">cautivadoras</span> dan origen a diseños magníficos.
          </motion.h2>
          <motion.p 
            variants={fadeIn('right', 0.2)} 
            initial='hidden'
            animate='show'
            exit='hidden'
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            Hace 2 años comencé a trabajar como desarrollador fullstack freelance. Desde entonces, he colaborado en diversos proyectos, incluyendo trabajos con un ex-profesor, donde he desarrollado productos digitales tanto para uso empresarial como para el consumidor final.
          </motion.p>
          {/* counters */}
          <motion.div 
            variants={fadeIn('right', 0.6)} 
            initial='hidden'
            animate='show'
            exit='hidden'
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8">
            {/* experience */}
            <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
              <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                <CountUp start={0} end={2} duration={5} /> +
              </div>
              <div className="text-xs mx-1 uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                Años de Experiencia
              </div>
            </div>
            {/* clients */}
            <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
              <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                <CountUp start={0} end={15} duration={5} /> +
              </div>
              <div className="text-xs mx-1 uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                Clientes Satisfechos
              </div>
            </div>
            {/* projects */}
            <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
              <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                <CountUp start={0} end={37} duration={5} /> +
              </div>
              <div className="text-xs mx-1 uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                Proyectos Terminados
              </div>
            </div>
            {/* awards */}
            <div className="relative flex-1">
              <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                <CountUp start={0} end={1} duration={5} /> +
              </div>
              <div className="text-xs mx-1 uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                Hackathon Ganada
              </div>
            </div>
            
          </motion.div>
        </div>
        {/* info */}
        <motion.div 
          variants={fadeIn('left', 0.4)} 
          initial='hidden'
          animate='show'
          exit='hidden'
          className="flex flex-col w-full xl:max-w-[48%] h-[570px]">
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4 ">
            {aboutData.map((item, itemIndex) => {
              return (
                <div 
                  key={itemIndex} 
                  className={`${index === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'} cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              )
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div 
                  key={itemIndex} 
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                >
                  {/* title */}
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div>{item.stage}</div>
                  <div className="flex gap-x-4">
                    {item.icons?.map((icon, itemIndex) => {
                      return <div className="text-2xl text-white">{icon}</div>
                    })}
                  </div>
                  
                </div>
              )
            })}
          </div>
        </motion.div>
      </div>

    </div>
  )
};

export default About;
