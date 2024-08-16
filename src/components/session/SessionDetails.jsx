import React from 'react'
import { Col, Row } from "reactstrap";
import './sessionDetails.css'
import { FaWindowClose } from "react-icons/fa";
import { MdOutlineSpeakerNotes } from "react-icons/md";
import { MdAttachFile } from "react-icons/md";
import { Link } from 'react-router-dom';
import SessionTimer from './SessionTimer';

const SessionDetails = () => {
    return (
        <section className="sec_details">
            <Row>
                <Col lg="8" md="8">
                    <div className='image'>
                        <div class="text_image">
                            <h1>Starts In</h1>
                            <button className="btn">
                                <SessionTimer />
                            </button>
                        </div>
                    </div>
                </Col>

                <Col lg="4" md="4" className='info'>
                    <h2 className="related__Product-title">Lesson Details.</h2>
                    <div className="single__product-content">
                        <p className="Schedule">
                            {" "}
                            Schedule : <span>Sunday, Augest 11,2024 English 60 minutes</span>
                        </p>
                        <p className="Status">
                            Status :  <span>Scheduled</span>
                        </p>
                        <p className="Status mb-4">
                            Details : <span>60 Miutes of lesson</span>
                        </p>
                        <div className='details'>
                            <h2 className="related__Product-title">Actions</h2>
                            <div className="w-full h-auto text-lightText px-4 mb-5">
                                <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
                                    <div>
                                        <div className="flex gap-4">
                                            <span className="bannerIcon">
                                                <FaWindowClose />
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
                        </div>
                        <div className='lesson_timer'>
                            <div className="hero__btns d-flex align-items-center gap-5 mt-8 mb-8">
                                <button className="order__btn d-flex align-items-center justify-content-between">
                                    <SessionTimer />
                                </button>

                                <button className="all__details-btn">
                                    <Link to="">End Lesson</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
            {/* </Container> */}
        </section>
    )
}

export default SessionDetails