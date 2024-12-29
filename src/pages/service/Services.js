import React, { useEffect } from "react";
import './services.css'
import services from "../../assets/service/services";
import { Link } from "react-router-dom";
import Aos from "aos";
const Services = () => {
    useEffect(() => {
        Aos.init({
            once: true,
            duration: 1200,
        });
    }, []);
    return (

        <div className="services py-10 md:py-16 relative" id="our-skills">
            <h1 className="text-center font-semibold text-xl">
                Services
            </h1>
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-7">
                    {services.map((item, index) => (
                        <div
                        data-aos="fade-up"
                        data-aos-delay={100 + index * 100}
                         className="box" key={index}>
                            <div className="m-[30px_auto_20px] block text-center text-[#d5d5d5]">{item.icon}</div>
                            <h3 className="text-center my-[28px] mb-[40px] text-[25px] text-black">{item.title}</h3>
                            <div className="info p-[15px] relative bg-[#f9f9f9] text-right">
                                <Link>Details</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}
export default Services