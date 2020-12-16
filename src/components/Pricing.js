import React from 'react'
import pricingPlans from '../pricingData'
import checkIcon from '../img/check-icon-2.png'

const Pricing = () => {
    return (
        <section id="pricing-section">
            <h1>Choose Your Plan</h1>
            <p>Let's choose the package that is best for you and explore it happily and cheerfully.</p>
            <div className="plans">
                {pricingPlans.map((plan) => {
                    const {id, title, img, price, features} = plan
                    return <article key={id}>
                        <img src={img} alt={title}/>
                        <h4>{title}</h4>
                        <ul>
                            {features.map((feature) => {
                                return <li><img src={checkIcon} /> <span>{feature}</span></li>
                            })}
                        </ul>
                        <h3 className="plan-price">{`${price === "free" ? "free" : `${price} / month`}`}</h3>
                        <button className="plan-btn">select</button>
                    </article>
                })}
            </div>
        </section>
    )
}

export default Pricing