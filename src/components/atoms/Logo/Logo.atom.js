import React from 'react'
import logo from '../../../assets/img/karmakurier_logo_salmon.svg'
import logoInverted from '../../../assets/img/karmakurier_logo_white.svg'
import './Logo.atom.scss'

const Logo = ({ inverted }) => {
    return (
        <div className="logo">
            <img src={inverted ? logoInverted : logo} alt="karmakurier logo" />
        </div>
    )
}

export default Logo
