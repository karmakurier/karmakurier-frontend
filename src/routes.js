import React from 'react'
import About from './components/pages/About/About.page'
import Contact from './components/pages/Contact/Contact.page'
import FAQ from './components/pages/FAQ/FAQ.page'
import LandingPage from './components/pages/LandingPage/LandingPage.page'
import Login from './components/pages/Login/Login.page'
import Register from './components/pages/Register/Register.page'

/**
 * Use Routes for the React Router rendering
 */
export const routes = [
    {
        path: '/',
        exact: true,
        main: () => <LandingPage />,
    },
    {
        path: '/about',
        menuEntry: 'Wie funktioniert karmakurier?',
        main: () => <About />,
    },
    {
        path: '/faq',
        menuEntry: 'Häufig gestellte Fragen',
        main: () => <FAQ />,
    },
    {
        path: '/contact',
        menuEntry: 'Schreib uns',
        main: () => <Contact />,
    },
    {
        path: '/login',
        menuEntry: 'Helfer Login',
        main: () => <Login />,
    },
    {
        path: '/register',
        menuEntry: 'Als Helfer registrieren',
        main: () => <Register />,
    },
]

export default routes
