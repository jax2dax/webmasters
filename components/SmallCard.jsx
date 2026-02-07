import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link"

export function CardSmall(
    {title,
    desc,
    content,
    button,
    link
}
) {
  return (
    <Card size="md" className="gap-2 mx-4 my-16  w-min-[40px]  justify-evenly no-shrink overflow-x-scroll ">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          {desc}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          {content}
        </p>
      </CardContent>
      <CardFooter>
        
        <Button variant="outline" size="sm" className="w-full">
            
            <Link href={link}>{button}</Link>
          
        </Button>
      </CardFooter>
    </Card>
  )
}
