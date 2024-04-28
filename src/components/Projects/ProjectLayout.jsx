"use client"
import { motion } from 'framer-motion'
import { LinkIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const item={
  hidden:{opacity:0, y:100},
  show:{opacity:1, y:0}
}
const ProjectLayout = ({name,description,date, demoLink}) => {
  return (
    <motion.div 
    variants={item}
    className='text-sm md:text-base flex items-center justify-between w-full relative rounded-lg overflow-hidden p-4 md:p-6 custom-bg'
    >
        <div className='flex items-center justify-center space-x-2'>
            <h2 className='text-foreground'>{name}</h2>
            <p className='text-muted hidden sm:inline-block' > {description} </p>
        </div>
        <div className='flex-1 mx-2 mb-1 bg-transparent border-b border-dashed border-muted'/>
        <Link href={demoLink} target='_blank' className='text-muted sm:text-foreground'>
          <LinkIcon className='w-full h-auto' strokeWidth={1.5}/>
        </Link>
    </motion.div>
  )
}

export default ProjectLayout