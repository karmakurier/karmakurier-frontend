import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
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
        <footer className="footer">
            <Container maxWidth="md">
                <Grid
                    container
                    spacing={2}
                    justify="space-between"
                    alignItems="flex-start"
                    direction="row-reverse"
                >
                    <Grid item xs={12} sm={4}>
                        <SocialMediaBar />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <h5 className="text-uppercase">karmakurier</h5>
                        <ul className="list-unstyled menu-list legal">
                            {legals.map((legal) => (
                                <li key={slugify(legal.path)}>
                                    <Link to={legal.path}>{legal.menuEntry}</Link>
                                </li>
                            ))}
                        </ul>
                    </Grid>
                </Grid>
                <Grid container spacing={3} justify="space-between" alignItems="center">
                    <Grid item xs={12} sm={12}>
                        <div className="copyright">&copy;{year}&nbsp;karmakurier</div>
                    </Grid>
                </Grid>
            </Container>
        </footer>
    )
}

export default Footer
