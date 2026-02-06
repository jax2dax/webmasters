"use client"
import serviceData from "../lib/servicesList.data"
import { CardImage } from "@/components/CardImg"
import { useState } from "react"
import {  Search  } from 'lucide-react' 
import four04 from '../public/health/four04.png'
import { CardImage2 } from "./CardImg2";
import serv from "../app/services/page"
import Link from "next/link"

export default function ServiceList() {
  const [search, setSearch] = useState("");
   const finalData =  serviceData.filter((service) =>
                service.name.toLowerCase().includes(search.toLowerCase()) ||
                service.badge.toLowerCase().includes(search.toLowerCase())
          );

  return (
    <>
      <input
        type="text"
        placeholder="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full h-10 rounded-2xl max-w-9/10  border-solid border-2 px-4 mt-3"
      />

      <div className="grid gap-6 max-sm:grid-cols-1 mx-5 my-10 ml-2 sm:grid-cols-2 lg:grid-cols-3">
        {  finalData.length > 0 ? (
          finalData.map((service) => (
            <>
            <CardImage
              key={service.index}
              name={service.name}
              badge={service.badge}
              image={service.image}
              description={service.description}
              contact={service.contact}
              email={service.email}
              address={service.address}
              link={service.website}
            />
           
            </>
            
            
            
          ))
        ):
        (  <Link href="/contact/#form"><CardImage2 
          name={"We Found Nothing"}
            badge={"..."}
             image={four04}
            description={"Suggest services to us"}
            contact={"..."}
            email={"..."}
            button={null}
            address={"..."}
            link="/contact" />
            </Link>)
      
          }

 <Link href="/contact/#form"><CardImage
              name={"Suggest Services?"}
              badge={""}
              image={null}
              description={"Suggest services"}
              contact={""}
              email={""}
              address={""}
              link="/contact"
            />
            </Link>
          
          
</div>
</>
  )
}
