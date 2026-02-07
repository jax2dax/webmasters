//changed the card boiler to accept prps, to render variable data as a map array
"use client"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"   //base card
//to add th eaccordion inside the car d
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"  //accordion from shad cn (added for description)
import Image  from "next/image"
import doc3img from '../public/health/docs3img.jpg'
export function CardImage2(  //custom props  
{name,
badge,
image,
description,
contact,
email,
address,
button,
more,
link}
) {

  

  
  return (
    <>
    <Card className="relative grow-card mx-auto min-w-20 w-full z-0  max-w-sm sm:min-w-20 pt-0">
      <div className="absolute inset-0 z-20 aspect-video bg-black/35" />
      <Image
        src= {image}
        height={0}
        width={100}     
        alt={name}
        unoptimized
        className="relative z-10 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40  min-w-20"
      />
      <CardHeader>
        <CardAction>
          <Badge variant="secondary">{badge}</Badge>
        </CardAction>
        <CardTitle>{name}</CardTitle>
        <CardDescription>
          
          {/**  DESCRIPTION */}
          
          {/**---------------- */}

        </CardDescription>
      </CardHeader>
      <CardFooter>
       <a href={link} target="_blank" rel="noopener noreferrer" className="w-full ">
          <Button className="w-full">{button}</Button>
        </a></CardFooter>
    </Card>

  </>
  )
}
