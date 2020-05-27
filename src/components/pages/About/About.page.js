import React from 'react'
import Karmakurier from '../../atoms/Karmakurier/Karmakurier.atom'
import MainLayout from '../../templates/MainLayout/MainLayout.page'

const About = () => {
    return (
        <MainLayout>
            <div className="section">
                <h1>
                    Wie funktioniert <Karmakurier />?
                </h1>
            </div>
        </MainLayout>
    )
}

export default About
