import React from 'react';
import Banner from '../../images/banner-4king.png'

export default function HeadBanner({ }) {
    return (
        <div className=" bg-top   bg-cover min-h-[60vh]" style={{ backgroundImage: `url(${Banner})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    
                </div>
            </div>
        </div>
    );
}
