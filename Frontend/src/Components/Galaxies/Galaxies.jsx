import { useEffect, useState } from 'react';
import './Galaxies.css';
import Navbar from '../HomePage/Navbar/Navbar';
import Solarsystem from '../HomePage/Solarsystem/Solarsystem';

const galaxyPhases = [
    {
        id: 1,
        title: "Formation",
        className: "formation",
        description: "Galaxies form from vast clouds of gas and dark matter through the process of gravitational collapse. Over time, these clouds coalesce and form dense regions that eventually give rise to stars, star clusters, and the overall structure of the galaxy. This process can take billions of years and is influenced by various factors, including the presence of dark matter and interactions with nearby galaxies.",
        image: "https://cdn.esahubble.org/archives/images/screen/potw2344a.jpg",
        details: [
            "Dark matter influence: Dark matter plays a crucial role in galaxy formation by providing additional gravitational pull, helping gas clouds collapse more efficiently.",
            "Protogalaxy formation: Initially, smaller structures called protogalaxies form and gradually merge to create larger galaxies.",
            "Star formation: Within these protogalaxies, dense regions of gas give rise to stars, creating the first generations of stars in the galaxy."
        ]
    },
    {
        id: 2,
        title: "Evolution",
        className: "evolution",
        description: "Over billions of years, galaxies evolve through internal processes and interactions with other galaxies. Star formation, supernova explosions, and black hole activity shape the galaxy's structure and composition. Galaxies can also grow by merging with other galaxies, leading to changes in their shape and size.",
        image: "https://cdn.esahubble.org/archives/images/screen/opo0328a.jpg",
        details: [
            "Star formation and evolution: Continuous star formation and the life cycle of stars contribute to the dynamic nature of galaxies.",
            "Galactic mergers: When galaxies collide and merge, they can form larger, more massive galaxies, often triggering new waves of star formation.",
            "Black hole growth: Supermassive black holes at the centers of galaxies can influence their evolution through energetic outflows and interactions with surrounding matter."
        ]
    },
    {
        id: 3,
        title: "Interaction",
        className: "interaction",
        description: "Galaxies are not isolated; they interact with each other through gravitational forces. These interactions can range from minor gravitational tugs to major collisions and mergers. Such interactions play a significant role in shaping the structure and future evolution of galaxies.",
        image: "https://cdn.esahubble.org/archives/images/screen/heic0206b.jpg",
        details: [
            "Gravitational interactions: Galaxies exert gravitational forces on each other, leading to distortions, tidal tails, and other structural changes.",
            "Galaxy collisions: When galaxies collide, their stars, gas, and dust can merge, often triggering intense star formation known as starbursts.",
            "Cluster dynamics: Galaxies within clusters interact with one another, influencing their motion, structure, and evolution over time."
        ]
    }
];
const galaxy = [
    {
        id: 1,
        name: "UY Scuti",
        description: "UY Scuti, a red supergiant star located 5,900 light-years away in the constellation Scutum, is one of the largest known stars. It has a radius of approximately 909 times that of the Sun, making its volume around 750 million times greater. This pulsating variable star exhibits an apparent magnitude range between 8.29 and 10.56, rendering it invisible to the naked eye. UY Scuti's surface temperature is about 3,550 K, and it shines with a luminosity 124,000 times that of the Sun. Initially catalogued in 1860 by the Bonn Observatory, UY Scuti has been a subject of ongoing study, revealing complex characteristics and a significant mass loss rate of 5.8×10−5 solar masses per year. Eventually, it is expected to evolve into a yellow hypergiant, luminous blue variable, or Wolf–Rayet star before ending its life in a supernova explosion. Despite its immense size and brightness, its precise distance and characteristics are subjects of ongoing research, highlighting the challenges in measuring such distant and massive celestial objects.",
        starImage: "https://cdn.mos.cms.futurecdn.net/QYC5zdDwUJwygKVYEexd4U-1200-80.jpg.webp",
        link: "https://en.wikipedia.org/wiki/UY_Scuti"
    },
    {
        id: 2,
        name: "VY Canis Majoris",
        description: "VY Canis Majoris is another colossal red hypergiant star, located approximately 3,900 light-years away in the constellation Canis Major. It has an estimated radius of around 1,420 times that of the Sun. With a surface temperature of roughly 3,500 K, it is one of the coolest supergiants. VY Canis Majoris is notable for its extensive mass loss, shedding a significant amount of material into its surrounding nebula. This star is highly luminous, radiating with a brightness nearly 270,000 times that of the Sun. Due to its unstable nature, VY Canis Majoris is expected to end its life in a dramatic supernova explosion, possibly leaving behind a black hole.",
        starImage: "https://cdn.mos.cms.futurecdn.net/VjG3dhw2vMxY42BCVEGQuU-1200-80.jpeg.webp",
        link: "https://en.wikipedia.org/wiki/VY_Canis_Majoris"
    },
    {
        id: 3,
        name: "Betelgeuse",
        description: "Betelgeuse, a red supergiant star located approximately 640 light-years away in the constellation Orion, is among the brightest stars visible in the night sky. With a radius about 764 times that of the Sun, Betelgeuse is one of the largest and most luminous stars known. It has a surface temperature of approximately 3,500 K and shines with a luminosity roughly 126,000 times that of the Sun. Betelgeuse has been observed to undergo significant changes in brightness, indicative of its variable nature. As it approaches the end of its life, Betelgeuse is expected to explode as a supernova, an event that will be visible from Earth and illuminate the night sky for weeks.",
        starImage: "https://www.bhmpics.com/downloads/betelgeuse-Wallpapers/30.scr00001.jpg",
        link: "https://en.wikipedia.org/wiki/Betelgeuse"
    },
    {
        id: 4,
        name: "Antares",
        description: "Antares, a red supergiant star located approximately 550 light-years away in the constellation Scorpius, is notable for its deep reddish hue. It has an estimated radius of about 680 times that of the Sun. With a surface temperature of roughly 3,400 K, Antares is one of the coolest red supergiants. The star is approximately 75,000 times more luminous than the Sun and is part of a binary system with a small, hot companion star. Antares is expected to end its life in a supernova explosion, similar to other massive stars, which will mark the end of its evolutionary journey.",
        starImage: "https://cdn.mos.cms.futurecdn.net/SxeJcFKwEXzMXUtAnCGCug-1200-80.jpg",
        link: "https://en.wikipedia.org/wiki/Antares"
    },
    {
        id: 5,
        name: "Mu Cephei",
        description: "Mu Cephei, also known as the Garnet Star, is a red supergiant star located approximately 2,400 light-years away in the constellation Cepheus. It has a radius roughly 1,650 times that of the Sun, making it one of the largest known stars. With a surface temperature of about 3,690 K, Mu Cephei shines with a luminosity nearly 38,000 times that of the Sun. Its deep red color is visible to the naked eye, and it has been a subject of study for centuries. Like other red supergiants, Mu Cephei will eventually go supernova, contributing to the cycle of stellar evolution.",
        starImage: "https://gardenastronomer.com/wp-content/uploads/2021/04/garnet-star-banner.jpg?w=1200",
        link: "https://en.wikipedia.org/wiki/Mu_Cephei"
    },
    {
        id: 6,
        name: "HR 5171 A",
        description: "HR 5171 A is a yellow hypergiant star located about 12,000 light-years away in the constellation Centaurus. With a radius around 1,300 times that of the Sun, it is one of the largest known stars by radius. HR 5171 A is highly luminous, radiating with a brightness approximately 1 million times that of the Sun. The star is part of a binary system with a smaller companion and exhibits significant variability in its brightness. Its immense size and luminosity make it a valuable subject of study in the field of stellar astronomy.",
        starImage: "https://www.eso.org/public/archives/images/screen/eso1409b.jpg",
        link: "https://en.wikipedia.org/wiki/HR_5171_A"
    },
    {
        id: 7,
        name: "W OH",
        description: "W OH is a red supergiant star located about 5,000 light-years away in the constellation Orion. It is a pulsating variable star with a radius around 1,200 times that of the Sun. W OH exhibits a strong stellar wind, which contributes to its mass loss. The star is known for its significant brightness variability and is a subject of ongoing study. Its large size and variability make it an interesting object for astronomers studying the life cycles of massive stars.",
        starImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/WOH_G64_Particular.jpg/1200px-WOH_G64_Particular.jpg",
        link: "https://en.wikipedia.org/wiki/WOH_G64"
    },
    {
        id: 8,
        name: "V354 Cephei",
        description: "V354 Cephei is a red supergiant star located approximately 9,000 light-years away in the constellation Cepheus. With a radius about 1,150 times that of the Sun, it is one of the largest known stars. V354 Cephei has a luminosity around 400,000 times that of the Sun and is known for its extreme variability. The star's immense size and brightness make it a key object for understanding the properties and evolution of supergiants. Its variability adds to its significance in the study of stellar astrophysics.",
        starImage: "https://odysseymagazine.com/wp-content/uploads/2023/09/UY-Scuti-is-still-the-largest-star-in-the-universe.jpg",
        link: "https://en.wikipedia.org/wiki/V354_Cephei"
    },
    {
        id: 9,
        name: "RW Cephei",
        description: "RW Cephei is another red supergiant star located about 5,000 light-years away in the constellation Cepheus. It has a radius approximately 1,000 times that of the Sun and exhibits significant brightness variations. RW Cephei is part of a binary system and has been studied for its variability and massive size. Its immense size and variable nature provide valuable insights into the life cycles of massive stars and their evolutionary processes.",
        starImage: "https://imageio.forbes.com/specials-images/imageserve/6394b59e613475c0e3574740/Artist-s-concept-of-a-Hypergiant-Star-/960x0.jpg?format=jpg&width=1440",
        link: "https://en.wikipedia.org/wiki/RW_Cephei"
    },
    {
        id: 10,
        name: "KY Cygni",
        description: "KY Cygni is a red supergiant star located about 5,000 light-years away in the constellation Cygnus. With a radius around 1,000 times that of the Sun, KY Cygni is notable for its significant size and luminosity. The star exhibits variability and is one of the most luminous stars known. Its massive size and brightness make it a key object for studying the end stages of stellar evolution. KY Cygni's large radius and high luminosity provide valuable data for understanding the characteristics and life cycles of supergiant stars. Its variability adds complexity to the study of such stellar giants.",
        starImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Sadr_Region_rgb.jpg/640px-Sadr_Region_rgb.jpg",
        link: "https://en.wikipedia.org/wiki/KY_Cygni"
    }
];
const galaxyBackgrounds = {
    1: "url('https://www.transparenttextures.com/patterns/dark-denim.png'), linear-gradient(to bottom, #1a1a1a, #400000, #b22222)",
    2: "url('https://www.transparenttextures.com/patterns/diamond.png'), linear-gradient(to bottom, #0a0a0a, #3f0c0c, #a83f3f)",
    3: "url('https://www.transparenttextures.com/patterns/abstract.png'), linear-gradient(to bottom, #1a1a1a, #4c1d1d, #b56c6c)",
    4: "url('https://www.transparenttextures.com/patterns/old-map.png'), linear-gradient(to bottom, #2a2a2a, #6c1616, #d84d4d)",
    5: "url('https://www.transparenttextures.com/patterns/mosaic.png'), linear-gradient(to bottom, #1a1a1a, #6f1d1d, #b95e5e)",
    6: "url('https://www.transparenttextures.com/patterns/snow.png'), linear-gradient(to bottom, #0a0a0a, #1f1f1f, #404040)",
    7: "url('https://www.transparenttextures.com/patterns/coffee.png'), linear-gradient(to bottom, #2e2e2e, #4e4e4e, #6c6c6c)",
    8: "url('https://www.transparenttextures.com/patterns/wood.png'), linear-gradient(to bottom, #1e1e1e, #3b3b3b, #585858)",
    9: "url('https://www.transparenttextures.com/patterns/paper.png'), linear-gradient(to bottom, #2c2c2c, #4a4a4a, #6d6d6d)",
    10: "url('https://www.transparenttextures.com/patterns/tile.png'), linear-gradient(to bottom, #1d1d1d, #3a3a3a, #595959)"
};

const Galaxies = () => {
    const [currentPhase, setCurrentPhase] = useState(galaxyPhases[0]);
    const [currentgalaxyIndex, setCurrentgalaxyIndex] = useState(0);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
        const links = document.querySelectorAll(".phase-link");

        const handleClick = (event) => {
            const id = parseInt(event.currentTarget.dataset.id);
            const selectedPhase = galaxyPhases.find(phase => phase.id === id);
            setCurrentPhase(selectedPhase);

            window.scrollTo({ top: 0, behavior: 'smooth' });
        };
        links.forEach(link => {
            link.addEventListener("click", handleClick);
        });
        return () => {
            links.forEach(link => {
                link.removeEventListener("click", handleClick);
            });
        };
    }, []);

    const nextgalaxy = () => {
        setCurrentgalaxyIndex((prevIndex) => (prevIndex + 1) % galaxy.length);
    };

    const prevgalaxy = () => {
        setCurrentgalaxyIndex((prevIndex) =>
            (prevIndex - 1 + galaxy.length) % galaxy.length
        );
    };

    return (
        <>
            <Navbar />
            <div className="container1">
                <div className="phase-content">
                    <div className="image-container">
                        <img src={currentPhase.image} alt={currentPhase.title} className='photo' />
                    </div>
                    <div className="content">
                        {currentPhase && (
                            <>
                                <div className='heads'>
                                    <h1>{currentPhase.title}</h1>
                                    <p>{currentPhase.description}</p>
                                </div>
                                <div className="details">
                                    {currentPhase.details.map((detail, index) => (
                                        <div key={index} className="detail">
                                            <h2>{detail.split(":")[0]}</h2>
                                            <p>{detail.split(":")[1]}</p>
                                        </div>
                                    ))}
                                </div>
                                    <div className="pages">
                                        <a href="https://hubblesite.org/mission-and-telescope/hubble-30th-anniversary/hubbles-exciting-universe/beholding-the-birth-and-death-of-stars#:~:text=The%20ring%2C%20about%20a%20light,nebulas%20had%20simple%2C%20spherical%20shapes." target="_blank" rel="noopener noreferrer">learn more about stars life</a>
                                    </div>
                            </>
                        )}
                    </div>
                </div>
                <div className="phases">
                    {galaxyPhases.map((phase) => (
                        <div key={phase.id} className="phase-link" data-id={phase.id}>
                            <h2>{phase.title}</h2>
                        </div>
                    ))}
                </div>
            </div>
            <div className='out'>
                <div className="heading1">
                    <h2>Biggest Stars in the Universe</h2>
                </div>
            </div>
            <div 
                className='container3' 
                style={{ 
                    background: galaxyBackgrounds[galaxy[currentgalaxyIndex].id]
                }}
            >
                <div className='container3-child'>
                    <div className='star-topic'>
                        <h2>{galaxy[currentgalaxyIndex].name}</h2>
                        <div className="star-navigation">
                            <button onClick={prevgalaxy} className='left'>←</button>
                            <button onClick={nextgalaxy} className='right'>→</button>
                        </div>
                        <div className="star">
                            <div className='star-img'>
                                <div className='present'>
                                    <img src={galaxy[currentgalaxyIndex].galaxyImage} alt={galaxy[currentgalaxyIndex].name}/>
                                </div>
                            </div>
                            <div className='star-data'>
                                <p>{galaxy[currentgalaxyIndex].description}</p>
                                <a href={galaxy[currentgalaxyIndex].link} target="_blank" rel="noopener noreferrer">Learn more about {galaxy[currentgalaxyIndex].name}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Solarsystem />
        </>
    );
};

export default Galaxies;