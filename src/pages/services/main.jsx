import { Link } from "react-router-dom";
import iot from './iot.jpg';
import web from './web.png';
import mobile from './mobile.jpg';





export default function Services() {
  return (
<>
<>
 
  {/* ========== MAIN CONTENT ========== */}
  <section className="bg-white dark:bg-black">
  <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
    <h2 className="max-w-2xl mx-auto text-2xl font-semibold tracking-tight text-gray-800 xl:text-3xl dark:text-white">
      Bring your Business to the{" "}
      <span className="text-blue-500">next level.</span>
    </h2>
    <p className="max-w-4xl mt-6 text-center text-gray-500 dark:text-gray-300">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum quidem
      officiis reprehenderit, aperiam veritatis non, quod veniam fuga possimus
      hic explicabo laboriosam nam. A tempore totam ipsa nemo adipisci iusto!
    </p>
    <div className="inline-flex w-full mt-6 sm:w-auto">
      <a
        href="#"
        className="inline-flex items-center justify-center w-full px-6 py-2 text-white duration-300 rounded-lg  focus:ring focus:ring-blue-300 focus:ring-opacity-80"
      >
       ✅
      </a>
    </div>
  </div>
</section>

  <main id="content" role="main">
    {/* Nav */}
    
    <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8 min-h-[75rem]">
  
    
      <>
  {/* Card Blog */}
  <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    {/* Title */}
    <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
      <h2 className="text-2xl font-bold md:text-4xl md:leading-tight ">
        Insights
      </h2>
      <p className="mt-1 text-gray-600 dark:text-gray-400">
        Stay in the know with insights from industry experts.
      </p>
    </div>
    {/* End Title */}
    {/* Grid */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Card */}
      <a className="group rounded-xl overflow-hidden">
        <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
          <img
            className="w-full h-full absolute top-0 left-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
            src={web}
          />
          <span className="absolute top-0 right-0 rounded-tr-xl rounded-bl-xl text-xs font-medium bg-red-500 text-white py-1.5 px-3 ">
            Hot
          </span>
        </div>
        <div className="mt-7">
          <h3 className="text-xl font-semibold  group-hover:text-gray-600 Discover">
           Web
          </h3>
          <p className="mt-3  Discover">
          We specialize in delivering powerful, user-friendly web solutions that help businesses succeed. Discover how we can help you achieve your goals today!
          </p>
          <p className="mt-5 inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 group-hover:underline font-medium">
          <Link to="/services/webservice">Discover</Link>
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
      </a>
      {/* End Card */}
      {/* Card */}
      <a className="group rounded-xl overflow-hidden" href="#">
        <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
          <img
            className="w-full h-full absolute top-0 left-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
            src={iot}
          />
        </div>
        <div className="mt-7">
          <h3 className="text-xl font-semibold  group-hover:text-gray-600 Discover">
            Internet Of Things(IoT)
          </h3>
          <p className="mt-3  Discover">
          IoT (Internet of Things) is revolutionizing the way we live, work, and interact with technology. At Greathill, we specialize in developing innovative IoT solutions that help businesses streamline operations, increase efficiency, and drive growth. 
          </p>
          <p className="mt-5 inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 group-hover:underline font-medium">
            Discover
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
      </a>
      {/* End Card */}
      {/* Card */}
      <a
        className="group relative flex flex-col w-full min-h-[15rem] bg-center bg-cover rounded-xl hover:shadow-lg transition bg-[url('https://images.unsplash.com/photo-1635434225286-8208e890e784?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80')]"
        href="#"
      >
        <div className="flex-auto p-4 md:p-6">
          <h3 className="text-xl text-white/[.9] group-hover:text-white">
            <span className="font-bold">Preline</span> Press publishes books
            about economic and technological advancement.
          </h3>
        </div>
        <div className="pt-0 p-4 md:p-6">
          <div className="inline-flex items-center gap-2 text-sm font-medium text-white group-hover:text-white/[.7]">
            
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
          </div>
        </div>
      </a>
      {/* End Card */}
    </div>
    {/* End Grid */}
    
    <>
  {/* Card Blog */}
  {/* Grid */}
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
    {/* Card */}
    <a className="group rounded-xl overflow-hidden" href="#">
      <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
        <img
          className="w-full h-full absolute top-0 left-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
          src={mobile}
          alt="Image Description"
        />
        <span className="absolute top-0 right-0 rounded-tr-xl rounded-bl-xl text-xs font-medium bg-gray-800 text-white py-1.5 px-3 dark:bg-gray-900">
         
        </span>
      </div>
      <div className="mt-7">
        <h3 className="text-xl font-semibold  group-hover:text-gray-600 Discover">
         Mobile App Development
        </h3>
        <p className="mt-3  Discover">
        We're experts in creating mobile apps that engage and delight users. Our team of experienced developers can bring your vision to life with custom solutions that are tailored to your specific needs. From simple apps to complex, multi-platform solutions, we have the experience and expertise to deliver the mobile experience your users crave. 
        </p>
        <p className="mt-5 inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 group-hover:underline font-medium">
          Discover
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
    </a>
    {/* End Card */}
    {/* Card */}
    <a className="group rounded-xl overflow-hidden" href="#">
      <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
        <img
          className="w-full h-full absolute top-0 left-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
          src="https://images.unsplash.com/photo-1542125387-c71274d94f0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt="Image Description"
        />
      </div>
      <div className="mt-7">
        <h3 className="text-xl font-semibold  group-hover:text-gray-600 ">
        Artificial Intelligence (AI)
        </h3>
        <p className="mt-3  ">
        Our team of skilled data scientists and engineers are dedicated to creating intelligent solutions that solve real-world problems and drive business success. Whether it's machine learning, natural language processing, or computer vision, we have the expertise to develop custom AI solutions that meet your unique needs.
        </p>
        <p className="mt-5 inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 group-hover:underline font-medium">
          Discover
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
    </a>
    {/* End Card */}
    {/* Card */}
    <a
      className="group relative flex flex-col w-full min-h-[15rem] bg-center bg-cover rounded-xl hover:shadow-lg transition bg-[url('https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3000&q=80')]"
      href="#"
    >
      <div className="flex-auto p-4 md:p-6">
        <h3 className="text-xl text-white/[.9] group-hover:text-white">
          <span className="font-bold">Preline</span> Press publishes books about
          economic and technological advancement.
        </h3>
      </div>
      <div className="pt-0 p-4 md:p-6">
        <div className="inline-flex items-center gap-2 text-sm font-medium text-white group-hover:text-white/[.7]">
          
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
        </div>
      </div>
    </a>
    {/* End Card */}
  </div>
  {/* End Grid */}
  {/* End Card Blog */}
</>

  </div>
  {/* End Card Blog */}

  
</>



    </div>
    
  </main>
  {/* ========== END MAIN CONTENT ========== */}



  
</>


  </>
  
  );
}
