import React from 'react'
import { ReactComponent as ContactIcon } from '../../../assets/img/contactform/atom_undraw_kontakt.svg'
import ContactForm from '../../molecules/ContactForm/ContactForm.molecule'
import MainLayout from '../../templates/MainLayout/MainLayout.page'
import './Contact.page.scss'

const Contact = () => {
    return (
        <MainLayout>
            <div className="headPicture">
                <ContactIcon />
            </div>
            <div className="section">
                <h1>kontaktiere uns</h1>
                <ContactForm />
            </div>
        </MainLayout>
    )
}

export default Contact
