import React from 'react'
import './framework.css'
import './session.css'
import img from '../../assets/me.png'
import { FaDeleteLeft } from "react-icons/fa6";
import { FaWindowClose } from "react-icons/fa";
import { IoEyeOutline , IoReload } from "react-icons/io5";
import { MdOutlineSpeakerNotes } from "react-icons/md";
import { MdAttachFile } from "react-icons/md";
import { Link } from 'react-router-dom';
import Timer from './timer/Timer';
const Session = () => {
    return (
        <section className='session'>
            <div className='courses'>
                <h1>We Share <br />
                    Our Thoughts On Design</h1>
                <p>you don't have to struggle alone, you've got our assistance and help.</p>
            </div>
            <div class="wrapper d-grid gap-20">
                <div class="welcome bg-white rad-10 txt-c-mobile block-mobile">
                    <div class="intro p-20 d-flex space-between bg-eee">
                        <div>
                            <h2 class="m-0">Ibrahim</h2>
                            <p class="c-grey mt-2 mb-10">Egypt</p>
                        </div>
                        <Timer />
                    </div>
                    <img decoding="async" src={img} alt="" class="avatar" />
                    <div class="body txt-c d-flex p-20 mt-20 mb-20 block-mobile">
                        <div>Schedule <span class="d-block c-grey fs-14 mt-10">Programming</span></div>
                        <div>Status <span class="d-block c-grey fs-14 mt-10">Sunday, Augest 11,2024 English 60 minutes</span></div>

                    </div>
                    <div className="w-full h-auto text-lightText px-4 text-center flex justify-center">
                        <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
                            <div>
                                <h2 className="text-base uppercase font-titleFont mb-4">
                                scheduled
                                </h2>
                                <div className="flex gap-4">
                                    <span className="bannerIcon">
                                        <FaDeleteLeft />
                                    </span>
                                    <span className="bannerIcon">
                                        <IoEyeOutline />
                                    </span>
                                    <span className="bannerIcon">
                                        <IoReload />
                                    </span>
                                    <span className="bannerIcon">
                                        <MdOutlineSpeakerNotes />
                                    </span>
                                    <span className="bannerIcon">
                                        <MdAttachFile />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='mt-4'>
                       <Link to="/details" class="visit d-block fs-14 bg-blue c-white w-fit btn-shape">Join Lesson</Link>
                    </div>
                </div>
                <div class="welcome bg-white rad-10 txt-c-mobile block-mobile">
                    <div class="intro p-20 d-flex space-between bg-eee">
                        <div>
                            <h2 class="m-0">Ibrahim</h2>
                            <p class="c-grey mt-2 mb-10">Egypt</p>
                        </div>
                        <Timer />
                    </div>
                    <img decoding="async" src={img} alt="" class="avatar" />
                    <div class="body txt-c d-flex p-20 mt-20 mb-20 block-mobile">
                        <div>Schedule <span class="d-block c-grey fs-14 mt-10">Programming</span></div>
                        <div>Status <span class="d-block c-grey fs-14 mt-10">Sunday, Augest 11,2024 English 60 minutes</span></div>

                    </div>
                    <div className="w-full h-auto text-lightText px-4 text-center flex justify-center">
                        <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
                            <div>
                                <h2 className="text-base uppercase font-titleFont mb-4">
                                scheduled
                                </h2>
                                <div className="flex gap-4">
                                    <span className="bannerIcon">
                                        <FaDeleteLeft />
                                    </span>
                                    <span className="bannerIcon">
                                        <IoEyeOutline />
                                    </span>
                                    <span className="bannerIcon">
                                        <IoReload />
                                    </span>
                                    <span className="bannerIcon">
                                        <MdOutlineSpeakerNotes />
                                    </span>
                                    <span className="bannerIcon">
                                        <MdAttachFile />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='mt-4'>
                       <Link to="/details" class="visit d-block fs-14 bg-blue c-white w-fit btn-shape">Join Lesson</Link>
                    </div>
                </div>
                <div class="welcome bg-white rad-10 txt-c-mobile block-mobile">
                    <div class="intro p-20 d-flex space-between bg-eee">
                        <div>
                            <h2 class="m-0">Ibrahim</h2>
                            <p class="c-grey mt-2 mb-10">Egypt</p>
                        </div>
                        <Timer />
                    </div>
                    <img decoding="async" src={img} alt="" class="avatar" />
                    <div class="body txt-c d-flex p-20 mt-20 mb-20 block-mobile">
                        <div>Schedule <span class="d-block c-grey fs-14 mt-10">Programming</span></div>
                        <div>Status <span class="d-block c-grey fs-14 mt-10">Sunday, Augest 11,2024 English 60 minutes</span></div>

                    </div>
                    <div className="w-full h-auto text-lightText px-4 text-center flex justify-center">
                        <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
                            <div>
                                <h2 className="text-base uppercase font-titleFont mb-4">
                                scheduled
                                </h2>
                                <div className="flex gap-4">
                                    <span className="bannerIcon">
                                        <FaWindowClose />
                                    </span>
                                    <span className="bannerIcon">
                                        <IoEyeOutline />
                                    </span>
                                    <span className="bannerIcon">
                                        <IoReload />
                                    </span>
                                    <span className="bannerIcon">
                                        <MdOutlineSpeakerNotes />
                                    </span>
                                    <span className="bannerIcon">
                                        <MdAttachFile />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='mt-4'>
                       <Link to="/details" class="visit d-block fs-14 bg-blue c-white w-fit btn-shape">Join Lesson</Link>
                    </div>
                </div>
                <div class="welcome bg-white rad-10 txt-c-mobile block-mobile">
                    <div class="intro p-20 d-flex space-between bg-eee">
                        <div>
                            <h2 class="m-0">Ibrahim</h2>
                            <p class="c-grey mt-2 mb-10">Egypt</p>
                        </div>
                        <Timer />
                    </div>
                    <img decoding="async" src={img} alt="" class="avatar" />
                    <div class="body txt-c d-flex p-20 mt-20 mb-20 block-mobile">
                        <div>Schedule <span class="d-block c-grey fs-14 mt-10">Programming</span></div>
                        <div>Status <span class="d-block c-grey fs-14 mt-10">Sunday, Augest 11,2024 English 60 minutes</span></div>

                    </div>
                    <div className="w-full h-auto text-lightText px-4 text-center flex justify-center">
                        <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
                            <div>
                                <h2 className="text-base uppercase font-titleFont mb-4">
                                scheduled
                                </h2>
                                <div className="flex gap-4">
                                    <span className="bannerIcon">
                                        <FaDeleteLeft />
                                    </span>
                                    <span className="bannerIcon">
                                        <IoEyeOutline />
                                    </span>
                                    <span className="bannerIcon">
                                        <IoReload />
                                    </span>
                                    <span className="bannerIcon">
                                        <MdOutlineSpeakerNotes />
                                    </span>
                                    <span className="bannerIcon">
                                        <MdAttachFile />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='mt-4'>
                       <Link to="/details" class="visit d-block fs-14 bg-blue c-white w-fit btn-shape">Join Lesson</Link>
                    </div>
                </div>
                 
            </div>
        </section>
    )
}

export default Session