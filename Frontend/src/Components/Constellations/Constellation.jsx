import React from 'react';
import './Constellation.css';
import Navbar from '../HomePage/Navbar/Navbar';

const Constellation = () => {
    return (
        <div>
            <main>
            <Navbar />
                <section className="cont-hero" style={{ height: '100vh' }}>
                    <h1 style={{ marginTop: '25vh' }}>Dark Matter &</h1>
                    <h1>Dark Energy</h1>
                    <p>Discover the universe's building blocks – matter, dark matter, and dark energy.</p>
                </section>
            </main>
            <div className="cont-know">
                <p>Galaxies consist of stars, planets, and vast clouds of gas and dust, all bound together by gravity. The largest contain trillions of stars and can be more than a million light-years across. The smallest can contain a few thousand stars and span just a few hundred light-years. Most large galaxies have supermassive black holes at their centers, some with billions of times the Sun’s mass.</p>
                <p>Galaxies come in a variety of shapes, mostly spirals and ellipticals, as well as those with less orderly appearances, usually dubbed irregular.</p>
                <p>Most galaxies are between 10 billion and 13.6 billion years old. Some are almost as old as the universe itself, which formed around 13.8 billion years ago. Astronomers think the youngest known galaxy formed approximately 500 million years ago.</p>
                <p>Galaxies can organize into groups of about 100 or fewer members held together by their mutual gravity. Larger structures, called clusters, may contain thousands of galaxies. Groups and clusters can be arranged in superclusters, which are not gravitationally bound. Superclusters, empty voids, “walls” of galaxies, and other large-scale structures make up the cosmic web of matter in the universe.</p>
                <h1>Our Milky Way</h1>
                <p>Our home galaxy is called the Milky Way. It’s a spiral galaxy with a disk of stars spanning more than 100,000 light-years. Earth is located along one of the galaxy’s spiral arms, about halfway from the center. Our solar system takes about 240 million years to orbit the Milky Way just once.</p>
                <img src="src\Components\Constellations\milky.jpg" alt="Milky Way" />
                <p>From our perspective on Earth, the Milky Way looks like a faint, milky band of light arcing across the entire sky, which is how it got its name. This feature marks the central disk of our home galaxy seen edge on.</p>
                <p>The Milky Way sits in a neighborhood with over 50 other galaxies called the Local Group. Its members range in size from dwarf galaxies (smaller galaxies with up to a few billion stars) to Andromeda, our nearest large galactic neighbor.</p>
                <p>The Local Group sits just off the edge of the Virgo cluster and is part of the Laniakea supercluster.</p>
                <h1>Constellations:</h1>
            </div>
            <fieldset className="cont-fieldset">
                <legend><img src="src\Components\Constellations\robot_shortanswer.en.png" alt="robot" /></legend>
                <h3>The short answer:</h3>
                <p>There are a few different definitions of constellations, but many people think of constellations as a group of stars. The constellations you can see at night depend on your location on Earth and the time of year. Constellations were named after objects, animals, and people long ago. Astronomers today still use constellations to name stars and meteor showers.</p>
            </fieldset>
            <div className="cont-main">
                <h1>What are Constellations?</h1>
                <p>There are a few different definitions of constellations, but many people think of constellations as a group of stars. Often, it's a group of stars that looks like a particular shape in the sky and has been given a name. These stars are far away from Earth. They are not connected to each other at all. Some stars in a constellation might be close while others are very far away. But, if you were to draw lines in the sky between the stars like a dot-to-dot puzzle – and use lots of imagination – the picture would look like an object, animal, or person.</p>
                <p>Over time, cultures around the world have had different names and numbers of constellations depending on what people thought they saw. Today, there are 88 officially recognized constellations.</p>
                <img src="src\Components\Constellations\big-dipper.en.jpg" alt="Big Dipper" />
                <p className="cont-highlight">This group of stars is called the "big dipper." If you trace a line between the stars, it looks like a ladle, or dipper, that you'd use to dip soup from a pot. This photo of the big dipper was taken by an astronaut on the International Space Station, but you can often see this group of stars from the ground, too! Credit: NASA/Donald R. Pettit</p>
                <h2>What constellations can you see in the night sky?</h2>
                <p>The constellations you can see at night depend on the time of year. Earth orbits around the Sun once each year. Our view into space through the night sky changes as we orbit. So, the night sky looks slightly different each night because Earth is in a different spot in its orbit. The stars appear each night to move slightly west of where they were the night before.</p>
                <p>Your location on Earth also determines what stars and constellations you see, and how high they appear to rise in the sky. The Northern Hemisphere is always pointing in a different direction than the Southern Hemisphere. This means that stargazers in Australia, for example, get a slightly different view of the sky and can see a few different constellations than those in the United States.</p>
                <p>It can be a little confusing to picture how the night sky changes as we orbit the Sun. You can see how it all works in the illustration below.</p>
                <img src="src\Components\Constellations\constellations-chart.en.jpg" alt="Constellations Chart" />
                <p className="cont-highlight">A chart showing some of the constellations that are visible from the Northern Hemisphere in different times of year. Credit: NASA/JPL-Caltech</p>
                <p>For example, say you’re in the Northern Hemisphere looking into the night sky on September 21. You’ll probably be able to see the constellation Pisces. But you won’t see Virgo because that constellation is on the other side of the Sun. During that time of year, Virgo’s stars would only be visible during the daytime – but you’d never see them because of the brightness of our Sun.</p>
                <p>Want more? Our star finder activity is a great way to have some fun and learn about the constellations visible in our night sky each month.</p>
                <h3>What’s the difference between astrology and astronomy?</h3>
                <img src="src\Components\Constellations\pexels-philippedonn-1257860.jpg" alt="Orion Nebula" />
                <p className="cont-highlight">This image of the Orion nebula was captured by the Hubble Space Telescope. It is located in the constellation Orion, below the three stars that form the hunter's belt. Credit: NASA, ESA, M. Robberto</p>
                <p>Astronomy is the scientific study of everything in outer space. Astronomers and other scientists study stars and galaxies, most of which are many light-years away from Earth. Studying the scientific properties of these objects in space helps us to understand how the universe was made, what else is out there, and how we fit in.</p>
                <p>Astrology is not the same thing as astronomy. As a science, astronomy follows the scientific process involving evidence and data. Astrology is based on the belief that the location of certain stars and planets in the sky can predict the future or describe what a person is like. While astrology is important to some cultural traditions, its claims are not based on scientific evidence.</p>
                <div className="cont-small">
                    <p>Constellations are an important part of astronomy. They help people orient themselves using the night sky and stay a link between different cultures, sharing their own stories and mythologies.</p>
                    <p>Astronomy uses constellations for naming regions of the sky, and assigning them as guides to the location of stars and other cosmic objects. But even though the stars in a constellation look close to each other from our perspective, they are usually far apart in space.</p>
                    <p>Many cultures have their own names for constellations. Ancient Chinese, Greek, and Native American cultures, among many others, have created their own legends and stories to describe the patterns they saw in the stars. You can explore these cultural connections to the night sky by learning about the legends and mythologies associated with constellations.</p>
                </div>
            </div>
        </div>
    );
}

export default Constellation;
