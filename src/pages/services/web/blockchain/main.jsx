import { Link } from "react-router-dom";

export default function Blockchain(){
  return(
    <>
    <section className="bg-white dark:bg-gray-900">
    <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
      <h2 className="max-w-2xl mx-auto text-2xl font-semibold tracking-tight text-gray-800 xl:text-3xl dark:text-white">
        Choose a Service{" "}
        
      </h2>
    </div>
  </section>
  
  
  
  <div className="py-16">
    <div className="xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
      <div className="grid gap-12 md:gap-6 md:grid-cols-2 lg:gap-12">
        <div className="group space-y-6">
          <img
            src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
            alt="art cover"
            loading="lazy"
            width={1000}
            height={667}
            className="h-80 w-full rounded-3xl object-cover object-top transition-all duration-500 group-hover:rounded-xl"
          />
          <h3 className="text-3xl font-semibold ">
          Crypto 
          </h3>
          <p className="">
          Revolutionizing Cryptocurrency with Software Solutions
          </p>
          <div className="flex gap-6 items-center">
          <p className="mt-5 inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 group-hover:underline font-medium">
          <Link to="/services/webservice/blockchain/crypto">Discover</Link>
            <svg
              className="w-2.5 h-2.5"
              width={16}
              height={16}
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
              />
            </svg>
          </p>
          
          </div>
        </div>
        <div className="group space-y-6">
          <img
            src="https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
            alt="art cover"
            loading="lazy"
            width={1000}
            height={667}
            className="h-80 w-full rounded-3xl object-cover object-top transition-all duration-500 group-hover:rounded-xl"
          />
          <h3 className="text-3xl font-semibold ">
           WEB 3
          </h3>
          <p className="">
          Unleashing the Power of Blockchain with Our Web3 Development Services
          </p>
          <div className="flex flex-wrap gap-6 items-center">
          <p className="mt-5 inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 group-hover:underline font-medium">
          <Link to="/services/webservice/blockchain/web3">Discover</Link>
            <svg
              className="w-2.5 h-2.5"
              width={16}
              height={16}
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
              />
            </svg>
          </p>
           
          </div>
        </div>
      </div>
    </div>
  </div>
  </>
  
  )
}