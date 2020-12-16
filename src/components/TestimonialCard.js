import React from 'react'
import star from "../img/star.png"

const Testimonial = ({id, name, avatar, location, rating, review, index}) => {
    return (
    <article key={id} className={`testimonial-card ${id - 1 === index && `testimonial-card-active`}`} >
        <div className="testimonial-user">
            <img src={avatar} alt=""/>
            <div className="user-info">
                <h3>{name}</h3>
                <p>{location}</p>
            </div>
        </div>
        <div className="user-rating">
            <p>{rating}</p><img src={star} alt=""/>
        </div>
        <p className="user-review">{review}</p>
    </article>
    )
}

export default Testimonial