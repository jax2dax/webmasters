import Image from 'next/image';
import plusimg from '../../public/health/plussign.png';
import cartoonDoc from  '../../public/health/image.png'
import healthkit from '../../public/health/healthkitimg.jpg'
import researchteam from '../../public/health/researchteamimg.jpeg'
import ushealth from '../../public/health/ushealthimg.jpg'
import valueshield from '../../public/health/valueshieldimg.png'

import Link from 'next/link';
const page = () => {
  return (
    <>
    <section className='container'>
          <div className='text-box text-2xl'>
            <h2>Reliable Medical Care</h2>
            Access to reliable health cares is one of the most crucial thing every person should become aware of. People who have a proper health care and service provider are more likely to pay significantly less money and 
            get the proper health care they deserve without running into barriers that prevent people from accesing medical services.
            These reliable centers are known to perform routine screenings, regular check-up schedules, vaccinations and quality services that goes beyond treating injuries and curing illness.
                 
          </div>
          <div className='image-box'>
            <Image src="https://as2.ftcdn.net/jpg/00/96/75/65/1000_F_96756523_GA7bty5yhnfE0WqPUrnzXiYNdSBtyhg4.jpg" width={100} height={0} alt='health images' quality={100} unoptimized></Image>
          </div>
    </section>
    <section className='container'>
          <div className='text-box text-2xl'>
            <h2>Health Care Awareness</h2>
           The most relevant health system characteristics to consider are the availability and capacity of medical care providers who provide services to the uninsured for free or at reduced cost. These often include the presence and size of major safety-net providers, such as public hospitals, some academic medical centers, community health centers, and other free clinics
            that receive private and/or public subsidies to care for the uninsured. 
                  <p className='text-grey-400 italic mt-4'>--<Link className='text-blue-400' href="https://www.kff.org/medicaid/community-health-center-patients-financing-and-services/"
                  target="_blank">Source</Link></p>
          </div>
          <div className='image-box'>
            <Image src={healthkit} width={100} height={0} alt='health images' quality={100} unoptimized></Image>
          </div>
    </section>


   


    <section className='container c2'>
        <div className='text-box'> 
              <h2>Affordable Health Care for All</h2>
              Since the nation’s first health Community Health Centers opened in 1965, expansion of the federally supported health center system to over 1,500 organizations operating over 17,000 sites has created an affordable health care option for up to 52 million people or up to 1 in 7 nationwide and up to 1 in 3 rural residents. Health centers provide care to all patients, regardless of ability to pay.
        <div className='mt-4'>
          Health centers help increase access to crucial primary care by reducing barriers such as cost, lack of insurance, distance, and language for their patients. In doing so, health centers — also called Federally Qualified Health Centers (FQHCs) — provide substantial benefits to the country and its health care system.

        </div>
         <p className='text-grey-400 italic mt-4'>--<Link className='text-blue-400' href="https://data.hrsa.gov"
                  target="_blank">Source</Link> HRSA.gov</p>
        </div>
        
        <div className='image-box'>
            <Image src={plusimg} width={100} height={0} alt='health images' unoptimized ></Image>
        </div>
    </section>


    
    <section className='container'>
        <div className='text-box'>
          <h2>America’s Health Centers are Drivers of Positive Health Outcomes</h2>
          Community Health Centers have understood that where we live, work, worship and play affects our health, also known as non-clinical factors of health. Health centers are experts at reaching beyond the clinic walls to address the barriers to health and well-being their patients face.
        </div>
        <div className='image-box'>
          <Image src={ushealth} width={100} height={0} alt='health images'></Image>
        </div>
    </section>


    {/* <section className='container '>
      <div className='image-box'>
          <Image src={plusimg} width={100} height={0} alt='health images'></Image>
        </div>
        <div className='text-box'>
          <h2>Value and The Shield</h2>
          We act as your professional filter, shielding you from the unreliable standard care and hidden Medical fees.
          </div>
        
    </section> */}
    <section className='container' id='value'>
      <div className='image-box'>
          <Image src={plusimg} width={100} height={0} alt='health images'></Image>
        </div>
        <div className='text-box text-4xl'>
          <h2>Value and The Shield</h2>
          We act as your professional filter, <span className='text-blue-500'>shielding</span> you from the <span className='text-red-600'>unreliable </span>standard care and <span className='text-red-600'>hidden </span>Medical fees.
          </div>
        
    </section>
    <section className='container' id='research'>
      <div className='image-box'> 
          <Image src={researchteam} width={100} height={0} alt='health images'></Image>
        </div>
        <div className='text-box'>
          <h2>The Research Process</h2>
          We are fully aware that the information we provide should be helpful, authentic and trusted.
          To achive this, our <span className="text-green-400">Research</span> team conducts rigorous background checks on every 
          facility you see on our page, to ensure they meet national safety, quality and pass our value-check requirements.
          
          
          </div>
          
        
    </section>
   
<section className='container' id='evaluation'>
      <div className='image-box'> 
          <Image src={"https://img.freepik.com/premium-photo/cartoon-diverse-group-healthcare-professionals_1031776-61806.jpg"} width={100} height={0} alt='health images' quality={100} unoptimized></Image>
     </div>
        <div className="text-box">
        <h2 className='mt-8 '>Behind the scenes</h2>
          <p id="evaluation" className='text-2xl'>
            We look beyond brand names and popularity, we dig deep into websites and perform a series of inspections that
             will help us evaluate if it lives upto its name. To guarantee authenticity, we constantly try to reach out previous patients.
              We ask simple questions about the quality of service they experience via phone calls, sms, email or  
               social media. Currently we are performing various researches
               and performing analysis to transform our  approch from connection-attempt to guaranteed information exchange. 
               We cross refer patient's complaints with official medical and health care board </p>
               <p className='text-2xl'>By referencing these testimonials with official medical records, we provide an unparallel level of
                 <span className='text-green-400'>transparency </span>and <span className='text-green-400'>insights</span>.</p>
      
      </div>
          
        
    </section>

      <h1 className='' id="programs">Our Affiliates and Programs</h1>
      <div class="RESOURCE-GRID">
      <div class="RESOURCE-CARD">
        <img
        src="https://i.imgur.com/7L6TxFl.png"
        alt="VILLA VALLEY Card"
        class="RESOURCE-IMAGE"
        />
        <h3>Villa Valley HS: Minor Educational Funding Program</h3>
        <p>The 'Villa Valley HS: Minor Educational Funding Program' is expected to raise funds for students in need. School supplies, food, and other essentials will be provided. Students may check in with the administrator's office or counselor's office to check elligibility.</p>
      </div>

      <div class="RESOURCE-CARD">
        <img
        src="https://i.imgur.com/L2KfFxp.png"
        alt="Max-Tech Card"
        class="RESOURCE-IMAGE"
        />
        <h3>MAX-TECH Consumer Electronics: Moderate Electronics Funding Program</h3>
        <p>The 'MAX-TECH Consumer Electronics: Moderate Electronics Funding Program' is aimed towards providing chromeboks, desktops and essential electronic devices to students and their schools. This program is in alignment with Nexulus' program. Schools may be subject to elligibility.</p>
      </div>

      <div class="RESOURCE-CARD">
        <img
        src="https://i.imgur.com/BdgCMbN.png"
        alt="Sling Card"
        class="RESOURCE-IMAGE"
        />
        <h3>Sling: Major Software System and Services Funding Program</h3>
        <p>The 'Sling: Major Software System and Services Funding Program' is aimed towards giving students in CCSD, more access to paid software systems and applications. Students K-12 may be elligible.</p>
      </div>

      <div class="RESOURCE-CARD">
        <img
        src="https://i.imgur.com/fqccaCw.png"
        alt="Nexulus Card"
        class="RESOURCE-IMAGE"
        />
        <h3>Nexulus: Moderate Electronics Funding Program</h3>
        <p>The 'Nexulus: Moderate Electronics Funding Program' is targeted towards funding students chromebooks and improving school infrastructure through the use of new electronic hardware.</p>
      </div>

      <div class="RESOURCE-CARD">
        <img
        src="https://i.imgur.com/XRzOQHA.png"
        alt="Provsional Card"
        class="RESOURCE-IMAGE"
        />
        <h3>Provsional: Major Clothing and Shoes Provision Program</h3>
        <p>The 'Provsional: Major Clothing and Shoes Provision Program' goal is to provide low-income families with free (and high quality) shoes, clothes, pants and other essentials. Families with children K-12 are elligible.</p>
      </div>

      <div class="RESOURCE-CARD">
        <img
        src="https://i.imgur.com/RjHYUc5.png"
        alt="Collaterality Card"
        class="RESOURCE-IMAGE"
        />
        <h3>Collaterality Bank: Major Financial Grants Program</h3>
        <p>The 'Collaterality Bank: Major Financial Grants Program' is aimed towards provding financial support for families, children and young adults with them recieving grants for college and scholarship oppurtunities.</p>
      </div>

      <div class="RESOURCE-CARD">
        <img
        src="https://i.imgur.com/xagTZO4.png"
        alt="Wesson's Card"
        class="RESOURCE-IMAGE"
        />
        <h3>Wesson's: Major Grocery Goods Provision Program</h3>
        <p>The goal of 'Wesson's: Major Grocery Goods Provision Program' is to be able to provide low-income families with food and groceries. This program is also in alignment with Provisonal's program.</p>
      </div>

      
    
  </div>
    </>
  )
}

export default page