"use client"
import serviceData from "../lib/servicesList.data"
import { CardImage } from "@/components/CardImg"
import { useState } from "react"
import {  Search  } from 'lucide-react' 
export default function ServiceList() {
  const [search, setSearch] = useState("")

  return (
    <>
      <input
        type="text"
        placeholder="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full h-10 rounded-2xl border-solid border-2 px-4 mt-3"
      />

      <div className="grid gap-6 max-sm:grid-cols-1 mx-5 my-10 ml-2 sm:grid-cols-2 lg:grid-cols-3">
        {serviceData
          .filter((service) =>
            service.name.toLowerCase().includes(search.toLowerCase()) ||
            service.badge.toLowerCase().includes(search.toLowerCase())
          )
          .map((service) => (
            <CardImage
              key={service.id}
              name={service.name}
              badge={service.badge}
              image={service.image}
              description={service.description}
              contact={service.contact}
              email={service.email}
              address={service.address}
              link={service.website}
            />
          ))}
          <CardImage
              key={16}
              name={"ADD Services"}
              badge={"New"}
              image={null}
              description={"Suggest services to us"}
              contact={""}
              email={""}
              address={""}
              link={""}
            />
      </div>
    </>
  )
}
