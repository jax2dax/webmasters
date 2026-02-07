"use client"

import Link from "next/link"
import { navItems } from "./nav-items.ts"

import { ModeToggle } from "./DarkmodeButton.tsx"
import "@/styles/pack.css"
import { useState } from "react"
import Image from "next/image.js"
import Logo from "@/components/Logo.jsx"
import { List } from 'lucide-react'

const  Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);  // track navbar state /if it id open /closed
    //auto close if left open
    if(menuOpen){
        setTimeout(() => {
            setMenuOpen(false);
        }, 6000);
    }

  return (
    <div className="overflow-x-hidden"> 
        
        <nav className="bg-secondary text-secondary-foreground  p-4 gap-10 flex justify-inbetween overflow-x-hidden scroll-0 max-sm:text items-center w-[100vw] ">
            <div className="w-3/7"><Logo size={2} /> </div>
           
            



            {navItems.map((items)=>{ 
                const Icons = items.icon;
                return(
                
               <Link
               
                key={items.label}   
                href={items.href}  
                className=" flex items-center flex-nowrap justify-between max-sm:hidden glow-nav "

                >
               <span className="max-md:hidden">{items.label}</span> 
                <Icons width={20} height={20} className="ml-2"/>
                
                
            </Link>
            )})}
             <button className="sm:hidden flex-1 flex justify-end" onClick={() => setMenuOpen(!menuOpen)} ><List  /></button>
            <div className="max-sm:hidden"><ModeToggle className="flex-1" /></div>
            
            </nav>
            {/**mobile nav */}
            <div className={`fixed top-0 left-0 h-full w-5/6 flex flex-col sm:hidden z-20 bg-background px-0  gap-4  transform transition-transform duration-300 
                    ${menuOpen ? "translate-x-0 glass " : " -translate-x-full "}`} > 

                    <button onClick={ () => setMenuOpen(false)} className="sm:hidden top-0 right-0 fixed btn1 mr-2 mt-3 ">Close</button>
                    <div className="ml-2 mt-3 "><ModeToggle /></div>
                    <div className=" my-20 flex flex-col gap-4 "> {/** bg-amber-500 */}
                        {navItems.map((items)=>(
                            <div key={items.label} className="  px-1 py-3 mx-auto [backdrop-filter:blur(10px)] w-2/3 "> {/**bg-green-400  */}
                                <Link
                                    key={items.label}   
                                    href={items.href}  
                                    className="   justify-between  "
                                     onClick={ () => setMenuOpen(false)}
                                    >
                                    {items.label}
                                </Link>
                                </div>
                        
                        ))}
                    </div>
            </div>
            
    </div>
  )
}

export default Navbar