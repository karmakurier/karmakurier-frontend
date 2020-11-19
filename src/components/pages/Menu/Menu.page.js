import { Grid } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import slugify from 'slugify'
import './Menu.page.scss'

const Menu = ({ visible, close }) => {
    // needs to be kept in sync with routes.js
    const anchors = [
        {
            path: '/',
            exact: true,
        },
        {
            path: '/#vision',
            menuEntry: 'vision',
        },
        {
            path: '/#motivation',
            menuEntry: 'motivation',
        },
        {
            path: '/#ziele',
            menuEntry: 'ziele',
        },
        {
            path: '/#preview',
            menuEntry: 'vorschau app',
        },
        {
            path: '/#aboutus',
            menuEntry: 'über uns',
        },
        {
            path: '/#supporter',
            menuEntry: 'unterstützer',
        },
    ]

    const links = [
        {
            path: '/',
            exact: true,
        },
        {
            path: '/contact',
            menuEntry: 'kontakt',
        },
        {
            path: '/privacy',
            menuEntry: 'datenschutz',
        },
        {
            path: '/imprint',
            menuEntry: 'impressum',
        },
    ]

    return (
        <div className={visible ? 'menu visible' : 'menu'}>
            {/* <div className="header">
                <Logo inverted={visible} close={close} />
                <Karmakurier inverted={visible} />
            </div> */}
            <div className={visible ? 'menu-content visible' : 'menu-content'}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12}>
                        <ul className="shortlinks">
                            {anchors.map((anchor) => (
                                <li key={slugify(anchor.path)}>
                                    <HashLink onClick={close} to={anchor.path}>
                                        {anchor.menuEntry}
                                    </HashLink>
                                </li>
                            ))}
                        </ul>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <hr />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <ul className="deeplinks">
                            {links.map((link) => (
                                <li key={slugify(link.path)}>
                                    <Link onClick={close} to={link.path}>
                                        {link.menuEntry}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Menu
