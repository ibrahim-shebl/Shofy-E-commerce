import React from 'react'
import './about.css'
import CommonSection from './common-section/CommonSection'
import about from '../../assets/about/about.jpg'
import feature1 from '../../assets/about/pexels-photo-669610.jpeg'
import feature2 from '../../assets/about/feature (2).jpg'
import feature3 from '../../assets/about/feature.jpg'

const About = () => {

    return (
        <>
            <CommonSection title="About Us" />
            <div className='md:my-16 my-12 text-center'>
                <h1 className='font-bold text-2xl'>Shofy.</h1>
            </div>
            <section className="about">
                <img src={about} alt="" />
                <div>
                    <h2>Who We Are?</h2>
                    <p>This is an electrical appliances exhibition. We provide the electrical appliances available at prices. Also, if there are offers on the appliances, you can buy any product you want through the website. Thank you.</p>

                    <br /><br />

                    <marquee bgcolor="#ccc" loop="-1" scrollamount="5" width="100%">Welcome to Shofy WebSite to get products .</marquee>
                </div>
            </section>
            <section>
                {/* start feature */}
                <div className="features md:py-20 relative bg-white py-8">
                    <h2 className="text-center font-bold text-2xl">Features</h2>
                    <div className="Feature_container container">
                        <div className="box quality">
                            <div className="img-holder">
                                <img src={feature3} alt="" />
                            </div>
                            <h2>Why this project</h2>
                            <p>We chose this project because our goal is to make it easier for people to shop. With everything evolving, people can now buy anything they want at any time, so we want to keep up with this development.</p>
                        </div>
                        <div className="box challenge">
                            <div className="img-holder">
                                <img src={feature2} alt="" />
                            </div>
                            <h2>Challenge</h2>
                            <p>I faced many challenges, the most important of which is that we provide all available devices to customers and make it easy for them to shop online and deliver the devices to the customer.</p>
                        </div>
                        <div className="box passion">
                            <div className="img-holder">
                                <img src={feature1} alt="" />
                            </div>
                            <h2>Goal</h2>
                            <p>The goal of this project is to facilitate the shopping process for people and provide them with all services. There are all types of purchases, whether online or offline, and we arrange delivery times with the customer to ensure order and lack of randomness.</p>
                        </div>
                    </div>
                </div>
                {/* End feature */}
            </section>


        </>
    )
}

export default About



