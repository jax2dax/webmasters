

import { CardImage } from "../../components/CardImg"  
import MagicBento from '@/components/MagicBento'  //compact card feature 
import docimg from '../../public/health/familyimg.jpg'
import Image from "next/image";
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import PPLwave from '../../lib/animation/peoplewave'
import { Separator } from "@/components/ui/separator"
import { BowArrow } from 'lucide-react'
import { BriefcaseBusiness } from 'lucide-react'
import { Blocks } from 'lucide-react';

/**sercive Card*/

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"   //base card

import { CardImage2 } from "../../components/CardImg2";
import { CardSmall } from "../../components/SmallCard";
import smilenurse from '../../public/health/smilenurseimg.jpg'

const explore = () => {
  return (
    <>
    <div className="flex max-w-[100vw] justify-center mb-0 pb-0"><span className="text-8xl text-green-500 mb-0 pb-0 translate-y-11 max-sm:text-4xl font-serif max-sm:mb-7 ">Navigate what we have up!</span></div>
    <PPLwave />
    <h1 className="sm:ml-20">Services</h1>
    <div className="flex  gap-2 my-3 z-0 border-b-green-300 border-t-green-300 overflow-hidden border-t-8 border-b-8  border-solid w-max-[2000px] justify-evenly items-center mt-13 py-16 color-gradient1 ">
      <CardImage2 
            name={"..."}
              badge={"..."}
              image={smilenurse}
              description={"..."}
              contact={"..."}
              email={"..."}
              button={"explore services "}
              address={"..."}
              link={"/services"} />
            <CardImage2 
            name={"..."}
              badge={"..."}
              image={smilenurse}
              description={"..."}
              contact={"..."}
              email={"..."}
              address={"..."}
              button={"explore services "}
              link={"/services"} />
              <CardImage2 
            name={"..."}
              badge={"..."}
              image={smilenurse}
              description={"..."}
              contact={"..."}
              email={"..."}
              address={"..."}
              button={"explore services"}
              link={"/services"} 
              className="logo-z max-sm:hidden"/>
    </div>
    
    <div className="container mx-auto  px-auto">
      <div className="hi h-100px w-full"></div>
      <h1>Our Values</h1>
      <MagicBento 
    textAutoHide={true}
    enableStars
    enableSpotlight
    enableBorderGlow={true}
    enableTilt={false}
    enableMagnetism={false}
    clickEffect
    spotlightRadius={400}
    particleCount={30}
    glowColor="0, 255, 64"  //green
    disableAnimations={false}
  />
  <h1>Lend A Hand</h1>
     <div className="gap-2 mx-4 my-16  flex justify-evenly no-shrink overflow-x-scroll"> 
      
      <CardSmall
      title={"Donation"}
    desc={"MedSend"}
    content={"Give Healing and Hope"}
    button={"Donate"}
    link={"/https://medsend.org/give/?gad_source=1&gad_campaignid=22413485437&gbraid=0AAAAAC9EH7HU-DwDaQj3fBGbYJ8-i63FD&gclid=Cj0KCQiAyvHLBhDlARIsAHxl6xpbxk2RU8Bx8FGChnmZtO6xkvBT1T8E3VyM7jQbi8wDK_ptFxNQ80UaAiO1EALw_wcB"}
     />
     <CardSmall
      title={"Donation"}
    desc={"Care Chest"}
    content={"Give the gift of Independence"}
    button={"Donate"}
    link={"https://www.carechest.org/donate-now"}
     />
     <CardSmall
      title={"Donation"}
    desc={"Science Care"}
    content={"Donating Your Body To Science in Nevada"}
    button={"Donate"}
    link={"https://www.sciencecare.com/body-donation-state/nevada"}
     />
     <CardSmall
      title={"Donation"}
    desc={"Science Care"}
    content={"Donating Your Body To Science in Nevada"}
    button={"Donate"}
    link={"https://www.sciencecare.com/body-donation-state/nevada"}
     />
     <CardSmall
      title={"Donation"}
    desc={"Science Care"}
    content={"Donating Your Body To Science in Nevada"}
    button={"Donate"}
    link={"https://www.sciencecare.com/body-donation-state/nevada"}
     />
     
  </div>
  <div className="container" >
    {/*explore healthcares */}
    
    {/* <section className="container flex-col ">
      <div><h3>Mental Care Institutes</h3></div>
      <div className=" flex flex-row border-2 border-solid max-h-16 ">
        
        <div className=" flex-1 border-2 border-solid object-fit-img-adjust max-h-16">
        <Image src={docimg} height={0} width={100} alt="health care images" unoptimized   className="object-fit-img-adjust" />
        </div>
        

      </div>
    </section> */}
    

    <div className="w- my-20 h-auto border-2 border-solid hover:translate-y-1 pl-4 rounded-2xl pb-1.5 pt-0.5 mx-4"><Link href="/learn-more#evaluation">
      <h1><BowArrow width={30} height={30} /> Discover How we Filter and Provide quality service </h1> 
       <Separator />
    <p className="text-gray-600">We dont just evaluate based on big names and popularity, we dig deep into websites 
      and perform a series of inspections that will help us evaluate if it lives upto its name...</p>
      </Link>
    </div>
    
    <div className="w-auto my-20 h-auto border-2 border-solid hover:translate-y-1 pl-4 rounded-2xl pb-1.5 pt-0.5 mx-4 ">
      
        <h1><BriefcaseBusiness width={30} height={30} />Careers</h1>
        <h3>Join our team</h3>
        <Separator />
        <p className="max-w-[1600] ">We are looking for passionate, driven individuals who are ready to make meaningful impact. By following our values, 
          collaborating and respect we believe that we can create a better environment that grows everyday making positive changes in our community. </p>
       
        <span className="bg-green-200 text-black hover:scale-2 px-20 text-3xl"><Link href="/apply" >Apply
        </Link></span>
      </div>

      <div className="w- my-20 h-auto border-2 border-solid hover:translate-y-1 pl-4 rounded-2xl pb-1.5 pt-0.5 mx-4"><Link href="/programs">
      <h1><Blocks width={30} height={30} />Programs and Affiliates</h1>
    <p className="text-gray-600">
       <Separator />
      Join our Latest programs and learn about our affiliates. 
      
    </p>
     <Separator />
      </Link>
    </div>








  </div>
  
       
  </div>
    </>
  ) 
}

export default explore