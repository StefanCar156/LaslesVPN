import React from 'react'
import heroImage from '../img/hero-img.png'

const Hero = () => {
    return (
        <section id="hero-section">
            <div className="hero-description">
                <h1>Want anything to be easy with LaslesVPN.</h1>
                <p>Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.</p>
                <button>get started</button>
            </div>
            <img src={heroImage} alt="hero"/>
            
        </section>
    )
}

export default Hero