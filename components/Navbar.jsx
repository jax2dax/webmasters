"use client"

import Link from "next/link"
import { navItems } from "./nav-items.ts"

import { ModeToggle } from "./DarkmodeButton.tsx"
import "@/styles/pack.css"
import { useState } from "react"
import Image from "next/image.js"

const  Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);  // track navbar state /if it id open /closed

  return (
    <div > 
        
        <nav className="bg-secondary text-secondary-foreground  p-4 gap-7 flex justify-inbetween w-full max-sm:text items-center  ">
            <div className="w-4/7">NAV 6 </div>
            <button className="sm:hidden" onClick={() => setMenuOpen(!menuOpen)} >list</button>
            



            {navItems.map((items)=>{ 
                const Icons = items.icon;
                return(
                
               <Link
               
                key={items.label}   
                href={items.href}  
                className=" flex items-center justify-between max-sm:hidden glow-nav "

                >
                {items.label}
                <Icons width={20} height={20} className="ml-2"/>
                
                
            </Link>
            )})}

            <ModeToggle />
            </nav>
            {/**mobile nav */}
            <div className={`fixed top-0 left-0 h-full w-3/5 flex flex-col sm:hidden  bg-background px-0  gap-4  transform transition-transform duration-300 
                    ${menuOpen ? "translate-x-0 glass " : " -translate-x-full "}`} > 

                    <button onClick={() => setMenuOpen(false)} className="sm:hidden top-0 right-0 fixed btn1">Close</button>
                    <div className=" my-20 flex flex-col gap-4 "> {/** bg-amber-500 */}
                        {navItems.map((items)=>(
                            <div key={items.label} className="  px-1 py-3 [backdrop-filter:blur(10px)] w-2/3 "> {/**bg-green-400  */}
                                <Link
                                    key={items.label}   
                                    href={items.href}  
                                    className="   justify-between  "
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