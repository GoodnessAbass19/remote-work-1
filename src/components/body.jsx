import React from "react";
import Header from '../images/image-hero-desktop.png'
import Footer from '../components/footer'

const Body = () => {
    return (
        <>
        <section id="home" className="md:max-w-screen flex  md:flex-row flex-col-reverse py-10  items-center justify-around md:mt-24 mt-8 md:mx-auto">
            <div className="flex-1">
                <div className=" text-center w-full md:w-3/4 mx-auto md:py-10 py-6">
                    <div className="md:text-7xl text-3xl md:leading-1  text-black font-bold justify-center md:text-left flex md:flex-col w-11/12 text-center gap-2">
                        <h1 className="">
                            Make
                        </h1>
                        <h1>remote work</h1>
                    </div>
                    <p className="text-justify w-11/12 mx-auto md:py-16 py-6 md:text-md text-base font-semibold">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas tenetur dolore quas, repudiandae, magnam eveniet incidunt velit debitis rerum expedita, sunt adipisci quia commodi saepe dicta placeat culpa sint esse corrupti aliquid quae cum fuga itaque porro! Corrupti dolorem perspiciatis veritatis ipsa cupiditate, impedit odio incidunt velit esse quae neque. Reiciendis fuga odio aliquid repudiandae, dicta deleniti quas ipsa eius.
                    </p>
                    <button className="bg-black font-semibold text-white md:mx-4 mx-auto border-2 rounded-lg py-3 px-6 flex items-center gap-2 duration-500 hover:bg-white hover:text-black hover:border-black">Learn more</button>
                </div>
         <Footer />
            </div>
            <div className="flex-1 flex items-center justify-center">
                <img src={Header} alt="" className="md:max-w-xl w-full" />
            </div>
        </section>
           
            </>
    );
}

export default Body;
