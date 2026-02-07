import Form2 from "../../components/Form2"
import Link from "next/link"
const Contact = () => {
  return (
    <div>
      <h2 className="mt-7 text-green-500 ">Contact us at </h2>
      <div className="flex flex-row max-sm:flex-col gap-13 mx-8 mt-8 mb-30 ">
           
            <div className="border-solid border-2 rounded-3xl border-border  bg-secondary flex-1 flex justify-center flex-col items-center"  >
                <h2>Phone</h2>
                <span className="text-foreground bg-secondary text-3xl "><Link href="tel:+17027026767"  >(702)702 6767</Link></span>
                 <span className="text-foreground bg-secondary text-3xl "><Link href="tel:+17020006969"  >(702)-000-6969</Link></span>
          
            </div>
            
            <div className=" border-solid border-2 rounded-3xl border-border  bg-secondary pb-3  flex-1 flex justify-center flex-col items-center"  >
              <h2>Email</h2>
                  <span className="text-foreground bg-secondary text-3xl "><Link href="email:healthshieldstsa@gmail.com"  >healthshieldstsa@gmail.com</Link></span>
           <span className="text-foreground bg-secondary text-3xl "><Link href="email:joshua.2999307@nv.ccsd.net"  >joshua.2999307@nv.ccsd.net</Link></span>
                      <span className="text-foreground bg-secondary text-3xl "><Link href="email:matthew.1675807@nv.ccsd.net"  >matthew.1675807@nv.ccsd.net</Link></span>
                       <span className="text-foreground bg-secondary text-3xl "><Link href="email:clifford.2837403@nv.ccsd.net"  >clifford.2837403@nv.ccsd.net</Link></span>
            </div>
      </div>


      <div id="form"><Form2 /></div>
       
    </div>
  )
}

export default Contact