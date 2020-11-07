import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../assets/img/karmakurier_logo_salmon.svg'
import logoInverted from '../../../assets/img/karmakurier_logo_white.svg'
import './Logo.atom.scss'

const Logo = ({ inverted, close }) => {
    return (
        <Link to="/" onClick={close}>
            <div className="logo">
                <img src={inverted ? logoInverted : logo} alt="karmakurier logo" />
            </div>
        </Link>
    )
}

export default Logo
