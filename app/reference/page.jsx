import React from 'react'
import Link from "next/link"
import '../../styles/docs.css'

//span-
const Docs = () => {
  return (
    <div className='main'>
        <h1>Technologies Used</h1>
        <h3>programming langauges used </h3>
             <p>  HTML, Javascript, CSS</p>
        <h1>Coding setup and extensions</h1>
        <p>Code editor-<span className=''>VS Code</span></p>
       <p>React Version -ES9/ Latest </p> 
        <h1> VS code EXtensions used</h1>
        <ul>
            <li>

                <span>ES7 + React/Redux/React- native snippets</span> --react snippets to save time 
            </li>
            <li><span>Tailwind CSS IntelliSense</span> --Tail wind snippets to save time</li>
        </ul>
        <h1>Deployment and Runtime</h1>
        <p><Link href="https://vercel.com"><span>Vercel</span></Link>- for deploying project
        </p>
        <p><Link href="github.com"><span>Git & Git-Hub</span></Link> Version Control and deployment</p>
         
        
        


        <p><span>Frameworks</span>Next.js javascript framework</p>
        <h1>front end technologies</h1>
        <ul>
            <li>React</li>
            <li>Tailwind</li>
            <li>GSAP</li>

        </ul>
        <h1 className='mt-7'>Libraries Used</h1>
        <h2>React Component libraries</h2>
        <p> <Link href="shadcn.ui"></Link><span>Shadcn</span> library that contains premade components that can be imported and used. </p>
        {/* <p>Usage: We used it to import buttons, Cards, </p> */}
        <p><Link href="https://www.reactbits.dev"><span>Reactbits</span></Link>library that contains premade components that can be imported and used. </p>
    <p><Link href="https://app.lottiefiles.com/"><span>Lucide React</span></Link> Library for Icons in the form of React Component</p>
    <p><Link href="lottie.dev"><span>Lottie Files</span></Link> Library for short animation components. Animations are imported as JSON and then converted into file.  </p>
    <p><Link href="lenis.com"><span>Lenis</span></Link> imported a single component, to give smoother scroll, and avoid sroll vibrations.</p>
    <p><Link href="lucide.dev"><span>Lucide react</span></Link> Library of Icons in the form of components.</p>
    <p><Link href="https://fontsource.org/"><span>Fontsource</span></Link> imported font-mono from Fontsource</p>

    <h1 className=''>Shadcn </h1>
    <p>Initialization- npx shadcn@latest init</p>
    <p>We believe that using modern technologies and creating clean UI in our site was a milestone that we needed to achieve. We used modern components offered by <span>Shadcn</span>, as it offered various components that can be themed, flexible,  scalable and customizable.</p>
    Shadcn was used on multiple pages of our site to import: buttons, Cards, Separator, Aadge, Accordion, Field, Inputgroup, dropdown-menu and Select components.
    <p>Integrating <span>Darkmode</span> was also made possible due to easy theming offered by shadcn.<span className='shade'>npm install next-themes</span></p>
            
  <h1 className='gsap'>GSAP</h1>
  <p>Initialization - <span className='shade'>npm i gsap @gsap/react</span></p>
    <p>GSAP's animation was also used to animate more Complex animations that integrated with the DOM. 
        Using the traditional animation was not convinient for the website; Ability to animate based on advanced settings was enabled to us by GSAP.  </p>
        
<h1>Lottie</h1>
<p>Initialization - <span className='shade'>npm i lottie-react </span></p>
<p>Was used in our website mainly because it offered animation in the form of components rather than a viedo(unpredictable incase the link crashed, slowed loading time)
    The animations imported from Lottie were saved in the form of JSON and are located on the <span className="shade">/lib/animation</span>. And they are imported and used in muliple pages(eg./eplore/page.jsx , /page.jsx).
</p>

<h1>Complete Log</h1>
<p><span className="shade">npx create-next-app@latest</span></p>
<p><span className="shade">npx shadcn@latest init</span></p>
<p><span className="shade">npm install next-themes </span></p>
<p><span className="shade">npx shadcn@latest add button</span></p>
<p><span className="shade">npx shadcn@latest add dropdown-menu</span></p>
<p><span className="shade">npm install @fontsource-variable/public-sans</span></p>
<p><span className="shade">npm  shadcn@latest add card </span></p>
<p><span className="shade">npx shadcn@latest add badge </span></p>
<p><span className="shade">npx shadcn@latest add accordion </span></p>
<p><span className="shade">npx shadcn@latest add select </span></p>
<p><span className="shade">npx shadcn@latest add field </span></p>
<p><span className="shade">npx shadcn@latest add separator </span></p>
<p><span className="shade">npx shadcn@latest add input-group</span></p>
<p><span className="shade"> npm i lottie-react</span></p>
<p><span className="shade">npx shadcn@latest add @react-bits/MagicBento-JS-CSS</span></p>
<p><span className="shade">npm i gsap @gsap/react</span></p>
<p><span className="shade">npm i lenis</span></p>
<p><span className="shade">npx shadcn@latest add @react-bits/Folder-JS-CSS </span></p>
<p><span className="shade"></span></p>
<h1>Images</h1>
<h3>Imported</h3>
<p><Link href="https://www.medifind.com/news/post/problems-us-healthcare-system"> docs3img<span className='imagelinks'> https://www.medifind.com/news/post/problems-us-healthcare-system</span></Link></p>
<p><Link href="https://unsplash.com/s/photos/health-care"> earpod <span className='imagelinks'> https://unsplash.com/s/photos/health-care</span></Link></p>
<p><Link href="https://www.kff.org/health-costs/americans-challenges-with-health-care-costs/ ">affordstatsimg <span className='imagelinks'> https://www.kff.org/health-costs/americans-challenges-with-health-care-costs/ </span></Link></p>
<p><Link href="https://www.inter-cert.net/news/a-new-era-of-healthcare-inside-iso-7101-the-first-international-standard-for-healthcare-quality-managment/">twopplcircle 
     <span className='imagelinks'>https://www.inter-cert.net/news/a-new-era-of-healthcare-inside-iso-7101-the-first-international-standard-for-healthcare-quality-managment/ </span></Link></p>
<p><Link href="https://www.howtomoney.com/giving-away-money-will-make-you-richer/"> givingmoneyimg  <span className='imagelinks'>https://www.howtomoney.com/giving-away-money-will-make-you-richer/ </span></Link></p>
<p><Link href="https://www.istockphoto.com/photos/community-health-care"> familyimg <span className='imagelinks'>https://www.istockphoto.com/photos/community-health-care </span></Link></p>
<p><Link href=" https://www.istockphoto.com/photos/doctor-smiling"> smilenurseimg <span className='imagelinks'> https://www.istockphoto.com/photos/doctor-smiling </span></Link></p>
<p><Link href="https://www.rand.org/randeurope/research/projects/2018/the-healthcare-improvement-studies-institute.html"> researchimg 
    <span className='imagelinks'> https://www.rand.org/randeurope/research/projects/2018/the-healthcare-improvement-studies-institute.html</span></Link></p>
<p><Link href="https://depositphotos.com/illustrations/health-care.html "> healthcarekitimg  <span className='imagelinks'>https://depositphotos.com/illustrations/health-care.html  </span></Link></p>
<p><Link href="https://stockcake.com/i/magnifying-research-details_829031_841227"> magnifyimg  <span className='imagelinks'>https://stockcake.com/i/magnifying-research-details_829031_841227 </span></Link></p>
<p><Link href="https://www.value-shield.com/"> valueshieldimg <span className='imagelinks'>https://www.value-shield.com/ </span></Link></p>
<p><Link href="https://visitworld.today/blog/1805/the-american-health-care-system-an-in-depth-guide-for-expats"> ushealthiimg <span className='imagelinks'> https://visitworld.today/blog/1805/the-american-health-care-system-an-in-depth-guide-for-expats</span></Link></p>
<p><Link href=""> <span className='imagelinks'> </span></Link></p>
<p><Link href=""> <span className='imagelinks'> </span></Link></p>

<h3>URLS</h3>
       <p> <Link href="https://thehill.com/wp-content/uploads/sites/2/2022/08/CA_healthcare_08052022istock-e1706717522500.jpg?strip=1" >https://thehill.com/wp-content/uploads/sites/2/2022/08/CA_healthcare_08052022istock-e1706717522500.jpg?strip=1</Link></p>
       <p> <Link href="https://officersurvey.com/wp-content/uploads/2023/03/community-policing-1-1.jpeg " >https://officersurvey.com/wp-content/uploads/2023/03/community-policing-1-1.jpeg </Link></p>
       <p> <Link href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCuqMCcqj8n6q6qGbDIGGLdQlfx9IwKp9I8w&s" >https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCuqMCcqj8n6q6qGbDIGGLdQlfx9IwKp9I8w&s</Link></p>
       <p> <Link href="https://media.istockphoto.com/id/543351810/photo/your-health-in-our-hands.jpg?s=612x612&w=0&k=20&c=7BH8bzadRsJY6U-doPfgkKlralnCZ38Z9S5G6-1niA0=" >https://media.istockphoto.com/id/543351810/photo/your-health-in-our-hands.jpg?s=612x612&w=0&k=20&c=7BH8bzadRsJY6U-doPfgkKlralnCZ38Z9S5G6-1niA0=</Link></p>
       <p> <Link href="https://www.outcomes.com/hs-fs/hubfs/vv.jpg?width=1859&height=690&name=vv.jpg" >https://www.outcomes.com/hs-fs/hubfs/vv.jpg?width=1859&height=690&name=vv.jpg </Link></p> 
      <p> <Link href="https://www.advicescout.com/wp-content/uploads/2023/07/role-of-research-scientific-advancement.png" >https://www.advicescout.com/wp-content/uploads/2023/07/role-of-research-scientific-advancement.png</Link></p>
      <p> <Link href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWkir6XY2ZOLsWmBXausTen9DQ0exmTy7-GA&s" >https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWkir6XY2ZOLsWmBXausTen9DQ0exmTy7-GA&s</Link></p>
    </div>

  )
}

export default Docs