"use client"   
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field"
import {Input} from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { useEffect, useState} from "react"  ;
import {Button} from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { CheckLine } from 'lucide-react';
   

const Form1 = () => {
  
const [isSubmitted, setSubmit ] = useState(false);
     const submitform = async ()=>{
        setSubmit(true);
                  //a demo api sending when db exists
                //     const data= {/**formadata */}
                // const response = await fetch("/api/server",{
                //     method: "POST",
                //     headers:{"Content-Type":"application/
     }
     

 if(!isSubmitted) return (
    
    <form onSubmit={submitform} className=" mx-14 my-8 mb-20 items-center max-sm:min-w-full max-sm:w-full w-[90vw] max-sm:w-[30vw]  ">
         <FieldSet>
  <FieldLegend>Enter Your Message</FieldLegend>
  <FieldDescription></FieldDescription>
  <FieldGroup>
    <Field>
      <FieldLabel htmlFor="name">Full name</FieldLabel>
      <Input id="name" required autoComplete="on" placeholder="Max Well" />
      <FieldDescription>First and Last Name</FieldDescription>
    </Field>
    <Field>
      <FieldLabel htmlFor="email">Email</FieldLabel>
      <Input id="email" required={true} autoComplete="off" placeholder="travisscot@gmail.com" />
      <FieldDescription>Enter your Email</FieldDescription>
    </Field>

      <Field className="w-full max-w-xs">
      <FieldLabel>Where are you located?</FieldLabel>
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Las Vegas, NV" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="NLV">North Las Vegas</SelectItem>
            
            <SelectItem value="Hend">Henderson</SelectItem>
            <SelectItem value="Reno">Reno</SelectItem>
            <SelectItem value="WSLV">West/South Las Vegas</SelectItem>
           
            <SelectItem value="BC">Boulder City</SelectItem>
            <SelectItem value="other">Other(out of state)</SelectItem>
            
          </SelectGroup>
        </SelectContent>
      </Select>
      <FieldDescription>
        Please select Other if your location is out of Nevada.
      </FieldDescription>
    </Field>
    <Input id="content" required placeholder="" className=" w-full h-1/2">
    
    </Input>
    <FieldDescription>
       Please enter the full information on what you found helpful on the service they provided. Give as much detail as possible!
      </FieldDescription>
    <FieldLabel htmlFor="submit" id="submit"><Button className="bg-green-600">Submit</Button></FieldLabel>
     
  </FieldGroup>
</FieldSet>

    </form>
   
  )
  return (
    <div className="w-full  flex justify-center flex-col items-center h-[50dvh]">
      <div className="mx-auto"> <CheckLine color="green" width={120} height={120}/></div>
      <p>Thank You for cooperation</p> we will reach out to you shortly! 
      
    </div>
  )
}

export default Form1