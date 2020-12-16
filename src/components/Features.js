import React from 'react'
import featuresImage from '../img/features-img.png'
import checkIcon from '../img/check-icon.png'

const Features = () => {
    const features = ["powerfull online protection", "internet without borders", "supercharged VPN", "no specific time limits"]

    return (
        <section id="features-section">
            <img src={featuresImage} alt="" className="features-img" />
            <div className="features-description">
                <h1>We Provide Many Features You Can Use</h1>
                <p>You can explore the features that we provide with fun and have their own functions each feature.</p>
                <ul className="features-list">
                    {
                        features.map((feature) => {
                        return <li><img src={checkIcon} alt=""/><span className="feature-text">{feature}</span></li>
                        })
                    }
                </ul>
            </div>
        </section>
    )
}

export default Features