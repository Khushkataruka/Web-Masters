import React, { useEffect, useState, useRef } from 'react';
import "./Center.css";
import Navbar from '../HomePage/Navbar/Navbar';
import CloseIcon from '@mui/icons-material/Close';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Ensure this import is correct

const Center = () => {
    const [isExpandedNASA, setIsExpandedNASA] = useState(false);
    const [isExpandedSpaceX, setIsExpandedSpaceX] = useState(false);
    const [isExpandedISRO, setIsExpandedISRO] = useState(false);
    const slideBoxRefNASA = useRef(null);
    const slideBoxRefSpaceX = useRef(null);
    const slideBoxRefISRO = useRef(null);

    useEffect(() => {
        AOS.init({
            duration: 800,
            offset: 200,
            easing: 'ease-in-out',
            once: false, // Set this to false to allow animation every time you scroll
        });

        // Scroll to the top of the page when the component mounts
        document.querySelector(".sc-hero").style.top = "40%";
        document.querySelector(".sc-hero").style.opacity = "1";
        window.scrollTo(0, 0);
    }, []);


    const handleCheckboxChangeNASA = () => {
        setIsExpandedNASA(!isExpandedNASA);
    };

    const handleCheckboxChangeSpaceX = () => {
        setIsExpandedSpaceX(!isExpandedSpaceX);
    };

    const handleCheckboxChangeISRO = () => {
        setIsExpandedISRO(!isExpandedISRO);
    };

    return (
        <>
            <Navbar />
            <div className='space-centers'>
                <div className="video">
                    <video src='c-video.mp4' autoPlay muted playsInline loop>
                        Unable to Play video
                    </video>
                    <div className="sc-hero" data-aos="zoom-in-up">
                        <h1>Space Centres</h1>
                        <p>"Space exploration is a force of nature unto itself that no other force in society can rival." — Neil deGrasse Tyson</p>
                    </div>
                </div>

                <div className="nasa">
                    <div className="i1">
                        <div className="parent">
                            <div className="grid">
                                <div className="details1">
                                    <div className="row1">
                                        <div className="row-content" data-aos="fade-right">
                                            <h2>NASA</h2>
                                            <p>Exploring the Cosmos and Pioneering Space Innovation. NASA is at the forefront of space exploration, dedicated to advancing human understanding of the universe. From groundbreaking research to revolutionary space missions, NASA continues to push the boundaries of what's possible.</p>
                                        </div>
                                    </div>
                                    <div className='empty'></div>
                                </div>
                            </div>
                        </div>
                        <div className="topic1"></div>
                    </div>
                </div>
                <div className='tt'>
                    <input type="checkbox" id="myCheckboxNASA" checked={isExpandedNASA} onChange={handleCheckboxChangeNASA} />
                    <div className="sc-box">
                        <div className="sc-box-child" data-aos="zoom-in-up-up">
                            <div className="sc-box-content">
                                <div className="sc-topic">
                                    <div className="topic-heading">
                                        <h3>Hubs of Innovation</h3>
                                    </div>
                                    <div className="topic-main"><p>
                                        NASA's Space Research Centers are the beating heart of space exploration and innovation. Each center specializes in different aspects of space science, technology development, and mission planning, playing a crucial role in advancing our understanding of the universe and enhancing our capabilities to explore it. Here's a closer look at some of the key research centers and their contributions to space exploration:</p></div>
                                    <div className="topic-footer">
                                        <label htmlFor="myCheckboxNASA" style={{ cursor: 'pointer' }}>
                                            More Info
                                        </label>
                                    </div>
                                </div>
                                <div className="sc-img">
                                    <div className="sc-img-child"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className={`sc-slide-box ${isExpandedNASA ? 'expanded' : ''}`}
                        ref={slideBoxRefNASA}
                        style={{
                            maxHeight: isExpandedNASA ? `${slideBoxRefNASA.current.scrollHeight}px` : '0',
                        }}
                    >
                        <div className='cross'>
                            <label className='wrong' htmlFor="myCheckboxNASA" style={{ cursor: 'pointer' }}>
                                <CloseIcon />
                            </label>
                        </div>
                        <div className="sc-slide-child" >
                            <div className="sc-slide-main">
                                <div className="ksc" data-aos="zoom-in-up">
                                    <div className="sc-box-child" >
                                        <div className="sc-box-content flex">
                                            <div className="sc-img">
                                                <div className="ksc-img"></div>
                                            </div>
                                            <div className="sc-topic">
                                                <div className="topic-heading">
                                                    <h3 className='color'>Kennedy Space Center</h3>
                                                </div>
                                                <div className="topic-main colorp"><p>
                                                    <b>Kennedy Space Center</b>, one of 10 NASA field centers, is a premier multiuser spaceport with more than 90 private-sector partners and nearly 250 partnership agreements. The presence of commercial companies at NASA’s Kennedy Space Center is larger than ever before, enabling us to embark on a new era of space exploration. Although Kennedy is the agency’s main launch site, the center also is home to facilities that research and develop innovative solutions that government and commercial space ventures need for working and living on the surfaces of the Moon and other bodies in our solar system.</p></div>
                                                <div className="topic-footer">
                                                    <a className='colorp' href='https://www.nasa.gov/kennedy/'>Learn More</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="jsc" data-aos="zoom-in-up">
                                    <div className="sc-box-child">
                                        <div className="sc-box-content flex1">
                                            <div className="sc-img">
                                                <div className="jsc-img">
                                                </div>
                                            </div>
                                            <div className="sc-topic">
                                                <div className="topic-heading">
                                                    <h3 className='color'>Johnson Space Center</h3>
                                                </div>
                                                <div className="topic-main colorp"><p>
                                                    <b>The Johnson Space Center</b> was established in 1961 as the Manned Spacecraft Center, the home and
                                                    Mission Control Center for the U.S. human space flight program. In 1973, it was renamed in honor of the late President, and
                                                    Texas native, Lyndon B. Johnson.For more than 60 years, NASA’s Lyndon B. Johnson Space Center (JSC) in Houston has led our
                                                    nation and the world on a continuing adventure of human exploration, discovery and achievement.The center has played a vital
                                                    role in powering our country into the 21st century through technological innovations and scientific discoveries.</p></div>
                                                <div className="topic-footer">
                                                    <a className='colorp' href='https://www.nasa.gov/johnson/'>Learn More</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="jpl" data-aos="zoom-in-up">
                                    <div className="sc-box-child">
                                        <div className="sc-box-content flex">
                                            <div className="sc-img">
                                                <div className="jpl-img">
                                                </div>
                                            </div>
                                            <div className="sc-topic">
                                                <div className="topic-heading">
                                                    <h3 className='color' >Jet Propulsion Laboratory</h3>
                                                </div>
                                                <div className="topic-main colorp"><p>
                                                    <b>The Jet Propulsion Laboratory</b> holds a unique place in the universe. We are a leader in robotic space
                                                    exploration, sending rovers to Mars, probes into the farthest reaches of the solar system, and satellites to advance understanding
                                                    of our home planet.The success of JPL’s first spacecraft, the Explorer I satellite, in 1958 helped lift America into the Space Age.
                                                    Our spacecraft have flown to every planet in the solar system, the Sun, and into interstellar space in a quest to better understand
                                                    the origins of the universe, and of life.Our missions honor the relentless pursuit of the seeker: Voyager, Curiosity, Cassini, Galileo.</p></div>
                                                <div className="topic-footer">
                                                    <a className='colorp' href='https://www.jpl.nasa.gov/'>Learn More</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="spacex">
                    <div className="i1">
                        <div className="parent">
                            <div className="grid">
                                <div className="details1">
                                    <div className="row1">
                                        <div className="row-content" data-aos="fade-right">
                                            <h2 >
                                                SPACE X
                                            </h2>
                                            <p>Revolutionizing Space Travel. SpaceX is on a mission to make space travel accessible to everyone. With groundbreaking
                                                advancements in rocket technology and ambitious projects like the Mars mission, SpaceX is leading the charge towards
                                                a new era of space exploration.
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
                <div className='tt'>
                    <input type="checkbox" id="myCheckboxSpaceX" checked={isExpandedSpaceX} onChange={handleCheckboxChangeSpaceX} />
                    <div className="sc-box" >
                        <div className="sc-box-child" data-aos="zoom-in-up-up">
                            <div className="sc-box-content">
                                <div className="sc-topic">
                                    <div className="topic-heading">
                                        <h3>Future of Space Travel</h3>
                                    </div>
                                    <div className="topic-main"><p>
                                        SpaceX, founded by Elon Musk, is a private aerospace manufacturer and space transportation company that has revolutionized the space industry.
                                        With a focus on reducing space transportation costs and enabling the
                                        colonization of Mars, SpaceX operates multiple innovation centers that drive their ambitious goals. SpaceX is dedicated to advancing space technology with
                                        the ultimate goal of enabling people to live on other planets. The company designs, manufactures,
                                        and launches advanced rockets and spacecraft. It has developed the Falcon and Starship launch vehicles, Dragon spacecraft, and the Starlink satellite constellation,
                                        among other technologies.</p></div>
                                    <div className="topic-footer">
                                        <label htmlFor="myCheckboxSpaceX" style={{ cursor: 'pointer' }}>
                                            More Info
                                        </label>
                                    </div>
                                </div>
                                <div className="sc-img">
                                    <div className="spacex-img-child">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div

                        className={`sc-slide-box2 ${isExpandedSpaceX ? 'expanded' : ''}`}
                        ref={slideBoxRefSpaceX}
                        style={{
                            maxHeight: isExpandedSpaceX ? `${slideBoxRefSpaceX.current.scrollHeight}px` : '0',
                        }}
                    >
                        <div className='cross2'>

                            <label className='wrong' htmlFor="myCheckboxSpaceX" style={{ cursor: 'pointer' }}>
                                <CloseIcon />
                            </label>
                        </div>
                        <div className="sc-slide-child" >
                            <div className="sc-slide-main">
                                <div className="falcon" data-aos="zoom-in-up">
                                    <div className="sc-box-child">
                                        <div className="sc-box-content flex">
                                            <div className="sc-img">
                                                <div className="falcon-img">
                                                </div>
                                            </div>
                                            <div className="sc-topic">
                                                <div className="topic-heading">
                                                    <h3 className='color' >Falcon Heavy</h3>
                                                </div>
                                                <div className="topic-main colorp"><p>
                                                    <b>Falcon Heavy </b>is one of SpaceX's most powerful rockets, designed to carry large payloads to various
                                                    orbits and beyond. As the world's most powerful operational rocket, Falcon Heavy can lift nearly 64
                                                    metric tons (141,000 pounds) into orbit, more than twice the payload capacity of the next closest operational vehicle.
                                                    The rocket consists of three Falcon 9 nine-engine cores, whose 27 Merlin engines together generate more than 5 million pounds of thrust at liftoff.
                                                    This immense power allows Falcon Heavy to carry heavy and complex payloads, making it ideal for a variety of missions, including commercial satellite
                                                    launches and interplanetary exploration.
                                                </p></div>
                                                <div className="topic-footer">
                                                    <a className='colorp' href='https://www.spacex.com/vehicles/starship/'>Learn More</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="dragon" data-aos="zoom-in-up">
                                    <div className="sc-box-child">
                                        <div className="sc-box-content flex1">
                                            <div className="sc-img">
                                                <div className="dragon-img">
                                                </div>
                                            </div>
                                            <div className="sc-topic">
                                                <div className="topic-heading">
                                                    <h3 className='color' >Dragon</h3>
                                                </div>
                                                <div className="topic-main colorp"><p>
                                                    <b>Dragon</b> is a spacecraft developed by SpaceX to transport cargo and crew to space.
                                                    It is part of SpaceX's efforts to make space travel more affordable and accessible, and
                                                    it plays a key role in the company's vision for the future of space exploration.The Dragon
                                                    spacecraft is capable of carrying up to 7 passengers to and from Earth orbit, and beyond.
                                                    It is the only spacecraft currently flying that is capable of returning significant amounts
                                                    of cargo to Earth, and is the first private spacecraft to take humans to the space station.</p></div>
                                                <div className="topic-footer">
                                                    <a className='colorp' href='https://www.spacex.com/vehicles/dragon/'>Learn More</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="starship" data-aos="zoom-in-up">
                                    <div className="sc-box-child">
                                        <div className="sc-box-content flex">
                                            <div className="sc-img">
                                                <div className="starship-img">
                                                </div>
                                            </div>
                                            <div className="sc-topic">
                                                <div className="topic-heading">
                                                    <h3 className='color' >Starship</h3>
                                                </div>
                                                <div className="topic-main colorp"><p>
                                                    <b>Starship</b> is SpaceX's next-generation spacecraft designed to carry both crew and cargo to a variety of destinations,
                                                    including the Moon, Mars, and beyond. It represents SpaceX's most ambitious project to date, aiming to make human space travel
                                                    more accessible and to facilitate the colonization of other planets.Starship is the world’s most powerful launch vehicle ever
                                                    developed, capable of carrying up to 150 metric tonnes fully reusable and 250 metric tonnes expendable.Development and manufacturing
                                                    of Starship takes place at Starbase, one of the world’s first commercial spaceports designed for orbital missions.</p></div>
                                                <div className="topic-footer">
                                                    <a className='colorp' href='https://www.spacex.com/vehicles/starship/'>Learn More</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="isro">
                    <div className="i1">
                        <div className="parent">
                            <div className="grid">
                                <div className="details1">
                                    <div className="row1">
                                        <div className="row-content" data-aos="fade-right">
                                            <h2>
                                                ISRO
                                            </h2>
                                            <p>The Indian Space Research Organisation (ISRO) is dedicated to harnessing space technology for national development while
                                                pursuing space science research and planetary exploration. ISRO has made significant advancements in satellite communication,
                                                remote sensing, and the development of launch vehicles. With ambitious missions such as Chandrayaan and Mangalyaan, ISRO is
                                                at the forefront of space exploration, continuously pushing the boundaries of science and technology.
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
                <div className='tt'>
                    <input type="checkbox" id="myCheckboxISRO" checked={isExpandedISRO} onChange={handleCheckboxChangeISRO} />
                    <div className="sc-box" >
                        <div className="sc-box-child" data-aos="zoom-in-up-up">
                            <div className="sc-box-content">
                                <div className="sc-topic">
                                    <div className="topic-heading">
                                        <h3 >Leading India’s Space Aspirations</h3>
                                    </div>
                                    <div className="topic-main"><p>
                                        ISRO's remarkable journey in space exploration is marked by several groundbreaking missions. The Mars Orbiter Mission (Mangalyaan), launched in 2013,
                                        made India the first country to reach Mars on its first attempt, providing valuable data on Mars' atmosphere and surface. The Chandrayaan missions
                                        have been equally significant; Chandrayaan-1, launched in 2008, confirmed the presence of water molecules on the Moon, while Chandrayaan-2 in 2019
                                        aimed to explore the Moon's south pole, despite the lander's communication loss. Chandrayaan-3 is set to attempt another lunar landing in the near f
                                        uture.</p></div>
                                    <div className="topic-footer">
                                        <label htmlFor="myCheckboxISRO" style={{ cursor: 'pointer' }}>
                                            More Info
                                        </label>
                                    </div>
                                </div>
                                <div className="sc-img">
                                    <div className="isro-img-child">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div

                        className={`sc-slide-box3 ${isExpandedISRO ? 'expanded' : ''}`}
                        ref={slideBoxRefISRO}
                        style={{
                            maxHeight: isExpandedISRO ? `${slideBoxRefISRO.current.scrollHeight}px` : '0',
                        }}
                    >
                        <div className='cross3'>

                            <label className='wrong' htmlFor="myCheckboxISRO" style={{ cursor: 'pointer' }}>
                                <CloseIcon />
                            </label>
                        </div>
                        <div className="sc-slide-child" >
                            <div className="sc-slide-main">
                                <div className="chandrayaan" data-aos="zoom-in-up">
                                    <div className="sc-box-child">
                                        <div className="sc-box-content flex">
                                            <div className="sc-img">
                                                <div className="chandrayaan-img">
                                                </div>
                                            </div>
                                            <div className="sc-topic">
                                                <div className="topic-heading">
                                                    <h3 className='color' >Chandrayaan-3 </h3>
                                                </div>
                                                <div className="topic-main colorp"><p>
                                                    <b>Chandrayaan-3  </b>is India's third lunar exploration mission developed by the Indian Space Research Organisation (ISRO).
                                                    Building on the legacy of Chandrayaan-1 and Chandrayaan-2, Chandrayaan-3 aims to achieve a successful soft landing on the Moon's
                                                    surface. This mission focuses on the lunar south pole, a region of great interest due to its potential water ice deposits and unique
                                                    geological features.The mission is expected to provide valuable insights into the Moon's surface and contribute to our understanding
                                                    of lunar science
                                                </p></div>
                                                <div className="topic-footer">
                                                    <a className='colorp' href='https://www.isro.gov.in/Chandrayaan3_Details.html'>Learn More</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mangalyaan" >
                                    <div className="sc-box-child" data-aos="zoom-in-up">
                                        <div className="sc-box-content flex1">
                                            <div className="sc-img">
                                                <div className="mangalyaan-img">
                                                </div>
                                            </div>
                                            <div className="sc-topic">
                                                <div className="topic-heading">
                                                    <h3 className='color'  >Mangalyaan</h3>
                                                </div>
                                                <div className="topic-main colorp"><p>
                                                    <b>Mangalyaan</b> also known as the Mars Orbiter Mission (MOM), is India's first interplanetary mission launched by the Indian Space Research
                                                    Organisation (ISRO). It was launched on November 5, 2013, with the primary objective of exploring Mars' surface features, morphology, mineralogy,
                                                    and atmosphere.It made India the first Asian nation to reach Martian orbit and the fourth space agency in the world to do so.Mangalyaan's success
                                                    was a significant achievement for ISRO, demonstrating India's capabilities in space exploration and interplanetary missions. </p></div>
                                                <div className="topic-footer">
                                                    <a className='colorp' href='https://www.isro.gov.in/MarsOrbiterMissionSpacecraft.html'>Learn More</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="aditya" data-aos="zoom-in-up">
                                    <div className="sc-box-child">
                                        <div className="sc-box-content flex">
                                            <div className="sc-img">
                                                <div className="aditya-img">
                                                </div>
                                            </div>
                                            <div className="sc-topic">
                                                <div className="topic-heading">
                                                    <h3 className='color'  >Aditya L1</h3>
                                                </div>
                                                <div className="topic-main colorp"><p>
                                                    <b>Aditya L1</b> shall be the first space based Indian mission to study the Sun. The spacecraft shall be placed in a halo orbit around the Lagrange point
                                                    1 (L1) of the Sun-Earth system, which is about 1.5 million km from the Earth. A satellite placed in the halo orbit around the L1 point has the major advantage
                                                    of continuously viewing the Sun without any occultation/eclipses. This will provide a greater advantage of observing the solar activities and its effect on space
                                                    weather in real time.The instruments of Aditya-L1 are tuned to observe the solar atmosphere mainly the chromosphere and corona.</p></div>
                                                <div className="topic-footer">
                                                    <a className='colorp' href='https://www.isro.gov.in/Aditya_L1.html'>Learn More</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Center;
