import { useEffect, useState } from 'react';
import './Galaxies.css';
import Navbar from '../HomePage/Navbar/Navbar';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import img1 from "./images/milky.jpg"
import img2 from "./images/adro.jpg"
import img3 from "./images/m33.jpg"
import img4 from "./images/sombero.jpg"
import img5 from "./images/m51.jpg"
import img6 from "./images/pinwheel.jpg"
import img7 from "./images/cartwheel.jpg"
import img8 from "./images/m87.jpg"
import img9 from "./images/centurus.jpg"
import img10 from "./images/ngc1300.jpg"
import img11 from "./images/tadpole.jpg"
import img12 from "./images/anta.jpg"
import img13 from "./images/m81.jpg"
import img14 from "./images/ngc1309.jpg"
import img15 from "./images/ngc6946.jpg"
import img16 from "./images/ngc4565.jpg"
import img17 from "./images/antanne.jpg"
import img18 from "./images/hoags.jpg"
import img19 from "./images/spindle.jpg"
import img20 from "./images/ngc4921.jpg"
import AOS from 'aos';
import 'aos/dist/aos.css';


const galaxyPhases = [
    {
        id: 1,
        title: "Formation",
        className: "formation",
        description: "The formation of a galaxy is a complex and lengthy process that begins with vast clouds of gas, dust, and dark matter. This process, known as hierarchical clustering, involves the gravitational collapse of these components into denser regions, eventually forming protogalaxies. Over billions of years, these protogalaxies merge and grow into mature galaxies. The presence of dark matter is crucial, as it provides the necessary gravitational pull to bring together and hold the galaxy's components. As the gas collapses, it cools and forms stars, leading to the creation of star clusters and the initial structure of the galaxy. This phase sets the stage for the galaxy's future evolution and interactions.",
        image: "for.jpg",
        details: [
            "Initial Conditions: The universe's early conditions provided the necessary ingredients for galaxy formation. After the Big Bang, the universe was filled with hot plasma, gradually cooling to allow for the formation of neutral hydrogen. Tiny density fluctuations in the universe's matter distribution grew under gravity's influence, leading to the formation of the first dark matter halos.",
            "Dark Matter Halos: Dark matter, which interacts only through gravity, plays a pivotal role in galaxy formation. It forms large, invisible halos that provide the gravitational potential wells for baryonic (normal) matter to fall into. These halos are the scaffolding on which galaxies are built.",
            "Cooling and Condensation: As baryonic matter falls into dark matter halos, it cools and condenses into clouds of gas. This cooling process is critical for star formation, as it allows the gas to settle into dense regions where gravity can overcome pressure forces, leading to the formation of stars.",
            "Protogalaxy Formation: The initial structures formed from these processes are known as protogalaxies. These small, irregular structures contain the first generations of stars and often merge to form larger galaxies. The process of merging and accretion of gas continues throughout the galaxy's early life.",
            "Star Formation: Within these protogalaxies, stars begin to form. The earliest stars, known as Population III stars, were massive and short-lived, quickly ending their lives in supernova explosions that enriched the surrounding gas with heavier elements. This enrichment process is crucial for the subsequent formation of planets and life.",
            "Feedback Processes: The first stars and black holes formed in these protogalaxies played a significant role in shaping their environments. The energy and radiation from these objects could heat and expel gas, regulating star formation and influencing the growth of the galaxy.",
            "Observational Evidence: Observations of distant galaxies, as seen in deep field surveys with telescopes like the Hubble Space Telescope, provide glimpses into the early universe. These observations help astronomers study the properties of young galaxies and understand the processes involved in their formation.",
            "Astrophysical Significance: The formation phase of galaxies is fundamental to understanding the universe's large-scale structure and the origin of cosmic features. It sets the stage for galaxy evolution, star formation, and the development of complex structures like galaxy clusters."
        ],
        link: "https://hubblesite.org/mission-and-telescope/hubble-30th-anniversary/hubbles-exciting-universe/beholding-the-birth-and-death-of-stars#:~:text=The%20ring%2C%20about%20a%20light,nebulas%20had%20simple%2C%20spherical%20shapes."
    },
    {
        id: 2,
        title: "Evolution",
        className: "evolution",
        description: "Galaxies evolve over billions of years through a combination of internal processes and external influences. Internal processes include star formation, supernova explosions, and the activity of supermassive black holes. External influences, such as interactions with other galaxies, play a significant role in shaping a galaxy's structure and star formation rate. Mergers and acquisitions of smaller galaxies, known as galactic cannibalism, contribute to the growth and morphological transformation of galaxies. These evolutionary processes are responsible for the diversity of galaxy types observed in the universe today, including spiral, elliptical, and irregular galaxies.",
        image: "eve.jpg",
        details: [
            "Star Formation and Stellar Evolution: Star formation rates vary over a galaxy's lifetime, influenced by the availability of gas and feedback from previous generations of stars. The life cycle of stars, from their formation to supernova explosions, contributes to the chemical enrichment of the galaxy and the dynamics of the interstellar medium.",
            "Galaxy Morphology and Classification: Galaxies evolve in morphology, transitioning between types such as spiral, elliptical, and irregular. This classification depends on factors like the galaxy's history of mergers, star formation activity, and the presence of a bulge and disk structure. Spiral galaxies, like the Milky Way, have well-defined spiral arms, while elliptical galaxies are more featureless and contain older stellar populations.",
            "Active Galactic Nuclei and Black Holes: The centers of many galaxies host supermassive black holes, which can become active and form active galactic nuclei (AGN). AGN emit vast amounts of energy, affecting their host galaxies and surrounding environments. The growth of these black holes through accretion of matter influences the galaxy's evolution and can regulate star formation through feedback processes.",
            "Galaxy Mergers and Interactions: Galaxy mergers are significant events in the evolution of galaxies. During mergers, the gravitational forces between galaxies can trigger intense bursts of star formation, distort galactic structures, and lead to the formation of new galaxy types. These interactions can also result in the formation of tidal tails, bridges, and other features.",
            "Gas Accretion and Starburst Activity: Galaxies can accrete gas from the intergalactic medium, providing fresh material for star formation. Starburst galaxies, characterized by exceptionally high star formation rates, can result from interactions or the inflow of gas. These bursts of activity can significantly alter a galaxy's appearance and chemical composition.",
            "Quenching and Star Formation Cessation: Over time, galaxies may cease forming stars, a process known as quenching. This can occur due to various mechanisms, such as the exhaustion of gas, the influence of AGN, or environmental effects like ram pressure stripping in galaxy clusters. Quenching leads to the transition from star-forming to passive galaxies, often seen in elliptical galaxies.",
            "Chemical Evolution and Metallicity: The chemical composition of galaxies changes over time as stars synthesize heavier elements and disperse them into the interstellar medium. The study of metallicity, or the abundance of elements heavier than hydrogen and helium, provides insights into a galaxy's star formation history and evolutionary state.",
            "Observational Studies: Astronomers study galaxy evolution using observations across the electromagnetic spectrum, from radio waves to gamma rays. Surveys of galaxies at different redshifts allow scientists to trace the evolutionary history of galaxies over cosmic time and understand the processes that shape them.",
            "Simulation and Theoretical Models: Numerical simulations and theoretical models play a crucial role in studying galaxy evolution. These tools help scientists understand the physical processes driving galaxy formation and evolution, predict observable properties, and compare with observational data.",
            "Astrophysical Significance: Understanding galaxy evolution is essential for comprehending the history of the universe, the formation of large-scale structures, and the conditions for star and planet formation. It also sheds light on the role of dark matter and dark energy in shaping cosmic evolution."
        ],
        link: "https://hubblesite.org/mission-and-telescope/hubble-30th-anniversary/hubbles-exciting-universe/beholding-the-birth-and-death-of-stars#:~:text=The%20ring%2C%20about%20a%20light,nebulas%20had%20simple%2C%20spherical%20shapes."
    },
    {
        id: 3,
        title: "Interaction",
        className: "interaction",
        description: "Galaxies interact with one another through gravitational forces, leading to a wide range of phenomena that can dramatically alter their structure and evolution. These interactions can be as minor as gravitational tugs or as major as full-scale collisions and mergers. Such events play a significant role in the lifecycle of galaxies, influencing star formation rates, triggering galactic mergers, and leading to the formation of new structures like tidal tails and ring galaxies. The environment in which a galaxy resides, such as being part of a galaxy cluster or a smaller group, also affects its interactions and overall evolution.",
        image: "inter.jpg",
        details: ["Gravitational Interactions and Tidal Forces: When galaxies pass close to one another, gravitational forces can cause tidal distortions, pulling stars and gas into elongated structures. These tidal interactions can lead to the formation of tidal tails, bridges, and other features, often seen in interacting galaxy pairs.",
            "Galaxy Collisions and Mergers: Collisions between galaxies are common in the universe. When galaxies collide, their stars rarely collide directly due to the vast distances between them. However, the gravitational forces during these events can dramatically alter the galaxies' structures, triggering star formation bursts, disrupting orbits, and sometimes leading to the formation of new galaxy types, such as elliptical galaxies from spiral galaxy mergers.",
            "Starburst Galaxies: Galaxy collisions can trigger intense star formation activity, creating what are known as starburst galaxies. These galaxies form stars at rates much higher than average, often exhausting their gas supplies quickly. The intense radiation and stellar winds from newly formed stars can blow out the remaining gas, quenching further star formation.",
            "Formation of Tidal Features: During interactions, gravitational forces can strip stars and gas from galaxies, creating spectacular tidal features. These include tidal tails, bridges, and shells, which are remnants of past interactions. Such features provide evidence of a galaxy's interaction history.",
            "Galactic Cannibalism: In dense environments like galaxy clusters, larger galaxies can grow by accreting smaller ones, a process known as galactic cannibalism. The larger galaxy's gravitational pull disrupts the smaller galaxy, pulling it apart and incorporating its stars and gas. This process contributes to the growth of massive galaxies over time.",
            "Ring Galaxies: Ring galaxies can form as a result of direct collisions with smaller galaxies passing through a larger galaxy's disk. The impact compresses the gas in the disk, triggering a wave of star formation that propagates outward, creating a ring-like structure of new stars.",
            "Environmental Effects: The environment plays a crucial role in galaxy interactions. In galaxy clusters, interactions are more frequent due to the higher density of galaxies. Processes like ram pressure stripping, where a galaxy loses its gas as it moves through the hot intracluster medium, can quench star formation and alter the galaxy's morphology.",
            "Galaxy Groups and Clusters: Galaxies often reside in groups or clusters, bound together by gravity. The interactions within these systems can lead to the formation of complex structures and influence the evolution of the member galaxies. The central dominant galaxy in a cluster, often a giant elliptical, can grow by merging with smaller galaxies.",
            "Intergalactic Medium (IGM) and Gas Exchanges: Interactions between galaxies can also affect the intergalactic medium (IGM), the space between galaxies. Galaxies can exchange gas with the IGM through outflows driven by star formation and AGN activity or by accreting gas from the IGM, influencing their future star formation potential.",
            "Observational Evidence: Observations of interacting galaxies, such as the Antennae Galaxies or the Mice Galaxies, provide stunning visuals and valuable data on the dynamics of galaxy interactions. These observations help astronomers study the impact of interactions on star formation, morphology, and the growth of supermassive black holes.",
            "Astrophysical Significance: Galaxy interactions are a key driver of galaxy evolution. They can transform galaxy structures, trigger new star formation, and influence the growth of central supermassive black holes. Studying these interactions helps astronomers understand the hierarchical nature of galaxy formation and the role of the environment in shaping galaxies."
        ],
        link: "https://hubblesite.org/mission-and-telescope/hubble-30th-anniversary/hubbles-exciting-universe/beholding-the-birth-and-death-of-stars#:~:text=The%20ring%2C%20about%20a%20light,nebulas%20had%20simple%2C%20spherical%20shapes."
    }
];
const galaxies = [
    {
        id: 1,
        name: "Milky Way Galaxy",
        description: "The Milky Way Galaxy is our home galaxy, a barred spiral galaxy that contains billions of stars, including our Solar System. It has a central bulge surrounded by a disk of gas, dust, and stars, and is part of a larger structure known as the Local Group. The Milky Way's spiral arms are regions of high star formation activity. It's a relatively large galaxy and plays a significant role in astronomical research due to our location within it.",
        starImage: img1,
        link: "https://en.wikipedia.org/wiki/Milky_Way"
    },
    {
        id: 2,
        name: "Andromeda Galaxy (M31)",
        description: "The Andromeda Galaxy is a spiral galaxy approximately 2.537 million light-years away from Earth. It is the closest spiral galaxy to the Milky Way and is on a collision course with it, expected to merge in about 4.5 billion years. Andromeda is larger than the Milky Way and contains roughly one trillion stars. It has a bright core, a dust lane, and several satellite galaxies.",
        starImage: img2,
        link: "https://en.wikipedia.org/wiki/Andromeda_Galaxy"
    },
    {
        id: 3,
        name: "Triangulum Galaxy (M33)",
        description: "The Triangulum Galaxy, also known as M33, is a spiral galaxy approximately 2.73 million light-years away from Earth in the constellation Triangulum. It is the third-largest galaxy in the Local Group, after the Milky Way and Andromeda. M33 contains about 40 billion stars, significantly less than the Milky Way and Andromeda, but it is rich in star-forming regions.",
        starImage: img3,
        link: "https://en.wikipedia.org/wiki/Triangulum_Galaxy"
    },
    {
        id: 4,
        name: "Sombrero Galaxy (M104)",
        description: "The Sombrero Galaxy, also known as M104, is a spiral galaxy located about 31 million light-years away in the constellation Virgo. It has a bright nucleus, a large central bulge, and a prominent dust lane in its inclined disk, giving it the appearance of a sombrero hat. The galaxy is known for its extensive system of globular clusters and a supermassive black hole at its center.",
        starImage: img4,
        link: "https://en.wikipedia.org/wiki/Sombrero_Galaxy"
    },
    {
        id: 5,
        name: "Whirlpool Galaxy (M51)",
        description: "The Whirlpool Galaxy, also known as M51, is a classic spiral galaxy located about 23 million light-years away in the constellation Canes Venatici. It is known for its well-defined spiral arms and interaction with a companion galaxy, NGC 5195. This interaction has triggered intense star formation in the Whirlpool Galaxy. It is one of the most studied galaxies due to its clear structu  re.",
        starImage: img5,
        link: "https://en.wikipedia.org/wiki/Whirlpool_Galaxy"
    },
    {
        id: 6,
        name: "Pinwheel Galaxy (M101)",
        description: "The Pinwheel Galaxy, also known as M101, is a face-on spiral galaxy located about 21 million light-years away in the constellation Ursa Major. It is a large galaxy with a diameter of approximately 170,000 light-years, making it nearly twice the size of the Milky Way. The galaxy is known for its high rate of star formation and its well-defined spiral structu  re.",
        starImage: img6,
        link: "https://en.wikipedia.org/wiki/Pinwheel_Galaxy"
    },
    {
        id: 7,
        name: "Cartwheel Galaxy",
        description: "The Cartwheel Galaxy is a lenticular galaxy and ring galaxy about 500 million light-years away in the constellation Sculptor. It was likely a normal spiral galaxy before a collision with a smaller galaxy caused a shock wave, creating the ring shape. The galaxy has an outer ring dominated by active star formation and an inner region with less activi  ty.",
        starImage: img7,
        link: "https://en.wikipedia.org/wiki/Cartwheel_Galaxy"
    },
    {
        id: 8,
        name: "Messier 87 (M87)",
        description: "Messier 87, also known as M87, is a giant elliptical galaxy in the Virgo Cluster, located about 53 million light-years away. It is known for its large population of globular clusters and a supermassive black hole at its center, which was the first black hole to be imaged directly. M87 is one of the most massive galaxies in the local univer  se.",
        starImage: img8,
        link: "https://en.wikipedia.org/wiki/Messier_87"
    },
    {
        id: 9,
        name: "Centaurus A",
        description: "Centaurus A, also known as NGC 5128, is a prominent galaxy in the constellation Centaurus, located about 13 million light-years away. It is one of the closest radio galaxies to Earth, featuring a massive central black hole and an active galactic nucleus. Centaurus A is known for its unique structure, including a large dust lane that obscures much of the galaxy's inner regio  ns.",
        starImage: img9,
        link: "https://en.wikipedia.org/wiki/Centaurus_A"
    },
    {
        id: 10,
        name: "NGC 1300",
        description: "NGC 1300 is a barred spiral galaxy located about 61 million light-years away in the constellation Eridanus. It is one of the best examples of a barred spiral galaxy, with a well-defined bar structure and spiral arms. The galaxy's central region shows a grand design structure, with the bar and arms making a beautiful pattern. NGC 1300 is part of the Eridanus Clust  er.",
        starImage: img10,
        link: "https://en.wikipedia.org/wiki/NGC_1300"
    },
    {
        id: 11,
        name: "Tadpole Galaxy",
        description: "The Tadpole Galaxy, also known as UGC 10214, is a disrupted barred spiral galaxy located about 420 million light-years away in the constellation Draco. It is named for its distinctive shape, featuring a long tail of stars and interstellar material trailing away from the main body of the galaxy. This tail was formed as a result of a gravitational interaction with a smaller galaxy. The Tadpole Galaxy is a beautiful example of galactic interaction and the dynamic processes that shape galaxi  es.",
        starImage: img11,
        link: "https://en.wikipedia.org/wiki/Tadpole_Galaxy"
    },
    {
        id: 12,
        name: "Antennae Galaxies",
        description: "The Antennae Galaxies, also known as NGC 4038 and NGC 4039, are a pair of interacting galaxies located about 45 million light-years away in the constellation Corvus. They are named for their long, antenna-like tidal tails formed by the interaction. The collision of these galaxies has triggered intense star formation, making the Antennae Galaxies a fascinating case study in the life cycle of galaxies and the formation of sta  rs.",
        starImage: img12,
        link: "https://en.wikipedia.org/wiki/Antennae_Galaxies"
    },
    {
        id: 13,
        name: "Messier 81 (M81)",
        description: "Messier 81, also known as M81 or Bode's Galaxy, is a grand design spiral galaxy located about 12 million light-years away in the constellation Ursa Major. It is one of the brightest galaxies visible from Earth and is known for its well-defined spiral structure. M81 has a supermassive black hole at its center and is part of a group of galaxies that includes the nearby M82 gala  xy.",
        starImage: img13,
        link: "https://en.wikipedia.org/wiki/Messier_81"
    },
    {
        id: 14,
        name: "NGC 1309",
        description: "NGC 1309 is a spiral galaxy located approximately 100 million light-years away in the constellation Eridanus. It has a beautiful, tightly wound spiral structure and is home to a supernova that was observed in 2002. The galaxy's prominent spiral arms and bright core make it a notable object for study in the field of galaxy morphology and stellar evoluti  on.",
        starImage: img14,
        link: "https://en.wikipedia.org/wiki/NGC_1309"
    },
    {
        id: 15,
        name: "NGC 6946",
        description: "NGC 6946, also known as the Fireworks Galaxy, is an intermediate spiral galaxy about 25.2 million light-years away in the constellations Cepheus and Cygnus. It is notable for its high rate of star formation and the numerous supernovae observed within it. NGC 6946 is a relatively close galaxy and provides a rich field for studying the processes of star formation and galactic dynami  cs.",
        starImage: img15,
        link: "https://en.wikipedia.org/wiki/NGC_6946"
    },
    {
        id: 16,
        name: "NGC 4565",
        description: "NGC 4565, also known as the Needle Galaxy, is an edge-on spiral galaxy about 30 to 50 million light-years away in the constellation Coma Berenices. Its thin, needle-like appearance when viewed edge-on gives it its name. The galaxy is known for its bright nucleus and large central bulge. NGC 4565 is an excellent example of a spiral galaxy and is often used in studies of galactic structu  re.",
        starImage: img16,
        link: "https://en.wikipedia.org/wiki/NGC_4565"
    },
    {
        id: 17,
        name: "NGC 4038/NGC 4039 (Antennae Galaxies)",
        description: "The Antennae Galaxies, composed of NGC 4038 and NGC 4039, are a pair of interacting galaxies located about 45 million light-years away in the constellation Corvus. These galaxies are in the process of merging, leading to the formation of extensive starburst regions. The interaction has created long, arcing tidal tails that resemble the antennae of an insect, hence their na  me.",
        starImage: img17,
        link: "https://en.wikipedia.org/wiki/Antennae_Galaxies"
    },
    {
        id: 18,
        name: "Hoag's Object",
        description: "Hoag's Object is a peculiar ring galaxy located about 600 million light-years away in the constellation Serpens. It features a nearly perfect ring of young, hot blue stars surrounding a yellow nucleus. The origin of this unique structure is still a subject of research, with theories suggesting that it may have formed through a collision or a gravitational interaction with another gala  xy.",
        starImage: img18,
        link: "https://en.wikipedia.org/wiki/Hoag%27s_Object"
    },
    {
        id: 19,
        name: "NGC 5866 (Spindle Galaxy)",
        description: "NGC 5866, also known as the Spindle Galaxy, is a lenticular galaxy located about 44 million light-years away in the constellation Draco. It is characterized by its prominent dust lane and nearly edge-on orientation, which gives it a spindle-like appearance. NGC 5866 is notable for its well-defined disk and is often studied to understand the properties of lenticular galaxi  es.",
        starImage: img19,
        link: "https://en.wikipedia.org/wiki/NGC_5866"
    },
    {
        id: 20,
        name: "NGC 4921",
        description: "NGC 4921 is an anemic spiral galaxy located approximately 320 million light-years away in the constellation Coma Berenices. It is part of the Coma Cluster and is characterized by its low surface brightness and weak star formation activity. NGC 4921 has a large population of old stars and a faint spiral structure, making it an interesting subject for studying the effects of galaxy environment on star formati  on.",
        starImage: img20,
        link: "https://en.wikipedia.org/wiki/NGC_4921"
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
    10: "url('https://www.transparenttextures.com/patterns/tile.png'), linear-gradient(to bottom, #1d1d1d, #3a3a3a, #595959)",
    11: "url('https://www.transparenttextures.com/patterns/asfalt-light.png'), linear-gradient(to bottom, #2a2a2a, #3c3c3c, #4e4e4e)",
    12: "url('https://www.transparenttextures.com/patterns/climpek.png'), linear-gradient(to bottom, #1f1f1f, #3f3f3f, #5f5f5f)",
    13: "url('https://www.transparenttextures.com/patterns/corrugation.png'), linear-gradient(to bottom, #262626, #484848, #6a6a6a)",
    14: "url('https://www.transparenttextures.com/patterns/dark-fish-skin.png'), linear-gradient(to bottom, #1b1b1b, #353535, #4f4f4f)",
    15: "url('https://www.transparenttextures.com/patterns/dark-matter.png'), linear-gradient(to bottom, #2d2d2d, #4d4d4d, #6d6d6d)",
    16: "url('https://www.transparenttextures.com/patterns/dark-wall.png'), linear-gradient(to bottom, #1c1c1c, #3c3c3c, #5c5c5c)",
    17: "url('https://www.transparenttextures.com/patterns/dimension.png'), linear-gradient(to bottom, #292929, #4b4b4b, #6d6d6d)",
    18: "url('https://www.transparenttextures.com/patterns/ep_naturalblack.png'), linear-gradient(to bottom, #191919, #383838, #575757)",
    19: "url('https://www.transparenttextures.com/patterns/escheresque.png'), linear-gradient(to bottom, #2e2e2e, #4e4e4e, #6e6e6e)",
    20: "url('https://www.transparenttextures.com/patterns/gplay.png'), linear-gradient(to bottom, #1a1a1a, #3a3a3a, #5a5a5a)"
};


const Galaxies = () => {
    const [currentPhase, setCurrentPhase] = useState(galaxyPhases[0]);
    const [currentgalaxyIndex, setCurrentgalaxyIndex] = useState(0);
    const [expandedPhases, setExpandedPhases] = useState({});


    const handleClick = (event) => {
        const id = parseInt(event.currentTarget.dataset.id);
        const selectedPhase = galaxyPhases.find(phase => phase.id === id);
        setCurrentPhase(selectedPhase);
        setExpandedPhases(prev => ({ ...prev, [id]: false }));
        window.scrollTo({ top: 800, behavior: 'smooth' });
    };
    useEffect(() => {
        AOS.init({
            duration: 800,
            offset: 200,
            easing: 'ease-in-out',
            once: false, // Set this to false to allow animation every time you scroll
            mirror: true, // Set this to true to allow elements to animate out while scrolling past them
        });
        window.scrollTo({ top: 0, behavior: 'instant' });
        const links = document.querySelectorAll(".phase-link1-g");



        links.forEach(link => {
            link.addEventListener("click", handleClick);
        });

    }, []);

    const nextStar = () => {
        setCurrentgalaxyIndex((prevIndex) => (prevIndex + 1) % galaxies.length);
    };

    const prevStar = () => {
        setCurrentgalaxyIndex((prevIndex) =>
            (prevIndex - 1 + galaxies.length) % galaxies.length
        );
    };

    const toggleShowMore = (id) => {
        setExpandedPhases(prev => ({ ...prev, [id]: !prev[id] }));
    };

    return (
        <>
            <Navbar />
            <div className='cont-real'>
                <div className="video cont-video">
                    <video src='galaxyvid.mp4' autoPlay muted playsInline loop>Unable to Play video</video>
                    <div className="galaxy-cont gal-par" data-aos='fade-up'>
                        <h1 className='video-h'>Galaxies</h1>
                        <p>"Explore the grandeur of galaxies, cosmic islands of stars, gas, and dark matter. Each galaxy, with its unique structure and beauty, tells a story of the universe's evolution and the mysteries of space. From spiral wonders to elliptical giants, these celestial formations capture the imagination and curiosity of all who gaze upon them."</p>
                    </div>
                </div>
            </div>
            <div className="star-real">
                <div className="container2">
                    <div className="container2-child">
                        <div className="star-phase-content">
                            <div className="star-image-container">
                                <img src={currentPhase.image} alt={currentPhase.title} className='photo1' />
                                <div className="phases1-g" >
                                    {galaxyPhases.map((phase) => (
                                        <div key={phase.id} className="phase-link1-g" data-id={phase.id}>
                                            <h2>{phase.title}</h2>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="content1" data-aos='zoom-in'>
                                {currentPhase && (
                                    <>
                                        <div className='star-heads'>
                                            <h1  data-aos='fade-right'>{currentPhase.title}</h1>
                                            <p>{currentPhase.description}</p>
                                        </div>
                                        <div className="star-details"  data-aos='fade-left'>
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
                        background: galaxyBackgrounds[galaxies[currentgalaxyIndex].id]
                    }}
                >
                    <div className='out'>
                        <div className="heading1">
                            <h2>Biggest Galaxies in the Universe</h2>
                        </div>
                    </div>
                    <div className='container3-child'>
                        <div className='star-topic'>
                            <h2>{galaxies[currentgalaxyIndex].name}</h2>
                            <div className="star">
                                <div className="star">
                                    <div className='star-img'>

                                        <div className='present' data-aos='fade-up' style={{ backgroundImage: `url(${galaxies[currentgalaxyIndex].starImage})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}>
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
                                        <p>{galaxies[currentgalaxyIndex].description}</p>
                                        <div className="data-s"><a href={galaxies[currentgalaxyIndex].link} target="_blank" rel="noopener noreferrer">Learn more about {galaxies[currentgalaxyIndex].name}</a></div>
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

export default Galaxies;