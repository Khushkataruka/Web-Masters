import React from 'react';
import './Sc.css';
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const Sc = () => {
    useEffect(() => {
        AOS.init({
            duration: 600,
            offset: 200,
            easing: 'ease-in-out',
            once: false,
        });
    }, []);
    return (
        <>
            <div className="space-center">
                <div className='box' data-aos='fade-up'>
                    <div className="text"><h2>Space Centers</h2></div>
                    <div className="b1"> <Link to="/center" className="link">Learn more</Link></div>
                </div>
            </div>
        </>
    )
};
export default Sc