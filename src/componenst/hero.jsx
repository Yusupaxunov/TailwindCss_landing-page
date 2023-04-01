import Typed from "typed.js";
import { useEffect, useRef } from "react";
import { styles } from "../util/styles";

const Hero = () => {

   const el = useRef(null);

   useEffect(() => {
     const typed = new Typed(el.current, {
       strings: ['BTB', 'BTC', "SASS"],
       startDelay: 300,
       typeSpeed: 100,
       backSpeed: 100,
       loop: true
     });
 
     return () => {
       typed.destroy();
     };
   }, []);

  return (
    <div id="home" className="text-white mt-10">
        <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
            <p className={`uppercase font-bold p-2 ${styles.green}`}>growing with data analytics</p>
            <h1 className={`md:text-7xl sm:text-6xl text-4xl font-bold md:py-2`}>Grow with data.</h1>
            <div className="flex justify-center items-center">
                <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">Fast, flexible finansing for</p>
                <span ref={el} className={`md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2`}></span>
            </div>
            <p className="md:text-2xl text-xl font-bold text-gray-500">Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms</p>
            <button className={`${styles.bgGreen} w-[200px] rounded-md my-6 mx-auto py-3 text-black font-bold active:bg-[#14976e]`}> Get Started</button>
        </div>
    </div>
  )
}

export default Hero;