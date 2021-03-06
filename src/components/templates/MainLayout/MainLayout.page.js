import React from 'react'
import Footer from '../../organisms/Footer/Footer.organism'
import Header from '../../organisms/Header/Header.organism'
import './MainLayout.page.scss'

const MainLayout = ({ children }) => {
    return (
        <div className="page">
            <Header />
            <div className="content">{children}</div>
            <Footer />
        </div>
    )
}

export default MainLayout
