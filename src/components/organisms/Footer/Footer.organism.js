import React from 'react'
import { Link } from 'react-router-dom'
import Karmakurier from '../../atoms/Karmakurier/Karmakurier.atom'
import './Footer.organism.scss'

const Footer = () => {
    const year = new Date().getFullYear()
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
                    <Link to="/imprint">Impressum</Link>
                    <Link to="/agb">AGB</Link>
                    <Link to="/privacy">Datenschutz</Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer
