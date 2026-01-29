

import { CardImage } from "../../components/CardImg"  
import MagicBento from '@/components/MagicBento'  //compact card feature 
import docimg from '../../public/health/familyimg.jpg'
import Image from "next/image";
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import PPLwave from '../../lib/animation/peoplewave'
import { Separator } from "@/components/ui/separator"
import { BowArrow } from 'lucide-react'

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
    
    <PPLwave />
    <h1>Services</h1>
    <div className="flex gap-2 my-3 justify-evenly items-center mt-13 py-16 color-gradient1 ">
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
              link={"/services"} />
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
     <div className="gap-2 mx-4 my-6 flex justify-evenly"> 
      <CardSmall
      title={"Donate"}
    desc={"Lend a hand for people in need"}
    content={"Hand To Hand Dontation Ppl"}
    button={"Donate"}
    link={"/"}
     />
     <CardSmall
      title={""}
    desc={"Lend a hand for people in need"}
    content={"Hand To Hand Dontation Ppl"}
    button={"Donate"}
    link={""}
     />
  </div>
  <div className="container" >
    {/*explore healthcares */}
    
    <section className="container flex-col ">
      <div><h3>Mental Care Institutes</h3></div>
      <div className=" flex flex-row border-2 border-solid max-h-16 ">
        
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
        <Link href="/contact" >Contact<Button />
        <Separator /></Link>
      </div>
    </section>

    <div className="w-auto h-auto border-2 border-solid hover:translate-y-1 pl-4 rounded-2xl pb-1.5 pt-0.5 "><Link href="/learn-more#evaluation">
      <h1><BowArrow width={30} height={30} /> Discover How we Filter and Provide quality service </h1>
    <p className="text-gray-600">We dont just evaluate based on big names and popularity, we dig deep into websites 
      and perform a series of inspections that will help us evaluate if it lives upto its name...</p>
      </Link>
    </div>

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