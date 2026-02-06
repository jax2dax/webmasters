
import Logo from "@/components/Logo"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"    //accordion from shad cn

const Footer = () => {
  return (
    <div className="flex overflow-hidden justify-evenly items-center py-[22vh] px-10 overflow-x-hidden  bg-secondary ">
         <div className="border-solid-2 flex-4  ">
            <h3 className=" ">Contact</h3>
            <p>702-702-6767</p>
            <p>702-000-6969</p>
            
         </div>

         <div className="flex-1">

        <Logo />
         </div>
    </div>
  )
}

export default Footer
/*

<Accordion type="single" collapsible defaultValue="item-1">
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      
    </AccordionContent>
  </AccordionItem>
</Accordion>
*/