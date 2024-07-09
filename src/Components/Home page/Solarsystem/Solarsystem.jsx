import React from 'react'
import "./Solarsystem.css"
import { Link } from 'react-router-dom'


const entities = [
    {
        title: "Planets",
        link: "/planets"
    },
    {
        title: "Stars",
        link: "/stars"
    },
    {
        title: "Galaxies",
        link: "/galaxies"
    },
    {
        title: "Constellations",
        link: "/constellations"
    }
]
const Solarsystem = () => {
    return (
        <div>
            <div className="solar-system">
                <h1>Our Solar System</h1>
                <div className="info-ss">
                    {entities.map(entity => {
                        return (<div key={entity.title}><Link to={entity.link}>
                            <div className={`displaycard ${entity.title}`}>
                                <div className="o-manager">
                                </div>
                                <div className="title">
                                    <h2>{entity.title}</h2>
                                </div>
                            </div>
                        </Link>
                        </div>)
                    })}


                </div>
            </div>
        </div>
    )
}

export default Solarsystem
