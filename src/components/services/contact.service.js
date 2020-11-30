import axios from 'axios'

const rootUrl = process.env.REACT_APP_CONTACT_BASEURL
const ContactAPI = {
    sendContactMail: async (name, email, message, captcha) => {
        const contactFormObject = {
            name,
            email,
            message,
            captcha,
        }
        const response = await axios.post(`${rootUrl}/contact`, contactFormObject, {
            withCredentials: true,
        })
        return response.data
    },
    getCaptcha: async () => {
        const response = await axios.get(`${rootUrl}/captcha`, { withCredentials: true })
        return response.data
    },
}
export default ContactAPI
