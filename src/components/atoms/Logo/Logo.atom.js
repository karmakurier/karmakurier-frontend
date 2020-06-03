import React from 'react'
import { Link } from 'react-router-dom'
import logoInverted from '../../../assets/img/logo-inverted.svg'
import logo from '../../../assets/img/logo.svg'
import './Logo.atom.scss'

function Logo({ inverted, close }) {
    return (
        <Link to="/" onClick={close}>
            <div className="logo">
                <img src={inverted ? logoInverted : logo} alt="karmakurier logo" />
            </div>
        </Link>
    )
}

export default Logo
