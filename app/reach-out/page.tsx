"use client"
import { useEffect, useState} from "react"  ;
import { Input } from"@/components/ui/input"
import {Button} from "@/components/ui/button"
import Link from "next/link"
const page = () => {
    const [isSubmitted, setSubmit ] = useState(false);
    const submitform = async ()=>{
        setSubmit(true);
                  //API demo to be sent to the backend 
                //     const data= {/**formadata */}
                // const response = await fetch("/api/server",{
                //     method: "POST",
                //     headers:{"Content-Type":"application/json"},
                //     body:JSON.stringify(data)})


    }
  return (
    <div>
        {!isSubmitted && (
            <>
            <h1>Service recommendation</h1>
             <p>Please write briefly about your expireance with that service and reason of suggestion.</p>
            <Input placeholder="enter response" type="area" className="border-2 border-solid py-20 mt-6" />
            </>
        )
        }
        
        <Button onClick={submitform} className="m-5">Submit</Button>
            {isSubmitted && (<>
            <h1 className="rounded-lg flex px-9 py-4 justify-center m-4">Thank You For Your Response</h1>
          <h3><Link href="/services" >Return</Link></h3>
        </>
            
        )}
    </div>
  )
}

export default page