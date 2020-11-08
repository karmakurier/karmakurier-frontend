import React from 'react'
import { Link } from 'react-router-dom'
import slugify from 'slugify'
import SocialMediaBar from '../../atoms/SocialMediaBar/SocialMediaBar.atom'
import './Footer.organism.scss'

const Footer = () => {
    const year = new Date().getFullYear()
    const legals = [
        {
            path: '/contact',
            menuEntry: 'Kontakt',
        },
        {
            path: '/privacy',
            menuEntry: 'Datenschutz',
        },
        {
            path: '/imprint',
            menuEntry: 'Impressum',
        },
    ]

    return (
        <footer className="footer">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 mb-md-0 mb-3">
                        <h5 className="text-uppercase">karmakurier</h5>
                        <ul className="list-unstyled menu-list legal">
                            {legals.map((legal) => (
                                <li>
                                    <Link key={slugify(legal.path)} to={legal.path}>
                                        {legal.menuEntry}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-md6 mt-md-0 mt-3">
                        <SocialMediaBar />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md1 mt-md-0 mt-3">
                        <div className="copy">&copy;{year}&nbsp;karmakurier</div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
