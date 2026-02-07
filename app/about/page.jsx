
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
          <Link href="/contact/#form" className="text-green-400 text-3xl underline" >Let us know your expireance on the website</Link> 

        </p>
       <p>Health Shields  was created to find support in our community. Simple, clear, and welcoming for everyone.  We understand that searching for help, whether it’s healthcare, childcare, counseling, or family services can sometimes be overwhelming . That’s why we’ve brought up trusted local resources together in one easy to 
        use platform, so individuals and families can quickly find the information they need.</p>
          <p>
          This hub serves as a central guide to services that support physical health, mental health, and strong family connections.  From local clinics and wellness programs to parenting classes and family counseling, our goal is to provide reliable, real time information that helps users make informed and confident decisions about their care and support options.
          </p>
          <p>Beyond sharing resources, we are committed to strengthening our community through connection and awareness. By highlighting local organizations and encouraging collaboration, we aim to build a more supportive, inclusive, and healthy community where everyone feels seen, supported, and empowered to reach out for help when they need it. 
     </p>
       </div>
        
    </div>
  )
}

export default page