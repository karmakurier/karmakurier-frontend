import React from 'react'
import KarmakurierButton from '../../atoms/KarmakurierButton/KarmakurierButton.atom'
import KarmakurierTextfield from '../../atoms/KarmakurierTextfield/KarmakurierTextfield.atom'

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
                    <KarmakurierTextfield
                        id="name"
                        label="Name"
                        value={name}
                        onChange={this.onNameChange}
                    />
                    <KarmakurierTextfield
                        id="email"
                        label="E-Mail-Adresse"
                        value={email}
                        onChange={this.onEmailChange}
                    />
                    <KarmakurierTextfield
                        id="message"
                        label="Nachricht"
                        value={message}
                        multiline
                        onChange={this.onMessageChange}
                    />
                    <KarmakurierButton
                        size="normal"
                        label="abschicken"
                        variant="primary"
                        link="/contact"
                    />
                </form>
            </div>
        )
    }
}

export default ContactForm
