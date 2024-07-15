import { useEffect, useState } from 'react';
import './Stars.css';
import Navbar from '../HomePage/Navbar/Navbar';
import Solarsystem from '../HomePage/Solarsystem/Solarsystem'; 

const starPhases = [
    {
        id: 1,
        title: "Birth",
        className: "birth",
        description: "The birth of a star is a mesmerizing phenomenon that commences in vast, dense clouds of gas and dust, known as nebulae. Within these nebulae, gravity compels the gas and dust particles to coalesce, gradually forming a dense core called a protostar. As the protostar gathers more material, its temperature and pressure soar, eventually igniting nuclear fusion in its core. This fusion process transmutes hydrogen into helium, releasing immense energy and light. Over millions of years, the protostar evolves and stabilizes into a main-sequence star, illuminating and heating its surroundings. This transformation from a cold, dark cloud to a radiant star is a testament to the dynamic and awe-inspiring nature of the universe.",
        image: "https://cdn.esahubble.org/archives/images/screen/heic2007a.jpg",
        details: [
            "Dense core formation: The initial phase where gas and dust particles in a nebula coalesce due to gravity, forming a dense core. This process can take millions of years, with temperatures reaching up to 15 million degrees Celsius.",
            "Nuclear Fusion ignition: As the core's temperature and pressure increase, nuclear fusion begins, converting hydrogen into helium and releasing energy. This process requires temperatures of about 10 million degrees Celsius.",
            "Main-sequence star stabilization: The newly formed star reaches a state of equilibrium, where the energy produced by nuclear fusion counteracts gravitational collapse. This phase can last for billions of years, with stars like our Sun spending approximately 10 billion years in the main-sequence phase."
        ]
    },
    {
        id: 2,
        title: "Life",
        className: "life",
        description: "A star spends the majority of its lifetime in the main-sequence phase, where it fuses hydrogen into helium in its core. During this stable period, the star maintains a balance between gravitational forces and the outward pressure from nuclear fusion. The duration of a star's main-sequence phase depends on its mass, with more massive stars burning through their hydrogen fuel more quickly than smaller stars.",
        image: "https://cdn.esahubble.org/archives/images/screen/opo9920a.jpg",
        details: [
            "Hydrogen fusion: The primary energy source for stars during their main-sequence phase, converting hydrogen into helium in the core. For instance, our Sun converts about 600 million tons of hydrogen into helium every second.",
            "Main-sequence stability: During this phase, stars remain in hydrostatic equilibrium, balancing the inward force of gravity with the outward pressure from fusion. Stars can remain in this stable phase for billions of years.",
            "Mass-dependent lifespan: The lifespan of a star is inversely proportional to its mass. Massive stars, like blue giants, may only remain in the main-sequence for a few million years, while smaller stars, like red dwarfs, can remain in this phase for up to 100 billion years."
        ]
    },
    {
        id: 3,
        title: "Death",
        className: "death",
        description: "The death of a star occurs when it exhausts its nuclear fuel. For low-mass stars like our Sun, this results in the outer layers being shed, forming a planetary nebula, while the core remains as a white dwarf. Massive stars undergo more violent deaths as supernovae, where the core collapses into a neutron star or black hole, and the outer layers are expelled into space.",
        image: "https://hubblesite.org/files/live/sites/hubble/files/home/mission-and-telescope/hubble-30th-anniversary/hubbles-exciting-universe/_images/hst30th-5stars-0716a.jpg?t=tn2400",
        details: [
            "Fuel exhaustion: As a star depletes its nuclear fuel, it can no longer sustain nuclear fusion. For a star like our Sun, this process will occur over approximately 10 billion years.",
            "Planetary nebula formation: Low-mass stars shed their outer layers, creating a glowing shell of ionized gas. This phase lasts for tens of thousands of years, resulting in beautiful nebulae like the Ring Nebula.",
            "Supernova explosion: Massive stars end their lives in a catastrophic explosion known as a supernova. This explosion can outshine entire galaxies and releases an enormous amount of energy, up to 10^44 joules, in just a few seconds."
        ]
    }
];
//  const topstars=[
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

const Stars = () => {
    const [currentPhase, setCurrentPhase] = useState(starPhases[0]);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
        const links = document.querySelectorAll(".phase-link");

        const handleClick = (event) => {
            const id = parseInt(event.currentTarget.dataset.id);
            const selectedPhase = starPhases.find(phase => phase.id === id);
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
    //     const[currentPhase, setCurrentPhase] = useState(starPhases[0]);
    // }

    return (
        <>
            <Navbar />
            <div className="container2">
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
                    {starPhases.map((phase) => (
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

export default Stars;