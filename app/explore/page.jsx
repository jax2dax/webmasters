

import { CardImage } from "../../components/CardImg"  
import MagicBento from '@/components/MagicBento'  //compact card feature 
import docimg from '../../public/health/familyimg.jpg'
import Image from "next/image";
import Link from 'next/link'

const explore = () => {
  return (
    <>
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

  </div>
  
       
  </div>
    </>
  ) 
}

export default explore