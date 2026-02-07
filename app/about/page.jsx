
import Added3 from "../../lib/add/add3"
import Link from "next/link"
const page = () => {
  return (
    <div className="c1 h-1/2 ">
      <h1 className="px-7 text-secondary" >About us</h1>
       <div className="text-2xl px-7 py-12 flex flex-col gap-6">
        <p>We are a dedicated team attending <Link href="https://www.sierravistahighschool.org/" className="text-green-400 text-3xl underline">Sierra Vista High School</Link> who built this website to benefit the community and help people get services that are
         <span className="text-green-500">Reliable</span> and <span className="text-green-500">Authentic</span>. 
         </p>
         <p>We built this website by gathering different information from various online sources and accurately organizing them. 
         We worked hard and researched everyday to give you the best experience. </p>
        <p>
          <Link href="/contact/#form" className="text-green-400 text-3xl underline" >Let us know your experience on the website</Link> 

        </p>
       <p>Health Shields  was created to provide support for our community with simple, clear and determined mission. We understand that searching for help, whether it’s healthcare, childcare, urgentcare, emergency or family services can often become overwhelming . 
        That is why we decided to do the main job for people and create a hub for both information exchange and provifing service. 
        </p>
         
          <p> By reccomending studied local community health centers, we work daily to build a more supportive, inclusive, and healthy community where everyone feels seen, supported, and empowered to reach out for help when they need it. 
     </p>
       </div>
        
    </div>
  )
}

export default page