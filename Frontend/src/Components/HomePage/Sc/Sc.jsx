import React from 'react';
import './Sc.css';
import { Link } from 'react-router-dom'


const Sc = () => {
    return (
        <>
            <div className="space-center">
                <div className='box'>
                    <div className="text"><h2>Space Centers</h2></div>
                    <div className="b1"> <Link to="/center" className="link">Learn more</Link></div>
                </div>
            </div>
        </>
    )
};
export default Sc