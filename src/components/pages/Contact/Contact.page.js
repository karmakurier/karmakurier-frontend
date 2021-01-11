import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import React from 'react'
import { ReactComponent as ContactIcon } from '../../../assets/img/contactform/atom_undraw_kontakt.svg'
import ContactForm from '../../molecules/ContactForm/ContactForm.molecule'
import MainLayout from '../../templates/MainLayout/MainLayout.page'
import './Contact.page.scss'

const Contact = () => {
    return (
        <MainLayout>
            <div className="contactForm">
                <Container maxWidth="lg">
                    <Grid container alignItems="center">
                        <Grid className="headPicture" item xs={12} sm={5} align-content="stretch">
                            <ContactIcon />
                        </Grid>
                        <Grid item xs={12} sm={7}>
                            <div className="section">
                                <h1>kontaktiere uns</h1>
                                <ContactForm />
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </MainLayout>
    )
}

export default Contact
