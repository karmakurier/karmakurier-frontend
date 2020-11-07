import React from 'react'
import { Link } from 'react-router-dom'
import facebook from '../../../assets/img/footer-logo-facebook.svg'
import instagram from '../../../assets/img/footer-logo-instagram.svg'
import linkedin from '../../../assets/img/footer-logo-linkedin.svg'
import twitter from '../../../assets/img/footer-logo-twitter.svg'
import './SocialMediaBar.atom.scss'

const SocialMediaBar = () => {
    return (
        <div className="socialmediabar">
            <Link to="/">
                <div className="socialmedia-logo">
                    <img src={instagram} alt="Instagram" />
                </div>
            </Link>
            <Link to="/">
                <div className="socialmedia-logo">
                    <img src={linkedin} alt="LinkedIn" />
                </div>
            </Link>
            <Link to="/">
                <div className="socialmedia-logo">
                    <img src={facebook} alt="Facebook" />
                </div>
            </Link>
            <Link to="/">
                <div className="socialmedia-logo">
                    <img src={twitter} alt="Twitter" />
                </div>
            </Link>
        </div>
    )
}

export default SocialMediaBar
