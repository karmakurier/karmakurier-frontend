import React, { useState } from 'react'
import { InView } from 'react-intersection-observer'
import Karmakurier from '../../atoms/Karmakurier/Karmakurier.atom'
import LocationIndicator from '../../organisms/LocationIndicator/LocationIndicator.organism'
import Chores from '../../templates/Chores/Chores.template'
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
                <div className="section">
                    <h1>
                        <Karmakurier /> hilft bei Besorgungen
                    </h1>
                    <Chores />
                </div>
            </InView>
            <InView threshold={threshold} onChange={(inView) => handleViewChange(inView, 1)}>
                <div className="section">
                    <h1>Unser Karmaprogramm</h1>
                </div>
            </InView>
            <InView threshold={threshold} onChange={(inView) => handleViewChange(inView, 2)}>
                <div className="section">
                    <h1>Unsere Unterstützer</h1>
                </div>
            </InView>
            <InView threshold={threshold} onChange={(inView) => handleViewChange(inView, 3)}>
                <div className="section">
                    <h1>
                        Werden Sie Teil von <Karmakurier />
                    </h1>
                </div>
            </InView>
            <LocationIndicator sectionCount="4" activeSection={activeSection} />
        </MainLayout>
    )
}

export default LandingPage
