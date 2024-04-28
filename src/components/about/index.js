import React from 'react'
import ItemLayout from './ItemLayout'


const Aboutdetails = () => {
  return (
    <section className='py-0 w-full'>
        <div className='grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full'>
            <ItemLayout className={'col-span-full lg:col-span-8 row-span-2 flex-col items-start'}>
                <h2 className=' text-xl md:text-2xl text-left w-full capitaize'>
                    Arhitect of Enhancement
                </h2>
                <p className='font-light text-xs sm:text-sm md:text-base'>
                I am an engineering student in Computer Science Engineering from Maharaja Agrasen Institute of Technology ,GGSIPU.
                </p>
            </ItemLayout>
            <ItemLayout className={'col-span-full xs:col-span-6  lg:col-span-4 text-accent'}>
                <p className='font-semibold w-full text-left text-1xl sm:text-1.5xl'>
                B.Tech in Computer Science (2021-25)
                    {/* 5+ <sub className='font-semibold text-base'> clients</sub> */}
                </p>
            </ItemLayout>
            <ItemLayout className={'col-span-full xs:col-span-6  lg:col-span-4 text-accent'}>
                <p className='font-semibold w-full text-left text-2xl sm:text-5xl' >
                    4+ <sub className='font-semibold text-base'> months of work-ex</sub>
                </p>
            </ItemLayout>
            <ItemLayout className={'col-span-full'}>
                <img className='w-full h-auto' src="https://skillicons.dev/icons?i=js,html,css,aws,babel,bootstrap,mongodb,mysql,vscode,npm,nodejs,nextjs,firebase,d3,react,redux,tailwind,threejs,vercel,vite,git,github,jquery"
                alt="icons" loading='lazy'/>
            </ItemLayout>

        </div>
    </section>
  )
}

export default Aboutdetails