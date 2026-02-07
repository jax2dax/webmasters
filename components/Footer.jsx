
import Logo from "@/components/Logo"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"    //accordion from shad cn

import { navItems } from "./nav-items.ts"

import { Separator } from "@/components/ui/separator"
import Link from "next/link"

const Footer = () => {
  return (
    <>
    <div className=" flex-col overflow-hidden justify-baseline  gap-10 z-0 items-center py-[22vh] max-sm:py-[18vh] px-10 overflow-x-hidden h-1/2 bg-secondary ">
       
        <div className="flex  justify-between gap-30 max-sm:gap-10">
            <div className="border-solid-2  text-2xl flex-4  ">
             
              <h3 className=" ">Contact</h3>
              <p>702-702-6767</p>
              <p>702-000-6969</p> 
              <p></p>
            </div>
            <div className="max-sm:flex-col flex-row flex-6">{navItems.map((items)=>{ 
                  const Icons = items.icon;
                  return(
                    <div className="">
                <Link
                  key={items.label}   
                  href={items.href}  
                  className=" flex  text-green-300 justify-center max-sm:ml-8 underline "
                  >
                  {items.label}
                </Link>
                </div>
              )})}</div>

        </div>
      <Separator orientation="vertical"  />
   
         <div className="flex flex-1 justify-center gap-5 logo-z mt-30 ">
           <Logo className="logo-z"/>
          all rights reserved
         </div>
           
    </div>
    </>
  )
}

export default Footer
/*

<Accordion type="single" collapsible defaultValue="item-1">
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      
    </AccordionContent>
  </AccordionItem>
</Accordion>
*/