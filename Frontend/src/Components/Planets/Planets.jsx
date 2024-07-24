import React, { useEffect, useState } from 'react';
import './Planet.css';
import Navbar from '../HomePage/Navbar/Navbar';


const planets = [
    {
        id: 1,
        title: "Mercury",
        className: "mercury",
        description: "Mercury is the smallest planet in the Solar System and the closest to the Sun. It has a diameter of about 4,880 kilometers. Despite being close to the Sun, it is not the hottest planet due to its lack of atmosphere. Mercury's surface is covered with craters from collisions with asteroids and comets. One of the most prominent features is the Caloris Basin, about 1,550 kilometers in diameter.",
        box_shadow: "inset -2em -2em 2em rgb(9, 9, 9), -0.5em -0.5em 1em rgba(133, 133, 133, 1)",
        details: [
            "Diameter: 4,880 kilometers",
            "Distance from Sun: Closest planet",
            "Atmosphere: Very thin"
        ]
    },
    {
        id: 2,
        title: "Venus",
        className: "venus",
        description: "Venus, the second planet from the Sun, is known for its extremely hot surface, with temperatures around 465°C. It has a thick atmosphere composed mainly of carbon dioxide, with clouds of sulfuric acid. Venus rotates slowly and in the opposite direction of most planets. Its surface features vast volcanic plains and mountain ranges.",
        box_shadow: "inset -2em -2em 2em rgb(9, 9, 9), -0.5em -0.5em 1em #f5ca67",
        details: [
            "Surface Temperature: 465°C",
            "Atmosphere: Thick, mainly carbon dioxide",
            "Rotation: Retrograde (opposite direction)"
        ]
    },
    {
        id: 3,
        title: "Earth",
        className: "earth",
        description: "Earth, the third planet from the Sun, is the only known planet to support life. It has diverse climates and geography, including oceans, mountains, forests, and deserts. Earth's atmosphere is mostly nitrogen and oxygen. The planet has a unique system of tectonic plates that cause earthquakes and volcanic activity. About 71% of Earth's surface is covered by water.",
        box_shadow: "inset -2em -2em 2em rgb(9, 9, 9), -0.5em -0.5em 1em rgb(11, 11, 126)",
        details: [
            "Diameter: 12,742 kilometers",
            "Distance from Sun: 3rd planet",
            "Atmosphere: Nitrogen, Oxygen"
        ]
    },
    {
        id: 4,
        title: "Mars",
        className: "mars",
        description: "Mars, the fourth planet from the Sun, is known as the Red Planet due to its reddish appearance. It has a diameter of about 6,779 kilometers. Mars features the largest volcano in the Solar System, Olympus Mons, and a canyon system, Valles Marineris. The thin atmosphere is composed mostly of carbon dioxide.",
        box_shadow: " inset -2em -2em 2em rgb(9, 9, 9), -0.5em -0.5em 1em #99503b",
        details: [
            "Diameter: 6,779 kilometers",
            "Distance from Sun: 4th planet",
            "Atmosphere: Thin, mostly carbon dioxide"
        ]
    },
    {
        id: 5,
        title: "Jupiter",
        className: "jupiter",
        description: "Jupiter is the largest planet in the Solar System, known for its Great Red Spot, a massive storm. It has a diameter of about 139,820 kilometers and at least 79 moons, including the four largest: Ganymede, Callisto, Io, and Europa. Jupiter's atmosphere features bands of clouds and complex weather systems.",
        box_shadow: "inset -2em -2em 2em rgb(9, 9, 9), -0.5em -0.5em 1em #c1cdd2",
        details: [
            "Diameter: 139,820 kilometers",
            "Distance from Sun: 5th planet",
            "Moons: 79 known moons"
        ]
    },
    {
        id: 6,
        title: "Saturn",
        className: "saturn",
        description: "Saturn, the sixth planet from the Sun, is famous for its ring system made of ice and rock particles. It has a diameter of about 116,460 kilometers and at least 83 moons, with Titan being the largest. Saturn's rings are divided into several main groups, each consisting of thousands of ringlets.",
        box_shadow: "inset -2em -2em 2em rgb(9, 9, 9), -0.2em -0.2em 1em #f7ddb6",
        details: [
            "Diameter: 116,460 kilometers",
            "Distance from Sun: 6th planet",
            "Rings: Spectacular ring system"
        ]
    },
    {
        id: 7,
        title: "Uranus",
        className: "uranus",
        description: "Uranus, the seventh planet from the Sun, has a blue-green color due to methane in its atmosphere. It has a diameter of about 50,724 kilometers and is tilted on its side, causing extreme seasonal variations. Uranus has at least 27 moons and a faint ring system.",
        box_shadow: " inset -2em -2em 2em rgb(9, 9, 9), -0.5em -0.5em 1em #50909a",
        details: [
            "Diameter: 50,724 kilometers",
            "Distance from Sun: 7th planet",
            "Moons: 27 known moons"
        ]
    },
    {
        id: 8,
        title: "Neptune",
        className: "neptune",
        description: "Neptune, the eighth planet from the Sun, has a deep blue color. It has a diameter of about 49,244 kilometers and at least 14 moons, with Triton being the largest. Neptune's atmosphere features the fastest winds in the Solar System.",
        box_shadow: "inset -2em -2em 2em rgb(9, 9, 9), -0.5em -0.5em 1em #355fb1",
        details: [
            "Diameter: 49,244 kilometers",
            "Distance from Sun: 8th planet",
            "Moons: 14 known moons"
        ]
    }
];
const sunDetails = {
    title: "Sun",
    description: "The Sun is the star at the center of the Solar System. It is a nearly perfect sphere of hot plasma, with internal convective motion that generates a magnetic field via a dynamo process. The Sun's diameter is about 1.39 million kilometers, and it contains more than 99.8% of the total mass of the Solar System. Its core is extremely hot and dense, where nuclear fusion occurs, producing the energy that we receive as sunlight.",
    details: [
        "Diameter: 1.39 million kilometers",
        "Mass: 99.8% of the Solar System",
        "Core Temperature: Around 15 million°C"
    ]
};

const Planets = () => {
    const [planetDetails, setPlanetDetails] = useState(planets[2]);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        const cards = document.querySelectorAll(".card");
        const sun = document.querySelector(".planet.sun");

        const handleClick = (event) => {
            const id = parseInt(event.currentTarget.dataset.id);
            const selectedPlanet = planets.find(planet => planet.id === id);
            setPlanetDetails(selectedPlanet);
            const imageUrl = `src/Components/Planets/Images/planet-${id}.jpg`;
            sun.style.backgroundImage = `url("${imageUrl}")`;
            sun.style.boxShadow = selectedPlanet.box_shadow;

            if (id === 6) {

                document.querySelector(".sun-ring-container").style.display = "block";
            } else {
                document.querySelector(".sun-ring-container").style.display = "none";
            }

            window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top on click

        };

        cards.forEach(card => {
            card.addEventListener("click", handleClick);
        });

        // Cleanup listeners on component unmount
        return () => {
            cards.forEach(card => {
                card.removeEventListener("click", handleClick);
            });
        };
    }, []);

    return (
        <>
            <Navbar />
            <div className="container">
                <div className="opacity-manager"></div>
                <div className="planet-info">
                    <div className="planet sun">
                        <div className="ring-container sun-ring-container">
                            <div className="ring ring1 sun-ring-1"></div>
                            <div className="ring ring2 sun-ring-2"></div>
                            <div className="ring ring3 sun-ring-3"></div>
                        </div>
                    </div>
                    <div className="content">
                        {planetDetails && (
                            <>
                                <div className='heads'>
                                    <h1 className='title'>{planetDetails.title}</h1>
                                    <p>{planetDetails.description}</p>
                                </div>
                                <div className="details">
                                    {planetDetails.details.map((detail, index) => (
                                        <div key={index} className="detail">
                                            <h2 className='title'>{detail.split(":")[0]}</h2>
                                            <p>{detail.split(":")[1]}</p>
                                        </div>
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                </div>
                <div className="pt">
                    {planets.map((planet) => (
                        <div key={planet.id} className="card" data-id={planet.id}>
                            <div className="hover-card"><h1>{planet.title}</h1></div>
                            <div className={`planet ${planet.className}`}>
                                {planet.className === 'saturn' && (
                                    <div className="ring-container">
                                        <div className="ring ring1"></div>
                                        <div className="ring ring2"></div>
                                        <div className="ring ring3"></div>
                                    </div>
                                )}
                            </div>
                            <div className="planet-manager"></div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Planets;
