"use client"

import { useEffect, useState } from "react"

const useScreenSize=()=>{
    const [screenSize,setscreenSize] = useState()
    useEffect(()=>{
        function getscreenSize(){
            return window.innerWidth
        }
        function handlescreenSize(){
            setscreenSize(getscreenSize())
        }
        handlescreenSize();
        window.addEventListener('resize',handlescreenSize)
        return ()=> window.removeEventListener('resize',handlescreenSize)
    },[])
    return screenSize;
}
export default useScreenSize