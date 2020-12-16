import React, { useEffect, useState } from 'react'
import testimonialsData from '../testimonialsData'
import arrowLeft from "../img/arrow-left.png"
import arrowRight from "../img/arrow-right.png"
import Testimonial from './TestimonialCard'

const Testimonials = () => {

    const [index, setIndex] = useState(0)

    useEffect(() => {
        const lastIndex = testimonialsData.length - 1;

        if (index < 0) {
            setIndex(lastIndex)
        }
        if (index > lastIndex) {
            setIndex(0)
        }

        console.log(index);

    }, [index])

    return <section id="testimonials-section">
        <div className="testimonials-title">
            <h1>Trusted by Thousands of Happy Customers</h1>
            <p>These are the stories of our customers who have joined us with great pleasure when using this crazy feature.</p>
        </div>
        <div className="testimonials-container">
            <div className="testimonial-articles" 
                style={{transform: `translateX(${-index * 420}px)`
            }}>
                {
                    testimonialsData.map((data) =>{
                        return <Testimonial key={data.id} {...data} index={index} />
                    })
                }
            </div>
        </div>
        <div className="testimonials-slider">
            <div className="dots">
                {
                    testimonialsData.map((data) => {
                        return <div key={data.id} className={`dot ${data.id - 1 === index && ` dot-active`}`} ></div>
                    })
                }
            </div>
            <div className="arrows">
                <button className="prev-btn" onClick={() => setIndex(index - 1)}><img src={arrowLeft} alt=""/></button>
                <button className="next-btn" onClick={() => setIndex(index + 1)}><img src={arrowRight} alt=""/></button>
            </div>
        </div>
    </section>
}

export default Testimonials