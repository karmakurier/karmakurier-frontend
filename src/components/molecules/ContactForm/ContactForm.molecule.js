import Grid from '@material-ui/core/Grid'
import React from 'react'
import KarmakurierButton from '../../atoms/KarmakurierButton/KarmakurierButton.atom'
import KarmakurierTextfield from '../../atoms/KarmakurierTextfield/KarmakurierTextfield.atom'
import ContactAPI from '../../services/contact.service'
import './ContactForm.molecule.scss'

class ContactForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            message: '',
            captcha: '',
            captchasvg: `${process.env.REACT_APP_CONTACT_BASEURL}/contactapi-captcha`,
            captchaWrong: false,
            submitSuccess: false,
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        const { target } = event
        const { value, id } = target
        this.setState({
            [id]: value,
        })
    }

    loadSvg() {
        const newDate = Date.now()
        this.setState({
            captchasvg: `${process.env.REACT_APP_CONTACT_BASEURL}/contactapi-captcha?${newDate}`,
        })
    }

    handleSubmit() {
        const { name, email, message, captcha } = this.state
        ContactAPI.sendContactMail(name, email, message, captcha)
            .then(() => {
                this.setState({ captchaWrong: false })
                this.setState({ submitSuccess: true })
            })
            .catch(() => {
                this.loadSvg()
                this.setState({ captchaWrong: true })
                this.setState({ submitSuccess: false })
            })

        /* fetch('http://localhost:3002/send', {
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
            }) */
    }

    resetForm() {
        this.setState({ name: '', email: '', message: '', captcha: '' })
    }

    render() {
        const {
            name,
            email,
            message,
            captcha,
            captchasvg,
            captchaWrong,
            submitSuccess,
        } = this.state

        return (
            <form id="contact-form">
                <Grid container spacing={2} className="contactForm" alignItems="center">
                    <Grid item xs={12} sm={12}>
                        <KarmakurierTextfield
                            id="name"
                            label="Name"
                            value={name}
                            onChange={this.handleChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <KarmakurierTextfield
                            id="email"
                            label="E-Mail-Adresse"
                            value={email}
                            onChange={this.handleChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <KarmakurierTextfield
                            id="message"
                            label="Nachricht"
                            value={message}
                            textfield
                            onChange={this.handleChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <img src={captchasvg} alt="captcha" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <KarmakurierTextfield
                            id="captcha"
                            label="Captcha"
                            value={captcha}
                            onChange={this.handleChange}
                        />
                    </Grid>
                    {captchaWrong && (
                        <Grid item xs={12} sm={12} justify="center">
                            <span>Das hat leider nicht geklappt! Bitte überprüfe das Captcha.</span>
                        </Grid>
                    )}
                    <Grid item xs={12} sm={12} justify="center">
                        <KarmakurierButton
                            size="normal"
                            label="abschicken"
                            variant="primary"
                            onClick={this.handleSubmit}
                        />
                    </Grid>
                    {submitSuccess && (
                        <Grid item xs={12} sm={12} justify="center">
                            <span> Vielen Dank! Wir haben deine Nachricht erhalten.</span>
                        </Grid>
                    )}
                </Grid>
            </form>
        )
    }
}

export default ContactForm
