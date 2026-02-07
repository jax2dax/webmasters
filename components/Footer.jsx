
import Logo from "@/components/Logo"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"    //accordion from shad cn
import { Github , Mail} from 'lucide-react';

import { navItems } from "./nav-items.ts"

import { Separator } from "@/components/ui/separator"
import Link from "next/link"

const Footer = () => {
  return (
    <>
    <div className=" z-0 h-1/2 bg-secondary pt-18 pb-4  ">
       
        <div className="flex justify-evenly">
            <div className="border-solid-2 flex flex-col justify-evenly text-2xl  ">
             
              <h3 className="text-3xl">Contact</h3>
              <p>702-702-6767</p>
              <p>702-000-6969</p> 
              
                       
            </div>
             <div className="flex flex-col items-evenly justify-end gap-2">
                            <h3 className="text-3xl">Socials</h3>
                            <Link className="" href="https://github.com/jax2dax/webmasters"><Github  className="hover:scale-[1.1] transition-transform ease-in-out "/></Link>
            
                            <Link className="" href="email:healthshieldstsa@gmail.com"><Mail  className="hover:scale-[1.1] transition-transform ease-in-out "/></Link>
                        </div>
            <div className="">
              <Link href="/apply" className="text-green-300 underline">Carrers</Link>
              {navItems.map((items)=>{ 
                  const Icons = items.icon;
                  return(
                    <div className="">
                      
                <Link
                  key={items.label}   
                  href={items.href}  
                  className="   text-green-300 underline "
                  >
                  {items.label}
                </Link>
                </div>
              )})}</div>

        </div>
      <Separator   />
   
         <div className="logo-z italic flex justify-evenly">
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