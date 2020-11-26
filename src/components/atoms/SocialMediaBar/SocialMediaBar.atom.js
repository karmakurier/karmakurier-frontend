import React from 'react'
import slugify from 'slugify'
import facebook from '../../../assets/img/footer-logo-facebook.svg'
import instagram from '../../../assets/img/footer-logo-instagram.svg'
import linkedin from '../../../assets/img/footer-logo-linkedin.svg'
import twitter from '../../../assets/img/footer-logo-twitter.svg'
import './SocialMediaBar.atom.scss'

const SocialMediaBar = () => {
    const socialLinks = [
        {
            name: 'Instagram',
            icon: instagram,
            link: 'https://www.instagram.com/karmakurier/',
        },
        {
            name: 'Facebook',
            icon: facebook,
            link: 'https://www.facebook.com/karmakurier',
        },
        {
            name: 'LinkedIn',
            icon: linkedin,
            link: 'https://www.linkedin.com/company/karmakurier',
        },
        {
            name: 'Twitter',
            icon: twitter,
            link: 'https://www.twitter.com/karmakurier',
        },
    ]
    return (
        <div className="socialmediabar">
            {socialLinks.map((socialLink) => (
                <div className="socialmedia-logo">
                    <a href={socialLink.link} target="_blank" rel="noopener noreferrer">
                        <img src={socialLink.icon} alt={slugify(socialLink.name)} />
                    </a>
                </div>
            ))}
        </div>
    )
}

export default SocialMediaBar
