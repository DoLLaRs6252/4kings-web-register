import React from 'react';
import Banner from '../../images/banner-2.jpg';

export default function HeadBanner({ imageUrl, overlayOpacity, children }) {
    return (
        <div className="bg-center bg-cover min-h-[70vh]" style={{ backgroundImage: `url(${imageUrl || Banner})` }}>
            <div className={`hero-overlay bg-opacity-${overlayOpacity || 60}`}></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    {children}
                </div>
            </div>
        </div>
    );
}
