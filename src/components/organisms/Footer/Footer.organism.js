import React from 'react'
import { Link } from 'react-router-dom'
import slugify from 'slugify'
import Karmakurier from '../../atoms/Karmakurier/Karmakurier.atom'
import './Footer.organism.scss'

const Footer = () => {
    const year = new Date().getFullYear()
    const legals = [
        {
            path: '/imprint',
            menuEntry: 'Impressum',
        },
        {
            path: '/agb',
            menuEntry: 'AGB',
        },
        {
            path: '/privacy',
            menuEntry: 'Datenschutz',
        },
    ]

    return (
        <footer className="footer">
            <div className="info">
                <div className="links">
                    <Link to="/faq">Häufig gestellte Fragen</Link>
                    <div className="social-media" />
                </div>
            </div>
            <div className="smallprint">
                <div className="copy">
                    &copy;{year}&nbsp;
                    <Karmakurier />
                </div>
                <div className="legal">
                    {legals.map((legal) => (
                        <Link key={slugify(legal.path)} to={legal.path}>
                            {legal.menuEntry}
                        </Link>
                    ))}
                </div>
            </div>
        </footer>
    )
}

export default Footer
