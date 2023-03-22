import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import './Slider.css'
// import required modules
import { EffectCoverflow, Autoplay } from "swiper";

import team1 from './Image/2.jpg'

const Slider = () => {
    return (
        <div className="slider-area">
            <div className="team-title container">
                <h4>OUR TEAM</h4>
                <h2>MEET OUR Team</h2>
                <p>"A Team Of IITians to Boost your Tech Career to New Heights. The Curriculum Team is an experienced group of data analyst instructors"</p>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">

                        <Swiper
                            effect={"coverflow"}
                            grabCursor={true}
                            centeredSlides={true}
                            slidesPerView={"auto"}
                            spaceBetween={70}
                            autoplay={{
                                delay: 1000,
                                disableOnInteraction: false,
                              }}
                            coverflowEffect={{
                                rotate: 0,
                                stretch: 0,
                                depth: 100,
                                modifier: 3,
                                
                                slideShadows: true,
                            }}

                            breakpoints={{
                                640: {
                                    modifier: 1,
                                },
                                768: {
                                    modifier: 2,
                                },
                                1024: {
                                    modifier: 3,
                                },
                            }}
                            modules={[EffectCoverflow,  Autoplay]}
                            className="mySwiper"
                        >
                            <SwiperSlide className="single-card">
                                <div className="single-member">
                                    <div className="team-img">
                                        <img src={team1} alt="" />
                                    </div>
                                    <div class="team-text">
                                        <p class="team-name">Rajiv Rana</p>
                                        <p class="team-title">Lead Student Experience</p>
                                        <p class="team-education">Mtech-IIT Kharagpur | Phd-IIT Roorkee</p>

                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="single-card">
                                <div className="single-member">
                                    <div className="team-img">
                                        <img src={team1} alt="" />
                                    </div>
                                    <div class="team-text">
                                        <p class="team-name">Rajiv Rana</p>
                                        <p class="team-title">Lead Student Experience</p>
                                        <p class="team-education">Mtech-IIT Kharagpur | Phd-IIT Roorkee</p>

                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="single-card">
                                <div className="single-member">
                                    <div className="team-img">
                                        <img src={team1} alt="" />
                                    </div>
                                    <div class="team-text">
                                        <p class="team-name">Rajiv Rana</p>
                                        <p class="team-title">Lead Student Experience</p>
                                        <p class="team-education">Mtech-IIT Kharagpur | Phd-IIT Roorkee</p>

                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="single-card">
                                <div className="single-member">
                                    <div className="team-img">
                                        <img src={team1} alt="" />
                                    </div>
                                    <div class="team-text">
                                        <p class="team-name">Rajiv Rana</p>
                                        <p class="team-title">Lead Student Experience</p>
                                        <p class="team-education">Mtech-IIT Kharagpur | Phd-IIT Roorkee</p>

                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="single-card">
                                <div className="single-member">
                                    <div className="team-img">
                                        <img src={team1} alt="" />
                                    </div>
                                    <div class="team-text">
                                        <p class="team-name">Rajiv Rana</p>
                                        <p class="team-title">Lead Student Experience</p>
                                        <p class="team-education">Mtech-IIT Kharagpur | Phd-IIT Roorkee</p>

                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="single-card">
                                <div className="single-member">
                                    <div className="team-img">
                                        <img src={team1} alt="" />
                                    </div>
                                    <div class="team-text">
                                        <p class="team-name">Rajiv Rana</p>
                                        <p class="team-title">Lead Student Experience</p>
                                        <p class="team-education">Mtech-IIT Kharagpur | Phd-IIT Roorkee</p>

                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="single-card">
                                <div className="single-member">
                                    <div className="team-img">
                                        <img src={team1} alt="" />
                                    </div>
                                    <div class="team-text">
                                        <p class="team-name">Rajiv Rana</p>
                                        <p class="team-title">Lead Student Experience</p>
                                        <p class="team-education">Mtech-IIT Kharagpur | Phd-IIT Roorkee</p>

                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="single-card">
                                <div className="single-member">
                                    <div className="team-img">
                                        <img src={team1} alt="" />
                                    </div>
                                    <div class="team-text">
                                        <p class="team-name">Rajiv Rana</p>
                                        <p class="team-title">Lead Student Experience</p>
                                        <p class="team-education">Mtech-IIT Kharagpur | Phd-IIT Roorkee</p>

                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="single-card">
                                <div className="single-member">
                                    <div className="team-img">
                                        <img src={team1} alt="" />
                                    </div>
                                    <div class="team-text">
                                        <p class="team-name">Rajiv Rana</p>
                                        <p class="team-title">Lead Student Experience</p>
                                        <p class="team-education">Mtech-IIT Kharagpur | Phd-IIT Roorkee</p>

                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="single-card">
                                <div className="single-member">
                                    <div className="team-img">
                                        <img src={team1} alt="" />
                                    </div>
                                    <div class="team-text">
                                        <p class="team-name">Rajiv Rana</p>
                                        <p class="team-title">Lead Student Experience</p>
                                        <p class="team-education">Mtech-IIT Kharagpur | Phd-IIT Roorkee</p>

                                    </div>
                                </div>
                            </SwiperSlide>
                            
                            
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;