import Form2 from "../../components/Form2"
import Link from "next/link"
import Add from "../../lib/add/Add"
const Contact = () => {
  return (
    <div>
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
      <h2 className="mt-7 text-green-500 ">Contact us at </h2>
      <div className="flex flex-row max-sm:flex-col gap-13 mx-8 mt-8 mb-30 ">
           
            <div className="border-solid border-2 rounded-3xl border-border  bg-secondary flex-1 flex justify-center flex-col items-center"  >
                <h2>Phone</h2>
                <span className="text-foreground bg-secondary text-3xl max-sm:text-xl "><Link href="tel:+17027026767"  >(702)702 6767</Link></span>
                 <span className="text-foreground bg-secondary text-3xl max-sm:text-xl "><Link href="tel:+17020006969"  >(702)-000-420</Link></span>
          
            </div>
            
            <div className=" border-solid border-2 rounded-3xl max-sm:text-xl border-border  bg-secondary pb-3  flex-1 flex justify-center flex-col items-center"  >
              <h2>Email</h2>
                  <span className="text-foreground bg-secondary text-3xl max-sm:text-xl "><Link href="email:healthshieldstsa@gmail.com"  >healthshieldstsa@gmail.com</Link></span>
           <span className="text-foreground bg-secondary text-3xl max-sm:text-xl "><Link href="email:joshua.2999307@nv.ccsd.net"  >joshua.2999307@nv.ccsd.net</Link></span>
                      <span className="text-foreground bg-secondary text-3xl max-sm:text-xl max-sm:text-xl "><Link href="email:matthew.1675807@nv.ccsd.net"  >matthew.1675807@nv.ccsd.net</Link></span>
                       <span className="text-foreground bg-secondary text-3xl max-sm:text-xl "><Link href="email:clifford.2837403@nv.ccsd.net"  >clifford.2837403@nv.ccsd.net</Link></span>
            </div>
      </div>


      <div id="form"><Form2 /></div>
       
    </div>
  )
}

export default Contact