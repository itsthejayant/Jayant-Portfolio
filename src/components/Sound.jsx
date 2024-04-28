"use client"
import { motion } from 'framer-motion'
import { Volume, Volume2Icon, VolumeX } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

// const Modal = ({onClose, toggle})=>{
//     return createPortal(
//         <div className='fixed inset-0 bg-background/60 background-blur-sm flex items-center justify-center'>
//             <div className='bg-background/20 border border-accent/30 border-solid backdrop-blur-[6px]
//             py-8 px-6 xs:px-10 sm:px-16 rounded shadow-glass-inset text-center space-y-8'>
//             <p className='font-light'>Do you like to play the backgorund music?</p>
//             <div className='flex items-center justify-center space-x-4'>
//                 <button onClick={toggle} className='px-4 py-2 border border-accent/30 border-solid hover:shadow-glass-sm rounded mr-2'>Yes</button>
//                 <button onClick={onClose} className='px-4 py-2 border border-accent/30 border-solid hover:shadow-glass-sm rounded'>No</button>
//             </div>
//             </div>
//         </div>,
//         document.getElementById("my-modal")
//     )
// }

const Sound = () => {
    const audioref =useRef(null)
    const [isPlaying,setisPlaying] = useState(false)
    // const [showmodal, setshowmodal] = useState(false)

    // const handleinteraction =()=>{
    //     const musicconsent = localStorage.getItem("musicconsent");
    //     if(musicconsent === "true" && !isPlaying){
    //         audioref.current.play()
    //         setisPlaying(true);
    //     }
    //     ["click", "keydown","touchstart"].forEach((event)=>{
    //         document.removeEventListener(event,handleinteraction)
    //     })
    // }

    // useEffect(()=>{
        // const consent = localStorage.getItem('musicconsent')
        // const consentTime = localStorage.getItem('consentTime') 
        // if(consent && consentTime && new Date(consentTime).getTime() + 3*24*60*60*1000 > new Date() ){
        //     setisPlaying(consent === "true")
        //     if(consent === "true"){
        //         ["click", "keydown","touchstart"].forEach((event)=>{
        //             document.addEventListener(event,handleinteraction)
        //         })
        //     }
        // }
        // else{
        //     setshowmodal(true)
        // }
    // })
    const toggle = ()=>{
        // const newState = !isPlaying;
        setisPlaying(!isPlaying)
        !isPlaying ? audioref.current.play() : audioref.current.pause()
        // localStorage.setItem("musicconsent",String(newState))
        // localStorage.setItem("consentTime", new Date().toString())
        // setshowmodal(false)
    }
  return (
    <div className='fixed top-4 right-2.5 xs:right-4 z-50 group'>
        {/* {
            showmodal && <Modal onClose={()=>setshowmodal(false)} toggle={toggle}/>
        } */}
        <audio ref={audioref} loop  >
            <source src={"/audio/harrypotter.mp3"} type="audio/mpeg"/>
            your browser does not support the sudio element.
        </audio>
        <motion.button 
        onClick={toggle}
        initial={{scale:0}}
        animate={{scale:1}}
        transition={{delay:1}}
        className= "w-10 h-10 xs:w-14 xs:h-14 text-foreground rounded-full flex items-center justify-center custom-bg z-50 p-2.5 xs:p-4 cursor-pointer"
        aria-label={'home'} 
        name={'home'}>
         {
            isPlaying ? (
                <Volume2Icon className='w-full h-full text-foreground group-hover:text-accent' strokeWidth={1.5}/>
            ):(
                <VolumeX className='w-full h-full text-foreground group-hover:text-accent' strokeWidth={1.5}/>
            )
         }
        </motion.button>
    </div>
  )
}

export default Sound