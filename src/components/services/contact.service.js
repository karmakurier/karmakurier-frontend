import axios from 'axios'

const ContactAPI = {
    sendContactMail: async (name, email, message, captcha) => {
        const contactFormObject = {
            name,
            email,
            message,
            captcha,
        }
        const response = await axios.post(`/contactapi-contact`, contactFormObject, {
            withCredentials: true,
        })
        return response.data
    },
    getCaptcha: async () => {
        const response = await axios.get(`/contactapi-captcha`, { withCredentials: true })
        return response.data
    },
}
export default ContactAPI
