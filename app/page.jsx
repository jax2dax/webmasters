"use client"
import "@/styles/pack.css"
import Folder from '@/components/Folder'

import { useEffect, useRef } from "react"  ;
import { ReactLenis } from 'lenis/react'
import gsap from 'gsap'
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import Link from "next/link";

import { Separator } from "@/components/ui/separator"


import earpodimg from '../public/health/earpodimg.avif'
import docs3img from '../public/health/docs3img.jpg'
import moneygiveimg from '../public/health/moneygiveimg.jpg'
import twopplcircle from '../public/health/twopplcircle.png'
import familyimg from '../public/health/familyimg.jpg'
import Logo from "@/components/Logo"

//Animations //lottie
import  Lottie from 'lottie-react';
import redheart from '../lib/animation/redheart.json'

//image gallery
import CircularGallery from '../components/CircularGallery'

import {
 ShieldPlus,
 HeartHandshake,
 Activity,
 Lightbulb,
 Siren
} from "lucide-react"  //icons
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);
const page = () => {

  const i1Ref = useRef(null);
    const i2Ref = useRef(null);
      const i3Ref = useRef(null);
      const txt1Ref = useRef(null);
      const txt2Ref = useRef(null);
      const txt3Ref = useRef(null);
      const txt2NonMovingRef = useRef(null);

      const c1Ref = useRef(null);
      const txt4Ref = useRef(null);

      const solotxtRef = useRef(null);
      



  useGSAP(()=>{

    const image1 = i1Ref;
    const image2 = i2Ref;
    const image3 = i3Ref;
    gsap.to(txt1Ref.current,{
      scrollTrigger:{
        trigger:i1Ref.current,
        toggleActions:"restart pause reverse pause",
        //start: "top center"  //trigger viewport 
        markers:false,
        scrub:true,
        pin:true,
        snap:1,
        
      },
      y:-500,
      rotation:0,
      duration:4,
      
      
    });
    //2nd text
    gsap.to(txt3Ref.current,{
      scrollTrigger:{
        trigger:i2Ref.current,
        toggleActions:"restart pause reverse pause",
        //start: "top center"  //trigger viewport 
        markers:false,  //test
        scrub:true,
        pin:true,
        snap:1,   //snap when stopped
        
      },
      y:-400,
      rotation:0,
      duration:3,
      
      
    });

gsap.to(txt2Ref.current,{
      scrollTrigger:{
        trigger:i3Ref.current,
        toggleActions:"restart pause reverse pause",
        //start: "top center"  //trigger viewport 
        markers:false,  //test
        pin:true,
        scrub:true,
        snap:1,
        
      },
      y:-600,
      rotation:0,
      duration:1.7,
      
      
    });
    gsap.to(txt4Ref.current,{
      scrollTrigger:{
        trigger:i3Ref.current,
        toggleActions:"restart pause reverse pause",
        //start: "top center"  //trigger viewport 
        markers:false,
        scrub:true,
      },
      opacity:1,
      y: 20,
      duration:5,
      scale:2
    });
    //solotxt //affordable 
    
    gsap.to(solotxtRef.current,{
      scrollTrigger:{
        trigger:solotxtRef.current,
        toggleActions:"restart pause reverse pause",
        start: "center center",  //trigger viewport 
        end:"top top",
        markers:false,
        scrub:true,
        snap:1,
        onLeave:()=> solotxtRef.current.classList.add("gsap-adjust-ani")
      },
      
      y: 500, 
      xPercent:30,
      duration:5,
      textColor:"#000814",
      backgroundColor:"#000814",
     
    });
    // //2nd text that gets stuck
    // gsap.to(txt3Ref.current,{
    //   scrollTrigger:{ 
    //     trigger:i3Ref.current,
    //     toggleActions:"restart pause reverse pause",
    //     //start: "top center"  //trigger viewport 
    //     markers:true,
    //     pin:txt3Ref.current,
        
    //   },
    //   y:0,
    //   rotation:0,
    //   duration:4,
      
      
    // });




    // ScrollTrigger.create({
    //   trigger: i1Ref.current,
    //   start: "top top",
    //   end: "50vh",
    //   pin: true,
    //   pinSpacing: false
    // });

    // gsap.fromTo(
    //   txt1Ref.current,
    //   { y: "100vh", opacity: 0 },
    //   {
    //     y: 0,
    //     opacity: 1,
    //     scrollTrigger: {
    //       trigger: txt1Ref.current,
    //       start: "top bottom",
    //       end: "center center",
    //       scrub: true,
    //     },
    //   }
    // );




  });


    


  return (
    <>
    <ReactLenis root />
    <div className="z-30 w-full h-100% overflow-hidden">
          <div className="max-sm:flex-col m-0 bg-black" ref={i1Ref}>
            <Image src={earpodimg} height={0} width={100} alt="health care images" unoptimized quality={100}   className="m-0 heroimg i1 " />  {/**border-solid border-2 testing */}
            <div ref={txt1Ref} className="absolute left-1/2 max-sm:left-0  m"><h1 className="text-5xl" style={{fontSize:"5rem"}}>  <Logo /><span className="text-green-800">Health</span> <span  className="text-green-400 ">shields</span > <br /></h1>
            <Separator /><ul className="flex list-b gap-6.5 mx-3 bg-black/30 max-w-1/2 text-green-200"><li>Accurate </li><li>Reliable </li><li>trusted</li></ul>
            <h2 className="border-solid border-2 rounded-2xl  w-50 max-sm:max-w-3/5 flex justify-center"><Link href={"/explore"}>Explore</Link></h2></div>
          </div>
          
          <div className="max-sm:flex-col" ref={i2Ref}>
            <Image src={familyimg} height={0} width={100} alt="health care images fade" unoptimized quality={100}  className="heroimg i1" />
            <div className="absolute left-1/2 max-sm:left-2   "> {/**border-solid border-2 */}
            
            <div ref={txt3Ref} className="flex flex-row-reverse gap-3 justify-evenly max-sm:flex-col" >
              <h1 >We <span  className="text-green-400 ">CARE</span > about your <span  className="text-green-400">HEALTH</span ></h1>
              <div className=" flex  justify-center items-center"><HeartHandshake  width={200} height={200} className="  text-green-600 " ref={txt2Ref} /> {/**border-solid border-2 */}
           </div>
              </div>
               </div>
          </div>
          <div ref={i3Ref} className="max-sm:flex-col" >
            <Lottie animationData={redheart} loop className="heroimg"/>
          <div className="absolute left-1/2  -translate-x-1/2  max-sm:flex-col  "> {/**border-solid border-2 //to check */}
          
           <ShieldPlus  width={200} height={200} className="ml-2  text-blue-600 " ref={txt2Ref} /> {/**border-solid border-2 */}
           </div>
        <div ref={txt4Ref} className="absolute left-1/2 top-55/100 ml-1 mx-auto text-green-600 text-f -translate-x-1/2 opacity-0 "><h1 className=" text-black  ">
         <span className="text-orange-300">Find Your Essential </span>  <span  className="text-blue-400 ml-4 bg-black rounded-2xl px-2"> shield</span ></h1>
          </div>
          </div>
      
     
    </div>


    <section className="container " ref={c1Ref}>
        
<div className="flex flex-wrap flex-row w-full max-sm:flex-col max-sm:w-full overflow-hidden">
  <div className="bg  w-3/5 py-4 pb-8  border-2 border-solid rounded-sm pl-10 bg- max-sm:w-full max-sm:h-auto" >
    <h1 className="mb-14">FAIR SERVICE FOR ALL</h1>
    <div className="big-text">
      Our commitment to health equality is reflected in the <span className="text-green-300">DI</span>
      <span className="text-yellow-400">VER</span><span className="text-red-600">SE</span> communities we serve, helping peoples with wide range of age, sex, and ethnic backgrounds.
      We are proud to provide a platform that that allow people to be equally served regardless of their race, heritage, and identity. Respecting diversity
      is one of our values that guide us to fullfill the needs of the community.
      

    </div>
  </div>

  {/** */}
        <div style={{ height: '100px', position: 'relative'  }} className=" folder-adjust w-auto ">
        <Folder size={1.5} color="#22c55e" className="custom-folder"/></div>

</div>
    </section>


    <section className="container overflow-visible max-sm:overflow-hidden " >
<div className="text-box text-4xl pr-6 big-text leading-13 gap-1 overflow-visible max-sm:m-4">
  
We believe that health care accessability is a neccessity, not a previlage or a luxury. Our mission is to bridge this gap and help you and the community to recieve the reliable services you deserve.
By connecting you to health care centers that both meet your needs and fit your budget . We plan Every Day to deliver reliable service options, giving you options to choose based on your budget plan, 
making it  <div className="m-0 p-0  z-30 text-6xl max-sm:text-5xl rounded-b-3xl ml-0 py-4  max-sm:ml-0 max-sm:bg-none -translate-x-5px pl-4 max-sm:pl-0   max-sm:ml-0 max-sm:-translate-x-12 " ref={solotxtRef}>
  <span className="text-green-500 ml-0 pl-0 z-30" >Affordable</span><span className="text-green-400 ">!</span>
  </div>
  
</div>
<div className="image-box max-sm:rounded-0 mb-0">
  <Image src={moneygiveimg} height={0} width={100} alt="health care images" unoptimized quality={100}  className="" />
  <span className="flex mx-auto text-green-400 mt-7 text-2xl sm:hidden">Your Path to Wellness Made </span>
</div>


    </section>
      
    <section className="flex z-1 sm:pb-60 bg-secondary sm:c2 max-sm:hidden  ">
      <div className="text-box pb-30  text-6xl flex big-text max-sm:overflow-hidden leading-13 gap-1 max-sm:m-4  justify-center items-center ">
       <h1 className="z-10 ">Your Path to Wellness Made </h1><span className="sm:hidden text-2xl mx-auto z-5 text-green-400"> Affordable  </span> 
      </div>
      
      <div className="image-box"></div>
    </section>


     <section className="flex w-full overflow-x-hidden widthadjust-gallery h-full ">
       </section>
       {/**Separe div(not a section) for the gallery */}
    <div className="z-1 container  ">
        <div style={{ height: '600px', position: 'relative' }}>
            <CircularGallery bend={3} textColor="#208a53" borderRadius={0.05} scrollEase={0.02} scrollSpeed={2} />
                <Link href="/explore"><div className="flex w-20 mx-auto   makeshadow  bg-secondary rounded-full justify-center my-0 ">
                    <Lightbulb height={140} width={140} color="#ffe600" className="my-0"/>
                  
                </div>
                </Link>
            <div className="flex w-20 mx-auto applyglow justify-center text-[bold] -translate-y-1 text-[1.2rem]   adjust-explore text-[oklch(58.117% 0.11689 165.691)]">Explore</div>
        </div>
        
    </div>
    </>
  )
}

export default page;
/*
 const tl = gsap.timeline({
      scrollTrigger:{
        trigger:i1Ref.current,
        start:"top top",
        end:"bottom bottom",
        scrub:true,
      }
    });
*/