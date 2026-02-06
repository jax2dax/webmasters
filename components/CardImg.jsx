//changed the card boiler to accept prps, to render variable data as a map array

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

//to add th eaccordion inside the card
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"  //accordion from shad cn (added for description)

export function CardImage(  //custom props  
{name,
badge,
image,
description,
contact,
email,
address,
link}
) {

  

  
  return (
    <div className=" ">
    <Card className="relative grow-card mx-auto min-w-sm w-full max-w-sm pt-0">
      <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
      <img
        src={image}        
        alt={name}
        className="relative z-20 aspect-video w-full object-cover   grayscale dark:brightness-40 "
      />
      <CardHeader>
        <CardAction>
          <Badge variant="secondary">{badge}</Badge>
        </CardAction>
        <CardTitle>{name}</CardTitle>
        <CardDescription>
          
          {/**  DESCRIPTION */}
          <Accordion type="single" collapsible defaultValue="item-1">
            <AccordionItem value="item-1">
              <AccordionTrigger>More...</AccordionTrigger>
              <AccordionContent>
                {description}{contact} {email}{address}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          {/**---------------- */}

        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button className="w-full"><a href={link} target="_blank" />Visit</Button>
      </CardFooter>
    </Card>

  </div>
  )
}
