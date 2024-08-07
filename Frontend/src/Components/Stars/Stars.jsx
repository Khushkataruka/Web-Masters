import { useEffect, useState } from 'react';
import './Stars.css';
import Navbar from '../HomePage/Navbar/Navbar';
import ArrowCircleRightTwoToneIcon from '@mui/icons-material/ArrowCircleRightTwoTone';
import ArrowCircleLeftTwoToneIcon from '@mui/icons-material/ArrowCircleLeftTwoTone';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import AOS from 'aos';
import 'aos/dist/aos.css';


const starPhases = [
    {
        id: 1,
        title: "Birth",
        className: "birth",
        description: "The birth of a star is a mesmerizing phenomenon that commences in vast, dense clouds of gas and dust, known as nebulae. Within these nebulae, gravity compels the gas and dust particles to coalesce, gradually forming a dense core called a protostar. As the protostar gathers more material, its temperature and pressure soar, eventually igniting nuclear fusion in its core. This fusion process transmutes hydrogen into helium, releasing immense energy and light. Over millions of years, the protostar evolves and stabilizes into a main-sequence star, illuminating and heating its surroundings. This transformation from a cold, dark cloud to a radiant star is a testament to the dynamic and awe-inspiring nature of the universe.",
        image: "birth.avif",
        details: [
            "Molecular Clouds and Initial Conditions: Molecular clouds are vast regions of cold gas and dust in galaxies, primarily composed of molecular hydrogen (H₂). They are the nurseries of stars, containing all the necessary materials for star formation. These clouds are often turbulent, with varying densities and temperatures, and are supported against gravitational collapse by thermal pressure, magnetic fields, and turbulent motions. However, certain regions within these clouds, known as dense cores, become gravitationally unstable and begin to collapse.",
            "Gravitational Collapse and Fragmentation: Dense core formation begins when a region within a molecular cloud reaches a critical density and temperature, causing it to collapse under its own gravity. The collapse is typically initiated by processes such as shock waves from nearby supernova explosions, cloud-cloud collisions, or changes in the external pressure. As the core collapses, it fragments into smaller pieces, each of which can potentially form a star or a small star cluster.",
            "Role of Magnetic Fields and Turbulence: Magnetic fields play a significant role in the evolution of dense cores. They can provide support against gravitational collapse by coupling with the ionized gas in the cloud, creating magnetic pressure. However, as the collapse progresses, magnetic flux can be lost through a process known as ambipolar diffusion, allowing the core to contract further. Turbulent motions within the cloud also influence core formation, contributing to the internal pressure and affecting the fragmentation process.",
            "Thermal Support and Cooling Mechanisms: As the core collapses, the gas heats up due to compression. However, cooling mechanisms, such as the emission of radiation from molecules like carbon monoxide (CO) and dust grains, help to dissipate the heat, allowing the core to continue collapsing. The balance between heating and cooling processes is crucial in determining the final mass and size of the dense core.",
            "Chemical and Physical Evolution: The physical and chemical properties of the gas and dust in the dense core evolve during the collapse. The increased density leads to the formation of complex molecules on the surfaces of dust grains. Additionally, the collapse process can lead to the formation of a disk-like structure around the core, where angular momentum is conserved. This disk can eventually form planets and other substellar objects.",
            "Protostar Formation: As the collapse continues, the central region of the dense core becomes increasingly dense and hot, eventually forming a protostar. The protostar is surrounded by a rotating disk of gas and dust, from which it accretes material. The protostar continues to grow in mass until the surrounding material is either accreted or dispersed. Once nuclear fusion ignites in the core of the protostar, it becomes a main-sequence star.",
            "Nuclear Fusion ignition: As the core's temperature and pressure increase, nuclear fusion begins, converting hydrogen into helium and releasing energy. The collapse continues, and the central region of the dense core becomes increasingly dense and hot, eventually forming a protostar. This fusion process requires temperatures of about 10 million degrees Celsius. The protostar continues to grow in mass, surrounded by a rotating disk of gas and dust, from which it accretes material.",
            "Main-sequence star stabilization: The newly formed star reaches a state of equilibrium, where the energy produced by nuclear fusion counteracts gravitational collapse. This phase can last for billions of years, with stars like our Sun spending approximately 10 billion years in the main-sequence phase. During this time, the star burns hydrogen in its core, radiating energy and light into space. This stable phase is marked by a balance between the inward gravitational forces and the outward pressure from nuclear fusion.",
            "Observational Signatures: Dense cores are often observed in the millimeter and submillimeter wavelengths, where emissions from dust and molecular lines are detectable. Observations with telescopes like ALMA (Atacama Large Millimeter/submillimeter Array) provide valuable insights into the physical conditions, chemical composition, and dynamics of dense cores. These observations help to refine models of star formation and understand the initial conditions leading to the birth of stars.",
            "Astrophysical Significance: Dense core formation is a fundamental process in astrophysics, as it sets the initial conditions for star formation, determines the initial mass function (IMF) of stars, and influences the formation of planetary systems. Understanding dense core formation is also crucial for explaining the observed diversity of stellar populations and the evolution of galaxies."
        ],
        link: "https://hubblesite.org/mission-and-telescope/hubble-30th-anniversary/hubbles-exciting-universe/beholding-the-birth-and-death-of-stars#:~:text=The%20ring%2C%20about%20a%20light,nebulas%20had%20simple%2C%20spherical%20shapes."
    },
    {
        id: 2,
        title: "Life",
        className: "life",
        description: "A star spends the majority of its lifetime in the main-sequence phase, where it fuses hydrogen into helium in its core. During this stable period, the star maintains a balance between gravitational forces and the outward pressure from nuclear fusion. The duration of a star's main-sequence phase depends on its mass, with more massive stars burning through their hydrogen fuel more quickly than smaller stars.",
        image: "life.jpg",
        details: [
            "Stellar Equilibrium: During the main-sequence phase, a star maintains equilibrium, where the inward gravitational pull is balanced by the outward pressure from nuclear fusion. This balance ensures a stable output of energy and light. The process occurs at different rates depending on the star's mass, with more massive stars fusing hydrogen at a faster rate.",
            "Nuclear Fusion Processes: In the core of main-sequence stars, hydrogen nuclei combine to form helium through nuclear fusion, primarily via the proton-proton chain or the CNO cycle, depending on the star's mass. This process releases a tremendous amount of energy, which radiates from the star's surface as light and heat.",
            "Energy Transport Mechanisms: Energy produced in the core is transported to the star's surface through radiation and convection. In lower-mass stars, energy is mainly transported by convection, while in higher-mass stars, radiation dominates. The mode of energy transport affects the star's structure and surface characteristics.",
            "Luminosity and Lifespan: A star's luminosity during the main-sequence phase depends on its mass, with more massive stars being more luminous. However, these stars also have shorter lifespans, as they consume their nuclear fuel more rapidly. In contrast, less massive stars, like red dwarfs, can remain on the main sequence for tens of billions of years.",
            "Stellar Classification: Main-sequence stars are classified into spectral types based on their temperature and luminosity. This classification ranges from the hottest, most massive O-type stars to the coolest, least massive M-type stars. The Sun, a G-type star, is a typical example of a main-sequence star.",
            "Mass Loss and Stellar Winds: Some main-sequence stars experience mass loss through stellar winds, where particles are ejected from the star's surface. This mass loss can affect the star's evolution and is particularly significant in massive stars, which can lose a substantial fraction of their mass over time.",
            "Hertzsprung-Russell Diagram: The main-sequence phase is prominently featured on the Hertzsprung-Russell (H-R) diagram, a graphical representation of stars' luminosities versus their temperatures. Main-sequence stars form a continuous band on the diagram, with their position determined by their mass and age.",
            "Magnetic Activity: Many main-sequence stars exhibit magnetic activity, including starspots, flares, and magnetic fields. This activity is particularly prominent in younger and more active stars and can influence the star's rotation rate and the environment around it.",
            "Planetary Systems: Main-sequence stars are often host to planetary systems, with planets forming from the protoplanetary disk surrounding the star during its early stages. The presence of planets can be inferred from various methods, including transit photometry and radial velocity measurements.",
            "Astrophysical Significance: The main-sequence phase is a crucial period in a star's life, determining its subsequent evolution and final fate. Understanding this phase helps astronomers study stellar populations, galaxy formation, and the conditions for planet formation and habitability."
        ],
        link: "https://hubblesite.org/mission-and-telescope/hubble-30th-anniversary/hubbles-exciting-universe/beholding-the-birth-and-death-of-stars#:~:text=The%20ring%2C%20about%20a%20light,nebulas%20had%20simple%2C%20spherical%20shapes."
    },
    {
        id: 3,
        title: "Death",
        className: "death",
        description: "The death of a star occurs when it exhausts its nuclear fuel. For low-mass stars like our Sun, this results in the outer layers being shed, forming a planetary nebula, while the core remains as a white dwarf. Massive stars undergo more violent deaths as supernovae, where the core collapses into a neutron star or black hole, and the outer layers are expelled into space.",
        image: "death.png",
        details: [
            "End Stages of Low-Mass Stars: Low-mass stars, including stars like the Sun, end their lives by shedding their outer layers, forming planetary nebulae, and leaving behind a dense core known as a white dwarf. White dwarfs are incredibly dense, Earth-sized remnants that gradually cool and fade over billions of years.",
            "End Stages of High-Mass Stars: High-mass stars undergo more violent deaths, often resulting in supernova explosions. These supernovae occur when the star's core collapses under gravity, leading to an explosive release of energy. The core remnant can become either a neutron star or, if massive enough, a black hole.",
            "Supernova Explosions: Supernovae are some of the most energetic events in the universe, briefly outshining entire galaxies. They play a critical role in the cosmic cycle by dispersing heavy elements created during the star's life into space, which later become part of new stars, planets, and other celestial bodies.",
            "Neutron Stars and Pulsars: Neutron stars are incredibly dense remnants formed from the collapsed core of a high-mass star. Composed mostly of neutrons, they can have masses greater than the Sun's but with a radius of only about 10 kilometers. Some neutron stars, known as pulsars, emit beams of radiation from their magnetic poles, which can be detected as pulses when they rotate.",
            "Black Holes: The most massive stars may collapse into black holes, regions of spacetime with gravitational pull so strong that nothing, not even light, can escape. Black holes are characterized by their event horizon, beyond which no information can escape, making them mysterious and enigmatic objects in astrophysics.",
            "Planetary Nebulae: The outer layers of low- to intermediate-mass stars are ejected into space at the end of their lives, forming colorful and intricate structures known as planetary nebulae. These nebulae glow due to ionization from the hot core left behind, providing a spectacular finale to the star's life.",
            "White Dwarf Cooling: White dwarfs do not undergo further fusion reactions and instead slowly cool and fade over time. As they cool, they eventually become black dwarfs, cold and dark remnants that are essentially the final end state of stellar evolution for low-mass stars.",
            "Stellar Nucleosynthesis: During their lifetimes and deaths, stars synthesize elements heavier than hydrogen and helium through nuclear fusion and other processes. These elements are released into space during supernovae or through stellar winds, contributing to the chemical evolution of the universe.",
            "Impact on the Interstellar Medium: The material expelled during the death of stars enriches the interstellar medium with heavy elements and contributes to the formation of new stars and planets. This cycle of birth, death, and rebirth is a fundamental aspect of cosmic evolution.",
            "Astrophysical Significance: The death of stars provides critical insights into the life cycles of stars, the formation of compact objects, and the enrichment of the universe with heavy elements. Understanding these processes helps astronomers study the history of galaxies and the universe's evolution."
        ],
        link: "https://hubblesite.org/mission-and-telescope/hubble-30th-anniversary/hubbles-exciting-universe/beholding-the-birth-and-death-of-stars#:~:text=The%20ring%2C%20about%20a%20light,nebulas%20had%20simple%2C%20spherical%20shapes."
    }
];
const biggestStars = [
    {
        id: 1,
        name: "UY Scuti",
        description: "UY Scuti is a remarkable red supergiant star located in the constellation Scutum, approximately 5,900 light-years from Earth. Known for being one of the largest stars discovered, it boasts a staggering radius about 909 times that of the Sun. This translates to a volume roughly 750 million times greater than our Sun. UY Scuti is classified as a pulsating variable star, with an apparent magnitude that fluctuates between 8.29 and 10.56, making it invisible to the naked eye without the aid of telescopes. The star's surface temperature is estimated to be around 3,550 Kelvin, and it shines with a luminosity approximately 124,000 times that of the Sun. UY Scuti was first cataloged in 1860 by the Bonn Observatory, and it has since become a subject of extensive research. Scientists are particularly interested in its complex characteristics, including a significant mass loss rate of about 5.8×10^−5 solar masses per year, a process that contributes to its evolution and eventual demise. In its late stages, UY Scuti is expected to transition into different stellar phases, potentially becoming a yellow hypergiant, a luminous blue variable, or a Wolf–Rayet star. These transitions will culminate in a spectacular supernova explosion, a cataclysmic event that will mark the end of its life cycle. Despite its massive size and impressive brightness, precise measurements of UY Scuti's distance and properties remain challenging. This difficulty underscores the complexities involved in studying such distant and colossal celestial objects. Ongoing research aims to unravel these mysteries, providing deeper insights into the nature and life cycle of supergiant stars like UY Scuti.",
        starImage: "Scuti.jpg",
        link: "https://en.wikipedia.org/wiki/UY_Scuti"
    },
    {
        id: 2,
        name: "VY Canis Majoris",
        description: "VY Canis Majoris is an enormous red hypergiant star located approximately 3,900 light-years away in the constellation Canis Major. It stands out for its immense size, with a radius estimated to be around 1,420 times that of the Sun, making it one of the largest stars known. This colossal size, combined with a relatively low surface temperature of about 3,500 Kelvin, gives VY Canis Majoris its characteristic red color. The star is undergoing rapid mass loss, shedding vast amounts of material into space, which form a complex and extended nebula around it. This process contributes significantly to the star's evolution and will eventually lead to a dramatic supernova explosion. The luminosity of VY Canis Majoris is staggering, approximately 270,000 times that of the Sun, making it one of the brightest stars observed. Its unstable nature is evident in its irregular variability and intense stellar winds. VY Canis Majoris's mass loss rate and instability are subjects of significant interest to astronomers, as they provide crucial insights into the late evolutionary stages of massive stars. Eventually, VY Canis Majoris is expected to collapse into a black hole, following its supernova explosion. This makes the star a key object of study in understanding the ultimate fate of the most massive stars in the universe.",
        starImage: "VY.jpg",
        link: "https://en.wikipedia.org/wiki/VY_Canis_Majoris"
    },
    {
        id: 3,
        name: "Betelgeuse",
        description: "Betelgeuse is one of the most well-known red supergiant stars, located about 640 light-years away in the constellation Orion. Its bright red appearance is easily visible to the naked eye, making it one of the most recognizable stars in the night sky. Betelgeuse is massive, with a radius approximately 764 times that of the Sun, which places it among the largest known stars. The star's surface temperature is relatively cool at around 3,500 Kelvin, characteristic of red supergiants. Betelgeuse is a semi-regular variable star, meaning its brightness changes over time. These changes have been closely monitored, particularly due to a notable dimming event in late 2019 and early 2020 that sparked widespread interest and speculation about an imminent supernova explosion. The star's luminosity is about 126,000 times that of the Sun, making it a highly luminous object in our galaxy. Betelgeuse is currently in the final stages of its stellar evolution, having exhausted the hydrogen in its core and now fusing heavier elements. This process will eventually lead to a core collapse and a supernova explosion, an event that will be visible from Earth even during daylight. The eventual supernova of Betelgeuse will provide a rare opportunity for astronomers to study such an explosion in detail, offering insights into the life cycle of massive stars. Betelgeuse's variability, size, and impending fate make it a central object of study in the field of astrophysics.",
        starImage: "b.jpg",
        link: "https://en.wikipedia.org/wiki/Betelgeuse"
    },
    {
        id: 4,
        name: "Antares",
        description: "Antares, also known as Alpha Scorpii, is a red supergiant star located approximately 550 light-years away in the constellation Scorpius. It is one of the brightest stars in the night sky, with a distinctive reddish hue that has made it a notable object for observation since ancient times. Antares has a radius about 680 times that of the Sun, making it a massive star with a relatively cool surface temperature of around 3,400 Kelvin. The star's luminosity is roughly 75,000 times greater than that of the Sun. Antares is a slow variable star, meaning its brightness fluctuates slightly over time. It is part of a binary system, accompanied by a much smaller, hotter companion star known as Antares B. The primary star, Antares A, is nearing the end of its life and is expected to go supernova in the relatively near astronomical future. This supernova explosion will be a significant event, potentially visible from Earth even during the day. Antares's mass, size, and evolutionary stage make it an important subject of study, particularly in understanding the life cycles of massive stars and the processes leading up to a supernova. The star's proximity and brightness offer a unique opportunity for detailed observation and analysis.",
        starImage: "a.jpg",
        link: "https://en.wikipedia.org/wiki/Antares"
    },
    {
        id: 5,
        name: "Mu Cephei",
        description: "Mu Cephei, commonly known as the Garnet Star, is a striking red supergiant located approximately 2,400 light-years away in the constellation Cepheus. Its deep red color, visible even to the naked eye, makes it one of the most colorful stars in the night sky. Mu Cephei is a colossal star, with a radius estimated to be around 1,650 times that of the Sun, making it one of the largest stars known. The star's surface temperature is approximately 3,690 Kelvin, which, while cooler than the Sun, is typical for red supergiants. Mu Cephei shines with a luminosity nearly 38,000 times greater than that of the Sun. It is a semi-regular variable star, meaning that its brightness varies over time. These variations are caused by complex processes in the star's outer layers, including pulsations and mass ejections. Mu Cephei is also losing mass at a significant rate, contributing to a surrounding nebula formed from expelled material. As it approaches the end of its life, Mu Cephei is expected to undergo a supernova explosion, a spectacular event that will contribute to the enrichment of the interstellar medium with heavy elements. The star's large size, distinctive color, and evolutionary state make it a fascinating object of study, providing insights into the life cycles of massive stars.",
        starImage: "mu.jpg",
        link: "https://en.wikipedia.org/wiki/Mu_Cephei"
    },
    {
        id: 6,
        name: "HR 5171 A",
        description: "HR 5171 A's immense size and close binary nature make it a rare and fascinating object for astronomers. The interaction between the two stars in the binary system leads to complex phenomena, including mass transfer and the formation of a shared envelope, where both stars may reside within a common gaseous shell. This system's instability and mass loss provide valuable insights into the late stages of stellar evolution, particularly for hypergiants. HR 5171 A's future evolution remains uncertain, but it may eventually explode as a supernova or undergo further dramatic changes. The study of such systems can help astronomers better understand the processes that govern the lives of the most massive and luminous stars in the universe.",
        starImage: "hr.jpg",
        link: "https://en.wikipedia.org/wiki/HR_5171_A"
    },
    {
        id: 7,
        name: "W OH",
        description: "W OH, also known as WOH G64, is a red supergiant star located about 5,000 light-years away in the Large Magellanic Cloud, a satellite galaxy of the Milky Way. It stands out as one of the largest known stars, with a radius approximately 1,200 times that of the Sun. W OH is a pulsating variable star, meaning its brightness varies over time due to pulsations in its outer layers. The star exhibits a strong stellar wind, which results in significant mass loss. This mass loss contributes to the formation of a circumstellar envelope composed of gas and dust. W OH's variability and mass loss are key characteristics that provide valuable information about the later stages of stellar evolution. The star's luminosity is about 340,000 times that of the Sun, making it one of the brightest stars in the Large Magellanic Cloud. W OH is expected to end its life in a supernova explosion, a fate shared by many massive stars. This event will contribute to the enrichment of the surrounding interstellar medium with heavy elements. The study of W OH and similar stars helps astronomers understand the complex processes involved in the life cycles of massive stars.",
        starImage: "woh.jpg",
        link: "https://en.wikipedia.org/wiki/WOH_G64"
    },
    {
        id: 8,
        name: "V354 Cephei",
        description: "V354 Cephei is a massive red supergiant star located approximately 9,000 light-years away in the constellation Cepheus. It is notable for its immense size, with a radius around 1,150 times that of the Sun, making it one of the largest stars known. V354 Cephei is also an extremely luminous star, radiating with a brightness approximately 400,000 times that of the Sun. This luminosity, combined with its large size, makes V354 Cephei a significant object of study in understanding the properties of supergiant stars. The star exhibits considerable variability in its brightness, a common trait among massive stars. These variations are often linked to complex processes occurring in the star's outer layers, such as pulsations and mass ejections. V354 Cephei is currently in a late stage of stellar evolution, and it is expected to end its life in a supernova explosion. This explosion will be a cataclysmic event, dispersing heavy elements into space and potentially leaving behind a neutron star or black hole. The study of V354 Cephei provides critical insights into the life cycles of the most massive stars and the physical processes that govern their evolution.",
        starImage: "v23.jpg",
        link: "https://en.wikipedia.org/wiki/V354_Cephei"
    },
    {
        id: 9,
        name: "RW Cephei",
        description: "RW Cephei is a red supergiant star located approximately 5,000 light-years away in the constellation Cepheus. This star is one of the largest known, with a radius around 1,000 times that of the Sun. RW Cephei is notable for its variability, with significant fluctuations in its brightness over time. These variations are indicative of the complex processes occurring within the star, such as pulsations and potential interactions with a companion in its binary system. RW Cephei is surrounded by a circumstellar envelope, a common feature among massive stars undergoing significant mass loss. The star's luminosity is approximately 300,000 times that of the Sun, making it a prominent object in the night sky. RW Cephei's evolutionary status suggests that it is nearing the end of its life cycle. It is expected to undergo a supernova explosion, a dramatic event that will mark the culmination of its evolution. The study of RW Cephei and similar supergiants provides valuable information on the late stages of stellar evolution, particularly the processes leading to supernovae and the formation of compact remnants like neutron stars or black holes.",
        starImage: "rw.jpg",
        link: "https://en.wikipedia.org/wiki/RW_Cephei"
    },
    {
        id: 10,
        name: "KY Cygni",
        description: "KY Cygni is an enormous red supergiant star situated about 5,000 light-years away in the constellation Cygnus. It has a radius approximately 1,000 times that of the Sun, making it one of the largest stars known. KY Cygni is also an exceptionally luminous star, with a luminosity nearly 300,000 times that of the Sun. The star's size and brightness make it a key object for studying the late stages of stellar evolution. KY Cygni exhibits variability in its brightness, a common characteristic among massive stars due to pulsations and other dynamic processes in their outer layers. These variations provide valuable clues about the internal structure and evolution of such stars. The star is also losing mass at a significant rate, contributing to the formation of a surrounding nebula. This mass loss is a critical factor in the star's evolution and eventual fate. KY Cygni is expected to end its life in a supernova explosion, an event that will disperse heavy elements into the surrounding interstellar medium. The study of KY Cygni and other supergiants offers important insights into the physical processes that govern the lives of the most massive stars in the universe.",
        starImage: "ky.jpg",
        link: "https://en.wikipedia.org/wiki/KY_Cygni"
    }
];

const starBackgrounds = {
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

const Stars = () => {
    const [currentPhase, setCurrentPhase] = useState(starPhases[0]);
    const [currentStarIndex, setCurrentStarIndex] = useState(0);
    const [expandedPhases, setExpandedPhases] = useState({});

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
        const links = document.querySelectorAll(".phase-link1");

        const handleClick = (event) => {
            const id = parseInt(event.currentTarget.dataset.id);
            const selectedPhase = starPhases.find(phase => phase.id === id);
            setCurrentPhase(selectedPhase);
            setExpandedPhases(prev => ({ ...prev, [id]: false }));
            window.scrollTo({ top: 800, behavior: 'smooth' });
        };

        links.forEach(link => {
            link.addEventListener("click", handleClick);
        });
        AOS.init({
            duration: 800,
            offset: 100,
            easing: 'ease-in-out',
            once: false,
            mirror: true
        });


        return () => {
            links.forEach(link => {
                link.removeEventListener("click", handleClick);
            });
        };
    }, []);

    const nextStar = () => {
        setCurrentStarIndex((prevIndex) => (prevIndex + 1) % biggestStars.length);
    };

    const prevStar = () => {
        setCurrentStarIndex((prevIndex) =>
            (prevIndex - 1 + biggestStars.length) % biggestStars.length
        );
    };

    const toggleShowMore = (id) => {
        setExpandedPhases(prev => ({ ...prev, [id]: !prev[id] }));
    };

    return (
        <>
            <Navbar />
            <div className='cont-real'>
                <div className="video cont-video"  >
                    <video src='starsvid.mp4' autoPlay muted playsInline loop>Unable to Play video</video>
                    <div className="sc-hero" data-aos='fade-up'>
                        <h1 className='video-h'>Stars</h1>
                        <p>Witness the brilliance of the stars, each one a luminous beacon in the vast tapestry of the universe. The night sky, a celestial canvas, inspires awe and wonder in every observer.</p>
                    </div>
                </div>
            </div>
            <div className="star-real" >
                <div className="container2">
                    <div className="container2-child">
                        <div className="star-phase-content">
                            <div className="star-image-container" >
                                <img src={currentPhase.image} alt={currentPhase.title} className='photo1'  />
                                <div className="phases1" >
                                    {starPhases.map((phase) => (
                                        <div key={phase.id} className="phase-link1" data-id={phase.id}>
                                            <h2>{phase.title}</h2>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="content1" data-aos='zoom-in'>
                                {currentPhase && (
                                    <>
                                        <div className='star-heads'>
                                            <h1 data-aos='fade-left'>{currentPhase.title}</h1>
                                            <p>{currentPhase.description}</p>
                                        </div>
                                        <div className="star-details" data-aos='fade-right'>
                                            {currentPhase.details.slice(0, expandedPhases[currentPhase.id] ? undefined : 2).map((detail, index) => (
                                                <div key={index} className="star-detail">
                                                    <h2>{detail.split(":")[0]}</h2>
                                                    <p>{detail.split(":")[1]}</p>
                                                </div>
                                            ))}
                                        </div>
                                        {expandedPhases[currentPhase.id] && (
                                            <div className="pages-s">
                                                <a href="https://hubblesite.org/mission-and-telescope/hubble-30th-anniversary/hubbles-exciting-universe/beholding-the-birth-and-death-of-stars#:~:text=The%20ring%2C%20about%20a%20light,nebulas%20had%20simple%2C%20spherical%20shapes." target="_blank" rel="noopener noreferrer">Learn more about stars life</a>
                                            </div>
                                        )}
                                        <div className='star-more'>
                                            {currentPhase.details.length > 2 && (
                                                <button onClick={() => toggleShowMore(currentPhase.id)} className='phase-more'>
                                                    {expandedPhases[currentPhase.id] ? 'Show Less' : 'Show More'}
                                                </button>
                                            )}
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className='container3'
                    style={{
                        background: starBackgrounds[biggestStars[currentStarIndex].id]
                    }}
                >
                    <div className='out'>
                        <div className="heading1">
                            <h2>Biggest Stars in the Universe</h2>
                        </div>
                    </div>
                    <div className='container3-child'>
                        <div className='star-topic'>
                            <h2>{biggestStars[currentStarIndex].name}</h2>
                            <div className="star">
                                <div className='star-img'>

                                    <div className='present' data-aos='fade-up' style={{ backgroundImage: `url(${biggestStars[currentStarIndex].starImage})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}>
                                        <div className="star-navigation">
                                            <button onClick={prevStar} className='star-left-button'>
                                                <ArrowCircleLeftOutlinedIcon />
                                            </button>
                                            <button onClick={nextStar} className='star-right-button'>
                                                <ArrowCircleRightOutlinedIcon />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className='star-data'>
                                    <p>{biggestStars[currentStarIndex].description}</p>
                                    <div className="data-s"><a href={biggestStars[currentStarIndex].link} target="_blank" rel="noopener noreferrer">Learn more about {biggestStars[currentStarIndex].name}</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Stars;