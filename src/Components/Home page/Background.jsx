import React from 'react';
import './Background.css';
import Navbar from './Navbar';

const Background = () => {
    return (
        <>
            <div className="container">
                <Navbar />
                {/* opacity manager will manage the opacity of the background */}
                <div className="opacity-manager">
                </div>
                <div className="planet sun"></div>

                {/* pt will hold cards of planets */}
                <div className="pt">
                    <div className="Mercury card">
                        <h1>Mercury</h1>
                        {/* planet is the background planet */}
                        <div className="planet mercury"></div>
                        <div className="planet-manager"></div>
                        <p>
                            Mercury is the smallest planet in the Solar System and the closest to the Sun. It has a diameter of about 4,880 kilometers. Despite being close to the Sun, it is not the hottest planet due to its lack of atmosphere. Mercury's surface is covered with craters from collisions with asteroids and comets. One of the most prominent features is the Caloris Basin, about 1,550 kilometers in diameter.
                        </p>
                    </div>

                    <div className="Venus card">
                        <h1>Venus</h1>
                        <div className="planet venus"></div>
                        <div className="planet-manager"></div>
                        <p>
                            Venus, the second planet from the Sun, is known for its extremely hot surface, with temperatures around 465°C. It has a thick atmosphere composed mainly of carbon dioxide, with clouds of sulfuric acid. Venus rotates slowly and in the opposite direction of most planets. Its surface features vast volcanic plains and mountain ranges.
                        </p>
                    </div>

                    <div className="Earth card">
                        <h1>Earth</h1>
                        <div className="planet earth"></div>
                        <div className="planet-manager"></div>
                        <p>
                            Earth, the third planet from the Sun, is the only known planet to support life. It has diverse climates and geography, including oceans, mountains, forests, and deserts. Earth's atmosphere is mostly nitrogen and oxygen. The planet has a unique system of tectonic plates that cause earthquakes and volcanic activity. About 71% of Earth's surface is covered by water.
                        </p>
                    </div>

                    <div className="Mars card">
                        <h1>Mars</h1>
                        <div className="planet mars"></div>
                        <div className="planet-manager"></div>
                        <p>
                            Mars, the fourth planet from the Sun, is known as the Red Planet due to its reddish appearance. It has a diameter of about 6,779 kilometers. Mars features the largest volcano in the Solar System, Olympus Mons, and a canyon system, Valles Marineris. The thin atmosphere is composed mostly of carbon dioxide.
                        </p>
                    </div>

                    <div className="Jupiter card">
                        <h1>Jupiter</h1>
                        <div className="planet jupiter"></div>
                        <div className="planet-manager"></div>
                        <p>
                            Jupiter is the largest planet in the Solar System, known for its Great Red Spot, a massive storm. It has a diameter of about 139,820 kilometers and at least 79 moons, including the four largest: Ganymede, Callisto, Io, and Europa. Jupiter's atmosphere features bands of clouds and complex weather systems.
                        </p>
                    </div>

                    <div className="Saturn card">
                        <h1>Saturn</h1>
                        <div className="planet saturn">
                            <div className="ring"></div>
                        </div>
                        <div className="planet-manager"></div>
                        <p>
                            Saturn, the sixth planet from the Sun, is famous for its ring system made of ice and rock particles. It has a diameter of about 116,460 kilometers and at least 83 moons, with Titan being the largest. Saturn's rings are divided into several main groups, each consisting of thousands of ringlets.
                        </p>
                    </div>

                    <div className="Uranus card">
                        <h1>Uranus</h1>
                        <div className="planet uranus"></div>
                        <div className="planet-manager"></div>
                        <p>
                            Uranus, the seventh planet from the Sun, has a blue-green color due to methane in its atmosphere. It has a diameter of about 50,724 kilometers and is tilted on its side, causing extreme seasonal variations. Uranus has at least 27 moons and a faint ring system.
                        </p>
                    </div>

                    <div className="Neptune card">
                        <h1>Neptune</h1>
                        <div className="planet neptune"></div>
                        <div className="planet-manager"></div>
                        <p>
                            Neptune, the eighth planet from the Sun, has a deep blue color. It has a diameter of about 49,244 kilometers and at least 14 moons, with Triton being the largest. Neptune's atmosphere features the fastest winds in the Solar System.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Background;
