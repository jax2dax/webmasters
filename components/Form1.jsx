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
     const submitform = async ()=>{
        setSubmit(true);
                  //a dempo api sending if db existed
                //     const data= {/**formadata */}
                // const response = await fetch("/api/server",{
                //     method: "POST",
                //     headers:{"Content-Type":"application/
     }
     

 if(!isSubmitted) return (
    
    <div className="flex mx-14 my-8 mb-20 justify-center items-center min-w-3xl max-sm:min-w-full max-sm:w-full border-2 border-solid ">
        <FieldSet>
  <FieldLegend>Quick Apply</FieldLegend>
  <FieldDescription></FieldDescription>
  <FieldGroup>
    <Field>
      <FieldLabel htmlFor="name">Full name</FieldLabel>
      <Input id="name" autoComplete="off" placeholder="Evil Rabbit" />
      <FieldDescription>First and Last Name</FieldDescription>
    </Field>

    <Field>
      <FieldLabel htmlFor="adress">City</FieldLabel>
      <Input id="name" autoComplete="off" placeholder="Evil Rabbit" />
      <FieldDescription>enter city name</FieldDescription>
    </Field>
    <Field>
      <FieldLabel htmlFor="adress">Street Address</FieldLabel>
      <Input id="name" autoComplete="off" placeholder="Evil Rabbit" />
      <FieldDescription>enter address</FieldDescription>
    </Field>

    <Field>
      <FieldLabel htmlFor="username">zipcode</FieldLabel>
      <Input id="zipcode" autoComplete="off" aria-invalid />
      <FieldError>Choose another username.</FieldError>
    </Field>
   

    {/**dropdown */}
    <Field className="w-full max-w-xs">
      <FieldLabel>Positions</FieldLabel>
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
        Please select Other if Your profession is not listed.
      </FieldDescription>
    </Field>


    <Field orientation="horizontal">
     
      <FieldLabel htmlFor="submit" id="submit">Resume<Input placeholder="enter response" type="file" name="resume" className="border-2 border-solid " /></FieldLabel>
      
    </Field>
  </FieldGroup>
</FieldSet>

    </div>
   
  )
  return (
    <div>
      Submitted
    </div>
  )
}

export default Form1