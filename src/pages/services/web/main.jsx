import { Link } from "react-router-dom"
import ContactWeb from "./contact"

export default function Webservice(){
  const companyName="Greathill"
  return(
    <>
    <section className="bg-white dark:bg-gray-900">
    <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
      <h2 className="max-w-2xl mx-auto text-2xl font-semibold tracking-tight text-gray-800 xl:text-3xl dark:text-white">
        Bring your Business to the{" "}
        <span className="text-blue-500">Perfect Web Solution.</span>
      </h2>
      <p className="max-w-4xl mt-6 text-center text-gray-500 dark:text-gray-300">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum quidem
        officiis reprehenderit, aperiam veritatis non, quod veniam fuga possimus
        hic explicabo laboriosam nam. A tempore totam ipsa nemo adipisci iusto!
      </p>
    
    </div>
  </section>


{/* Card Blog */}
<div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  {/* Grid */}
  <div className="grid lg:grid-cols-2 gap-6">
    {/* Card */}
    <a className="group relative block" href="#">
      <div className="flex-shrink-0 relative w-full rounded-xl overflow-hidden w-full h-[350px] before:absolute before:inset-x-0 before:w-full before:h-full before:bg-gradient-to-t before:from-gray-900/[.7] before:z-[1]">
        <img
          className="w-full h-full absolute top-0 left-0 object-cover"
          src="https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1036&q=80"
          alt="Image Description"
        />
      </div>
      <div className="absolute top-0 inset-x-0 z-10">
        
      </div>
      <div className="absolute bottom-0 inset-x-0 z-10">
        <div className="flex flex-col h-full p-4 sm:p-6">
          <h3 className="text-lg sm:text-3xl font-semibold text-white group-hover:text-white/[.8]">
             <Link to="/services/Webservice/website">WEBSITE | WEB APPS</Link>
          </h3>
          <p className="mt-2 text-white/[.8]">
          Transform your online presence with {companyName}'s website and web app development services. Our expert team can help you create powerful, custom solutions that deliver exceptional user experiences and drive business success. Discover how we can help you achieve your online goals today!
          </p>
        </div>
      </div>
    </a>
    {/* End Card */}
    {/* Card */}
    <a className="group relative block" >
      <div className="flex-shrink-0 relative w-full rounded-xl overflow-hidden w-full h-[350px] before:absolute before:inset-x-0 before:w-full before:h-full before:bg-gradient-to-t before:from-gray-900/[.7] before:z-[1]">
        <img
          className="w-full h-full absolute top-0 left-0 object-cover"
          src="https://images.unsplash.com/photo-1639475377520-b256a5d204b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
          alt="Image Description"
        />
      </div>
   
      <div className="absolute bottom-0 inset-x-0 z-10">
        <div className="flex flex-col h-full p-4 sm:p-6">
          <h3 className="text-lg sm:text-3xl font-semibold text-white group-hover:text-white/[.8]">
            <Link to="/services/webservice/blockchain">Blockchain</Link>
          </h3>
          <p className="mt-2 text-white/[.8]">
         
          <Link to="/Blockchain"> Discover the future of secure, transparent transactions with {companyName}'s blockchain services. Our team of experts can help you build and integrate decentralized blockchain solutions that provide unmatched security and transparency for your business. Explore our blockchain services today and unlock the potential of this transformative technology!</Link>
          </p>
        </div>
      </div>
    </a>
    {/* End Card */}
  </div>
  {/* End Grid */}
</div>
{/* End Card Blog */}


<ContactWeb />
      
</>

  
  )
}