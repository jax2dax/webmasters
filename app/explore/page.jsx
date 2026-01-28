

import { CardImage } from "../../components/CardImg"  
import MagicBento from '@/components/MagicBento'  //compact card feature 
import docimg from '../../public/health/familyimg.jpg'
import Image from "next/image";
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import PPLwave from '../../lib/animation/peoplewave'
import { Separator } from "@/components/ui/separator"
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

import smilenurse from '../../public/health/smilenurseimg.jpg'

const explore = () => {
  return (
    <>
    
    <PPLwave />
    <div className="flex gap-2 my-3 ">
      <CardImage2 
            name={"..."}
              badge={"..."}
              image={smilenurse}
              description={"..."}
              contact={"..."}
              email={"..."}
              address={"..."}
              link={null} />
            <CardImage2 
            name={"..."}
              badge={"..."}
              image={smilenurse}
              description={"..."}
              contact={"..."}
              email={"..."}
              address={"..."}
              link={null} />
    </div>
    
    <div className="container mx-auto  px-auto">
      <div className="hi h-100px w-full">blosso</div>
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
     <div className=""> <CardImage className="" />
  </div>
  <div className="container" >
    {/*explore healthcares */}
    
    <section className="container flex-col ">
      <div><h3>Mental Care Institutes</h3></div>
      <div className=" flex flex-row border-2 border-solid max-h-16 ">
        <div className="text-gray-600 text-sm flex-4 justify-center scroll-adjust items-center border-2 border-solid border-amber-300">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, a. 
            Suscipit impedit natus dolore illum asperiores quisquam similique 
            reprehenderit vitae quas. Dicta placeat rem magnam laborum vitae illo quia maiores.
            </p>
            </div>
        <div className=" flex-1 border-2 border-solid object-fit-img-adjust max-h-16">
        <Image src={docimg} height={0} width={100} alt="health care images" unoptimized   className="object-fit-img-adjust" />
        </div>
        

      </div>
    </section>
    <section className="container">
      <div>
        <h1>Help Us Grow ?</h1>
        Health Shields Currently offer the services for our customers only based in Nevada.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio animi officia dolor non minima sed
         exercitationem veniam fugiat perspiciatis voluptatum, accusamus maxime consectetur inventore magni quam! Laborum neque blanditiis saepe?
         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis alias perferendis beatae fuga aliquam reprehenderit cum ab dolore. Mollitia
          neque id, illum exercitationem ipsam vitae odit praesentium hic repudiandae voluptatem?
        <Link href="/" ><Button />
        <Separator /></Link>
      </div>
    </section>


    <section className="container">
      <div>
        <h1>Value & The Shield</h1>
        
      </div>
    </section>







  </div>
  
       
  </div>
    </>
  ) 
}

export default explore