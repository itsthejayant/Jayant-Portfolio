import Image from "next/image";
import bg from '../../../../public/background/about-background.png'
import RenderModel from "@/components/RenderModel";
// import Hat from "@/components/models/Hat";
import Aboutdetails from "@/components/about";
import dynamic from "next/dynamic";

const Hat = dynamic(()=> import("@/components/models/Hat"),{ssr: false})


export default function Home() {
  return (
    <>
      <Image src={bg}  priority sizes="100vw" alt="background-image"  className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-55 "/>
      <div className="w-full h-3/5 xs:h-3/4 sm:h-screen absolute top-1/2 -translate-y-1/2 left-0">
      <RenderModel>
          <Hat/>
      </RenderModel>
      </div>
      <div className="relative w-full h-screen flex flex-col items-center justify-center">
        <div className="absolute flex flex-col items-center text-center top-1/2 sm:top-[60%] left-1/2 -translate-y-1/2 -translate-x-1/2 space-y-2">
          <h1 className="font-bold text-5xl xs:text-6xl sm:text-6xl lg:text-7xl text-accent">Jayant Aggarwal</h1>
          <p>Meet the wizard behind the portfolio</p>
        </div>
      </div>
      <Aboutdetails/>
    </>
  );
}
