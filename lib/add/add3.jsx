



const page = () => {
  return (



    
       
    
        
    <div>
        



<div className="TOP-TAB">
 

<div class="below-header-content">
<div v-if="currentPage==='home'">
<h1 class="MAIN-TITLE">title</h1>
<p class="MAIN-PARAGRAPH">paragraph</p>

<div class="section-divider">
  <div class="content-area">
  <div v-if="currentSection==='mission'">
    <h2 class="GREEN-SECTION-HEADER">Our mission at Sustainal</h2>
  </div>

  <div v-if="currentSection==='plans'">
    <h2 class="GREEN-SECTION-HEADER">Our plans moving forward</h2>
  </div>

  <div v-if="currentSection==='resources'" >
    <h2 class="GREEN-SECTION-HEADER">Resources and Programs</h2>
  </div>

</div>
</div>


<div class="CONTENT-AREA">
  <div v-if="currentSection==='mission'" class="MISSION">
    <p class="mission-text">
      Our mission at sustainal is to be able to provide not just food and water for those in need, but other resources to reach a broader audience. Here at sustainal, we offer other resources such as clothes, financial help, grants, electronics and educational assistance!
    </p>
    <img
    src="https://i.imgur.com/rIRzbxE.png"
    alt="Crowd Banner Image"
    class="BANNER-IMAGE"
    />
  </div>

  <div v-if="currentSection==='plans'" class="PLANS">
    <p class="future-plan">
      At sustainal we hope to continue providing for students and adults alike! In the coming future, we hope to collaborate and gain more affiliates to help our cause. 
    </p>
  <div class="METRIC-CARD">
    <h2 class="METRIC-TITLE">Projected Impact Estimates</h2>
      <img
        src="https://i.imgur.com/MUMxO6J.png"
        alt="Impact Metrics"
        class="IMPACT-IMAGE"
      />
  </div>

  </div>

  <div v-if="currentSection==='resources'" class="RESOURCES">
    <h2 class="RESOURCE-HEADER">
      AFFILIATE PROGRAMS
    </h2>
    <p class="RESOURCE-PARAGRAPH">
     
    </p>

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
  </div>

</div>
</div>

{/**===== */}

<div v-if="currentPage==='affiliates'" div class="AFFILIATES-PAGE" className="text">
    <h2>Affiliate Organizations</h2>
    <p>affiliateParagraph</p>
  
  <div className="IMAGE-DIVIDER">
    <div className="VILLA-VALLEY-LOGO">
      <img
        src="https://i.imgur.com/7L6TxFl.png"
        alt="Villa Valley Banner"
      />
    </div>
  </div>
  
  <div className="IMAGE-DIVIDER">
    <div className="MAX-TECH-LOGO">
      <img
        src="https://i.imgur.com/L2KfFxp.png"
        alt="Max Tech Banner"
      />
    </div>
  </div>

  <div className="IMAGE-DIVIDER">
    <div className="SLING-LOGO">
      <img
        src="https://i.imgur.com/BdgCMbN.png"
        alt="Sling Banner"
      />
    </div>
  </div>

  <div className="IMAGE-DIVIDER">
    <div className="NEXULUS-LOGO">
      <img
        src="https://i.imgur.com/fqccaCw.png"
        alt="Nexulus Banner"
      />
    </div>
  </div>

  <div className="IMAGE-DIVIDER">
    <div className="PROVISIONAL-LOGO">
      <img
        src="https://i.imgur.com/XRzOQHA.png"
        alt="Provsional Banner"
      />
    </div>
  </div>

  <div className="IMAGE-DIVIDER">
    <div className="COLLATERALITY-LOGO">
      <img
        src="https://i.imgur.com/RjHYUc5.png"
        alt="Collaterality Banner"
      />
    </div>
  </div>

  <div className="IMAGE-DIVIDER">
    <div className="WESSONS-LOGO">
      <img
        src="https://i.imgur.com/xagTZO4.png"
        alt="Wesson's Banner"
      />
    </div>
  </div>
</div>
{/** */}


    </div>
    





       
        
    </div>




</div>
  )
}

export default page