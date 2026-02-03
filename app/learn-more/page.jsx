import Image from 'next/image';
import plusimg from '../../public/health/plussign.png';
import cartoonDoc from  '../../public/health/image.png'
import docCartoon from '../../public/health/cartoondocimg.avif'
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
            <h2>Health Care Awareness</h2>
            Reliable Health care centers serve as the backbone of proper healthcare, significantly reducing barriers that prevent people from accessing 
            medical services. Beyond treating injuries and illness, these centers give the people preventive care, such as routine screenings, vaccinations
             and chronic disease management. These centers respect the diverse backgrounds of their patients, putting trust that extends even beyon the exam room. 
              
                  <a href="https://www.kff.org/medicaid/community-health-center-patients-financing-and-services/"
                  target="_blank"></a>
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
        <span className='text-sm text-red-400 mt-2 '>-from <Link href="https://data.hrsa.gov">data.hrsa.gov</Link></span>
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
    <div className=' container max-w-9/10'>
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
      <div className="image-box"></div>
      <Image src={""} />
    </div>
    </>
  )
}

export default page