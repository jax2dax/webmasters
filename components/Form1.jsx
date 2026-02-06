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


const Form1 = () => {
  
const [isSubmitted, setSubmit ] = useState(false);
     const submitform =  ()=>{
        setSubmit(true);
                  //a demo api sending when db exists
                //     const data= {/**formadata */}
                // const response = await fetch("/api/server",{
                //     method: "POST",
                //     headers:{"Content-Type":"application/
     }
     

 if(!isSubmitted) return (
    
    <form onSubmit={submitform} className=" mx-14 my-8 mb-20 items-center max-sm:min-w-full max-sm:w-full  w-[90vw] max-sm:w-[30vw]  ">
       
        <FieldSet>
  <FieldLegend>Quick Apply</FieldLegend>
  <FieldDescription></FieldDescription>
   <FieldGroup>
    <Field>
      <FieldLabel htmlFor="name">Full name</FieldLabel>
      <Input id="name" required={true} autoComplete="off" placeholder="Max Well" />
      <FieldDescription>First and Last Name</FieldDescription>
    </Field>

    <Field>
      <FieldLabel htmlFor="adress">City</FieldLabel>
      <Input id="city" required autoComplete="off" placeholder="Las Vegas" />
      <FieldDescription>Enter city name</FieldDescription>
    </Field>
    <Field>
      <FieldLabel htmlFor="adress">Street Address</FieldLabel>
      <Input id="adress" required autoComplete="off" placeholder="W.DrZoro blvd 6767" />
      <FieldDescription>Enter address</FieldDescription>
    </Field>

    <Field>
      <FieldLabel htmlFor="username">zipcode</FieldLabel>
      <Input id="zipcode" required autoComplete="off" aria-invalid />
      <FieldError>Enter a valid zipcode</FieldError>
    </Field>

    {/**dropdown */}
    <Field className="w-full max-w-xs">
      <FieldLabel>Available Positions</FieldLabel>
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Choose department" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="dev">Developer-Front-end</SelectItem>
            
            <SelectItem value="marketing">Marketing</SelectItem>
            <SelectItem value="sales">Sales</SelectItem>
            <SelectItem value="support">Customer Support</SelectItem>
           
            <SelectItem value="finance">Finance</SelectItem>
            <SelectItem value="other">other</SelectItem>
            
          </SelectGroup>
        </SelectContent>
      </Select>
      <FieldDescription>
        Please select Other if your profession is not listed.
      </FieldDescription>
    </Field>


    <Field orientation="horizontal">
     Resume<Input placeholder="enter response" type="file" name="resume" className="border-2 border-solid " />
      <FieldLabel htmlFor="submit" id="submit"><Button className="bg-green-600">Submit!</Button></FieldLabel>
      
    </Field>
  </FieldGroup>
</FieldSet>
</form>
   
   
  )
  return (
    <div className="w-full  flex justify-center items-center h-[50dvh]">
     Application Submitted!
    </div>
  )
}

export default Form1