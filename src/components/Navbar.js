import React, {useState} from 'react'
import logo from '../img/logo.png'
import links from '../navbarData'
import { FaBars } from 'react-icons/fa'

const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false)

    const displayLinks = () => {
        if (window.innerWidth > 900) {
            setShowLinks(true)
        } else {
            setShowLinks(false)
            document.querySelector(".testimonial-articles").style.transform = "translateX(0)"
        }
    }

    window.onresize = displayLinks
    window.onload = displayLinks

    return (
        <nav>
            <div className="nav-container">
                <img src={logo} alt="logo" className="logo"/>
                <ul className={`nav-links ${showLinks && `show-nav`}`}>
                    {
                        links.map((link) => {
                            const {id, url, text} = link
                            return <li key={id} className="nav-link"><a href={url} onClick={() => setShowLinks(false)} >{text}</a></li>
                        })
                    }
                </ul>
                <button className="nav-toggle" onClick={() => setShowLinks(!showLinks)}><FaBars /></button>
            </div>
        </nav>
    )
}

export default Navbar