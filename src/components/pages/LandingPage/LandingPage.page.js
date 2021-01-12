import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import React, { useState } from 'react'
import { InView } from 'react-intersection-observer'
import { Picture } from 'react-responsive-picture'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import slugify from 'slugify'
import { ReactComponent as OurGoals } from '../../../assets/img/landingpage/atom_image_ziele.svg'
import { ReactComponent as Aboutus } from '../../../assets/img/landingpage/atom_undraw_aboutus.svg'
import { ReactComponent as Motivation } from '../../../assets/img/landingpage/atom_undraw_motivation.svg'
import { ReactComponent as Vision } from '../../../assets/img/landingpage/atom_undraw_vision.svg'
import startwide from '../../../assets/img/landingpage/desktop/atom_draw_landingpage_wide.svg'
import startsmall from '../../../assets/img/landingpage/mobile/atom_draw_landingpage_short.svg'
import KarmakurierButton from '../../atoms/KarmakurierButton/KarmakurierButton.atom'
import LocationIndicator from '../../organisms/LocationIndicator/LocationIndicator.organism'
// import Chores from '../../templates/Chores/Chores.template'
import MainLayout from '../../templates/MainLayout/MainLayout.page'
import './LandingPage.page.scss'

const LandingPage = () => {
    const [activeSection, setActiveSection] = useState(0)
    const threshold = 0.8
    const handleViewChange = (visible, sectionId) => {
        if (visible) {
            setActiveSection(sectionId)
        }
    }

    const appPreviewSlides = [
        'img/landingpage/apppreview/mobileapp_dashboard.png',
        'img/landingpage/apppreview/mobileapp_matches.png',
    ]

    const supporterLinks = [
        {
            imgPath: 'img/supporter/logo-gridscale.png',
            link: 'https://gridscale.io/',
        },
        {
            imgPath: 'img/supporter/logo-aws.png',
            link: 'https://aws.amazon.com/de/',
        },
        {
            imgPath: 'img/supporter/logo-gruen.png',
            link: 'https://www.gruen.net/',
        },
        {
            imgPath: 'img/supporter/logo-lupppartner.png',
            link: 'https://lupp-partner.com/',
        },
        {
            imgPath: 'img/supporter/logo-rafaelbaer.png',
            link: 'https://www.rafaelbaer.de/',
        },
        {
            imgPath: 'img/supporter/logo-intersoft.png',
            link: 'https://www.intersoft-consulting.de/',
        },
    ]

    const partnerLinks = [
        {
            imgPath: 'img/partner/logo-se.png',
            link: 'https://wirvsvirus.org/solution-enabler/',
        },
        {
            imgPath: 'img/partner/logo-participaid.png',
            link: 'https://participaid.com',
        },
        {
            imgPath: 'img/partner/logo-pandalist.png',
            link: 'https://participaid.org/',
        },
        {
            imgPath: 'img/partner/logo-send.png',
            link: 'https://www.send-ev.de/',
        },
        {
            imgPath: 'img/partner/logo-stadtretter.png',
            link: 'https://www.die-stadtretter.de/',
        },
        {
            imgPath: 'img/partner/logo-guteidee.png',
            link: 'https://lupp-partner.com/',
        },
    ]

    return (
        <MainLayout>
            <InView threshold={threshold} onChange={(inView) => handleViewChange(inView, 0)}>
                <div className="section theme-main-1">
                    <Container maxWidth="lg">
                        <Grid container spacing={3} justify="center">
                            <Grid item xs={12} sm={12} />
                            <Picture
                                sources={[
                                    {
                                        srcSet: startsmall,
                                        media: '(max-width: 1023px)',
                                    },
                                    {
                                        srcSet: startwide,
                                    },
                                ]}
                            />

                            <Grid item xs={12} sm={12}>
                                <h5>wir sehen hilfe anders</h5>
                                <h4>karmakurier</h4>
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <KarmakurierButton
                                    size="normal"
                                    label="mach mit!"
                                    variant="primary"
                                    link="/contact"
                                />
                            </Grid>
                        </Grid>
                    </Container>
                </div>
            </InView>
            <InView threshold={threshold} onChange={(inView) => handleViewChange(inView, 1)}>
                <div id="vision" className="section theme-main-2">
                    <Container maxWidth="md" className="container-section">
                        <Grid
                            container
                            spacing={10}
                            justify="space-between"
                            alignItems="center"
                            className="grid-item"
                        >
                            <Grid item xs={12} sm={6}>
                                <div className="picture">
                                    <Vision />
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <h1>unsere vision</h1>
                                <div className="content">
                                    Wir wollen Solidarität außerhalb etablierter Netzwerke fördern
                                    und dabei den Mehrwert messbar und sichtbar machen.
                                    Nachhaltigkeit steht dabei genauso im Fokus wie Unterstützung
                                    und Anerkennung.
                                </div>
                            </Grid>
                        </Grid>
                    </Container>
                </div>
            </InView>
            <InView threshold={threshold} onChange={(inView) => handleViewChange(inView, 2)}>
                <div id="motivation" className="section theme-main-3">
                    <Container maxWidth="md" className="container-section">
                        <Grid
                            container
                            spacing={10}
                            justify="space-between"
                            alignItems="center"
                            direction="row-reverse"
                        >
                            <Grid item xs={12} sm={6}>
                                <div className="picture">
                                    <Motivation />
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <h1>unsere motivation</h1>
                                <div className="content">
                                    <p>
                                        Individualisierung und Virtualisierung von sozialen
                                        Netzwerken, besonders während der aktuellen Corona-Krise,
                                        erschweren das Abrufen direkter Unterstützung aus
                                        klassischen sozialen Strukturen wie Freundeskreise.
                                    </p>
                                    <p>
                                        Hilfesuchende müssen oft psychologische Hürden überwinden
                                        und Vertrauen zu unbekannten Helfer:innen aufbauen.
                                    </p>
                                    <p>
                                        Solidarität gegenüber Fremden hat zu Beginn der Krise
                                        deutlich zugenommen. Diese nimmt jedoch bei Andauern der
                                        Krise wieder stark ab.
                                    </p>
                                </div>
                            </Grid>
                        </Grid>
                    </Container>
                </div>
            </InView>
            <InView threshold={threshold} onChange={(inView) => handleViewChange(inView, 3)}>
                <div id="ziele" className="section theme-main-2">
                    <Container maxWidth="md" className="container-section">
                        <Grid container spacing={10} justify="space-between" alignItems="center">
                            <Grid item xs={12} sm={6}>
                                <div className="picture">
                                    <OurGoals />
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <h1>unsere ziele</h1>

                                <div className="content">
                                    <p>
                                        Entwicklung einer App für punktuelle und individuelle
                                        Unterstützung, kombiniert mit Matching von Hilfesuchenden
                                        und Helfer:innen über Distanz und Inhalt, mit Hilfe von
                                        KI-getriebene Modellen (Phase II).
                                    </p>

                                    <p>
                                        Etablierung eines Karmapunktesystems zur positiven
                                        Verstärkung; gesammelte Punkte können zudem gespendet
                                        werden, sodass alle Beteiligte Gutes tun können.
                                    </p>

                                    <p>
                                        Visualisierung der gelebten Solidarität wird visualisiert,
                                        sodass jeder sehen kann wie das Helfen und Hilfe bekommen in
                                        der eigenen Gemeinschaft stattfindet.
                                    </p>
                                </div>
                            </Grid>
                        </Grid>
                    </Container>
                </div>
            </InView>
            <InView threshold={threshold} onChange={(inView) => handleViewChange(inView, 4)}>
                <div id="preview" className="section theme-main-4">
                    <Container maxWidth="md" className="container-section">
                        <h1>vorschau app</h1>
                        <div className="content">
                            <Slide>
                                <div className="each-slide">
                                    <div
                                        style={{ backgroundImage: `url(${appPreviewSlides[0]})` }}
                                    />
                                </div>
                                <div className="each-slide">
                                    <div
                                        style={{ backgroundImage: `url(${appPreviewSlides[1]})` }}
                                    />
                                </div>
                            </Slide>
                        </div>
                    </Container>
                </div>
            </InView>
            <InView threshold={threshold} onChange={(inView) => handleViewChange(inView, 5)}>
                <div id="aboutus" className="section theme-main-2">
                    <Container maxWidth="md" className="container-section">
                        <Grid container spacing={10} justify="space-between" alignItems="center">
                            <Grid item xs={12} sm={6}>
                                <div className="picture">
                                    <Aboutus />
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <h1>über uns</h1>

                                <div className="content">
                                    <p>
                                        karmakurier ist ein unabhängiges Projekt, welches beim
                                        Hackathon #WirvsVirus der Bundesregierung im März 2020
                                        entstanden ist. Heute sind wir ein Team von rund 15+
                                        Freiwilligen mit einer hohen Vielfalt an Fachwissen und
                                        Erfahrung. Wir sind hoch motiviert bei der Schaffung einer
                                        neuen Gesellschaft. Jetzt und nach Corona. Gemeinsam mit
                                        Euch wollen wir eine Plattform entwickeln, die den ganzen
                                        Kurs der gelebten Solidarität positiv beeinflusst.
                                    </p>
                                    <KarmakurierButton
                                        size="normal"
                                        label="kontaktiere uns"
                                        variant="prominent"
                                        link="/contact"
                                    />
                                </div>
                            </Grid>
                        </Grid>
                    </Container>
                </div>
            </InView>
            <InView threshold={threshold} onChange={(inView) => handleViewChange(inView, 6)}>
                <div id="ourpartners" className="section theme-main-5">
                    <Container maxWidth="md" className="container-section">
                        <Grid
                            container
                            spacing={10}
                            direction="row"
                            justify="space-between"
                            alignItems="flex-start"
                        >
                            <Grid item xs={12} sm={12}>
                                <h1>unsere partner</h1>
                            </Grid>
                            {partnerLinks.map((partnerLink) => (
                                <Grid
                                    item
                                    xs={12}
                                    sm={4}
                                    className="inlinePicture"
                                    key={partnerLink.link}
                                >
                                    <a
                                        href={partnerLink.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img
                                            src={partnerLink.imgPath}
                                            alt={slugify(partnerLink.link)}
                                        />
                                    </a>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </div>
            </InView>
            <InView threshold={threshold} onChange={(inView) => handleViewChange(inView, 7)}>
                <div id="oursupporters" className="section theme-main-2">
                    <Container maxWidth="md" className="container-section">
                        <Grid
                            container
                            spacing={3}
                            direction="row"
                            justify="space-between"
                            alignItems="flex-start"
                        >
                            <Grid item xs={12} sm={12}>
                                <h1>unsere unterstützer</h1>
                            </Grid>

                            {supporterLinks.map((supporterLink) => (
                                <Grid
                                    item
                                    xs={12}
                                    sm={4}
                                    className="inlinePicture"
                                    key={supporterLink.link}
                                >
                                    <a
                                        href={supporterLink.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img
                                            src={supporterLink.imgPath}
                                            alt={slugify(supporterLink.link)}
                                        />
                                    </a>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </div>
            </InView>

            <LocationIndicator sectionCount="8" activeSection={activeSection} />
        </MainLayout>
    )
}

export default LandingPage
