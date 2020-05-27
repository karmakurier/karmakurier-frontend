import React from 'react'
import { Link } from 'react-router-dom'
import slugify from 'slugify'
import Logo from '../../atoms/Logo/Logo.atom'
import './Menu.page.scss'

const Menu = ({ visible, close }) => {
    // keep in sync with routes.js
    const links = [
        {
            path: '/',
            exact: true,
        },
        {
            path: '/about',
            menuEntry: 'Wie funktioniert karmakurier?',
        },
        {
            path: '/faq',
            menuEntry: 'Häufig gestellte Fragen',
        },
        {
            path: '/contact',
            menuEntry: 'Schreib uns',
        },
    ]

    return (
        <div className={visible ? 'menu visible' : 'menu'}>
            <div className="header">
                <Logo inverted={visible} />
            </div>
            <div className={visible ? 'menu-content visible' : 'menu-content'}>
                <ul>
                    {links.map((link) => (
                        <li key={slugify(link.path)}>
                            <Link onClick={close} to={link.path}>
                                {link.menuEntry}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Menu
