import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Second() {
  AOS.init();
  return (
    <section className="bg-white dark:bg-gray-900 border-t border-gray-400">
      <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
        <h2 className="max-w-2xl mx-auto text-2xl font-semibold tracking-tight text-gray-800 xl:text-3xl dark:text-white">
          Bring your Business to the{' '}
          <span className="text-blue-500">next level.</span>
        </h2>
        <p  data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500"  className="max-w-4xl mt-6 text-center text-gray-500 dark:text-gray-300">
        Explore our range of services and discover how we can help you unlock your business's full potential. From strategy and marketing to operations and beyond, our team of experts has the skills and experience to help you succeed. Let's work together to elevate your business and achieve success like never before.
        </p>
        <div className="inline-flex w-full mt-6 sm:w-auto">
          
               <Link className="btn inline-flex items-center justify-center w-full px-6 py-2 text-white duration-300 bg-blue-600 rounded-lg hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80" to="/services"> See our services</Link>
          
        </div>
      </div>
    </section>
  );
}
