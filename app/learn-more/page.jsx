import Image from 'next/image';
import plusimg from '../../public/health/plussign.png';
import cartoonDoc from  '../../public/health/image.png'
import docCartoon from '../../public/health/cartoondocimg.avif'

const page = () => {
  return (
    <>
    <section className='container'>
          <div className='text-box'>
            <h2>Health Care and Community</h2>
                Community health centers are a national network of over 1,300 safety-net primary care providers, serving more than 31 million patients in 2023. They are located in medically underserved urban and rural communities and serve all patients regardless of their ability to pay, providing a range of medical, behavioral, and supportive services. 
              
                  <a href="https://www.kff.org/medicaid/community-health-center-patients-financing-and-services/"
                  target="_blank"></a>
          </div>
          <div className='image-box'>
            <Image src={docCartoon} width={100} height={0} alt='health images' quality={100} unoptimized></Image>
          </div>
    </section>


   


    <section className='container c2'>
        <div className='text-box'> 
              <h2>Affordable Health Care for All</h2>
              Since the nation’s first health Community Health Centers opened in 1965, expansion of the federally supported health center system to over 1,500 organizations operating over 17,000 sites has created an affordable health care option for up to 52 million people or up to 1 in 7 nationwide and up to 1 in 3 rural residents. Health centers provide care to all patients, regardless of ability to pay.
        <div className='mt-4'>
          Health centers help increase access to crucial primary care by reducing barriers such as cost, lack of insurance, distance, and language for their patients. In doing so, health centers — also called Federally Qualified Health Centers (FQHCs) — provide substantial benefits to the country and its health care system.

        </div>
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
          <Image src={plusimg} width={100} height={0} alt='health images'></Image>
        </div>
    </section>
    </>
  )
}

export default page