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
//  const topstars= [
//     {
//        id:1,
//        title:"",
//        className:"",
//        description:"",
//        image:"",
//     },
//     {
//         id:2,
//         title:"",
//         className:"",
//         description:"",
//         image:"",
//      },
//      {
//         id:3,
//         title:"",
//         className:"",
//         description:"",
//         image:"",
//      },
//      {
//         id:4,
//         title:"",
//         className:"",
//         description:"",
//         image:"",
//      },
//      {
//         id:5,
//         title:"",
//         className:"",
//         description:"",
//         image:"",
//      },
//      {
//         id:6,
//         title:"",
//         className:"",
//         description:"",
//         image:"",
//      },
//      {
//         id:7,
//         title:"",
//         className:"",
//         description:"",
//         image:"",
//      },
//      {
//         id:8,
//         title:"",
//         className:"",
//         description:"",
//         image:"",
//      },
//      {
//         id:9,
//         title:"",
//         className:"",
//         description:"",
//         image:"",
//      },
//      {
//         id:10,
//         title:"",
//         className:"",
//         description:"",
//         image:"",
//      }
//  ];

const Galaxies = () => {
    const [currentPhase, setCurrentPhase] = useState(galaxyPhases[0]);

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

    // const topstars =() => {
    //     const[currentPhase, setCurrentPhase] = useState(galaxyPhases[0]);
    // }

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
            <Solarsystem />
        </>
    );
};

export default Galaxies;