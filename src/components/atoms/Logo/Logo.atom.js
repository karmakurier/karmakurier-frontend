import React from 'react'
import { Link } from 'react-router-dom'
import logoInverted from '../../../assets/logo-inverted.svg'
import logo from '../../../assets/logo.svg'
import './Logo.atom.scss'

function Logo({ inverted }) {
    return (
        <Link to="/">
            <div className="logo">
                <img src={inverted ? logoInverted : logo} alt="karmakurier logo" />
            </div>
        </Link>
    )
}

export default Logo
