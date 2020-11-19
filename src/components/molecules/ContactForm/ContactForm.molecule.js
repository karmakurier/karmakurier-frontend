import Grid from '@material-ui/core/Grid'
import React from 'react'
import KarmakurierButton from '../../atoms/KarmakurierButton/KarmakurierButton.atom'
import KarmakurierTextfield from '../../atoms/KarmakurierTextfield/KarmakurierTextfield.atom'
import './ContactForm.molecule.scss'

class ContactForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            message: '',
        }

        this.onNameChange = this.onNameChange.bind(this)
        this.onEmailChange = this.onEmailChange.bind(this)
        this.onMessageChange = this.onMessageChange.bind(this)
    }

    onNameChange(event) {
        this.setState({ name: event.target.value })
    }

    onEmailChange(event) {
        this.setState({ email: event.target.value })
    }

    onMessageChange(event) {
        this.setState({ message: event.target.value })
    }

    handleSubmit(event) {
        event.preventDefault()

        fetch('http://localhost:3002/send', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((response) => {
                if (response.status === 'success') {
                    alert('Message Sent.')
                    this.resetForm()
                } else if (response.status === 'fail') {
                    alert('Message failed to send.')
                }
            })
    }

    resetForm() {
        this.setState({ name: '', email: '', message: '' })
    }

    render() {
        const { name, email, message } = this.state

        return (
            <div className="contactForm">
                <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs={12} sm={12}>
                            <KarmakurierTextfield
                                id="name"
                                label="Name"
                                value={name}
                                onChange={this.onNameChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <KarmakurierTextfield
                                id="email"
                                label="E-Mail-Adresse"
                                value={email}
                                onChange={this.onEmailChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <KarmakurierTextfield
                                id="message"
                                label="Nachricht"
                                value={message}
                                textfield
                                onChange={this.onMessageChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} justify="center">
                            <KarmakurierButton
                                size="normal"
                                label="abschicken"
                                variant="primary"
                                link="/contact"
                            />
                        </Grid>
                    </Grid>
                </form>
            </div>
        )
    }
}

export default ContactForm
