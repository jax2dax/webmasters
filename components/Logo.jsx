import React from 'react'
import { Activity } from "lucide-react"
import Link from 'next/link'

const Logo = (size  ) => {
  return (
    <div className='w-50'>
      <Link href={"/"}>
    <div className='logo-father flex  glow-logo   h-8 w-max-2  overflow-hidden'>
        <div className='flex-8 h-7 z-20 text-foreground border-amber-200 rounded-2xl px-2  border-solid'>
           <span className='text-green-400 '> HEALTH</span> shields
        </div>

        <div className='flex-2 h-4 -translate-x-13 z-4 '>
        <Activity height={28}  width={35} className=' z-0 text-green-400'  />
       
        </div>
        
        
        
    </div>
    </Link>
    
</div>
  )
}

export default Logo