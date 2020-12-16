import React from 'react'
import {footerLinks, socialLinks } from '../footerData'
import logo from '../img/logo.png'

const Footer = () => {
    return <footer>
        <div className="footer-info">
            <img src={logo} alt=""/>
            <p><b>LaslesVPN</b> is a private virtual network that has unique features and high security.</p>
            <ul className="social-links">
                {socialLinks.map((link) => {
                    const {id, icon, url} = link
                    return <li key={id}><a href={url}><img src={icon} alt=""/></a></li>
                })}
            </ul>
            <h4>&copy; 2020LaslesVPN</h4>
        </div>
        <ul className="footer-links">
            {footerLinks.map((group) => {
                const {id, heading, links} = group
                return <ul key={id}>
                    <h3>{heading}</h3>
                    {links.map((link) => {
                        return <li><a href="#">{link}</a></li>
                    })}
                    
                    </ul>
            })}
        </ul>
    </footer>
}

export default Footer;