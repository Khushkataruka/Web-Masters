import React, { useState, useEffect } from 'react';
import './Constellation.css';
import Navbar from '../HomePage/Navbar/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Ensure this import is correct

const Constellation = () => {
    const [learn, setLearn] = useState(false);

    const handleLearnClick = () => {
        setLearn(!learn);
        if (!learn) {
            window.scrollTo({ top: 1000, behavior: 'smooth' });
        }
    };

    useEffect(() => {
        AOS.init({
            duration: 800,
            offset: 200,
            easing: 'ease-in-out',
            once: false,
        });
    }, []);

    return (
        <>
            <Navbar />
            <div className='cont-real'>
                <div className="video cont-video">
                    <video src='con-video.mp4' autoPlay muted playsInline loop>
                        Unable to Play video
                    </video>
                    <div className="sc-hero" data-aos='fade-up'>
                        <h1 className='video-h'>Constellations</h1>
                        <p>"The celestial patterns that captivate our imaginations and connect us to the cosmos, unrivaled in their ability to inspire wonder and curiosity."</p>
                    </div>
                </div>
                <main>
                    <section className="cont-hero">
                        <div data-aos='fade-up'>
                            <h1 style={{ marginTop: '10vh' }}>Orion</h1>
                            <p>Orion is a prominent set of stars visible during winter in the northern celestial hemisphere. It is one of the 88 modern constellations; it was among the 48 constellations listed by the 2nd-century astronomer Ptolemy. It is named after a hunter in Greek mythology.</p>
                            <button className='learn-cont-btn' onClick={handleLearnClick}>
                                {learn ? "Show less" : "Learn more"}
                            </button>
                        </div>
                    </section>
                </main>
                {learn && (
                    <div className="cont-know">
                        <div className="cont-temp">
                            <p><b>Overview:</b> Orion is one of the most recognizable constellations in the night sky, often referred to as "The Hunter." It is located on the celestial equator and is visible throughout the world. Orion is named after a hunter in Greek mythology.</p>
                            <div className='cont-highlight newAnimated'>
                                <h3>Notable Features:</h3>
                                <ul>
                                    <li><b>Orion Nebula (M42):</b> Located below Orion's Belt, it is one of the brightest nebulae in the sky and is visible to the naked eye. It is a region of active star formation.</li>
                                    <li><b>Horsehead Nebula:</b> Located just south of Alnitak, it is a dark nebula that gets its name from its distinctive shape.</li>
                                </ul>
                            </div>
                            <h3>Mythology:</h3>
                            <p><b>In Greek mythology, Orion was a giant huntsman whom Zeus placed among the stars. Various myths describe his adventures and his connection to other constellations, such as Scorpius, the scorpion that led to his demise.</b></p>
                            <div className='cont-highlight newAnimated'>
                                <h3>Interesting Facts:</h3>
                                <ul>
                                    <li>Orion is best visible in the evening sky from January to March.</li>
                                    <li>The constellation is a useful reference point for locating other stars and constellations.</li>
                                    <li>Betelgeuse is expected to explode as a supernova within the next million years, which will be a spectacular event visible from Earth.</li>
                                </ul>
                            </div>
                            <div className='cont-highlight newAnimated'>
                                <h3>Observation Tips:</h3>
                                <ul>
                                    <li>To locate Orion, look for the three stars in a straight line that form Orion's Belt. From there, you can trace the outline of the constellation.</li>
                                    <li>Orion can be seen in both the Northern and Southern Hemispheres, making it one of the most familiar and studied constellations.</li>
                                </ul>
                            </div>
                            <h1>Key Stars:</h1>
                            <ul>
                                <li><b>Betelgeuse:</b> A red supergiant and the second brightest star in Orion.</li>
                                <li><b>Rigel:</b> A blue supergiant and the brightest star in Orion.</li>
                                <li><b>Bellatrix:</b> Another bright star that forms Orion's left shoulder.</li>
                                <li><b>Altair:</b> A red dwarf star, often considered the nearest star to Earth.</li>
                                <li><b>Mintaka, Alnilam, and Alnitak:</b> The three stars that form Orion's Belt.</li>
                            </ul>
                            <h1>Mythology:</h1>
                            <p>In Greek mythology, Orion was a giant huntsman whom Zeus placed among the stars. Orion is often depicted as facing the charging bull, Taurus, with his club raised and his hunting dog, Canis Major, at his feet.</p>
                            <img src="const.jpg" alt="Milky Way" />
                            <p>Orion, known as "The Hunter," is a prominent constellation visible worldwide. It features notable stars like Betelgeuse, a red supergiant, and Rigel, a blue supergiant. Orion's Belt, formed by the stars Mintaka, Alnilam, and Alnitak, is easily recognizable. The constellation hosts the Orion Nebula, a bright star-forming region, and the Horsehead Nebula. In Greek mythology, Orion was a giant huntsman placed among the stars by Zeus. Orion is best observed from January to March and serves as a key reference point for locating other stars and constellations.</p>
                            <h1>Constellations:</h1>
                            <fieldset className="cont-fieldset newAnimated">
                                <legend><img src="robot_shortanswer.en.png" alt="robot" /></legend>
                                <h3>The short answer:</h3>
                                <p>There are a few different definitions of constellations, but many people think of constellations as a group of stars. The constellations you can see at night depend on your location on Earth and the time of year. Constellations were named after objects, animals, and people long ago. Astronomers today still use constellations to name stars and meteor showers.</p>
                            </fieldset>
                        </div>
                        <div className="cont-main">
                            <h1>What are Constellations?</h1>
                            <p>There are a few different definitions of constellations, but many people think of constellations as a group of stars. Often, it's a group of stars that looks like a particular shape in the sky and has been given a name. These stars are far away from Earth. They are not connected to each other at all. Some stars in a constellation might be close while others are very far away. But, if you were to draw lines in the sky between the stars like a dot-to-dot puzzle – and use lots of imagination – the picture would look like an object, animal, or person.</p>
                            <p>Over time, cultures around the world have had different names and numbers of constellations depending on what people thought they saw. Today, there are 88 officially recognized constellations.</p>
                            <img src="big-dipper.en.jpg" alt="Big Dipper" />
                            <p className="cont-highlight newAnimated">This group of stars is called the "big dipper." If you trace a line between the stars, it looks like a ladle, or dipper, that you'd use to dip soup from a pot. This photo of the big dipper was taken by an astronaut on the International Space Station, but you can often see this group of stars from the ground, too! Credit: NASA/Donald R. Pettit</p>
                            <h2>What constellations can you see in the night sky?</h2>
                            <p>The constellations you can see at night depend on the time of year. Earth orbits around the Sun once each year. Our view into space through the night sky changes as we orbit. So, the night sky looks slightly different each night because Earth is in a different spot in its orbit. The stars appear each night to move slightly west of where they were the night before.</p>
                            <p>Your location on Earth also determines what stars and constellations you see, and how high they appear to rise in the sky. The Northern Hemisphere is always pointing in a different direction than the Southern Hemisphere. This means that stargazers in Australia, for example, get a slightly different view of the sky and can see a few different constellations than those in the United States.</p>
                            <p>It can be a little confusing to picture how the night sky changes as we orbit the Sun. You can see how it all works in the illustration below.</p>
                            <img src="constellations-chart.en.jpg" alt="Constellations Chart" />
                            <p className="cont-highlight newAnimated">A chart showing some of the constellations that are visible from the Northern Hemisphere in different times of year. Credit: NASA/JPL-Caltech</p>
                            <p>For example, say you’re in the Northern Hemisphere looking into the night sky on September 21. You’ll probably be able to see the constellation Pisces. But you won’t see Virgo because that constellation is on the other side of the Sun. During that time of year, Virgo’s stars would only be visible during the daytime – but you’d never see them because of the brightness of our Sun.</p>
                            <p>Want more? Our star finder activity is a great way to have some fun and learn about the constellations visible in our night sky each month.</p>
                            <h3>What’s the difference between astrology and astronomy?</h3>
                            <img src="per-img.jpg" alt="Orion Nebula" />
                            <p className="cont-highlight newAnimated">This image of the Orion nebula was captured by the Hubble Space Telescope. It is located in the constellation Orion, below the three stars that form the hunter's belt. Credit: NASA, ESA, M. Robberto</p>
                            <p>Astronomy is the scientific study of everything in outer space. Astronomers and other scientists study stars and galaxies, most of which are many light-years away from Earth. Studying the scientific properties of these objects in space helps us to understand how the universe was made, what else is out there, and how we fit in.</p>
                            <p>Astrology is not the same thing as astronomy. As a science, astronomy follows the scientific process involving evidence and data. Astrology is based on the belief that the location of certain stars and planets in the sky can predict the future or describe what a person is like. While astrology is important to some cultural traditions, its claims are not based on scientific evidence.</p>
                            <div className="cont-small newAnimated">
                                <p>Constellations are an important part of astronomy. They help people orient themselves using the night sky and stay a link between different cultures, sharing their own stories and mythologies.</p>
                                <p>Astronomy uses constellations for naming regions of the sky, and assigning them as guides to the location of stars and other cosmic objects. But even though the stars in a constellation look close to each other from our perspective, they are usually far apart in space.</p>
                                <p>Many cultures have their own names for constellations. Ancient Chinese, Greek, and Native American cultures, among many others, have created their own legends and stories to describe the patterns they saw in the stars. You can explore these cultural connections to the night sky by learning about the legends and mythologies associated with constellations.</p>
                            </div>
                            <button className='learn-cont-btn' onClick={handleLearnClick}>
                                {learn ? "Show less" : "Learn more"}
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default Constellation;
