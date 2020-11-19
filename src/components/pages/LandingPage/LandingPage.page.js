import Grid from '@material-ui/core/Grid'
import React, { useState } from 'react'
import { InView } from 'react-intersection-observer'
import { Picture } from 'react-responsive-picture'
import aboutus from '../../../assets/img/landingpage/atom_undraw_aboutus.svg'
import motivation from '../../../assets/img/landingpage/atom_undraw_motivation.svg'
import vision from '../../../assets/img/landingpage/atom_undraw_vision.svg'
import ourgoals from '../../../assets/img/landingpage/atom_undraw_ziele.svg'
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

    return (
        <MainLayout>
            <InView threshold={threshold} onChange={(inView) => handleViewChange(inView, 0)}>
                <div className="section theme-main-1">
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

                        <Grid item xs={12} sm={12} justify="center">
                            <h2>wir sehen hilfe anders</h2>
                            <h1>karmakurier</h1>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <h2>wir sehen hilfe anders</h2>
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
                </div>
            </InView>
            <InView threshold={threshold} onChange={(inView) => handleViewChange(inView, 1)}>
                <div className="section theme-main-2">
                    <Grid container spacing={3} justify="space-between" alignItems="center">
                        <Grid item xs={12} sm={7}>
                            <div className="picture">
                                <img src={vision} alt="unsere vision" />
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={5}>
                            <h1>unsere vision</h1>
                            <div className="content">
                                Wir wollen Solidarität außerhalb etablierter Netzwerke fördern und
                                dabei den Mehrwert messbar und sichtbar machen. Nachhaltigkeit steht
                                dabei genauso im Fokus wie Unterstützung und Anerkennung.
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </InView>
            <InView threshold={threshold} onChange={(inView) => handleViewChange(inView, 2)}>
                <div className="section theme-main-3">
                    <Grid
                        container
                        spacing={3}
                        justify="space-between"
                        alignItems="center"
                        direction="row-reverse"
                    >
                        <Grid item xs={12} sm={7}>
                            <div className="picture">
                                <img src={motivation} alt="unsere motivation" />
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={5}>
                            <h1>unsere motivation</h1>
                            <div className="content">
                                <p>
                                    Individualisierung und Virtualisierung von sozialen Netzwerken,
                                    besonders während der aktuellen Corona-Krise, erschweren das
                                    Abrufen direkter Unterstützung aus klassischen sozialen
                                    Strukturen wie Freundeskreise.
                                </p>
                                <p>
                                    Hilfesuchende müssen psychologische Hürden überwinden und
                                    Vertrauen zu unbekannten Helfer:innen aufbauen.
                                </p>
                                <p>
                                    Solidarität gegenüber Fremden nimmt bei Andauern der Krise
                                    wieder ab.
                                </p>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </InView>
            <InView threshold={threshold} onChange={(inView) => handleViewChange(inView, 3)}>
                <div className="section theme-main-2">
                    <Grid container spacing={3} justify="space-between" alignItems="center">
                        <Grid item xs={12} sm={7}>
                            <div className="picture">
                                <img src={ourgoals} alt="unsere ziele" />
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={5}>
                            <h1>unsere ziele</h1>

                            <div className="content">
                                <p>
                                    Entwicklung einer App für punktuelle und individuelle
                                    Unterstützung, kombiniert mit Matching von Hilfesuchenden und
                                    Helfer:innen über Distanz und Inhalt, mit Hilfe von
                                    KI-getriebene Modellen (Phase II).
                                </p>

                                <p>
                                    Etablierung eines Karmapunktesystems zur positiven Verstärkung;
                                    gesammelte Punkte können zudem gespendet werden, sodass alle
                                    Beteiligte Gutes tun können.
                                </p>

                                <p>
                                    Visualisierung der gelebten Solidarität wird visualisiert,
                                    sodass jeder sehen kann wie das Helfen und Hilfe bekommen in der
                                    eigenen Gemeinschaft stattfindet.
                                </p>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </InView>
            <InView threshold={threshold} onChange={(inView) => handleViewChange(inView, 4)}>
                <div className="section theme-main-4">
                    <h1>vorschau app</h1>
                    <div className="content">
                        <p>
                            Entwicklung einer App für punktuelle und individuelle Unterstützung,
                            kombiniert mit Matching von Hilfesuchenden und Helfer:innen über Distanz
                            und Inhalt, mit Hilfe von KI-getriebene Modellen (Phase II).
                        </p>

                        <p>
                            Etablierung eines Karmapunktesystems zur positiven Verstärkung;
                            gesammelte Punkte können zudem gespendet werden, sodass alle Beteiligte
                            Gutes tun können.
                        </p>

                        <p>
                            Visualisierung der gelebten Solidarität wird visualisiert, sodass jeder
                            sehen kann wie das Helfen und Hilfe bekommen in der eigenen Gemeinschaft
                            stattfindet.
                        </p>
                    </div>
                </div>
            </InView>
            <InView threshold={threshold} onChange={(inView) => handleViewChange(inView, 5)}>
                <div className="section theme-main-2">
                    <Grid container spacing={3} justify="space-between" alignItems="center">
                        <Grid item xs={12} sm={7}>
                            <div className="picture">
                                <img src={aboutus} alt="über uns" />
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={5}>
                            <h1>über uns</h1>

                            <div className="content">
                                <p>
                                    karmakurier ist ein unabhängiges Projekt, welches beim Hackathon
                                    #WirvsVirus der Bundesregierung im März 2020 entstanden ist.
                                    Heute sind wir ein Team von rund 15+ Freiwilligen mit einer
                                    hohen Vielfalt an Fachwissen und Erfahrung. Wir sind hoch
                                    motiviert bei der Schaffung einer neuen Gesellschaft. Jetzt und
                                    nach Corona. Gemeinsam mit Euch wollen wir eine Plattform
                                    entwickeln, die den ganzen Kurs der gelebten Solidarität positiv
                                    beeinflusst.
                                </p>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </InView>

            <LocationIndicator sectionCount="6" activeSection={activeSection} />
        </MainLayout>
    )
}

export default LandingPage
