

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"    //accordion from shad cn
import { CardImage } from "../../components/CardImg"
import ServiceList from "../../components/CardDataRender"





const serv = () => {
  return (
    <>
    <div className="container">
       <div className='flex flex-wrap relative gap-3 '>
              <ServiceList />
              
            </div>
    </div>
    <Accordion type="single" collapsible defaultValue="item-1">
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
</Accordion>
    </>
  )
}

export default serv