import React, { useEffect } from 'react';
import "./Center.css";
import Navbar from '../HomePage/Navbar/Navbar';


const Center = () => {
    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <Navbar />
            <div className='space-centers'>
                <div className="nasa">
                    <div className="i1">
                        <div className="parent">
                            <div className="grid">
                                <div className="details1">
                                    <div className="row1">
                                        <div className="row-content">
                                            <h2>
                                                NASA
                                            </h2>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio sunt
                                                dolore odit maxime magni voluptates modi eum? Facilis eveniet, ipsa deserunt
                                                accusamus, nostrum in exercitationem repudiandae voluptas recusandae ea nihil.
                                            </p>
                                        </div>
                                    </div>
                                    <div className='empty'></div>
                                </div>
                            </div>
                        </div>
                        <div className="topic1"></div>
                    </div>
                </div>
                <div className="nasa-box">
                    <input type="checkbox" id="myCheckbox" />
                    <div className="nasa-box-child">
                        <div className="nasa-box-content">
                            <div className="nasa-topic">
                                <div className="topic-heading">
                                    <h3>Hubs of Innovation</h3>
                                </div>
                                <div className="topic-main"><p>
                                    NASA's Space Research Centers are the beating heart of space exploration and innovation.
                                    Each center specializes in different aspects of space science, technology development,
                                    and mission planning, playing a crucial role in advancing our understanding of the universe
                                    and enhancing our capabilities to explore it. Here's a closer look at some
                                    of the key research centers and their contributions to space exploration:</p></div>
                                <div className="topic-footer">
                                    <label htmlFor="myCheckbox" style={{ cursor: 'pointer' }}>
                                        More Info
                                    </label>
                                </div>
                            </div>
                            <div className="nasa-img">
                                <div className="nasa-img-child">
                                    {/* <div className="nasa-img-main">
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="isro">
                    <div className="i2"></div>
                    <div className="topic2"></div>
                </div>
                <div className="spacex">
                    <div className="i3"></div>
                    <div className="topic3"></div>
                </div>
            </div>
        </>
    )
};

export default Center