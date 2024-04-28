"use client"
import Image from "next/image";
import bg from '../../public/background/home-background.png'
import RenderModel from "@/components/RenderModel";
// import Wizard from "@/components/models/Wizard";
import Navigation from "@/components/navigation";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import dynamic from "next/dynamic";
import { useLoader } from "@react-three/fiber";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Wizard = dynamic(()=> import("@/components/models/Wizard"),{ssr: false});

export default function Home() {
  const [showWizard, setShowWizard] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWizard(true);
    }, 2000);
  
    return () => clearTimeout(timer);
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative ">
      <Image priority sizes="100vw" src={bg} alt="background-image" fill className="-z-50 w-full h-full object-cover object-center opacity-50 "/>
      {/* here -z-10 is not mentioned */}
      <div className="w-full h-screen">
        <Navigation/>
          <RenderModel>
           {showWizard && <Wizard />}
          </RenderModel>
      </div>
    </main>
  );
}
